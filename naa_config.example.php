<?php
// Template for the private server config used by the PHP form handlers.
//
// Copy to private/naa_config.php (gitignored) and fill in real values.
// On cPanel, upload it to ~/private/naa_config.php — one level ABOVE
// public_html, so it is never web-accessible.

define('RECAPTCHA_SECRET_KEY', 'your-recaptcha-v3-secret-key');

// Database credentials for Court Booking & Admin rosters
define('DB_HOST', 'localhost');
define('DB_NAME', 'naacanada_national');
define('DB_USER', 'naacanada_user');
define('DB_PASS', 'your-strong-db-password');
define('DB_CHARSET', 'utf8mb4');

