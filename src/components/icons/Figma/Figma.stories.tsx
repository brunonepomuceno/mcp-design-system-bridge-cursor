import type { Meta, StoryObj } from '@storybook/react';
import { Figma } from './Figma';
import { FigmaStyles } from './Figma.styles';

const meta: Meta<typeof Figma> = {
  title: 'Components/Figma',
  component: Figma,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Figma>;

export const Default: Story = {
  args: {
    ...FigmaStyles,
  },
};
