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

  const apiKey = (process.env.KENARI_API_KEY || '').trim();
  const configured = Boolean(apiKey && !apiKey.includes('your-kenari-api-key'));

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
