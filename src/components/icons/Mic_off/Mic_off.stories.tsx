import type { Meta, StoryObj } from '@storybook/react';
import { Mic_off } from './Mic_off';
import { Mic_offStyles } from './Mic_off.styles';

const meta: Meta<typeof Mic_off> = {
  title: 'Components/Mic_off',
  component: Mic_off,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Mic_off>;

export const Default: Story = {
  args: {
    ...Mic_offStyles,
  },
};
