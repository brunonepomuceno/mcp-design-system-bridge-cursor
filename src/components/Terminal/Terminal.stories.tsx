import type { Meta, StoryObj } from '@storybook/react';
import { Terminal } from './Terminal';
import { TerminalStyles } from './Terminal.styles';

const meta: Meta<typeof Terminal> = {
  title: 'Components/Terminal',
  component: Terminal,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Terminal>;

export const Default: Story = {
  args: {
    ...TerminalStyles,
  },
};
