import type { Meta, StoryObj } from '@storybook/react';
import { Arrow_right } from './Arrow_right';
import { Arrow_rightStyles } from './Arrow_right.styles';

const meta: Meta<typeof Arrow_right> = {
  title: 'Components/Arrow_right',
  component: Arrow_right,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Arrow_right>;

export const Default: Story = {
  args: {
    ...Arrow_rightStyles,
  },
};
