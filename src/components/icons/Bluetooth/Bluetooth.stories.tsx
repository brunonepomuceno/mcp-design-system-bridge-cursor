import type { Meta, StoryObj } from '@storybook/react';
import { Bluetooth } from './Bluetooth';
import { BluetoothStyles } from './Bluetooth.styles';

const meta: Meta<typeof Bluetooth> = {
  title: 'Components/Bluetooth',
  component: Bluetooth,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Bluetooth>;

export const Default: Story = {
  args: {
    ...BluetoothStyles,
  },
};
