import { ReactNode } from 'react';

export interface ComponentSpec {
  name: string;
  description?: string;
  props: PropSpec[];
  variants?: VariantSpec[];
  states?: StateSpec[];
  examples?: ExampleSpec[];
}

export interface PropSpec {
  name: string;
  type: string;
  description?: string;
  required?: boolean;
  default?: any;
  options?: any[];
}

export interface VariantSpec {
  name: string;
  props: Record<string, any>;
  description?: string;
}

export interface StateSpec {
  name: string;
  props: Record<string, any>;
  description?: string;
}

export interface ExampleSpec {
  name: string;
  code: string;
  description?: string;
}

export interface ReactComponentOutput {
  component: string;           // .tsx file content
  types: string;              // .types.ts file content
  stories: string;            // .stories.tsx file content
  tests: string;              // .test.tsx file content
  index: string;              // index.ts barrel export
  hooks?: string;             // custom hooks if needed
}

export interface FigmaNode {
  id: string;
  name: string;
  type: string;
  children?: FigmaNode[];
  properties?: Record<string, any>;
}

export interface ExtractedAssets {
  tokens: DesignTokens;
  components: FigmaComponent[];
  icons: FigmaIcon[];
  images: FigmaImage[];
}

export interface DesignTokens {
  colors: Record<string, string>;
  typography: Record<string, any>;
  spacing: Record<string, string>;
  shadows: Record<string, string>;
  borders: Record<string, string>;
}

export interface FigmaComponent {
  id: string;
  name: string;
  variants: FigmaVariant[];
  properties: Record<string, any>;
}

export interface FigmaVariant {
  name: string;
  properties: Record<string, any>;
}

export interface FigmaIcon {
  id: string;
  name: string;
  svg: string;
  formats: Record<string, string>;
}

export interface FigmaImage {
  id: string;
  name: string;
  url: string;
  format: string;
  size: number;
}

export interface SyncResult {
  success: boolean;
  changes: Change[];
  errors?: Error[];
}

export interface Change {
  type: 'add' | 'update' | 'delete';
  path: string;
  details: any;
}

export interface ValidationResult {
  valid: boolean;
  errors: ValidationError[];
  warnings: ValidationWarning[];
}

export interface ValidationError {
  code: string;
  message: string;
  path: string;
}

export interface ValidationWarning {
  code: string;
  message: string;
  path: string;
}

export interface DesignSystemMCP {
  // React Component Generation
  generateReactComponent(spec: ComponentSpec): Promise<ReactComponentOutput>;
  generateComponentVariants(baseComponent: string, variants: VariantSpec[]): Promise<ReactComponentOutput>;
  generateHooks(hookSpec: HookSpec): Promise<HookOutput>;
  
  // Figma Integration
  extractFromFigma(nodeId: string): Promise<ExtractedAssets>;
  syncToFigma(reactComponents: ReactAssets): Promise<SyncResult>;
  syncFromFigma(comparison: DiffResult): Promise<SyncResult>;
  
  // Analysis & Sync
  analyzeReactComponent(filePath: string): Promise<ComponentAnalysis>;
  detectChanges(): Promise<ChangeSet>;
  generateDiff(local: ReactAssets, remote: FigmaAssets): DiffResult;
  validateSync(changes: ChangeSet): ValidationResult;
}

export interface HookSpec {
  name: string;
  description?: string;
  parameters: PropSpec[];
  returnType: string;
  implementation: string;
}

export interface HookOutput {
  hook: string;              // .ts file content
  types: string;             // .types.ts file content
  tests: string;             // .test.ts file content
  index: string;             // index.ts barrel export
}

export interface ReactAssets {
  components: ReactComponentOutput[];
  hooks?: HookOutput[];
  tokens?: DesignTokens;
}

export interface FigmaAssets {
  components: FigmaComponent[];
  tokens: DesignTokens;
  icons: FigmaIcon[];
  images: FigmaImage[];
}

export interface ComponentAnalysis {
  name: string;
  props: PropSpec[];
  variants: VariantSpec[];
  states: StateSpec[];
  tokens: string[];
  dependencies: string[];
}

export interface ChangeSet {
  components: Change[];
  tokens: Change[];
  icons: Change[];
  images: Change[];
}

export interface DiffResult {
  added: Change[];
  modified: Change[];
  deleted: Change[];
  conflicts: Change[];
} 