# MCP Design System Bridge

A Model Context Protocol (MCP) for bidirectional synchronization between IDE and Figma for Design System management.

## Features

### 1. React Component Generation
- Generate React components with TypeScript
- Support for variants using class-variance-authority
- Interactive states (hover, focus, disabled, loading)
- Forwarded refs for composition
- Styled with Tailwind CSS + CSS Modules
- Complete JSDoc documentation
- Automatic Storybook stories
- React Testing Library tests
- Barrel exports

### 2. Figma Component Generation
- Create component frames
- Apply design tokens
- Generate variants automatically
- Create responsive auto-layout
- Integrated documentation

### 3. Figma → IDE Extraction
- Design tokens (colors, typography, shadows, spacing, borders)
- Icons (optimized SVG, multiple formats)
- Images (PNG, JPG, WebP with optimization)
- Components (structure, props, variants)

### 4. IDE → Figma Synchronization
- React component analysis
- Props and variants extraction
- Tailwind/CSS style analysis
- Interactive state detection
- Design token mapping

### 5. Bidirectional Synchronization
- Automatic change detection
- Confirmation prompts
- Visual diff
- Sync history
- Rollback capability

## Installation

```bash
npm install mcp-design-system-bridge
```

## Configuration

Create a `.mcp-config.json` file in your project root:

```json
{
  "figma": {
    "accessToken": "your-figma-access-token",
    "fileId": "your-figma-file-id"
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
  }
}
```

## Usage

### Generate React Component

```typescript
import { MCP } from 'mcp-design-system-bridge';

const mcp = new MCP({
  figmaAccessToken: 'your-token',
  figmaFileId: 'your-file-id'
});

const component = await mcp.generateReactComponent({
  name: 'Button',
  description: 'A button component',
  props: [
    {
      name: 'variant',
      type: "'primary' | 'secondary' | 'tertiary'",
      required: true
    },
    {
      name: 'size',
      type: "'sm' | 'md' | 'lg'",
      required: true
    }
  ],
  variants: [
    {
      name: 'primary',
      props: {
        backgroundColor: 'var(--color-primary-500)',
        color: 'var(--color-white)'
      }
    }
  ]
});
```

### Extract from Figma

```typescript
const assets = await mcp.extractFromFigma('node-id');
console.log(assets.tokens);
console.log(assets.components);
console.log(assets.icons);
console.log(assets.images);
```

### Sync to Figma

```typescript
const result = await mcp.syncToFigma({
  components: [/* React components */],
  tokens: {/* Design tokens */}
});
```

### Sync from Figma

```typescript
const result = await mcp.syncFromFigma({
  added: [/* New components */],
  modified: [/* Modified components */],
  deleted: [/* Deleted components */],
  conflicts: [/* Conflicts */]
});
```

## Project Structure

```
design-system/
├── tokens/
│   ├── colors.json
│   ├── typography.json
│   ├── spacing.json
│   └── shadows.json
├── components/
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.types.ts
│   │   ├── Button.stories.tsx
│   │   ├── Button.test.tsx
│   │   └── index.ts
│   ├── Input/
│   │   ├── Input.tsx
│   │   ├── Input.types.ts
│   │   ├── Input.hooks.ts
│   │   ├── Input.stories.tsx
│   │   ├── Input.test.tsx
│   │   └── index.ts
│   └── Card/
├── hooks/
│   ├── useDesignSystem.ts
│   └── useTheme.ts
├── icons/
├── assets/
├── docs/
└── .mcp-config.json
```

## Development

### Prerequisites

- Node.js 18+
- npm 8+
- Figma account with access token
- React 18+ project

### Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create `.mcp-config.json` with your Figma credentials
4. Start development:
   ```bash
   npm run dev
   ```

### Testing

```bash
npm test
```

### Building

```bash
npm run build
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT

## Support

For support, please open an issue in the GitHub repository. 