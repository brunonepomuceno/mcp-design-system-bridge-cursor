import type { Meta, StoryObj } from '@storybook/react';
import { Play_circle } from './Play_circle';
import { Play_circleStyles } from './Play_circle.styles';

const meta: Meta<typeof Play_circle> = {
  title: 'Components/Play_circle',
  component: Play_circle,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Play_circle>;

export const Default: Story = {
  args: {
    ...Play_circleStyles,
  },
};
