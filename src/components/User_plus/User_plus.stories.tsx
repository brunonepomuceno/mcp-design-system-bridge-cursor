import type { Meta, StoryObj } from '@storybook/react';
import { User_plus } from './User_plus';
import { User_plusStyles } from './User_plus.styles';

const meta: Meta<typeof User_plus> = {
  title: 'Components/User_plus',
  component: User_plus,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof User_plus>;

export const Default: Story = {
  args: {
    ...User_plusStyles,
  },
};
