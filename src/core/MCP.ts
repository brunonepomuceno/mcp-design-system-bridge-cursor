import { DesignSystemMCP, ComponentSpec, ReactComponentOutput, ExtractedAssets, SyncResult, ValidationResult, ChangeSet, DiffResult, ReactAssets, FigmaAssets } from '../types/mcp';
import { FigmaAPI } from '../services/figma';
import { ComponentGenerator } from '../generators/component';
import { TokenExtractor } from '../extractors/token';
import { ComponentAnalyzer } from '../analyzers/component';
import { SyncValidator } from '../validators/sync';

export class MCP implements DesignSystemMCP {
  private figmaAPI: FigmaAPI;
  private componentGenerator: ComponentGenerator;
  private tokenExtractor: TokenExtractor;
  private componentAnalyzer: ComponentAnalyzer;
  private syncValidator: SyncValidator;

  constructor(config: {
    figmaAccessToken: string;
    figmaFileId: string;
  }) {
    this.figmaAPI = new FigmaAPI(config.figmaAccessToken, config.figmaFileId);
    this.componentGenerator = new ComponentGenerator();
    this.tokenExtractor = new TokenExtractor();
    this.componentAnalyzer = new ComponentAnalyzer();
    this.syncValidator = new SyncValidator();
  }

  async generateReactComponent(spec: ComponentSpec): Promise<ReactComponentOutput> {
    return this.componentGenerator.generate(spec);
  }

  async generateComponentVariants(baseComponent: string, variants: ComponentSpec[]): Promise<ReactComponentOutput> {
    return this.componentGenerator.generateVariants(baseComponent, variants);
  }

  async generateHooks(hookSpec: any): Promise<any> {
    return this.componentGenerator.generateHooks(hookSpec);
  }

  async extractFromFigma(nodeId: string): Promise<ExtractedAssets> {
    const node = await this.figmaAPI.getNode(nodeId);
    return {
      tokens: await this.tokenExtractor.extractTokens(node),
      components: await this.tokenExtractor.extractComponents(node),
      icons: await this.tokenExtractor.extractIcons(node),
      images: await this.tokenExtractor.extractImages(node),
    };
  }

  async syncToFigma(reactComponents: ReactAssets): Promise<SyncResult> {
    const validation = await this.validateSync({
      components: reactComponents.components.map(c => ({
        type: 'add',
        path: `components/${c.component}`,
        details: c
      })),
      tokens: [],
      icons: [],
      images: []
    });

    if (!validation.valid) {
      return {
        success: false,
        changes: [],
        errors: validation.errors
      };
    }

    return this.figmaAPI.syncComponents(reactComponents);
  }

  async syncFromFigma(comparison: DiffResult): Promise<SyncResult> {
    const validation = await this.validateSync({
      components: comparison.added.concat(comparison.modified),
      tokens: [],
      icons: [],
      images: []
    });

    if (!validation.valid) {
      return {
        success: false,
        changes: [],
        errors: validation.errors
      };
    }

    return this.figmaAPI.syncFromFigma(comparison);
  }

  async analyzeReactComponent(filePath: string): Promise<any> {
    return this.componentAnalyzer.analyze(filePath);
  }

  async detectChanges(): Promise<ChangeSet> {
    const localAssets = await this.componentAnalyzer.getLocalAssets();
    const remoteAssets = await this.figmaAPI.getRemoteAssets();
    const diff = this.generateDiff(localAssets, remoteAssets);

    return {
      components: diff.added.concat(diff.modified),
      tokens: [],
      icons: [],
      images: []
    };
  }

  generateDiff(local: ReactAssets, remote: FigmaAssets): DiffResult {
    return {
      added: [],
      modified: [],
      deleted: [],
      conflicts: []
    };
  }

  async validateSync(changes: ChangeSet): Promise<ValidationResult> {
    return this.syncValidator.validate(changes);
  }
} 