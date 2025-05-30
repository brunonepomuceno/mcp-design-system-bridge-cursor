import { FigmaNode, DesignTokens, FigmaComponent, FigmaIcon, FigmaImage } from '../types/mcp';

export class TokenExtractor {
  async extractTokens(node: FigmaNode): Promise<DesignTokens> {
    return {
      colors: await this.extractColors(node),
      typography: await this.extractTypography(node),
      spacing: await this.extractSpacing(node),
      shadows: await this.extractShadows(node),
      borders: await this.extractBorders(node),
    };
  }

  async extractComponents(node: FigmaNode): Promise<FigmaComponent[]> {
    const components: FigmaComponent[] = [];
    
    if (node.type === 'COMPONENT' || node.type === 'COMPONENT_SET') {
      components.push({
        id: node.id,
        name: node.name,
        variants: await this.extractVariants(node),
        properties: node.properties || {},
      });
    }

    if (node.children) {
      for (const child of node.children) {
        components.push(...await this.extractComponents(child));
      }
    }

    return components;
  }

  async extractIcons(node: FigmaNode): Promise<FigmaIcon[]> {
    const icons: FigmaIcon[] = [];

    if (node.type === 'VECTOR' && node.name.toLowerCase().includes('icon')) {
      icons.push({
        id: node.id,
        name: node.name,
        svg: await this.extractSVG(node),
        formats: {
          svg: await this.extractSVG(node),
          png: await this.extractPNG(node),
        },
      });
    }

    if (node.children) {
      for (const child of node.children) {
        icons.push(...await this.extractIcons(child));
      }
    }

    return icons;
  }

  async extractImages(node: FigmaNode): Promise<FigmaImage[]> {
    const images: FigmaImage[] = [];

    if (node.type === 'IMAGE') {
      images.push({
        id: node.id,
        name: node.name,
        url: await this.extractImageUrl(node),
        format: 'png',
        size: await this.extractImageSize(node),
      });
    }

    if (node.children) {
      for (const child of node.children) {
        images.push(...await this.extractImages(child));
      }
    }

    return images;
  }

  private async extractColors(node: FigmaNode): Promise<Record<string, string>> {
    const colors: Record<string, string> = {};

    if (node.type === 'RECTANGLE' && node.fills) {
      for (const fill of node.fills) {
        if (fill.type === 'SOLID') {
          const color = this.rgbToHex(fill.color);
          colors[node.name] = color;
        }
      }
    }

    if (node.children) {
      for (const child of node.children) {
        Object.assign(colors, await this.extractColors(child));
      }
    }

    return colors;
  }

  private async extractTypography(node: FigmaNode): Promise<Record<string, any>> {
    const typography: Record<string, any> = {};

    if (node.type === 'TEXT') {
      typography[node.name] = {
        fontFamily: node.style?.fontFamily,
        fontSize: node.style?.fontSize,
        fontWeight: node.style?.fontWeight,
        lineHeight: node.style?.lineHeight,
        letterSpacing: node.style?.letterSpacing,
      };
    }

    if (node.children) {
      for (const child of node.children) {
        Object.assign(typography, await this.extractTypography(child));
      }
    }

    return typography;
  }

  private async extractSpacing(node: FigmaNode): Promise<Record<string, string>> {
    const spacing: Record<string, string> = {};

    if (node.type === 'FRAME' || node.type === 'GROUP') {
      spacing[node.name] = `${node.paddingTop}px`;
    }

    if (node.children) {
      for (const child of node.children) {
        Object.assign(spacing, await this.extractSpacing(child));
      }
    }

    return spacing;
  }

  private async extractShadows(node: FigmaNode): Promise<Record<string, string>> {
    const shadows: Record<string, string> = {};

    if (node.effects) {
      for (const effect of node.effects) {
        if (effect.type === 'DROP_SHADOW') {
          shadows[node.name] = this.shadowToCSS(effect);
        }
      }
    }

    if (node.children) {
      for (const child of node.children) {
        Object.assign(shadows, await this.extractShadows(child));
      }
    }

    return shadows;
  }

  private async extractBorders(node: FigmaNode): Promise<Record<string, string>> {
    const borders: Record<string, string> = {};

    if (node.strokes) {
      for (const stroke of node.strokes) {
        if (stroke.type === 'SOLID') {
          borders[node.name] = this.borderToCSS(stroke, node.strokeWeight);
        }
      }
    }

    if (node.children) {
      for (const child of node.children) {
        Object.assign(borders, await this.extractBorders(child));
      }
    }

    return borders;
  }

  private async extractVariants(node: FigmaNode): Promise<any[]> {
    const variants: any[] = [];

    if (node.type === 'COMPONENT_SET') {
      for (const child of node.children || []) {
        variants.push({
          name: child.name,
          properties: child.properties || {},
        });
      }
    }

    return variants;
  }

  private async extractSVG(node: FigmaNode): Promise<string> {
    // Implementation for extracting SVG
    return '';
  }

  private async extractPNG(node: FigmaNode): Promise<string> {
    // Implementation for extracting PNG
    return '';
  }

  private async extractImageUrl(node: FigmaNode): Promise<string> {
    // Implementation for extracting image URL
    return '';
  }

  private async extractImageSize(node: FigmaNode): Promise<number> {
    // Implementation for extracting image size
    return 0;
  }

  private rgbToHex(color: { r: number; g: number; b: number }): string {
    const r = Math.round(color.r * 255);
    const g = Math.round(color.g * 255);
    const b = Math.round(color.b * 255);
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
  }

  private shadowToCSS(shadow: any): string {
    return `${shadow.offsetX}px ${shadow.offsetY}px ${shadow.radius}px ${shadow.color}`;
  }

  private borderToCSS(stroke: any, weight: number): string {
    return `${weight}px solid ${this.rgbToHex(stroke.color)}`;
  }
} 