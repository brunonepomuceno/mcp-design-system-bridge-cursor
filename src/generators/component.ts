import { ComponentSpec, ReactComponentOutput, HookSpec, HookOutput } from '../types/mcp';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

export class ComponentGenerator {
  async generate(spec: ComponentSpec): Promise<ReactComponentOutput> {
    const component = this.generateComponent(spec);
    const types = this.generateTypes(spec);
    const stories = this.generateStories(spec);
    const tests = this.generateTests(spec);
    const index = this.generateIndex(spec.name);
    const hooks = spec.props.some(p => p.type.includes('use')) ? this.generateHooks(spec) : undefined;

    return {
      component,
      types,
      stories,
      tests,
      index,
      hooks,
    };
  }

  async generateVariants(baseComponent: string, variants: ComponentSpec[]): Promise<ReactComponentOutput> {
    // Implementation for generating component variants
    return {
      component: '',
      types: '',
      stories: '',
      tests: '',
      index: '',
    };
  }

  async generateHooks(hookSpec: HookSpec): Promise<HookOutput> {
    const hook = this.generateHook(hookSpec);
    const types = this.generateHookTypes(hookSpec);
    const tests = this.generateHookTests(hookSpec);
    const index = this.generateHookIndex(hookSpec.name);

    return {
      hook,
      types,
      tests,
      index,
    };
  }

  private generateComponent(spec: ComponentSpec): string {
    const variants = this.generateVariantsConfig(spec);
    const className = `const ${spec.name} = React.forwardRef<HTMLDivElement, ${spec.name}Props>((props, ref) => {
      const { className, ...rest } = props;
      const baseStyles = cva("", ${variants});
      
      return (
        <div
          ref={ref}
          className={twMerge(baseStyles({ className }))}
          {...rest}
        />
      );
    });`;

    return `
import React from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { ${spec.name}Props } from './${spec.name}.types';

${className}

${spec.name}.displayName = '${spec.name}';

export { ${spec.name} };
`;
  }

  private generateTypes(spec: ComponentSpec): string {
    const props = spec.props.map(prop => {
      const required = prop.required ? '' : '?';
      return `  ${prop.name}${required}: ${prop.type};${prop.description ? ` // ${prop.description}` : ''}`;
    }).join('\n');

    return `
import { HTMLAttributes } from 'react';

export interface ${spec.name}Props extends HTMLAttributes<HTMLDivElement> {
${props}
}
`;
  }

  private generateStories(spec: ComponentSpec): string {
    const stories = spec.examples?.map(example => `
export const ${example.name} = {
  args: ${example.code},
};
`).join('\n') || '';

    return `
import type { Meta, StoryObj } from '@storybook/react';
import { ${spec.name} } from './${spec.name}';

const meta: Meta<typeof ${spec.name}> = {
  title: 'Components/${spec.name}',
  component: ${spec.name},
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ${spec.name}>;

${stories}
`;
  }

  private generateTests(spec: ComponentSpec): string {
    return `
import { render, screen } from '@testing-library/react';
import { ${spec.name} } from './${spec.name}';

describe('${spec.name}', () => {
  it('renders correctly', () => {
    render(<${spec.name} />);
    expect(screen.getByRole('generic')).toBeInTheDocument();
  });
});
`;
  }

  private generateIndex(name: string): string {
    return `
export * from './${name}';
export * from './${name}.types';
`;
  }

  private generateVariantsConfig(spec: ComponentSpec): string {
    if (!spec.variants?.length) {
      return '{}';
    }

    const variants = spec.variants.map(variant => {
      const props = Object.entries(variant.props).map(([key, value]) => {
        return `      ${key}: ${JSON.stringify(value)}`;
      }).join(',\n');

      return `    ${variant.name}: {\n${props}\n    }`;
    }).join(',\n');

    return `{
  variants: {
${variants}
  },
  defaultVariants: {
    ${spec.variants[0].name}: 'default'
  }
}`;
  }

  private generateHook(hookSpec: HookSpec): string {
    return `
import { ${hookSpec.parameters.map(p => p.name).join(', ')} } from 'react';

export function ${hookSpec.name}(${this.generateHookParameters(hookSpec)}) {
  ${hookSpec.implementation}
}
`;
  }

  private generateHookTypes(hookSpec: HookSpec): string {
    const parameters = hookSpec.parameters.map(p => {
      const required = p.required ? '' : '?';
      return `  ${p.name}${required}: ${p.type};${p.description ? ` // ${p.description}` : ''}`;
    }).join('\n');

    return `
export interface ${hookSpec.name}Props {
${parameters}
}

export type ${hookSpec.name}Return = ${hookSpec.returnType};
`;
  }

  private generateHookTests(hookSpec: HookSpec): string {
    return `
import { renderHook } from '@testing-library/react';
import { ${hookSpec.name} } from './${hookSpec.name}';

describe('${hookSpec.name}', () => {
  it('works correctly', () => {
    const { result } = renderHook(() => ${hookSpec.name}());
    expect(result.current).toBeDefined();
  });
});
`;
  }

  private generateHookIndex(name: string): string {
    return `
export * from './${name}';
export * from './${name}.types';
`;
  }

  private generateHookParameters(hookSpec: HookSpec): string {
    return hookSpec.parameters.map(p => {
      const defaultValue = p.default ? ` = ${JSON.stringify(p.default)}` : '';
      return `${p.name}${defaultValue}`;
    }).join(', ');
  }
} 