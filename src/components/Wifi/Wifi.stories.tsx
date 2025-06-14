import type { Meta, StoryObj } from '@storybook/react';
import { Wifi } from './Wifi';
import { WifiStyles } from './Wifi.styles';

const meta: Meta<typeof Wifi> = {
  title: 'Components/Wifi',
  component: Wifi,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Wifi>;

export const Default: Story = {
  args: {
    ...WifiStyles,
  },
};
