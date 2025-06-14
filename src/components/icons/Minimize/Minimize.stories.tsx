import type { Meta, StoryObj } from '@storybook/react';
import { Minimize } from './Minimize';
import { MinimizeStyles } from './Minimize.styles';

const meta: Meta<typeof Minimize> = {
  title: 'Components/Minimize',
  component: Minimize,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Minimize>;

export const Default: Story = {
  args: {
    ...MinimizeStyles,
  },
};
