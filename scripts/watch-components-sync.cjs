const chokidar = require("chokidar");
const path = require("path");
const fs = require("fs");
const fetch = require("node-fetch");

const componentsDir = path.join(process.cwd(), "src/design-system/components");
const apiUrl = "http://localhost:3002/api/component-updated";

console.log(`[Watcher] Monitorando diretório: ${componentsDir}`);

const watcher = chokidar.watch(componentsDir, {
  ignored: /(^|[\/\\])\../, // ignore dotfiles
  persistent: true,
  ignoreInitial: true,
  usePolling: true,
  depth: 99, // Garantir que subdiretórios sejam monitorados
});

watcher.on("change", async (filePath) => {
  // Garantir que estamos lidando apenas com arquivos .json
  if (path.extname(filePath) !== ".json") return;

  const componentName = path.basename(path.dirname(filePath));
  console.log(
    `[Watcher] Arquivo ${path.basename(filePath)} do componente '${componentName}' foi modificado.`
  );

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ componentName }),
    });

    if (response.ok) {
      console.log(
        `[Watcher] Notificação para '${componentName}' enviada com sucesso.`
      );
    } else {
      const errorText = await response.text();
      console.error(
        `[Watcher] Erro ao notificar API para '${componentName}': ${response.status} ${errorText}`
      );
    }
  } catch (error) {
    console.error(`[Watcher] Erro de rede ao notificar API:`, error);
  }
});

console.log("[Watcher] Pronto para detectar alterações nos arquivos .json.");
