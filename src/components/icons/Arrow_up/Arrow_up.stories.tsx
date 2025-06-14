import type { Meta, StoryObj } from '@storybook/react';
import { Arrow_up } from './Arrow_up';
import { Arrow_upStyles } from './Arrow_up.styles';

const meta: Meta<typeof Arrow_up> = {
  title: 'Components/Arrow_up',
  component: Arrow_up,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Arrow_up>;

export const Default: Story = {
  args: {
    ...Arrow_upStyles,
  },
};
