const fs = require('fs');
const path = require('path');
import { ConfigService } from '../services/config.service';
import { FigmaService } from '../services/figma.service';
import { SyncService } from '../services/sync.service';

describe('MCP Design System Bridge Tests', () => {
  let configService: ConfigService;
  let figmaService: FigmaService;
  let syncService: SyncService;

  beforeAll(() => {
    // Verificar se o arquivo de configuração existe
    const configPath = path.join(process.cwd(), '.mcp-config.json');
    if (!fs.existsSync(configPath)) {
      throw new Error('.mcp-config.json não encontrado');
    }

    // Inicializar serviços
    configService = new ConfigService();
    figmaService = new FigmaService(configService);
    syncService = new SyncService(figmaService, configService);
  });

  describe('ConfigService', () => {
    test('deve carregar a configuração corretamente', () => {
      const figmaConfig = configService.getFigmaConfig();
      expect(figmaConfig).toBeDefined();
      expect(figmaConfig.accessToken).toBeDefined();
      expect(figmaConfig.fileKey).toBeDefined();
    });

    test('deve retornar as configurações de caminhos', () => {
      const paths = configService.getPaths();
      expect(paths).toBeDefined();
      expect(paths.components).toBeDefined();
      expect(paths.tokens).toBeDefined();
    });
  });

  describe('FigmaService', () => {
    test('deve conectar com a API do Figma', async () => {
      try {
        const components = await figmaService.extractComponents();
        expect(Array.isArray(components)).toBe(true);
      } catch (error) {
        fail('Falha ao conectar com a API do Figma: ' + error);
      }
    });

    test('deve extrair componentes do Figma', async () => {
      const components = await figmaService.extractComponents();
      expect(Array.isArray(components)).toBe(true);
      if (components.length > 0) {
        expect(components[0]).toHaveProperty('id');
        expect(components[0]).toHaveProperty('name');
        expect(components[0]).toHaveProperty('type');
      }
    });

    test('deve extrair variáveis do Figma', async () => {
      const variables = await figmaService.extractVariables();
      expect(Array.isArray(variables)).toBe(true);
      if (variables.length > 0) {
        expect(variables[0]).toHaveProperty('id');
        expect(variables[0]).toHaveProperty('name');
        expect(variables[0]).toHaveProperty('type');
      }
    });

    test('deve extrair estilos de texto do Figma', async () => {
      const textStyles = await figmaService.extractTextStyles();
      expect(Array.isArray(textStyles)).toBe(true);
      if (textStyles.length > 0) {
        expect(textStyles[0]).toHaveProperty('id');
        expect(textStyles[0]).toHaveProperty('name');
        expect(textStyles[0]).toHaveProperty('properties');
      }
    });

    test('deve extrair estilos de cor do Figma', async () => {
      const colorStyles = await figmaService.extractColorStyles();
      expect(Array.isArray(colorStyles)).toBe(true);
      if (colorStyles.length > 0) {
        expect(colorStyles[0]).toHaveProperty('id');
        expect(colorStyles[0]).toHaveProperty('name');
        expect(colorStyles[0]).toHaveProperty('color');
      }
    });

    test('deve extrair estilos de efeito do Figma', async () => {
      const effectStyles = await figmaService.extractEffectStyles();
      expect(Array.isArray(effectStyles)).toBe(true);
      if (effectStyles.length > 0) {
        expect(effectStyles[0]).toHaveProperty('id');
        expect(effectStyles[0]).toHaveProperty('name');
        expect(effectStyles[0]).toHaveProperty('properties');
      }
    });
  });

  describe('SyncService', () => {
    test('deve iniciar a sincronização', async () => {
      await syncService.startSync();
      const status = syncService.getSyncStatus();
      expect(status.isRunning).toBe(true);
    });

    test('deve parar a sincronização', async () => {
      await syncService.stopSync();
      const status = syncService.getSyncStatus();
      expect(status.isRunning).toBe(false);
    });

    test('deve salvar os tokens extraídos', async () => {
      const paths = configService.getPaths();
      const tokensPath = path.join(process.cwd(), paths.tokens);

      // Iniciar sincronização
      await syncService.startSync();

      // Verificar se os arquivos foram criados
      expect(fs.existsSync(path.join(tokensPath, 'components.json'))).toBe(true);
      expect(fs.existsSync(path.join(tokensPath, 'variables.json'))).toBe(true);
      expect(fs.existsSync(path.join(tokensPath, 'text-styles.json'))).toBe(true);
      expect(fs.existsSync(path.join(tokensPath, 'color-styles.json'))).toBe(true);
      expect(fs.existsSync(path.join(tokensPath, 'effect-styles.json'))).toBe(true);

      // Parar sincronização
      await syncService.stopSync();
    });
  });
});
