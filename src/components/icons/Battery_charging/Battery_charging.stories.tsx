import type { Meta, StoryObj } from '@storybook/react';
import { Battery_charging } from './Battery_charging';
import { Battery_chargingStyles } from './Battery_charging.styles';

const meta: Meta<typeof Battery_charging> = {
  title: 'Components/Battery_charging',
  component: Battery_charging,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Battery_charging>;

export const Default: Story = {
  args: {
    ...Battery_chargingStyles,
  },
};
