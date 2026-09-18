<?php
// NAA Contact Form Handler
// Requires server-side configuration of SMTP credentials

header('Content-Type: application/json');
header('X-Content-Type-Options: nosniff');

// Only accept POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Rate limiting — basic IP-based (enhance with Redis/APCu in production)
session_start();
$ip = $_SERVER['REMOTE_ADDR'];
$key = 'contact_' . md5($ip);
if (!isset($_SESSION[$key])) $_SESSION[$key] = 0;
$_SESSION[$key]++;
if ($_SESSION[$key] > 5) {
    http_response_code(429);
    echo json_encode(['error' => 'Too many requests. Please wait before trying again.']);
    exit;
}

// Sanitize and validate
function sanitize(string $input): string {
    return htmlspecialchars(strip_tags(trim($input)), ENT_QUOTES, 'UTF-8');
}

$first_name = sanitize($_POST['first_name'] ?? '');
$last_name  = sanitize($_POST['last_name'] ?? '');
$email      = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
$phone      = sanitize($_POST['phone'] ?? '');
$subject    = sanitize($_POST['subject'] ?? '');
$message    = sanitize($_POST['message'] ?? '');

// Server-side validation
$errors = [];
if (empty($first_name)) $errors[] = 'First name is required.';
if (empty($last_name))  $errors[] = 'Last name is required.';
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = 'A valid email address is required.';
if (empty($subject)) $errors[] = 'Subject is required.';
if (strlen($message) < 10) $errors[] = 'Message must be at least 10 characters.';
// Email header injection protection
if (preg_match('/[\r\n]/', $email) || preg_match('/[\r\n]/', $first_name) || preg_match('/[\r\n]/', $last_name)) {
    $errors[] = 'Invalid input detected.';
}

if (!empty($errors)) {
    http_response_code(422);
    echo json_encode(['errors' => $errors]);
    exit;
}

// Load environment-specific config (not tracked in git)
$config_file = dirname(__DIR__) . '/private/naa_config.php';
if (file_exists($config_file)) {
    require_once $config_file;
} else {
    // Fallback — configure on the server
    define('NAA_CONTACT_EMAIL', 'info@nationalathletics.ca');
    define('NAA_SMTP_HOST', '');
    define('NAA_SMTP_PORT', 587);
    define('NAA_SMTP_USER', '');
    define('NAA_SMTP_PASS', '');
}

// Compose email
$to      = NAA_CONTACT_EMAIL;
$subject_line = '[NAA Contact] ' . $subject . ' — from ' . $first_name . ' ' . $last_name;
$body = <<<EOT
New contact form submission — National Athletics Academy website

Name:    $first_name $last_name
Email:   $email
Phone:   $phone
Subject: $subject

Message:
$message

---
Submitted: {$_SERVER['REQUEST_TIME']}
IP: $ip
EOT;

// Use PHP mail() — replace with PHPMailer + SMTP for production
$headers  = "From: NAA Website <noreply@nationalathleticsacademy.ca>\r\n";
$headers .= "Reply-To: $first_name $last_name <$email>\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$sent = mail($to, $subject_line, $body, $headers);

if ($sent) {
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Message received.']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send message. Please try again.']);
}
