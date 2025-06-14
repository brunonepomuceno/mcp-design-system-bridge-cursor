import type { Meta, StoryObj } from '@storybook/react';
import { Arrow_up_circle } from './Arrow_up_circle';
import { Arrow_up_circleStyles } from './Arrow_up_circle.styles';

const meta: Meta<typeof Arrow_up_circle> = {
  title: 'Components/Arrow_up_circle',
  component: Arrow_up_circle,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Arrow_up_circle>;

export const Default: Story = {
  args: {
    ...Arrow_up_circleStyles,
  },
};
