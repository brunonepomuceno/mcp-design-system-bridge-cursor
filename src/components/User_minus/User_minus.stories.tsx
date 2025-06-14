import type { Meta, StoryObj } from '@storybook/react';
import { User_minus } from './User_minus';
import { User_minusStyles } from './User_minus.styles';

const meta: Meta<typeof User_minus> = {
  title: 'Components/User_minus',
  component: User_minus,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof User_minus>;

export const Default: Story = {
  args: {
    ...User_minusStyles,
  },
};
