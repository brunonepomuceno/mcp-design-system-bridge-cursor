import type { Meta, StoryObj } from '@storybook/react';
import { Corner_up_left } from './Corner_up_left';
import { Corner_up_leftStyles } from './Corner_up_left.styles';

const meta: Meta<typeof Corner_up_left> = {
  title: 'Components/Corner_up_left',
  component: Corner_up_left,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Corner_up_left>;

export const Default: Story = {
  args: {
    ...Corner_up_leftStyles,
  },
};
