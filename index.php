<?php
/**
 * Bydo Marketing - Hostinger Entry Point
 * This file serves as a bridge to the React production build.
 */

// Disable error reporting for production
error_reporting(0);
ini_set('display_errors', 0);

// Basic Security Headers (redundant but safe if .htaccess is skipped)
header("X-Frame-Options: SAMEORIGIN");
header("X-Content-Type-Options: nosniff");
header("X-XSS-Protection: 1; mode=block");

$file = __DIR__ . '/dist/index.html';

if (file_exists($file)) {
    require_once($file);
} else {
    header("HTTP/1.1 500 Internal Server Error");
    echo "Erro: O conteúdo não está disponível de momento. Por favor tente novamente mais tarde.";
    // Log error internally if needed
}
