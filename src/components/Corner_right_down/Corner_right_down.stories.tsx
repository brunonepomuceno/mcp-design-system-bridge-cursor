import type { Meta, StoryObj } from '@storybook/react';
import { Corner_right_down } from './Corner_right_down';
import { Corner_right_downStyles } from './Corner_right_down.styles';

const meta: Meta<typeof Corner_right_down> = {
  title: 'Components/Corner_right_down',
  component: Corner_right_down,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Corner_right_down>;

export const Default: Story = {
  args: {
    ...Corner_right_downStyles,
  },
};
