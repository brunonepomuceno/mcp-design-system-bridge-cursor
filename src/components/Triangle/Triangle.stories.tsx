import type { Meta, StoryObj } from '@storybook/react';
import { Triangle } from './Triangle';
import { TriangleStyles } from './Triangle.styles';

const meta: Meta<typeof Triangle> = {
  title: 'Components/Triangle',
  component: Triangle,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Triangle>;

export const Default: Story = {
  args: {
    ...TriangleStyles,
  },
};
