import type { Meta, StoryObj } from '@storybook/react';
import { Corner_right_up } from './Corner_right_up';
import { Corner_right_upStyles } from './Corner_right_up.styles';

const meta: Meta<typeof Corner_right_up> = {
  title: 'Components/Corner_right_up',
  component: Corner_right_up,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Corner_right_up>;

export const Default: Story = {
  args: {
    ...Corner_right_upStyles,
  },
};
