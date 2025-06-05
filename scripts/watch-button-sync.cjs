const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');
const { exec } = require('child_process');

const buttonDir = path.join(__dirname, '../src/components/Button');
const typesFile = path.join(buttonDir, 'Button.types.ts');
const stylesFile = path.join(buttonDir, 'Button.styles.ts');
const tsxFile = path.join(buttonDir, 'Button.tsx');
const jsonFile = path.join(buttonDir, 'Button.json');

function runScript(script) {
  exec(`node ${script}`, (err, stdout, stderr) => {
    if (err) {
      console.error(stderr);
    } else {
      console.log(stdout);
    }
  });
}

const watcher = chokidar.watch([
  typesFile,
  stylesFile,
  tsxFile,
  jsonFile
], { ignoreInitial: true });

watcher.on('change', filePath => {
  if (filePath === jsonFile) {
    console.log('Detectado Button.json alterado. Gerando arquivos TS...');
    runScript(path.join(__dirname, 'generate-button-from-json.cjs'));
  } else if ([typesFile, stylesFile, tsxFile].includes(filePath)) {
    console.log('Detectado Button.tsx/types/styles alterado. Extraindo JSON...');
    runScript(path.join(__dirname, 'extract-button-json.cjs'));
  }
});

console.log('Watcher de Button iniciado. Aguarde por mudanças...'); 