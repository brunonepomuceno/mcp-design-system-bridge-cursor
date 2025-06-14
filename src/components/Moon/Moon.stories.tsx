import type { Meta, StoryObj } from '@storybook/react';
import { Moon } from './Moon';
import { MoonStyles } from './Moon.styles';

const meta: Meta<typeof Moon> = {
  title: 'Components/Moon',
  component: Moon,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Moon>;

export const Default: Story = {
  args: {
    ...MoonStyles,
  },
};
