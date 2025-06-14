import type { Meta, StoryObj } from '@storybook/react';
import { Arrow_left } from './Arrow_left';
import { Arrow_leftStyles } from './Arrow_left.styles';

const meta: Meta<typeof Arrow_left> = {
  title: 'Components/Arrow_left',
  component: Arrow_left,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Arrow_left>;

export const Default: Story = {
  args: {
    ...Arrow_leftStyles,
  },
};
