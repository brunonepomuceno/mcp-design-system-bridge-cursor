import type { Meta, StoryObj } from '@storybook/react';
import { Lock } from './Lock';
import { LockStyles } from './Lock.styles';

const meta: Meta<typeof Lock> = {
  title: 'Components/Lock',
  component: Lock,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Lock>;

export const Default: Story = {
  args: {
    ...LockStyles,
  },
};
