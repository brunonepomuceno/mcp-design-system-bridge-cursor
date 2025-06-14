import type { Meta, StoryObj } from '@storybook/react';
import { Arrow_right_circle } from './Arrow_right_circle';
import { Arrow_right_circleStyles } from './Arrow_right_circle.styles';

const meta: Meta<typeof Arrow_right_circle> = {
  title: 'Components/Arrow_right_circle',
  component: Arrow_right_circle,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Arrow_right_circle>;

export const Default: Story = {
  args: {
    ...Arrow_right_circleStyles,
  },
};
