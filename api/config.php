<?php
/**
 * Konfigurasi Utama Langkari AI untuk Hostinger (PHP / Apache / LiteSpeed)
 * BEM Langkah Berdikari - BEM SSMI IPB University
 * 
 * File ini otomatis dibaca oleh api/chat.php dan api/models.php.
 * Sangat aman di-upload ke Hostinger karena berekstensi .php biasa (bukan dotfile .env).
 * Jika Anda ingin mengganti API Key di kemudian hari, Anda cukup mengedit file ini di Hostinger File Manager.
 */

return [
    // API Key Kenari.id Gateway
    'KENARI_API_KEY' => 'kn-96db98261eaf3a42df0ccdf83ccf1f26d11059e6b717850d',

    // Base URL Kenari.id Gateway
    'KENARI_BASE_URL' => 'https://kenari.id/v1',

    // Model Default Gratis
    'DEFAULT_MODEL' => 'glm-4-7-flash:free',

    // 3 Model AI Gratis Resmi Kenari.id
    'ALLOWED_MODELS' => [
        'glm-4-7-flash:free',
        'qwen3-8-omni-flash:free',
        'laguna-xs-2-1:free'
    ]
];
