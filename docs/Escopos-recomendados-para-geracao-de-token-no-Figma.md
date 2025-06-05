# Escopos recomendados para geração de token no Figma

Este documento descreve os escopos recomendados para gerar um token de acesso (Personal Access Token) no Figma, visando a integração com o plugin **MCP Design System Bridge**.

## Escopos recomendados para o plugin MCP Design System Bridge

Para gerar, ler e sincronizar componentes, tokens e assets entre Figma e seu sistema, habilite os seguintes escopos ao criar o token:

| Escopo                | Necessário? | Motivo principal                                  |
|-----------------------|-------------|---------------------------------------------------|
| **File content**      | Sim         | Ler conteúdo dos arquivos Figma                   |
| **File metadata**     | Sim         | Ler metadados dos arquivos                        |
| **Library assets**    | Sim         | Ler dados de componentes e estilos                |
| **Library content**   | Sim         | Ler componentes/estilos publicados                |
| Team library content  | Opcional    | Ler bibliotecas compartilhadas do time            |
| Current user          | Opcional    | Personalização e logs                             |

### Descrição dos escopos

- **File content**: Read the contents of and render images from files
- **File metadata**: Read metadata of files
- **Library assets**: Read data about individual components and styles
- **Library content**: Read components and styles published from individual files
- **Team library content**: Read components and styles published in team libraries (opcional)
- **Current user**: Read the current user's name, email, and profile image (opcional)

### Observações
- Não é necessário habilitar escopos como Comments, Dev resources, File versions, Projects ou Webhooks para a funcionalidade principal de geração e sincronização de componentes.
- Gere o token com esses escopos ativados e mantenha-o seguro.

---

**Exemplo de uso:**

Ao criar o token, selecione os escopos acima para garantir que o plugin MCP Design System Bridge tenha acesso suficiente para ler e gerar componentes, tokens e assets no Figma. 