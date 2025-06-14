import type { Meta, StoryObj } from '@storybook/react';
import { Arrow_up_left } from './Arrow_up_left';
import { Arrow_up_leftStyles } from './Arrow_up_left.styles';

const meta: Meta<typeof Arrow_up_left> = {
  title: 'Components/Arrow_up_left',
  component: Arrow_up_left,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Arrow_up_left>;

export const Default: Story = {
  args: {
    ...Arrow_up_leftStyles,
  },
};
