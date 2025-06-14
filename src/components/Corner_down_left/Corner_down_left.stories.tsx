import type { Meta, StoryObj } from '@storybook/react';
import { Corner_down_left } from './Corner_down_left';
import { Corner_down_leftStyles } from './Corner_down_left.styles';

const meta: Meta<typeof Corner_down_left> = {
  title: 'Components/Corner_down_left',
  component: Corner_down_left,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Corner_down_left>;

export const Default: Story = {
  args: {
    ...Corner_down_leftStyles,
  },
};
