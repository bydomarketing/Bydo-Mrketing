<?php
/**
 * Bydo Marketing - Hostinger Entry Point
 * This file serves as a bridge to the React production build.
 */

$file = __DIR__ . '/dist/index.html';

if (file_exists($file)) {
    require_once($file);
} else {
    echo "Erro: A pasta 'dist' não foi encontrada ou o build não foi concluído. Verifique o Auto-Deploy no painel da Hostinger.";
}
