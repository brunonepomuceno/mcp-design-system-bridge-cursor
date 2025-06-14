import fs from 'fs';
import path from 'path';

export interface FigmaConfig {
  accessToken: string;
  fileId: string;
  pluginId: string;
  fileKey: string;
}

export interface MCPConfig {
  figma: FigmaConfig;
  paths: {
    components: string;
    tokens: string;
    icons: string;
    assets: string;
  };
  sync: {
    autoSync: boolean;
    confirmBeforeSync: boolean;
    keepHistory: boolean;
    maxHistoryItems: number;
  };
}

export class ConfigService {
  private config!: MCPConfig;

  constructor() {
    this.loadConfig();
  }

  private loadConfig() {
    const configPath = path.join(process.cwd(), '.mcp-config.json');
    const configFile = fs.readFileSync(configPath, 'utf-8');
    this.config = JSON.parse(configFile);
  }

  public getFigmaConfig(): FigmaConfig {
    return this.config.figma;
  }

  public getPaths() {
    return this.config.paths;
  }

  public getSyncConfig() {
    return this.config.sync;
  }

  public updateFigmaConfig(config: Partial<FigmaConfig>) {
    this.config.figma = { ...this.config.figma, ...config };
    this.saveConfig();
  }

  private saveConfig() {
    const configPath = path.join(process.cwd(), '.mcp-config.json');
    fs.writeFileSync(configPath, JSON.stringify(this.config, null, 2));
  }
}
