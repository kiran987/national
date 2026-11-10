<?php
/**
 * National Athletics Academy Inc. (Regina, SK)
 * Program Early Access Notification Mailer — cPanel Handler
 * ISC Entity #: 102242108
 */
require_once __DIR__ . '/mail-common.php';

// Non-AJAX GET visits go home.
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Location: /');
    exit;
}

// Client expects JSON (AJAX fetch) vs. a native form POST
$isAjax = (
    (isset($_SERVER['HTTP_ACCEPT']) && strpos($_SERVER['HTTP_ACCEPT'], 'application/json') !== false) ||
    (isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest')
);

naa_rate_limit('notify', 10);

$firstName = naa_field('first_name');
$lastName  = naa_field('last_name');
$email     = naa_email();
$phone     = naa_field('phone', 'N/A');
$ageRange  = naa_field('age_range', 'Not specified');
$notes     = naa_text('notes', 'None');
$programs  = naa_list('programs');
$selectedPrograms = $programs ? implode(', ', $programs) : 'None selected';

$errors = [];
if ($firstName === '' || $lastName === '' || $email === '') {
    $errors[] = 'Please provide your first name, last name, and a valid email.';
}
naa_fail_on_errors($errors);

$score = naa_require_captcha('notify_signup');

$body  = "You received a new notification request from naacanada.org:\n\n";
$body .= "Name: {$firstName} {$lastName}\n";
$body .= "Email: {$email}\n";
$body .= "Phone: {$phone}\n";
$body .= "Athlete Age Group: {$ageRange}\n";
$body .= "Selected Programs: {$selectedPrograms}\n";
$body .= "Notes: {$notes}\n";

$sent = naa_send_mail("New Program Notification Request: {$firstName} {$lastName}", $body, $email, $score);

if ($isAjax) {
    naa_respond_sent($sent, "You're on the list! We will notify you when registration opens.");
}

if ($sent) {
    header('Location: /?notified=true');
    exit;
}
http_response_code(500);
echo 'We could not send your request. Please email info@naacanada.org directly.';
