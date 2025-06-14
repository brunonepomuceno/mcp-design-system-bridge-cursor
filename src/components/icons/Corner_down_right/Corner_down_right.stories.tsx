import type { Meta, StoryObj } from '@storybook/react';
import { Corner_down_right } from './Corner_down_right';
import { Corner_down_rightStyles } from './Corner_down_right.styles';

const meta: Meta<typeof Corner_down_right> = {
  title: 'Components/Corner_down_right',
  component: Corner_down_right,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Corner_down_right>;

export const Default: Story = {
  args: {
    ...Corner_down_rightStyles,
  },
};
