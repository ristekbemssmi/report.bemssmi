// api/models.js - Return 3 Free Kenari.id AI Models for Vercel
// BEM Langkah Berdikari - Langkari AI

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const DEFAULT_KENARI_KEY = 'kn-96db98261eaf3a42df0ccdf83ccf1f26d11059e6b717850d';
  const rawKey = (process.env.KENARI_API_KEY || '').trim();
  const apiKey = (rawKey && !rawKey.includes('your-kenari-api-key')) ? rawKey : DEFAULT_KENARI_KEY;
  const configured = Boolean(apiKey);

  return res.status(200).json({
    models: [
      'glm-4-7-flash:free',
      'qwen3-8-omni-flash:free',
      'laguna-xs-2-1:free'
    ],
    defaultModel: 'glm-4-7-flash:free',
    configured
  });
}
