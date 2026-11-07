<?php
// NAA Contact Form Handler
require_once __DIR__ . '/mail-common.php';

naa_require_post();
naa_rate_limit('contact', 5);

$first_name = naa_field('first_name');
$last_name  = naa_field('last_name');
$email      = naa_email();
$phone      = naa_field('phone', 'N/A');
$subject    = naa_field('subject');
$message    = naa_text('message');

$errors = [];
if ($first_name === '') $errors[] = 'First name is required.';
if ($last_name === '')  $errors[] = 'Last name is required.';
if ($email === '')      $errors[] = 'A valid email address is required.';
if ($subject === '')    $errors[] = 'Subject is required.';
if (strlen($message) < 10) $errors[] = 'Message must be at least 10 characters.';
naa_fail_on_errors($errors);

$score = naa_require_captcha('contact');

$body = <<<EOT
New contact form submission from naacanada.org

Name:    $first_name $last_name
Email:   $email
Phone:   $phone
Subject: $subject

Message:
$message

EOT;

$sent = naa_send_mail("[NAA Contact] $subject - from $first_name $last_name", $body, $email, $score);
naa_respond_sent($sent, 'Message received.');
