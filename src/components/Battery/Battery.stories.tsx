import type { Meta, StoryObj } from '@storybook/react';
import { Battery } from './Battery';
import { BatteryStyles } from './Battery.styles';

const meta: Meta<typeof Battery> = {
  title: 'Components/Battery',
  component: Battery,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Battery>;

export const Default: Story = {
  args: {
    ...BatteryStyles,
  },
};
