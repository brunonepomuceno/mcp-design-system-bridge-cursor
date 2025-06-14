import type { Meta, StoryObj } from '@storybook/react';
import { Unlock } from './Unlock';
import { UnlockStyles } from './Unlock.styles';

const meta: Meta<typeof Unlock> = {
  title: 'Components/Unlock',
  component: Unlock,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Unlock>;

export const Default: Story = {
  args: {
    ...UnlockStyles,
  },
};
