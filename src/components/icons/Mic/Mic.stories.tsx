import type { Meta, StoryObj } from '@storybook/react';
import { Mic } from './Mic';
import { MicStyles } from './Mic.styles';

const meta: Meta<typeof Mic> = {
  title: 'Components/Mic',
  component: Mic,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Mic>;

export const Default: Story = {
  args: {
    ...MicStyles,
  },
};
