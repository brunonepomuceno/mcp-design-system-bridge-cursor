import type { Meta, StoryObj } from '@storybook/react';
import { User_check } from './User_check';
import { User_checkStyles } from './User_check.styles';

const meta: Meta<typeof User_check> = {
  title: 'Components/User_check',
  component: User_check,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof User_check>;

export const Default: Story = {
  args: {
    ...User_checkStyles,
  },
};
