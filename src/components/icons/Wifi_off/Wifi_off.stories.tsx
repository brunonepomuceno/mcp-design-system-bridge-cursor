import type { Meta, StoryObj } from '@storybook/react';
import { Wifi_off } from './Wifi_off';
import { Wifi_offStyles } from './Wifi_off.styles';

const meta: Meta<typeof Wifi_off> = {
  title: 'Components/Wifi_off',
  component: Wifi_off,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Wifi_off>;

export const Default: Story = {
  args: {
    ...Wifi_offStyles,
  },
};
