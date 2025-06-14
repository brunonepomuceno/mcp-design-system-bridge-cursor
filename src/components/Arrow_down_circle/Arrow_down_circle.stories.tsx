import type { Meta, StoryObj } from '@storybook/react';
import { Arrow_down_circle } from './Arrow_down_circle';
import { Arrow_down_circleStyles } from './Arrow_down_circle.styles';

const meta: Meta<typeof Arrow_down_circle> = {
  title: 'Components/Arrow_down_circle',
  component: Arrow_down_circle,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Arrow_down_circle>;

export const Default: Story = {
  args: {
    ...Arrow_down_circleStyles,
  },
};
