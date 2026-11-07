<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// ─────────────────────────────────────────────────────────────────────────────
// Locate and Load Private Config (naa_config.php)
// ─────────────────────────────────────────────────────────────────────────────
$candidate_paths = [
    dirname(__DIR__, 2) . '/private/naa_config.php', // Root private folder (laragon / git root)
    dirname(__DIR__, 2) . '/naa_config.php',
    dirname(__DIR__) . '/private/naa_config.php',
    __DIR__ . '/private/naa_config.php',
    __DIR__ . '/naa_config.php',
];

foreach ($candidate_paths as $path) {
    if (is_file($path)) {
        require_once $path;
        break;
    }
}

// Default connection fallback
$dbHost    = defined('DB_HOST') ? DB_HOST : (getenv('DB_HOST') ?: 'localhost');
$dbName    = defined('DB_NAME') ? DB_NAME : (getenv('DB_NAME') ?: 'naa_canada');
$dbUser    = defined('DB_USER') ? DB_USER : (getenv('DB_USER') ?: 'root');
$dbPass    = defined('DB_PASS') ? DB_PASS : (getenv('DB_PASS') ?: '');
$dbCharset = defined('DB_CHARSET') ? DB_CHARSET : 'utf8mb4';

// ─────────────────────────────────────────────────────────────────────────────
// Initialize MySQL PDO Connection
// ─────────────────────────────────────────────────────────────────────────────
try {
    $dsn = "mysql:host={$dbHost};dbname={$dbName};charset={$dbCharset}";
    $options = [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES   => false,
    ];
    $pdo = new PDO($dsn, $dbUser, $dbPass, $options);

    // Auto-create table if not exists
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS dropin_bookings (
            id VARCHAR(32) PRIMARY KEY,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            session_date DATE NOT NULL,
            session_time VARCHAR(30) NOT NULL,
            format ENUM('Doubles', 'Singles') NOT NULL,
            player_name VARCHAR(100) NOT NULL,
            division VARCHAR(50) NOT NULL,
            guardian_name VARCHAR(100) DEFAULT NULL,
            email VARCHAR(100) NOT NULL,
            phone VARCHAR(30) NOT NULL,
            signature VARCHAR(100) NOT NULL,
            payment_method VARCHAR(50) DEFAULT 'eTransfer_Cash',
            payment_status ENUM('Pending', 'Paid') DEFAULT 'Pending',
            booking_status ENUM('Confirmed', 'Cancelled') DEFAULT 'Confirmed',
            INDEX idx_session (session_date, session_time, format, booking_status)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    ");

} catch (\PDOException $e) {
    http_response_code(500);
    echo json_encode([
        'status'  => 'error',
        'message' => 'Database connection failed. Please ensure MySQL is running and database is configured.',
        'debug'   => (defined('WP_DEBUG') && WP_DEBUG) ? $e->getMessage() : null
    ]);
    exit;
}

// ─────────────────────────────────────────────────────────────────────────────
// 1. GET: Return live booked counts for each session slot
// ─────────────────────────────────────────────────────────────────────────────
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    try {
        $stmt = $pdo->query("
            SELECT 
                session_date,
                session_time,
                SUM(CASE WHEN format = 'Doubles' THEN 1 ELSE 0 END) AS doubles,
                SUM(CASE WHEN format = 'Singles' THEN 1 ELSE 0 END) AS singles,
                COUNT(*) AS total
            FROM dropin_bookings
            WHERE booking_status = 'Confirmed'
            GROUP BY session_date, session_time
        ");

        $rows = $stmt->fetchAll();
        $counts = [];

        foreach ($rows as $row) {
            $key = $row['session_date'] . '_' . $row['session_time'];
            $counts[$key] = [
                'doubles' => (int)$row['doubles'],
                'singles' => (int)$row['singles'],
                'total'   => (int)$row['total']
            ];
        }

        echo json_encode(['status' => 'success', 'counts' => $counts]);
        exit;
    } catch (\PDOException $e) {
        http_response_code(500);
        echo json_encode(['status' => 'error', 'message' => 'Failed to query session counts']);
        exit;
    }
}

// ─────────────────────────────────────────────────────────────────────────────
// 2. POST: Transactionally validate capacity and record booking
// ─────────────────────────────────────────────────────────────────────────────
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $rawInput = file_get_contents('php://input');
    $input = json_decode($rawInput, true);

    if (!is_array($input)) {
        $input = $_POST;
    }

    $date     = trim($input['date'] ?? '');
    $time     = trim($input['time'] ?? '');
    $format   = trim($input['format'] ?? ''); // 'Doubles' or 'Singles'
    $name     = trim($input['name'] ?? '');
    $email    = trim($input['email'] ?? '');
    $phone    = trim($input['phone'] ?? '');
    $division = trim($input['division'] ?? '');
    $guardian = trim($input['guardian'] ?? '');
    $waiver   = !empty($input['waiverAccepted']);
    $payment  = trim($input['paymentMethod'] ?? 'eTransfer_Cash');
    $sig      = trim($input['signature'] ?? $name);

    // Validation
    if (!$date || !$time || !$format || !$name || !$email || !$phone || !$waiver) {
        http_response_code(400);
        echo json_encode([
            'status'  => 'error',
            'message' => 'All required fields (Date, Time, Format, Name, Email, Phone, Waiver) must be completed.'
        ]);
        exit;
    }

    if (!in_array($format, ['Doubles', 'Singles'], true)) {
        http_response_code(400);
        echo json_encode(['status' => 'error', 'message' => 'Invalid court format selected.']);
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(['status' => 'error', 'message' => 'Please provide a valid email address.']);
        exit;
    }

    $bookingId = 'NAA-' . strtoupper(substr(uniqid(), -6));

    // Begin atomic transaction with row locking
    try {
        $pdo->beginTransaction();

        $stmt = $pdo->prepare("
            SELECT 
                SUM(CASE WHEN format = 'Doubles' THEN 1 ELSE 0 END) AS doubles_count,
                SUM(CASE WHEN format = 'Singles' THEN 1 ELSE 0 END) AS singles_count,
                COUNT(*) AS total_count
            FROM dropin_bookings 
            WHERE session_date = ? 
              AND session_time = ? 
              AND booking_status = 'Confirmed'
            FOR UPDATE
        ");
        $stmt->execute([$date, $time]);
        $counts = $stmt->fetch();

        $doublesCount = (int)($counts['doubles_count'] ?? 0);
        $singlesCount = (int)($counts['singles_count'] ?? 0);
        $totalCount   = (int)($counts['total_count'] ?? 0);

        // Strict Capacity Limits: Total <= 9, Doubles <= 6, Singles <= 3
        if ($totalCount >= 9) {
            $pdo->rollBack();
            http_response_code(409);
            echo json_encode(['status' => 'error', 'message' => 'This 1-hour session is completely full (9/9 spots taken).']);
            exit;
        }

        if ($format === 'Doubles' && $doublesCount >= 6) {
            $pdo->rollBack();
            http_response_code(409);
            echo json_encode(['status' => 'error', 'message' => 'Doubles court is full for this hour (6/6 players registered).']);
            exit;
        }

        if ($format === 'Singles' && $singlesCount >= 3) {
            $pdo->rollBack();
            http_response_code(409);
            echo json_encode(['status' => 'error', 'message' => 'Singles court is full for this hour (3/3 players registered).']);
            exit;
        }

        // Insert confirmed booking record
        $insert = $pdo->prepare("
            INSERT INTO dropin_bookings (
                id, session_date, session_time, format, player_name, 
                division, guardian_name, email, phone, signature, 
                payment_method, payment_status, booking_status
            ) VALUES (
                ?, ?, ?, ?, ?, 
                ?, ?, ?, ?, ?, 
                ?, 'Pending', 'Confirmed'
            )
        ");
        $insert->execute([
            $bookingId,
            $date,
            $time,
            $format,
            $name,
            $division,
            $guardian !== '' ? $guardian : null,
            $email,
            $phone,
            $sig,
            $payment
        ]);

        $pdo->commit();

    } catch (\PDOException $e) {
        if ($pdo->inTransaction()) {
            $pdo->rollBack();
        }
        http_response_code(500);
        echo json_encode(['status' => 'error', 'message' => 'Failed to reserve spot: ' . $e->getMessage()]);
        exit;
    }

    // Send confirmation email
    $subject = "Court Reservation Confirmed: $bookingId";
    $fromEmail = 'noreply@naacanada.org';
    $adminEmail = 'info@naacanada.org';

    $msg = "Hello $name,\n\n"
         . "Your badminton court session has been reserved:\n"
         . "----------------------------------------\n"
         . "Booking Ref : $bookingId\n"
         . "Date        : $date\n"
         . "Time Slot   : $time\n"
         . "Court Format: $format\n"
         . "Division    : $division\n"
         . ($guardian ? "Guardian    : $guardian\n" : "")
         . "Fee         : $5.00 CAD ($payment)\n"
         . "----------------------------------------\n\n"
         . "Important Facility Rules:\n"
         . "1. Clean non-marking indoor shoes are MANDATORY inside the gym.\n"
         . "2. Arrive 10 minutes prior to your reserved hour.\n"
         . "3. If paying via e-Transfer, send \$5.00 to payments@naacanada.org with reference: $bookingId\n\n"
         . "Thank you,\n"
         . "National Athletics Academy (NAA Canada)\n"
         . "https://naacanada.org\n";

    $headers  = "From: NAA Bookings <{$fromEmail}>\r\n";
    $headers .= "Reply-To: {$adminEmail}\r\n";
    $headers .= "Bcc: {$adminEmail}\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    @mail($email, '=?UTF-8?B?' . base64_encode($subject) . '?=', $msg, $headers, "-f {$fromEmail}");

    echo json_encode([
        'status'    => 'success',
        'bookingId' => $bookingId,
        'message'   => 'Court session booked successfully.'
    ]);
    exit;
}
