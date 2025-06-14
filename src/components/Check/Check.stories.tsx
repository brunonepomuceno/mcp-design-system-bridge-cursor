import type { Meta, StoryObj } from '@storybook/react';
import { Check } from './Check';
import { CheckStyles } from './Check.styles';

const meta: Meta<typeof Check> = {
  title: 'Components/Check',
  component: Check,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Check>;

export const Default: Story = {
  args: {
    ...CheckStyles,
  },
};
