module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Método não permitido' });

  const { password, filename, content } = req.body || {};

  if (!password || password !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'Senha incorreta' });
  }

  if (!filename || !content) {
    return res.status(400).json({ error: 'filename e content são obrigatórios' });
  }

  const safeName = filename.replace(/[^a-zA-Z0-9._-]/g, '_').replace(/\.{2,}/g, '_');
  const filePath = `assets/fotos/${safeName}`;
  const GH_TOKEN = process.env.GITHUB_TOKEN;
  const REPO = 'DevSalgados/indaia-eventos';

  try {
    let sha;
    const checkRes = await fetch(`https://api.github.com/repos/${REPO}/contents/${filePath}`, {
      headers: { Authorization: `token ${GH_TOKEN}`, 'User-Agent': 'IndaiaAdmin/1.0' }
    });
    if (checkRes.ok) {
      const existing = await checkRes.json();
      sha = existing.sha;
    }

    const body = { message: `Admin: foto ${safeName}`, content };
    if (sha) body.sha = sha;

    const putRes = await fetch(`https://api.github.com/repos/${REPO}/contents/${filePath}`, {
      method: 'PUT',
      headers: {
        Authorization: `token ${GH_TOKEN}`,
        'User-Agent': 'IndaiaAdmin/1.0',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    if (!putRes.ok) {
      const txt = await putRes.text();
      throw new Error(`GitHub upload error: ${putRes.status} — ${txt}`);
    }

    return res.status(200).json({ ok: true, url: `/${filePath}` });
  } catch (err) {
    console.error('upload error:', err.message);
    return res.status(500).json({ error: err.message });
  }
};
