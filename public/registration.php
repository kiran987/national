<?php
// NAA Registration Interest Form Handler

header('Content-Type: application/json');
header('X-Content-Type-Options: nosniff');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Rate limiting
session_start();
$ip = $_SERVER['REMOTE_ADDR'];
$key = 'reg_' . md5($ip);
if (!isset($_SESSION[$key])) $_SESSION[$key] = 0;
$_SESSION[$key]++;
if ($_SESSION[$key] > 10) {
    http_response_code(429);
    echo json_encode(['error' => 'Too many requests.']);
    exit;
}

function sanitize(string $input): string {
    return htmlspecialchars(strip_tags(trim($input)), ENT_QUOTES, 'UTF-8');
}

$parent_first   = sanitize($_POST['parent_first'] ?? '');
$parent_last    = sanitize($_POST['parent_last'] ?? '');
$email          = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
$phone          = sanitize($_POST['phone'] ?? '');
$athlete_name   = sanitize($_POST['athlete_name'] ?? '');
$athlete_age    = (int)($_POST['athlete_age'] ?? 0);
$programs       = array_map('sanitize', (array)($_POST['programs'] ?? []));
$season         = sanitize($_POST['season'] ?? '');
$notes          = sanitize($_POST['notes'] ?? '');
$financial_flag = sanitize($_POST['financial_assist'] ?? '');

// Validation
$errors = [];
if (empty($parent_first)) $errors[] = 'Parent first name required.';
if (empty($parent_last))  $errors[] = 'Parent last name required.';
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = 'Valid email required.';
if (empty($athlete_name)) $errors[] = 'Athlete name required.';
if ($athlete_age < 3 || $athlete_age > 80) $errors[] = 'Valid athlete age required (3–80).';
if (empty($programs)) $errors[] = 'Please select at least one program.';

if (!empty($errors)) {
    http_response_code(422);
    echo json_encode(['errors' => $errors]);
    exit;
}

// Config
$config_file = dirname(__DIR__) . '/private/naa_config.php';
if (file_exists($config_file)) {
    require_once $config_file;
} else {
    define('NAA_CONTACT_EMAIL', 'info@nationalathletics.ca');
}

$programs_str = implode(', ', $programs);
$financial_str = ($financial_flag === 'yes') ? 'YES — financial assistance interested' : 'No';

$body = <<<EOT
New Registration Interest — National Athletics Academy

PARENT / GUARDIAN
Name:    $parent_first $parent_last
Email:   $email
Phone:   $phone

ATHLETE
Name:    $athlete_name
Age:     $athlete_age

PROGRAMS OF INTEREST
$programs_str

PREFERRED SEASON: $season

FINANCIAL ASSISTANCE: $financial_str

ADDITIONAL NOTES:
$notes

---
Submitted: {$_SERVER['REQUEST_TIME']}
IP: $ip
EOT;

$subject_line = "[NAA Registration] $athlete_name (age $athlete_age) — $parent_first $parent_last";
$headers  = "From: NAA Website <noreply@nationalathleticsacademy.ca>\r\n";
$headers .= "Reply-To: $parent_first $parent_last <$email>\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$sent = mail(NAA_CONTACT_EMAIL, $subject_line, $body, $headers);

if ($sent) {
    http_response_code(200);
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send.']);
}
