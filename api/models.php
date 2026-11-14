<?php
/**
 * api/models.php - Return 3 Free Kenari.id AI Models for Hostinger
 * BEM Langkah Berdikari - Langkari AI
 */
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$apiKey = '';

// 1. Cek dari api/config.php (Terbaik untuk Hostinger)
$configFile = __DIR__ . '/config.php';
if (file_exists($configFile)) {
    $cfg = include $configFile;
    if (is_array($cfg) && !empty($cfg['KENARI_API_KEY'])) {
        $apiKey = trim($cfg['KENARI_API_KEY']);
    }
}

// 2. Cek Environment System
if (!$apiKey) {
    $apiKey = getenv('KENARI_API_KEY') ?: ($_ENV['KENARI_API_KEY'] ?? '');
}

// 3. Cek file .env di root
if (!$apiKey) {
    $envPath = __DIR__ . '/../.env';
    if (file_exists($envPath)) {
        $lines = @file($envPath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        if ($lines) {
            foreach ($lines as $line) {
                $line = trim($line);
                if (strpos($line, '#') === 0) continue;
                $parts = explode('=', $line, 2);
                if (count($parts) === 2 && trim($parts[0]) === 'KENARI_API_KEY') {
                    $apiKey = trim($parts[1], " \t\n\r\0\x0B\"'");
                    break;
                }
            }
        }
    }
}

$hasKey = (!empty($apiKey) && strpos($apiKey, 'your-kenari-api-key') === false);

echo json_encode([
    'models' => [
        'glm-4-7-flash:free',
        'qwen3-8-omni-flash:free',
        'laguna-xs-2-1:free'
    ],
    'defaultModel' => 'glm-4-7-flash:free',
    'configured' => $hasKey
]);
