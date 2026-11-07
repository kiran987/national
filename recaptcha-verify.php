<?php
// ─────────────────────────────────────────────────────────────────────────────
// Google reCAPTCHA v3 Verification Helper
// ─────────────────────────────────────────────────────────────────────────────
// The secret key lives in private/naa_config.php (either above web root or inside private/)
if (!defined('RECAPTCHA_SECRET_KEY')) {
    $candidate_paths = [
        dirname(__DIR__) . '/private/naa_config.php', // Above web root (standard cPanel)
        dirname(__DIR__) . '/naa_config.php',
        __DIR__ . '/private/naa_config.php',         // Inside web root
        __DIR__ . '/naa_config.php',
    ];
    foreach ($candidate_paths as $path) {
        if (is_file($path)) {
            require_once $path;
            break;
        }
    }
}
if (!defined('RECAPTCHA_SECRET_KEY')) {
    $env_key = getenv('RECAPTCHA_SECRET_KEY')
        ?: ($_SERVER['RECAPTCHA_SECRET_KEY'] ?? ($_ENV['RECAPTCHA_SECRET_KEY'] ?? ''));
    if ($env_key) {
        define('RECAPTCHA_SECRET_KEY', $env_key);
    } else {
        define('RECAPTCHA_SECRET_KEY', '');
    }
}

// Minimum passing score (0.0 to 1.0 — Google recommends 0.5)
if (!defined('RECAPTCHA_MIN_SCORE')) {
    define('RECAPTCHA_MIN_SCORE', 0.5);
}

/**
 * Verifies a Google reCAPTCHA v3 response token.
 * 
 * @param string|null $token The g-recaptcha-response token sent by the frontend
 * @param string $expected_action Expected action name (optional)
 * @return array ['success' => bool, 'score' => float, 'error' => string|null]
 */
function verify_recaptcha_v3(?string $token, string $expected_action = 'submit'): array
{
    // Missing config must not silently disable spam protection.
    if (RECAPTCHA_SECRET_KEY === '') {
        error_log('NAA forms: RECAPTCHA_SECRET_KEY not configured (private/naa_config.php missing?)');
        return [
            'success' => false,
            'error' => 'Form temporarily unavailable. Please email info@naacanada.org directly.'
        ];
    }

    if (empty($token)) {
        return [
            'success' => false,
            'error' => 'Missing reCAPTCHA verification token. Please refresh and try again.'
        ];
    }

    $url = 'https://www.google.com/recaptcha/api/siteverify';
    $post_data = http_build_query([
        'secret' => RECAPTCHA_SECRET_KEY,
        'response' => $token,
        'remoteip' => $_SERVER['REMOTE_ADDR'] ?? ''
    ]);

    $response = false;

    // Method 1: cURL (fastest, supports SSL)
    if (function_exists('curl_init')) {
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $post_data);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_TIMEOUT, 5);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);
        $response = curl_exec($ch);
        curl_close($ch);
    }

    // Method 2: Stream context fallback
    if ($response === false) {
        $opts = [
            'http' => [
                'method' => 'POST',
                'header' => "Content-Type: application/x-www-form-urlencoded\r\n",
                'content' => $post_data,
                'timeout' => 5
            ]
        ];
        $context = stream_context_create($opts);
        $response = @file_get_contents($url, false, $context);
    }

    if ($response === false) {
        // Fail open gracefully if Google servers cannot be reached
        return [
            'success' => true,
            'score' => 0.6,
            'warning' => 'Google verification server unreachable; allowed through.'
        ];
    }

    $result = json_decode($response, true);
    if (!is_array($result) || empty($result['success'])) {
        return [
            'success' => false,
            'error' => 'Security check failed. Please refresh the page and try again.'
        ];
    }

    $score = isset($result['score']) ? (float) $result['score'] : 0.0;
    if ($score < RECAPTCHA_MIN_SCORE) {
        return [
            'success' => false,
            'error' => 'Security verification score was too low. Please try again or email us directly.',
            'score' => $score
        ];
    }

    return [
        'success' => true,
        'score' => $score
    ];
}
