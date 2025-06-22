const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const componentsDir = path.join(
  process.cwd(),
  "src",
  "design-system",
  "components"
);

const updatedComponents = new Set(); // Armazena os nomes dos componentes atualizados

// Verificar se o token do Figma está configurado
if (!process.env.FIGMA_ACCESS_TOKEN) {
  console.error("Erro: FIGMA_ACCESS_TOKEN não encontrado no arquivo .env");
  process.exit(1);
}

// Endpoint para listar todos os componentes disponíveis
app.get("/api/components", (req, res) => {
  try {
    const componentFolders = fs
      .readdirSync(componentsDir, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);

    const availableComponents = componentFolders.filter((folder) => {
      const jsonPath = path.join(componentsDir, folder, `${folder}.json`);
      return fs.existsSync(jsonPath);
    });

    res.json(availableComponents);
  } catch (error) {
    console.error("Erro ao listar componentes:", error);
    res.status(500).json({ error: "Erro ao listar componentes" });
  }
});

// Endpoint para obter os dados de um componente específico
app.get("/api/component/:name", (req, res) => {
  const { name } = req.params;
  const componentJsonPath = path.join(componentsDir, name, `${name}.json`);

  if (!fs.existsSync(componentJsonPath)) {
    return res.status(404).json({ error: `${name}.json not found` });
  }
  const json = fs.readFileSync(componentJsonPath, "utf-8");
  res.type("json").send(json);
});

// Endpoint para atualizar os dados de um componente específico
app.post("/api/component/:name", (req, res) => {
  const { name } = req.params;
  const componentJsonPath = path.join(componentsDir, name, `${name}.json`);
  const json = req.body;

  try {
    fs.writeFileSync(componentJsonPath, JSON.stringify(json, null, 2));
    res.json({ status: "ok", message: `${name}.json atualizado com sucesso.` });
  } catch (error) {
    console.error(`Erro ao escrever em ${componentJsonPath}:`, error);
    res.status(500).json({ error: `Erro ao atualizar ${name}.json` });
  }
});

// Endpoint para o watcher notificar uma atualização
app.post("/api/component-updated", (req, res) => {
  const { componentName } = req.body;
  if (componentName) {
    console.log(
      `[API] Recebida notificação de atualização para: ${componentName}`
    );
    updatedComponents.add(componentName);
    res.status(200).send({ message: "Notificação recebida" });
  } else {
    res.status(400).send({ error: "Nome do componente ausente." });
  }
});

// Endpoint para o plugin verificar se há atualizações
app.get("/api/check-updates", (req, res) => {
  if (updatedComponents.size > 0) {
    const componentsToUpdate = Array.from(updatedComponents);
    updatedComponents.clear(); // Limpa o set após enviar
    res.json({ updates: true, components: componentsToUpdate });
  } else {
    res.json({ updates: false, components: [] });
  }
});

const PORT = 3002; // Usando uma porta diferente para evitar conflito
app.listen(PORT, () => {
  console.log(
    `Generic Component API server rodando em http://localhost:${PORT}`
  );
  console.log("Endpoints disponíveis:");
  console.log(`  GET /api/components`);
  console.log(`  GET /api/component/:name`);
  console.log(`  POST /api/component/:name`);
  console.log(`  POST /api/component-updated`);
  console.log(`  GET /api/check-updates`);
});
