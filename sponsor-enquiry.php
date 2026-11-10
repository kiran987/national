<?php
// NAA Sponsorship Enquiry Handler
require_once __DIR__ . '/mail-common.php';

naa_require_post();
naa_rate_limit('sponsor', 5);

$company_name = naa_field('company_name');
$contact_name = naa_field('contact_name');
$email        = naa_email();
$phone        = naa_field('phone', 'N/A');
$tier         = naa_field('tier', 'General Sponsorship Inquiry');
$message      = naa_text('message', 'None');

$errors = [];
if ($company_name === '') $errors[] = 'Company or Organization name is required.';
if ($contact_name === '') $errors[] = 'Contact person name is required.';
if ($email === '')        $errors[] = 'A valid email address is required.';
naa_fail_on_errors($errors);

$score = naa_require_captcha('sponsor_enquiry');

$body = <<<EOT
New Sponsorship & Partnership Inquiry from naacanada.org/sponsors/

Company / Organization: $company_name
Contact Person:         $contact_name
Email Address:          $email
Phone Number:           $phone
Interested Tier:        $tier

Message / Goals:
$message

EOT;

$sent = naa_send_mail("[NAA Sponsorship] Inquiry from $company_name ($tier)", $body, $email, $score);
naa_respond_sent($sent, 'Thank you for partnering with National Athletics Academy! Our team will review your inquiry and connect within 1 business day.');
