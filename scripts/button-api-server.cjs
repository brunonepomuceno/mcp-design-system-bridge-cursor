const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const app = express();
app.use(cors());
app.use(express.json());

const buttonJsonPath = path.join(__dirname, '../src/components/Button/Button.json');
const generateScript = path.join(__dirname, 'generate-button-from-json.cjs');

app.get('/api/button', (req, res) => {
  if (!fs.existsSync(buttonJsonPath)) {
    return res.status(404).json({ error: 'Button.json not found' });
  }
  const json = fs.readFileSync(buttonJsonPath, 'utf-8');
  res.type('json').send(json);
});

app.post('/api/button', (req, res) => {
  const json = req.body;
  fs.writeFileSync(buttonJsonPath, JSON.stringify(json, null, 2));
  // Gera os arquivos TS automaticamente
  exec(`node ${generateScript}`, (err, stdout, stderr) => {
    if (err) {
      console.error(stderr);
      return res.status(500).json({ error: 'Erro ao gerar arquivos TS' });
    }
    res.json({ status: 'ok', message: 'Button.json atualizado e arquivos TS gerados.' });
  });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Button API server rodando em http://localhost:${PORT}/api/button`);
}); 