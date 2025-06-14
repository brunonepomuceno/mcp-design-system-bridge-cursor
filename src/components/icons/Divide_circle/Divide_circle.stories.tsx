import type { Meta, StoryObj } from '@storybook/react';
import { Divide_circle } from './Divide_circle';
import { Divide_circleStyles } from './Divide_circle.styles';

const meta: Meta<typeof Divide_circle> = {
  title: 'Components/Divide_circle',
  component: Divide_circle,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Divide_circle>;

export const Default: Story = {
  args: {
    ...Divide_circleStyles,
  },
};
