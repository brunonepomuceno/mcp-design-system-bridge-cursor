import type { Meta, StoryObj } from '@storybook/react';
import { Corner_left_up } from './Corner_left_up';
import { Corner_left_upStyles } from './Corner_left_up.styles';

const meta: Meta<typeof Corner_left_up> = {
  title: 'Components/Corner_left_up',
  component: Corner_left_up,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Corner_left_up>;

export const Default: Story = {
  args: {
    ...Corner_left_upStyles,
  },
};
