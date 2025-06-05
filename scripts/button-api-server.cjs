const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const chokidar = require('chokidar');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const buttonJsonPath = path.join(__dirname, '../src/components/Button/Button.json');
const generateScript = path.join(__dirname, 'generate-button-from-json.cjs');

// Variável para armazenar o timestamp da última modificação
let lastModifiedTimestamp = Date.now();

// Inicializar o observador de arquivos
const watcher = chokidar.watch(buttonJsonPath, {
  ignored: /(^|\/) node_modules\//, // ignorar node_modules
  persistent: true // manter o processo rodando
});

watcher.on('change', (filePath) => {
  console.log(`Arquivo ${filePath} foi alterado. Atualizando timestamp.`);
  lastModifiedTimestamp = Date.now(); // Atualizar timestamp na mudança
  // Podemos adicionar aqui lógica para notificar o plugin no futuro (ex: WebSockets)
});

console.log(`Observando alterações em: ${buttonJsonPath}`);

// Verificar se o token do Figma está configurado
if (!process.env.FIGMA_ACCESS_TOKEN) {
  console.error('Erro: FIGMA_ACCESS_TOKEN não encontrado no arquivo .env');
  process.exit(1);
}

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
  // Atualizar timestamp após escrever no arquivo (para garantir que a API POST também atualize o timestamp)
  lastModifiedTimestamp = Date.now();
  // Gera os arquivos TS automaticamente
  exec(`node ${generateScript}`, (err, stdout, stderr) => {
    if (err) {
      console.error(stderr);
      return res.status(500).json({ error: 'Erro ao gerar arquivos TS' });
    }
    res.json({ status: 'ok', message: 'Button.json atualizado e arquivos TS gerados.' });
  });
});

// Novo endpoint para verificar a última modificação
app.get('/api/button/last-modified', (req, res) => {
  res.json({ timestamp: lastModifiedTimestamp });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Button API server rodando em http://localhost:${PORT}`);
  console.log(`Endpoints disponíveis: /api/button (GET/POST), /api/button/last-modified (GET)`);
}); 