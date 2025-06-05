#!/bin/bash

# Criar um backup da branch atual
git branch backup-figma-generators

# Remover o arquivo do histórico
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch .mcp-config.json" \
  --prune-empty --tag-name-filter cat -- --all

# Recriar o arquivo sem o token
cat > .mcp-config.json << EOL
{
  "figma": {
    "accessToken": "",
    "fileId": ""
  },
  "paths": {
    "components": "src/components",
    "tokens": "src/tokens",
    "icons": "src/icons",
    "assets": "src/assets"
  },
  "generation": {
    "useTailwind": true,
    "useCSSModules": true,
    "useStorybook": true,
    "useTests": true
  },
  "sync": {
    "autoSync": false,
    "confirmBeforeSync": true,
    "keepHistory": true,
    "maxHistoryItems": 10
  },
  "validation": {
    "enforceNaming": true,
    "checkBreakingChanges": true,
    "validateTokens": true,
    "validateComponents": true
  },
  "output": {
    "format": "typescript",
    "indent": 2,
    "lineEnding": "lf",
    "includeComments": true
  }
}
EOL

# Adicionar e commitar o novo arquivo
git add .mcp-config.json
git commit -m "Recreate .mcp-config.json without token"

# Forçar a atualização do repositório remoto
git push origin --force --all
git push origin --force --tags

echo "Histórico limpo! Verifique se tudo está correto antes de continuar."
echo "Se algo der errado, você pode restaurar a branch original com:"
echo "git checkout backup-figma-generators" 