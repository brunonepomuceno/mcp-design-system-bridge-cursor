import type { Meta, StoryObj } from '@storybook/react';
import { Bell_off } from './Bell_off';
import { Bell_offStyles } from './Bell_off.styles';

const meta: Meta<typeof Bell_off> = {
  title: 'Components/Bell_off',
  component: Bell_off,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Bell_off>;

export const Default: Story = {
  args: {
    ...Bell_offStyles,
  },
};
