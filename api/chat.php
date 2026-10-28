<?php
/**
 * api/chat.php - Serverless Gemini AI Proxy for Hostinger (PHP / Apache / LiteSpeed)
 * BEM Langkah Berdikari Web Portal
 */

// 1. Set CORS and JSON Headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
header('Content-Type: application/json; charset=utf-8');

// Handle Preflight Request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Ensure Method is POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method Not Allowed']);
    exit;
}

// 2. Read API Key from Environment or .env
$apiKey = getenv('GEMINI_API_KEY') ?: ($_ENV['GEMINI_API_KEY'] ?? '');

// Check for .env file in project root if not found in environment
if (!$apiKey) {
    $envPath = __DIR__ . '/../.env';
    if (file_exists($envPath)) {
        $lines = file($envPath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        foreach ($lines as $line) {
            if (strpos(trim($line), '#') === 0) continue;
            list($name, $value) = explode('=', $line, 2) + [null, null];
            if (trim($name) === 'GEMINI_API_KEY') {
                $apiKey = trim($value, " \t\n\r\0\x0B\"'");
                break;
            }
        }
    }
}

// If no API key configured on Hostinger, return clean guidance JSON so frontend falls back to local knowledge base
if (!$apiKey) {
    echo json_encode([
        'reply' => null,
        'fallback' => true,
        'message' => 'GEMINI_API_KEY belum dikonfigurasi di Hostinger. Menggunakan asisten cerdas bawaan.'
    ]);
    exit;
}

// 3. Parse JSON Body
$rawInput = file_get_contents('php://input');
$body = json_decode($rawInput, true);

$prompt = trim($body['prompt'] ?? '');
$image = $body['image'] ?? null;

if (!$prompt && !$image) {
    http_response_code(400);
    echo json_encode(['error' => 'Prompt atau gambar wajib diisi.']);
    exit;
}

// 4. Construct Gemini Request Payload
$parts = [];
if (!empty($image['data']) && !empty($image['mimeType'])) {
    $parts[] = [
        'inlineData' => [
            'mimeType' => $image['mimeType'],
            'data' => $image['data']
        ]
    ];
}
$parts[] = ['text' => $prompt ?: 'Jelaskan gambar ini.'];

$geminiPayload = [
    'contents' => [
        [
            'role' => 'user',
            'parts' => $parts
        ]
    ],
    'generationConfig' => [
        'maxOutputTokens' => 2048,
        'temperature' => 0.7
    ]
];

// Helper to format reply markdown
function formatReply($raw) {
    $safe = htmlspecialchars($raw, ENT_QUOTES, 'UTF-8');
    $safe = preg_replace('/\*\*(.*?)\*\*/', '<strong>$1</strong>', $safe);
    $safe = preg_replace('/(?<!\*)\*(?!\*)(.*?)(?<!\*)\*(?!\*)/', '<em>$1</em>', $safe);
    $safe = str_replace("\n\n", '<br><br>', $safe);
    $safe = preg_replace('/\n[-•] /', '<br>• ', $safe);
    $safe = str_replace("\n", '<br>', $safe);
    return $safe;
}

// 5. Call Gemini API via cURL
$models = ['gemini-2.5-flash', 'gemini-1.5-flash'];
$success = false;
$finalReply = '';
$usedModel = '';

foreach ($models as $model) {
    $url = "https://generativelanguage.googleapis.com/v1beta/models/{$model}:generateContent?key=" . urlencode($apiKey);

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($geminiPayload));
    curl_setopt($ch, CURLOPT_TIMEOUT, 30);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);

    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($httpCode === 200 && $response) {
        $resData = json_decode($response, true);
        $candidateText = $resData['candidates'][0]['content']['parts'][0]['text'] ?? '';
        if ($candidateText) {
            $finalReply = formatReply($candidateText);
            $usedModel = $model;
            $success = true;
            break;
        }
    }
}

if ($success) {
    echo json_encode([
        'reply' => $finalReply,
        'model' => $usedModel
    ]);
} else {
    echo json_encode([
        'reply' => 'Maaf, server AI sedang sibuk. Silakan coba kembali sesaat lagi atau gunakan asisten panduan divisi.',
        'error' => true
    ]);
}
