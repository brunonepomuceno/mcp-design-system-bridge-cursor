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

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes. 