<?php
// NAA Coach Application Handler
require_once __DIR__ . '/mail-common.php';

naa_require_post();
naa_rate_limit('coach', 5);

$first_name   = naa_field('first_name');
$last_name    = naa_field('last_name');
$email        = naa_email();
$phone        = naa_field('phone', 'N/A');
$sports       = naa_list('sports');
$certs        = naa_text('certifications', 'None listed');
$experience   = naa_field('experience', 'Not specified');
$availability = naa_text('availability', 'Not specified');
$coach_type   = naa_field('coach_type', 'Not specified');
$message      = naa_text('message', 'None');

$errors = [];
if ($first_name === '') $errors[] = 'First name is required.';
if ($last_name === '')  $errors[] = 'Last name is required.';
if ($email === '')      $errors[] = 'A valid email address is required.';
if (empty($sports))     $errors[] = 'Please select at least one sport.';
naa_fail_on_errors($errors);

$score = naa_require_captcha('coach_apply');
$sports_str = implode(', ', $sports);

$body = <<<EOT
New Coach Application from naacanada.org

APPLICANT
Name:          $first_name $last_name
Email:         $email
Phone:         $phone
Coach Type:    $coach_type

SPORT(S) OF INTEREST
$sports_str

CERTIFICATIONS HELD
$certs

YEARS OF EXPERIENCE
$experience

AVAILABILITY
$availability

ADDITIONAL MESSAGE
$message

EOT;

$sent = naa_send_mail("[NAA Coach Application] $first_name $last_name - $sports_str", $body, $email, $score);
naa_respond_sent($sent, 'Application received.');
