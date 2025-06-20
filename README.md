# MCP Design System Bridge

Este projeto é uma ponte entre o Design System MCP e o Figma, permitindo a sincronização automática de componentes entre o código e o design.

## Estrutura do Projeto

```
.
├── figma-plugin/          # Plugin do Figma
├── server/               # Servidor Node.js
└── src/                  # Código fonte do Design System
    └── components/       # Componentes do Design System
        └── Button/       # Componente Button
            └── Button.json  # Definição do componente
```

## Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn
- Figma Desktop App

## Instalação

1. Clone o repositório:

```bash
git clone [URL_DO_REPOSITÓRIO]
cd mcp-design-system-bridge
```

2. Instale as dependências:

```bash
npm install
```

## Desenvolvimento

### Servidor

O servidor é responsável por fornecer os dados dos componentes para o plugin do Figma. Para iniciar o servidor em modo de desenvolvimento:

```bash
npm run start:server
```

O servidor estará disponível em `http://localhost:3001`.

### Plugin do Figma

1. Abra o Figma Desktop App
2. Vá em Plugins > Development > Import plugin from manifest...
3. Selecione o arquivo `figma-plugin/manifest.json`

## Uso

1. No Figma, abra o plugin através de Plugins > Development > MCP Button Sync
2. O plugin irá automaticamente:
   - Buscar a definição do componente Button do servidor
   - Criar um frame com o botão atualizado
   - Monitorar mudanças no arquivo `Button.json`
   - Atualizar o botão no Figma quando houver alterações

## Estrutura do Button.json

O arquivo `Button.json` define as propriedades do componente Button:

```json
{
  "styles": {
    "backgroundColor": "#007AFF",
    "borderRadius": "8px",
    "padding": "12px 24px"
  },
  "text": "Button"
}
```

## Build do Plugin Figma

Sempre que você fizer alterações no código TypeScript do plugin (por exemplo, em `figma-plugin/code.ts`), é necessário rodar o build do TypeScript para gerar o arquivo JavaScript que o Figma executa. Para isso, rode:

```
npx tsc --project tsconfig.json
```

Isso irá compilar seus arquivos TypeScript e atualizar os arquivos JavaScript no diretório de saída. Só depois desse passo suas alterações terão efeito no Figma.

Se você alterar apenas o `button.json` ou outros arquivos de dados, **não** precisa rodar o build do TypeScript—basta recarregar o plugin no Figma.

### Build automático (modo watch)

Para facilitar o desenvolvimento, você pode usar o modo watch do TypeScript para recompilar automaticamente o plugin sempre que salvar alterações:

```
npx tsc --project tsconfig.json --watch
```

Ou, adicione este script ao seu `package.json`:

```
"scripts": {
  "watch:plugin": "tsc --project tsconfig.json --watch"
}
```

Depois rode:

```
npm run watch:plugin
```

Assim, seu código do plugin estará sempre atualizado sem precisar rodar o comando de build manualmente a cada alteração.

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
