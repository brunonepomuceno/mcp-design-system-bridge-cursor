import type { Meta, StoryObj } from '@storybook/react';
import { Corner_left_down } from './Corner_left_down';
import { Corner_left_downStyles } from './Corner_left_down.styles';

const meta: Meta<typeof Corner_left_down> = {
  title: 'Components/Corner_left_down',
  component: Corner_left_down,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Corner_left_down>;

export const Default: Story = {
  args: {
    ...Corner_left_downStyles,
  },
};
