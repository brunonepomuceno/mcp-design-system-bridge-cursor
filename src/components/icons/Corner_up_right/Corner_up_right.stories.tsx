import type { Meta, StoryObj } from '@storybook/react';
import { Corner_up_right } from './Corner_up_right';
import { Corner_up_rightStyles } from './Corner_up_right.styles';

const meta: Meta<typeof Corner_up_right> = {
  title: 'Components/Corner_up_right',
  component: Corner_up_right,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Corner_up_right>;

export const Default: Story = {
  args: {
    ...Corner_up_rightStyles,
  },
};
