<?php
// NAA Program Enquiry Handler
require_once __DIR__ . '/mail-common.php';

naa_require_post();
naa_rate_limit('enquiry', 10);

$first_name   = naa_field('first_name');
$last_name    = naa_field('last_name');
$email        = naa_email();
$phone        = naa_field('phone', 'N/A');
$program      = naa_field('program');
$athlete_name = naa_field('athlete_name', 'Not provided');
$athlete_age  = naa_field('athlete_age', 'Not provided');
$message      = naa_text('message');

$errors = [];
if ($first_name === '') $errors[] = 'First name is required.';
if ($last_name === '')  $errors[] = 'Last name is required.';
if ($email === '')      $errors[] = 'A valid email is required.';
if ($program === '')    $errors[] = 'Please select a program.';
if (strlen($message) < 5) $errors[] = 'Please enter your question or message.';
naa_fail_on_errors($errors);

$score = naa_require_captcha('program_enquiry');

$body = <<<EOT
New Program Enquiry from naacanada.org

ENQUIRING PARENT / GUARDIAN
Name:    $first_name $last_name
Email:   $email
Phone:   $phone

PROGRAM OF INTEREST
$program

ATHLETE
Name:  $athlete_name
Age:   $athlete_age

QUESTION / MESSAGE
$message

EOT;

$sent = naa_send_mail("[NAA Program Enquiry] $program - $first_name $last_name", $body, $email, $score);
naa_respond_sent($sent, 'Enquiry received.');
