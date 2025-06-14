import { ComponentAnalysis, ReactAssets } from '../types/mcp';
import * as fs from 'fs/promises';
import * as path from 'path';
import * as ts from 'typescript';

export class ComponentAnalyzer {
  async analyze(filePath: string): Promise<ComponentAnalysis> {
    const sourceFile = await this.readSourceFile(filePath);
    const props = this.extractProps(sourceFile);
    const variants = this.extractVariants(sourceFile);
    const states = this.extractStates(sourceFile);
    const tokens = this.extractTokens(sourceFile);
    const dependencies = this.extractDependencies(sourceFile);

    return {
      name: path.basename(filePath, '.tsx'),
      props,
      variants,
      states,
      tokens,
      dependencies,
    };
  }

  async getLocalAssets(): Promise<ReactAssets> {
    const componentsDir = path.join(process.cwd(), 'src', 'components');
    const components = await this.findComponents(componentsDir);

    return {
      components: await Promise.all(components.map(c => this.analyze(c))),
    };
  }

  private async readSourceFile(filePath: string): Promise<ts.SourceFile> {
    const content = await fs.readFile(filePath, 'utf-8');
    return ts.createSourceFile(filePath, content, ts.ScriptTarget.Latest, true);
  }

  private extractProps(sourceFile: ts.SourceFile): any[] {
    const props: any[] = [];

    const visit = (node: ts.Node) => {
      if (ts.isInterfaceDeclaration(node) && node.name.text.endsWith('Props')) {
        for (const member of node.members) {
          if (ts.isPropertySignature(member)) {
            props.push({
              name: member.name.getText(sourceFile),
              type: member.type?.getText(sourceFile) || 'any',
              required: !member.questionToken,
              description: this.extractJSDoc(member),
            });
          }
        }
      }
      ts.forEachChild(node, visit);
    };

    visit(sourceFile);
    return props;
  }

  private extractVariants(sourceFile: ts.SourceFile): any[] {
    const variants: any[] = [];

    const visit = (node: ts.Node) => {
      if (ts.isCallExpression(node) && node.expression.getText(sourceFile) === 'cva') {
        const variantsArg = node.arguments[0];
        if (ts.isObjectLiteralExpression(variantsArg)) {
          for (const prop of variantsArg.properties) {
            if (ts.isPropertyAssignment(prop) && prop.name.getText(sourceFile) === 'variants') {
              const variantsObj = prop.initializer;
              if (ts.isObjectLiteralExpression(variantsObj)) {
                for (const variant of variantsObj.properties) {
                  if (ts.isPropertyAssignment(variant)) {
                    variants.push({
                      name: variant.name.getText(sourceFile),
                      props: this.parseVariantProps(variant.initializer),
                    });
                  }
                }
              }
            }
          }
        }
      }
      ts.forEachChild(node, visit);
    };

    visit(sourceFile);
    return variants;
  }

  private extractStates(sourceFile: ts.SourceFile): any[] {
    const states: any[] = [];

    const visit = (node: ts.Node) => {
      if (ts.isCallExpression(node) && node.expression.getText(sourceFile).includes('useState')) {
        const stateName = node.parent.getText(sourceFile).split('=')[0].trim();
        states.push({
          name: stateName,
          props: {
            value: node.arguments[0]?.getText(sourceFile),
          },
        });
      }
      ts.forEachChild(node, visit);
    };

    visit(sourceFile);
    return states;
  }

  private extractTokens(sourceFile: ts.SourceFile): string[] {
    const tokens: string[] = [];

    const visit = (node: ts.Node) => {
      if (ts.isStringLiteral(node) && node.text.startsWith('var(--')) {
        tokens.push(node.text);
      }
      ts.forEachChild(node, visit);
    };

    visit(sourceFile);
    return tokens;
  }

  private extractDependencies(sourceFile: ts.SourceFile): string[] {
    const dependencies: string[] = [];

    const visit = (node: ts.Node) => {
      if (ts.isImportDeclaration(node)) {
        const moduleSpecifier = node.moduleSpecifier.getText(sourceFile);
        if (moduleSpecifier.startsWith('"') || moduleSpecifier.startsWith("'")) {
          dependencies.push(moduleSpecifier.slice(1, -1));
        }
      }
      ts.forEachChild(node, visit);
    };

    visit(sourceFile);
    return dependencies;
  }

  private async findComponents(dir: string): Promise<string[]> {
    const components: string[] = [];
    const entries = await fs.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        components.push(...(await this.findComponents(fullPath)));
      } else if (entry.isFile() && entry.name.endsWith('.tsx')) {
        components.push(fullPath);
      }
    }

    return components;
  }

  private extractJSDoc(node: ts.Node): string | undefined {
    const jsDoc = ts.getJSDocTags(node);
    return jsDoc.map(tag => tag.comment).join(' ');
  }

  private parseVariantProps(node: ts.Expression): Record<string, any> {
    if (ts.isObjectLiteralExpression(node)) {
      const props: Record<string, any> = {};
      for (const prop of node.properties) {
        if (ts.isPropertyAssignment(prop)) {
          props[prop.name.getText()] = this.parseValue(prop.initializer);
        }
      }
      return props;
    }
    return {};
  }

  private parseValue(node: ts.Expression): any {
    if (ts.isStringLiteral(node)) {
      return node.text;
    }
    if (ts.isNumericLiteral(node)) {
      return node.text;
    }
    if (ts.isObjectLiteralExpression(node)) {
      return this.parseVariantProps(node);
    }
    if (ts.isArrayLiteralExpression(node)) {
      return node.elements.map(e => this.parseValue(e));
    }
    return undefined;
  }
}
