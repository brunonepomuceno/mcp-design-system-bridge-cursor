import axios from 'axios';
import https from 'https';
import { ConfigService, FigmaConfig } from './config.service';

const httpsAgent = new https.Agent({ rejectUnauthorized: false });

export interface FigmaComponent {
  id: string;
  name: string;
  description?: string;
  type: string;
  properties: Record<string, any>;
}

export interface FigmaVariable {
  id: string;
  name: string;
  type: string;
  value: any;
}

export interface FigmaTextStyle {
  id: string;
  name: string;
  description?: string;
  properties: {
    fontFamily: string;
    fontWeight: number;
    fontSize: number;
    lineHeight: number;
    letterSpacing: number;
    textAlign: string;
    textCase: string;
  };
}

export interface FigmaColorStyle {
  id: string;
  name: string;
  description?: string;
  color: {
    r: number;
    g: number;
    b: number;
    a: number;
  };
}

export interface FigmaEffectStyle {
  id: string;
  name: string;
  description?: string;
  type: string;
  properties: {
    color: any;
    offset: any;
    radius: number;
    spread: number;
    visible: boolean;
    blendMode: string;
  };
}

export interface FigmaColor {
  name: string;
  value: {
    r: number;
    g: number;
    b: number;
    a: number;
  };
}

export interface FigmaTypography {
  name: string;
  value: {
    fontFamily: string;
    fontSize: number;
    fontWeight: number;
    lineHeight: number;
    letterSpacing: number;
  };
}

export interface FigmaSpacing {
  name: string;
  value: number;
}

export interface FigmaElevation {
  name: string;
  value: {
    x: number;
    y: number;
    blur: number;
    spread: number;
    color: {
      r: number;
      g: number;
      b: number;
      a: number;
    };
  };
}

export interface FigmaMotion {
  name: string;
  value: {
    duration: number;
    easing: string;
    delay: number;
  };
}

export class FigmaService {
  private config: FigmaConfig;

  constructor(configService: ConfigService) {
    this.config = configService.getFigmaConfig();
  }

