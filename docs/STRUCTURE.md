# Estrutura do Projeto

## Diretório `src/`

```
src/
├── components/
│   ├── ui/                    # Componentes de interface básicos
│   │   ├── button/
│   │   ├── navigation/
│   │   ├── pagination/
│   │   └── ...
│   ├── form/                  # Componentes de formulário
│   │   ├── input/
│   │   ├── select/
│   │   ├── checkbox/
│   │   └── ...
│   ├── text/                  # Componentes de texto
│   │   ├── title/
│   │   ├── subtitle/
│   │   ├── paragraph/
│   │   └── ...
│   ├── layout/               # Componentes de layout
│   │   ├── card/
│   │   ├── grid/
│   │   ├── container/
│   │   └── ...
│   ├── icons/                # Componentes de ícones
│   │   ├── activity/
│   │   ├── file/
│   │   ├── folder/
│   │   ├── navigation/
│   │   └── ...
│   └── examples/             # Exemplos de uso
│       ├── home/
│       ├── about/
│       ├── contact/
│       └── ...
├── foundations/              # Fundações do design system
│   ├── colors/              # Sistema de cores
│   │   ├── palette/
│   │   ├── semantic/
│   │   └── themes/
│   ├── typography/          # Sistema tipográfico
│   │   ├── scale/
│   │   ├── weights/
│   │   └── families/
│   ├── spacing/             # Sistema de espaçamento
│   │   ├── scale/
│   │   └── layout/
│   ├── elevation/           # Sistema de elevação
│   │   ├── shadows/
│   │   └── layers/
│   └── motion/              # Sistema de animação
│       ├── timing/
│       ├── easing/
│       └── transitions/
├── tokens/                   # Tokens de design
│   ├── colors/
│   ├── typography/
│   ├── spacing/
│   └── ...
├── services/                 # Serviços
│   ├── figma/
│   ├── sync/
│   └── ...
├── utils/                    # Utilitários
│   ├── validators/
│   ├── analyzers/
│   ├── extractors/
│   └── generators/
└── types/                    # Tipos TypeScript
    ├── components/
    ├── services/
    └── ...
```

## Justificativa

1. **Componentes UI (`components/ui/`)**

   - Componentes básicos reutilizáveis
   - Seguem os princípios de design system
   - Independentes de contexto

2. **Componentes de Formulário (`components/form/`)**

   - Componentes específicos para formulários
   - Incluem validação e estados
   - Seguem padrões de acessibilidade

3. **Componentes de Texto (`components/text/`)**

   - Tipografia e estilos de texto
   - Hierarquia visual
   - Responsividade

4. **Componentes de Layout (`components/layout/`)**

   - Estrutura e organização
   - Grids e containers
   - Responsividade

5. **Componentes de Ícones (`components/icons/`)**

   - Sistema de ícones
   - Variações de tamanho
   - Consistência visual

6. **Exemplos (`components/examples/`)**

   - Demonstração de uso
   - Casos de uso reais
   - Documentação visual

7. **Fundações (`foundations/`)**

   - Sistema de cores
   - Sistema tipográfico
   - Sistema de espaçamento
   - Sistema de elevação
   - Sistema de animação
   - Base para todos os componentes

8. **Tokens (`tokens/`)**

   - Valores de design
   - Consistência visual
   - Temas

9. **Serviços (`services/`)**

   - Lógica de negócio
   - Integrações
   - Gerenciamento de estado

10. **Utilitários (`utils/`)**

    - Funções auxiliares
    - Validações
    - Transformações

11. **Tipos (`types/`)**

- Definições TypeScript
- Interfaces
- Tipos compartilhados
