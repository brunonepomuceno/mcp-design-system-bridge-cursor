import { FigmaService } from './figma.service';
import { ConfigService } from './config.service';
import fs from 'fs';
import path from 'path';

export interface SyncStatus {
  isRunning: boolean;
  lastSync: Date | null;
  lastError: string | null;
}

export class SyncService {
  private syncInterval: NodeJS.Timeout | null = null;
  private status: SyncStatus = {
    isRunning: false,
    lastSync: null,
    lastError: null,
  };

  constructor(
    private figmaService: FigmaService,
    private configService: ConfigService
  ) {}

  public async startSync() {
    if (this.status.isRunning) {
      return;
    }

    const syncConfig = this.configService.getSyncConfig();
    this.status.isRunning = true;

    // Initial sync
    await this.performSync();

    // Setup interval if autoSync is enabled
    if (syncConfig.autoSync) {
      this.syncInterval = setInterval(() => {
        this.performSync().catch(error => {
          this.status.lastError = error.message;
        });
      }, 60000); // Check every minute
    }
  }

  public async stopSync() {
    if (this.syncInterval) {
      clearInterval(this.syncInterval);
      this.syncInterval = null;
    }
    this.status.isRunning = false;
  }

  public getSyncStatus(): SyncStatus {
    return { ...this.status };
  }

  private async performSync() {
    try {
      // Extract all elements from Figma
      const [components, variables, textStyles, colorStyles, effectStyles] = await Promise.all([
        this.figmaService.extractComponents(),
        this.figmaService.extractVariables(),
        this.figmaService.extractTextStyles(),
        this.figmaService.extractColorStyles(),
        this.figmaService.extractEffectStyles(),
      ]);

      // Save to local files
      const paths = this.configService.getPaths();
      const tokensPath = path.join(process.cwd(), paths.tokens);

      // Ensure directories exist
      fs.mkdirSync(tokensPath, { recursive: true });

      // Save each type of token
      fs.writeFileSync(
        path.join(tokensPath, 'components.json'),
        JSON.stringify(components, null, 2)
      );
      fs.writeFileSync(path.join(tokensPath, 'variables.json'), JSON.stringify(variables, null, 2));
      fs.writeFileSync(
        path.join(tokensPath, 'text-styles.json'),
        JSON.stringify(textStyles, null, 2)
      );
      fs.writeFileSync(
        path.join(tokensPath, 'color-styles.json'),
        JSON.stringify(colorStyles, null, 2)
      );
      fs.writeFileSync(
        path.join(tokensPath, 'effect-styles.json'),
        JSON.stringify(effectStyles, null, 2)
      );

      this.status.lastSync = new Date();
      this.status.lastError = null;
    } catch (error) {
      this.status.lastError = error instanceof Error ? error.message : 'Unknown error occurred';
      throw error;
    }
  }
}
