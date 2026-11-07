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
 * Turn the plain-text form body into a designed HTML email.
 * Understands the handlers' existing layout: an intro line, "Label: value" rows,
 * ALL-CAPS section headings and "Label:" followed by a free-text block.
 */
function naa_html_email(string $subject, string $body, array $meta, string $replyTo): string
{
    $e = static function (string $s): string {
        return htmlspecialchars($s, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
    };
    $link = static function (string $label, string $value) use ($e): string {
        $v = trim($value);
        if (preg_match('/e-?mail/i', $label) && filter_var($v, FILTER_VALIDATE_EMAIL)) {
            return '<a href="mailto:' . $e($v) . '" style="color:#0b4aa2;text-decoration:none;">' . $e($v) . '</a>';
        }
        if (preg_match('/phone|tel/i', $label) && preg_match('/\d{7,}/', preg_replace('/\D/', '', $v))) {
            return '<a href="tel:' . $e(preg_replace('/[^\d+]/', '', $v)) . '" style="color:#0b4aa2;text-decoration:none;">' . $e($v) . '</a>';
        }
        return nl2br($e($v));
    };
    $chips = static function (string $value) use ($e): string {
        $out = '';
        foreach (array_filter(array_map('trim', explode(',', $value))) as $item) {
            $out .= '<span style="display:inline-block;margin:0 6px 6px 0;padding:5px 11px;background:#eef3fb;border:1px solid #d5e0f2;border-radius:999px;font-size:13px;color:#021F47;">' . $e($item) . '</span>';
        }
        return $out;
    };

    $intro = '';
    $html = '';
    $section = '';
    $block = null; // ['label' => string, 'lines' => []]
    $rowsOpen = false;

    $closeRows = static function () use (&$html, &$rowsOpen): void {
        if ($rowsOpen) {
            $html .= '</table>';
            $rowsOpen = false;
        }
    };
    $flushBlock = static function () use (&$html, &$block, $e, $closeRows): void {
        if ($block !== null) {
            $text = trim(implode("\n", $block['lines']));
            if ($text !== '' && strcasecmp($text, 'None') !== 0) {
                $closeRows();
                $html .= '<div style="margin:18px 0 6px;font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:#6b7280;font-weight:700;">' . $e($block['label']) . '</div>'
                    . '<div style="padding:14px 16px;background:#f8fafc;border-left:4px solid #DDAA40;border-radius:6px;font-size:15px;line-height:1.6;color:#1f2937;">' . nl2br($e($text)) . '</div>';
            }
            $block = null;
        }
    };

    foreach (explode("\n", $body) as $line) {
        $line = rtrim($line);
        if (trim($line) === '') {
            if ($block !== null) {
                $block['lines'][] = '';
            }
            continue;
        }
        if ($intro === '') {
            $intro = $line;
            continue;
        }
        if (preg_match('/^[A-Z][A-Z0-9 \/&\'()-]{3,}$/', $line)) {
            $flushBlock();
            $closeRows();
            $section = $line;
            $html .= '<div style="margin:24px 0 8px;padding-bottom:6px;border-bottom:2px solid #DDAA40;font-size:12px;letter-spacing:.08em;font-weight:800;color:#021F47;">' . $e($line) . '</div>';
            continue;
        }
        if (preg_match('/^([A-Za-z][A-Za-z0-9 \/&()\'-]{0,40}):\s*(.*)$/', $line, $m)) {
            $flushBlock();
            if (trim($m[2]) === '') {
                $block = ['label' => trim($m[1]), 'lines' => []];
                continue;
            }
            if (!$rowsOpen) {
                $html .= '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">';
                $rowsOpen = true;
            }
            $label = trim($m[1]);
            $value = trim($m[2]);
            $cell = (preg_match('/program|sport/i', $label) && strpos($value, ',') !== false)
                ? $chips($value)
                : $link($label, $value);
            $html .= '<tr><td valign="top" style="width:36%;padding:9px 12px 9px 0;border-bottom:1px solid #eef0f3;font-size:13px;color:#6b7280;font-weight:600;">' . $e($label) . '</td>'
                . '<td valign="top" style="padding:9px 0;border-bottom:1px solid #eef0f3;font-size:15px;color:#111827;">' . $cell . '</td></tr>';
            continue;
        }
        if ($block !== null) {
            $block['lines'][] = $line;
            continue;
        }
        $closeRows();
        if (preg_match('/program/i', $section) && strpos($line, ',') !== false) {
            $html .= '<div style="padding:6px 0;">' . $chips($line) . '</div>';
        } else {
            $html .= '<p style="margin:8px 0;font-size:15px;line-height:1.6;color:#1f2937;">' . nl2br($e($line)) . '</p>';
        }
    }
    $flushBlock();
    $closeRows();

    $metaHtml = '';
    foreach ($meta as $k => $v) {
        $metaHtml .= '<span style="display:inline-block;margin-right:14px;">' . $e($k) . ': <strong style="color:#4b5563;">' . $e($v) . '</strong></span>';
    }
    $reply = $replyTo !== ''
        ? '<div style="margin-top:22px;"><a href="mailto:' . $e($replyTo) . '?subject=' . rawurlencode('Re: ' . $subject) . '" style="display:inline-block;padding:11px 22px;background:#021F47;color:#ffffff;border-radius:8px;font-size:14px;font-weight:700;text-decoration:none;">Reply to ' . $e($replyTo) . '</a></div>'
        : '';

    return '<!doctype html><html><body style="margin:0;padding:0;background:#f1f5f9;">'
        . '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:24px 12px;"><tr><td align="center">'
        . '<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;font-family:Segoe UI,Helvetica,Arial,sans-serif;">'
        . '<tr><td style="background:#021F47;padding:22px 28px;border-bottom:4px solid #DDAA40;">'
        . '<div style="font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:#DDAA40;font-weight:700;">National Athletics Academy</div>'
        . '<div style="margin-top:6px;font-size:21px;line-height:1.3;color:#ffffff;font-weight:700;">' . $e($subject) . '</div>'
        . '</td></tr>'
        . '<tr><td style="padding:24px 28px 28px;">'
        . '<p style="margin:0 0 6px;font-size:14px;color:#6b7280;">' . $e($intro) . '</p>'
        . $html . $reply
        . '</td></tr>'
        . '<tr><td style="padding:14px 28px;background:#f8fafc;border-top:1px solid #e5e7eb;font-size:12px;color:#9ca3af;line-height:1.7;">' . $metaHtml . '</td></tr>'
        . '</table></td></tr></table></body></html>';
}

/**
 * Send a notification to info@naacanada.org as multipart (HTML + plain text).
 * Appends score/IP/timestamp footer. Returns true if mail() accepted it.
 */
function naa_send_mail(string $subject, string $body, string $replyTo, float $score = 0.0): bool
{
    $meta = [
        'reCAPTCHA score' => (string)$score,
        'IP address' => $_SERVER['REMOTE_ADDR'] ?? 'Unknown',
        'Received' => date('Y-m-d H:i:s T'),
    ];
    $plain = $body . "\n---\n";
    foreach ($meta as $k => $v) {
        $plain .= "{$k}: {$v}\n";
    }
    $html = naa_html_email($subject, $body, $meta, $replyTo);

    $fromName = 'NAA Website';
    $encodedFromName = '=?UTF-8?B?' . base64_encode($fromName) . '?=';
    $fromEmail = NAA_MAIL_FROM;
    $boundary = 'naa_' . bin2hex(random_bytes(8));

    $headers  = "From: {$encodedFromName} <{$fromEmail}>\r\n";
    if ($replyTo !== '') {
        $headers .= "Reply-To: {$replyTo}\r\n";
    }
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: multipart/alternative; boundary=\"{$boundary}\"\r\n";
    $headers .= 'X-Mailer: PHP/' . phpversion();

    $message  = "--{$boundary}\r\n";
    $message .= "Content-Type: text/plain; charset=UTF-8\r\nContent-Transfer-Encoding: quoted-printable\r\n\r\n";
    $message .= quoted_printable_encode($plain) . "\r\n";
    $message .= "--{$boundary}\r\n";
    $message .= "Content-Type: text/html; charset=UTF-8\r\nContent-Transfer-Encoding: quoted-printable\r\n\r\n";
    $message .= quoted_printable_encode($html) . "\r\n";
    $message .= "--{$boundary}--";

    // Encode subject so names/dashes with non-ASCII characters arrive intact.
    $encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';

    // The -f parameter sets the envelope sender (Return-Path) to ensure mail sends from @naacanada.org
    return @mail(NAA_MAIL_TO, $encodedSubject, $message, $headers, "-f {$fromEmail}");
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
