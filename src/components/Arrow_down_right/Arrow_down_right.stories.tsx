import type { Meta, StoryObj } from '@storybook/react';
import { Arrow_down_right } from './Arrow_down_right';
import { Arrow_down_rightStyles } from './Arrow_down_right.styles';

const meta: Meta<typeof Arrow_down_right> = {
  title: 'Components/Arrow_down_right',
  component: Arrow_down_right,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Arrow_down_right>;

export const Default: Story = {
  args: {
    ...Arrow_down_rightStyles,
  },
};
