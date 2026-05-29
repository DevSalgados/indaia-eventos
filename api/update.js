module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Método não permitido' });

  const { password, data } = req.body || {};

  if (!password || password !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'Senha incorreta' });
  }

  if (!data || !data.tiers) {
    return res.status(200).json({ ok: true, auth: true });
  }

  const GH_TOKEN = process.env.GITHUB_TOKEN;
  const REPO = 'DevSalgados/indaia-eventos';
  const FILE = 'data.json';

  try {
    const shaRes = await fetch(`https://api.github.com/repos/${REPO}/contents/${FILE}`, {
      headers: { Authorization: `token ${GH_TOKEN}`, 'User-Agent': 'IndaiaAdmin/1.0' }
    });
    if (!shaRes.ok) throw new Error(`GitHub SHA error: ${shaRes.status}`);
    const { sha } = await shaRes.json();

    const content = Buffer.from(JSON.stringify(data, null, 2)).toString('base64');
    const putRes = await fetch(`https://api.github.com/repos/${REPO}/contents/${FILE}`, {
      method: 'PUT',
      headers: {
        Authorization: `token ${GH_TOKEN}`,
        'User-Agent': 'IndaiaAdmin/1.0',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: 'Admin: atualização de cardápio', content, sha })
    });

    if (!putRes.ok) {
      const txt = await putRes.text();
      throw new Error(`GitHub update error: ${putRes.status} — ${txt}`);
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('update error:', err.message);
    return res.status(500).json({ error: err.message });
  }
};
