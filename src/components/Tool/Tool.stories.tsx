import type { Meta, StoryObj } from '@storybook/react';
import { Tool } from './Tool';
import { ToolStyles } from './Tool.styles';

const meta: Meta<typeof Tool> = {
  title: 'Components/Tool',
  component: Tool,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tool>;

export const Default: Story = {
  args: {
    ...ToolStyles,
  },
};
