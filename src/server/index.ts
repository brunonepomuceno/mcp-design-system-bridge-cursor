import express, { Request, Response } from 'express';
import cors from 'cors';
import { FigmaService } from '../services/figma.service';
import { SyncService } from '../services/sync.service';
import { ConfigService } from '../services/config.service';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Services
const configService = new ConfigService();
const figmaService = new FigmaService(configService);
const syncService = new SyncService(figmaService, configService);

// Routes
app.get('/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok' });
});

// Figma extraction routes
app.get('/api/figma/components', async (_req: Request, res: Response) => {
  try {
    const components = await figmaService.extractComponents();
    res.json(components);
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    res.status(500).json({ error: errorMessage });
  }
});

app.get('/api/figma/variables', async (_req: Request, res: Response) => {
  try {
    const variables = await figmaService.extractVariables();
    res.json(variables);
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    res.status(500).json({ error: errorMessage });
  }
});

app.get('/api/figma/text-styles', async (_req: Request, res: Response) => {
  try {
    const textStyles = await figmaService.extractTextStyles();
    res.json(textStyles);
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    res.status(500).json({ error: errorMessage });
  }
});

app.get('/api/figma/color-styles', async (_req: Request, res: Response) => {
  try {
    const colorStyles = await figmaService.extractColorStyles();
    res.json(colorStyles);
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    res.status(500).json({ error: errorMessage });
  }
});

app.get('/api/figma/effect-styles', async (_req: Request, res: Response) => {
  try {
    const effectStyles = await figmaService.extractEffectStyles();
    res.json(effectStyles);
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    res.status(500).json({ error: errorMessage });
  }
});

// Sync routes
app.post('/api/sync/start', async (_req: Request, res: Response) => {
  try {
    await syncService.startSync();
    res.json({ status: 'sync started' });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    res.status(500).json({ error: errorMessage });
  }
});

app.post('/api/sync/stop', async (_req: Request, res: Response) => {
  try {
    await syncService.stopSync();
    res.json({ status: 'sync stopped' });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    res.status(500).json({ error: errorMessage });
  }
});

app.get('/api/sync/status', async (_req: Request, res: Response) => {
  try {
    const status = await syncService.getSyncStatus();
    res.json(status);
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    res.status(500).json({ error: errorMessage });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
