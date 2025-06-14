import type { Meta, StoryObj } from '@storybook/react';
import { Command } from './Command';
import { CommandStyles } from './Command.styles';

const meta: Meta<typeof Command> = {
  title: 'Components/Command',
  component: Command,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Command>;

export const Default: Story = {
  args: {
    ...CommandStyles,
  },
};
