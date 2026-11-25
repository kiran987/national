<?php
// NAA Registration Interest Form Handler
require_once __DIR__ . '/mail-common.php';

naa_require_post();
naa_rate_limit('reg', 10);

$parent_first = naa_field('parent_first');
$parent_last  = naa_field('parent_last');
$email        = naa_email();
$phone        = naa_field('phone', 'N/A');
$athlete_name = naa_field('athlete_name');
$athlete_age  = (int)($_POST['athlete_age'] ?? 0);
$programs     = naa_list('programs');
$season       = naa_field('season', 'Not specified');
$notes        = naa_text('notes', 'None');
$financial    = naa_field('financial_assist') === 'yes' ? 'YES - interested in financial assistance' : 'No';

$errors = [];
if ($parent_first === '') $errors[] = 'Parent first name required.';
if ($parent_last === '')  $errors[] = 'Parent last name required.';
if ($email === '')        $errors[] = 'Valid email required.';
if ($athlete_name === '') $errors[] = 'Athlete name required.';
if ($athlete_age < 3 || $athlete_age > 80) $errors[] = 'Valid athlete age required (3-80).';
if (empty($programs))     $errors[] = 'Please select at least one program.';
naa_fail_on_errors($errors);

$score = naa_require_captcha('registration');
$programs_str = implode(', ', $programs);

$body = <<<EOT
New Registration Interest from naacanada.org

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

FINANCIAL ASSISTANCE: $financial

ADDITIONAL NOTES:
$notes

EOT;

$sent = naa_send_mail("[NAA Registration] $athlete_name (age $athlete_age) - $parent_first $parent_last", $body, $email, $score);
naa_respond_sent($sent, 'Registration interest received.');
