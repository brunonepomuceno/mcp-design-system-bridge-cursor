import type { Meta, StoryObj } from '@storybook/react';
import { Arrow_left_circle } from './Arrow_left_circle';
import { Arrow_left_circleStyles } from './Arrow_left_circle.styles';

const meta: Meta<typeof Arrow_left_circle> = {
  title: 'Components/Arrow_left_circle',
  component: Arrow_left_circle,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Arrow_left_circle>;

export const Default: Story = {
  args: {
    ...Arrow_left_circleStyles,
  },
};
