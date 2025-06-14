import type { Meta, StoryObj } from '@storybook/react';
import { User_x } from './User_x';
import { User_xStyles } from './User_x.styles';

const meta: Meta<typeof User_x> = {
  title: 'Components/User_x',
  component: User_x,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof User_x>;

export const Default: Story = {
  args: {
    ...User_xStyles,
  },
};