  private async makeRequest(endpoint: string) {
    try {
      const response = await axios.get(`https://api.figma.com/v1/${endpoint}`, {
        headers: {
          'X-Figma-Token': this.config.accessToken,
        },
        httpsAgent,
      });
      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Figma API error: ${error.message}`);
      }
      throw new Error('Unknown error occurred');
    }
  }

  public async extractComponents(): Promise<FigmaComponent[]> {
    const data = await this.makeRequest(`files/${this.config.fileKey}`);
    const components: FigmaComponent[] = [];

    function traverse(node: any) {
      if (node.type === 'COMPONENT' || node.type === 'COMPONENT_SET') {
        components.push({
          id: node.id,
          name: node.name,
          description: node.description,
          type: node.type,
          properties: node.properties || {},
        });
      }

      if (node.children) {
        node.children.forEach(traverse);
      }
    }

    traverse(data.document);
    return components;
  }

  public async extractVariables(): Promise<FigmaVariable[]> {
    const data = await this.makeRequest(`files/${this.config.fileKey}`);
    const variables: FigmaVariable[] = [];

    function traverse(node: any) {
      if (node.boundVariables) {
        Object.entries(node.boundVariables).forEach(([_property, variable]: [string, any]) => {
          variables.push({
            id: variable.id,
            name: variable.name,
            type: variable.type,
            value: variable.value,
          });
        });
      }

      if (node.children) {
        node.children.forEach(traverse);
      }
    }

    traverse(data.document);
    return variables;
  }

  public async extractTextStyles(): Promise<FigmaTextStyle[]> {
    const data = await this.makeRequest(`files/${this.config.fileKey}`);
    const textStyles: FigmaTextStyle[] = [];

    function traverse(node: any) {
      if (node.style && node.style.type === 'TEXT') {
        textStyles.push({
          id: node.style.id,
          name: node.style.name,
          description: node.style.description,
          properties: {
            fontFamily: node.style.fontFamily,
            fontWeight: node.style.fontWeight,
            fontSize: node.style.fontSize,
            lineHeight: node.style.lineHeight,
            letterSpacing: node.style.letterSpacing,
            textAlign: node.style.textAlign,
            textCase: node.style.textCase,
          },
        });
      }

      if (node.children) {
        node.children.forEach(traverse);
      }
    }

    traverse(data.document);
    return textStyles;
  }

  public async extractColorStyles(): Promise<FigmaColorStyle[]> {
    const data = await this.makeRequest(`files/${this.config.fileKey}`);
    const colorStyles: FigmaColorStyle[] = [];

    function traverse(node: any) {
      if (node.fills && node.fills.some((fill: any) => fill.type === 'SOLID')) {
        node.fills.forEach((fill: any) => {
          if (fill.type === 'SOLID' && fill.styleId) {
            colorStyles.push({
              id: fill.styleId,
              name: fill.style?.name,
              description: fill.style?.description,
              color: {
                r: fill.color.r,
                g: fill.color.g,
                b: fill.color.b,
                a: fill.opacity,
              },
            });
          }
        });
      }

      if (node.children) {
        node.children.forEach(traverse);
      }
    }

    traverse(data.document);
    return colorStyles;
  }

  public async extractEffectStyles(): Promise<FigmaEffectStyle[]> {
    const data = await this.makeRequest(`files/${this.config.fileKey}`);
    const effectStyles: FigmaEffectStyle[] = [];

    function traverse(node: any) {
      if (node.effects && node.effects.length > 0) {
        node.effects.forEach((effect: any) => {
          if (effect.styleId) {
            effectStyles.push({
              id: effect.styleId,
              name: effect.style?.name,
              description: effect.style?.description,
              type: effect.type,
              properties: {
                color: effect.color,
                offset: effect.offset,
                radius: effect.radius,
                spread: effect.spread,
                visible: effect.visible,
                blendMode: effect.blendMode,
              },
            });
          }
        });
      }

      if (node.children) {
        node.children.forEach(traverse);
      }
    }

    traverse(data.document);
    return effectStyles;
  }

  public async extractColors(): Promise<FigmaColor[]> {
    const data = await this.makeRequest(`files/${this.config.fileKey}/styles`);
    const colors: FigmaColor[] = [];

    data.meta.styles.forEach((style: any) => {
      if (style.styleType === 'FILL') {
        colors.push({
          name: style.name,
          value: style.description,
        });
      }
    });

    return colors;
  }

  public async extractTypography(): Promise<FigmaTypography[]> {
    const data = await this.makeRequest(`files/${this.config.fileKey}/styles`);
    const typography: FigmaTypography[] = [];

    data.meta.styles.forEach((style: any) => {
      if (style.styleType === 'TEXT') {
        typography.push({
          name: style.name,
          value: style.description,
        });
      }
    });

    return typography;
  }

  public async extractSpacing(): Promise<FigmaSpacing[]> {
    const data = await this.makeRequest(`files/${this.config.fileKey}/styles`);
    const spacing: FigmaSpacing[] = [];

    data.meta.styles.forEach((style: any) => {
      if (style.styleType === 'GRID') {
        spacing.push({
          name: style.name,
          value: style.description,
        });
      }
    });

    return spacing;
  }

  public async extractElevation(): Promise<FigmaElevation[]> {
    const data = await this.makeRequest(`files/${this.config.fileKey}/styles`);
    const elevation: FigmaElevation[] = [];

    data.meta.styles.forEach((style: any) => {
      if (style.styleType === 'EFFECT') {
        elevation.push({
          name: style.name,
          value: style.description,
        });
      }
    });

    return elevation;
  }

  public async extractMotion(): Promise<FigmaMotion[]> {
    const data = await this.makeRequest(`files/${this.config.fileKey}/styles`);
    const motion: FigmaMotion[] = [];

    data.meta.styles.forEach((style: any) => {
      if (style.styleType === 'MOTION') {
        motion.push({
          name: style.name,
          value: style.description,
        });
      }
    });

    return motion;
  }
}
