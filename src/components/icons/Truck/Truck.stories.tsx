import type { Meta, StoryObj } from '@storybook/react';
import { Truck } from './Truck';
import { TruckStyles } from './Truck.styles';

const meta: Meta<typeof Truck> = {
  title: 'Components/Truck',
  component: Truck,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Truck>;

export const Default: Story = {
  args: {
    ...TruckStyles,
  },
};
