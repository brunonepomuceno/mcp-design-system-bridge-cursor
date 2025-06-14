import type { Meta, StoryObj } from '@storybook/react';
import { Arrow_up_right } from './Arrow_up_right';
import { Arrow_up_rightStyles } from './Arrow_up_right.styles';

const meta: Meta<typeof Arrow_up_right> = {
  title: 'Components/Arrow_up_right',
  component: Arrow_up_right,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Arrow_up_right>;

export const Default: Story = {
  args: {
    ...Arrow_up_rightStyles,
  },
};
