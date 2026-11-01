<?php
/**
 * National Athletics Academy Inc. (Regina, SK)
 * Shared cPanel mail helpers for all website form handlers.
 *
 * Every handler sends through naa_send_mail() so they all use the same
 * From/To setup as the original send-mail.php (which is confirmed working).
 */

// This file only defines helpers — never serve it directly.
if (realpath($_SERVER['SCRIPT_FILENAME'] ?? '') === __FILE__) {
    http_response_code(404);
    exit;
}

require_once __DIR__ . '/recaptcha-verify.php';

if (!defined('NAA_MAIL_TO')) {
    define('NAA_MAIL_TO', getenv('NAA_MAIL_TO') ?: 'info@naacanada.org');
}
if (!defined('NAA_MAIL_FROM')) {
    define('NAA_MAIL_FROM', getenv('NAA_MAIL_FROM') ?: 'noreply@naacanada.org');
}

/** Send a JSON response and stop. */
function naa_json(int $status, array $payload): void
{
    http_response_code($status);
    header('Content-Type: application/json');
    header('X-Content-Type-Options: nosniff');
    echo json_encode($payload);
    exit;
}

/** Reject anything that is not a POST. */
function naa_require_post(): void
{
    if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
        naa_json(405, ['success' => false, 'error' => 'Method not allowed']);
    }
}

/** Basic per-session rate limit. */
function naa_rate_limit(string $bucket, int $max): void
{
    if (session_status() !== PHP_SESSION_ACTIVE) {
        session_start();
    }
    $key = $bucket . '_' . md5($_SERVER['REMOTE_ADDR'] ?? '');
    $_SESSION[$key] = ($_SESSION[$key] ?? 0) + 1;
    if ($_SESSION[$key] > $max) {
        naa_json(429, ['success' => false, 'error' => 'Too many requests. Please wait before trying again.']);
    }
}

/** Single-line field: tags and line breaks removed (safe for subjects/headers). */
function naa_field(string $name, string $default = ''): string
{
    $value = $_POST[$name] ?? $default;
    if (!is_string($value)) {
        return $default;
    }
    $value = trim(preg_replace('/[\r\n\t]+/', ' ', strip_tags($value)));
    return $value === '' ? $default : $value;
}

/** Multi-line field (messages/notes): tags removed, line breaks kept. */
function naa_text(string $name, string $default = ''): string
{
    $value = $_POST[$name] ?? $default;
    if (!is_string($value)) {
        return $default;
    }
    $value = trim(str_replace("\r\n", "\n", strip_tags($value)));
    return $value === '' ? $default : $value;
}

/** Checkbox group (sent as name[]). */
function naa_list(string $name): array
{
    $values = (array)($_POST[$name] ?? []);
    $clean = [];
    foreach ($values as $v) {
        if (is_string($v)) {
            $v = trim(preg_replace('/[\r\n\t]+/', ' ', strip_tags($v)));
            if ($v !== '') {
                $clean[] = $v;
            }
        }
    }
    return $clean;
}

/** Validated email address, or '' if invalid. */
function naa_email(string $name = 'email'): string
{
    $value = trim((string)($_POST[$name] ?? ''));
    return filter_var($value, FILTER_VALIDATE_EMAIL) ? $value : '';
}

/** Stop with 422 if there are validation errors. */
function naa_fail_on_errors(array $errors): void
{
    if (!empty($errors)) {
        naa_json(422, ['success' => false, 'errors' => $errors, 'error' => implode(' ', $errors)]);
    }
}

/** Verify reCAPTCHA v3; stop with 403 on failure. Returns the score. */
function naa_require_captcha(string $action): float
{
    $result = verify_recaptcha_v3($_POST['g-recaptcha-response'] ?? '', $action);
    if (empty($result['success'])) {
        $error = $result['error'] ?? 'Spam verification failed. Please refresh and try again.';
        naa_json(403, ['success' => false, 'errors' => [$error], 'error' => $error]);
    }
    return (float)($result['score'] ?? 0);
}

/**
 * Send a plain-text notification to info@naacanada.org.
 * Appends score/IP/timestamp footer. Returns true if mail() accepted it.
 */
function naa_send_mail(string $subject, string $body, string $replyTo, float $score = 0.0): bool
{
    $body .= "\n---\n";
    $body .= "reCAPTCHA Score: {$score}\n";
    $body .= 'IP Address: ' . ($_SERVER['REMOTE_ADDR'] ?? 'Unknown') . "\n";
    $body .= 'Date/Time: ' . date('Y-m-d H:i:s T') . "\n";

    $fromName = 'NAA Website';
    $encodedFromName = '=?UTF-8?B?' . base64_encode($fromName) . '?=';
    $fromEmail = NAA_MAIL_FROM;

    $headers  = "From: {$encodedFromName} <{$fromEmail}>\r\n";
    if ($replyTo !== '') {
        $headers .= "Reply-To: {$replyTo}\r\n";
    }
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $headers .= 'X-Mailer: PHP/' . phpversion();

    // Encode subject so names/dashes with non-ASCII characters arrive intact.
    $encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';

    // The -f parameter sets the envelope sender (Return-Path) to ensure mail sends from @naacanada.org
    return @mail(NAA_MAIL_TO, $encodedSubject, $body, $headers, "-f {$fromEmail}");
}

/** Standard response after sending. */
function naa_respond_sent(bool $sent, string $successMessage): void
{
    if ($sent) {
        naa_json(200, ['success' => true, 'message' => $successMessage]);
    }
    naa_json(500, [
        'success' => false,
        'error'   => 'We could not send your message. Please email info@naacanada.org directly.',
    ]);
}
