import type { Meta, StoryObj } from '@storybook/react';
import { Arrow_down_left } from './Arrow_down_left';
import { Arrow_down_leftStyles } from './Arrow_down_left.styles';

const meta: Meta<typeof Arrow_down_left> = {
  title: 'Components/Arrow_down_left',
  component: Arrow_down_left,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Arrow_down_left>;

export const Default: Story = {
  args: {
    ...Arrow_down_leftStyles,
  },
};
