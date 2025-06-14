import type { Meta, StoryObj } from '@storybook/react';
import { Thermometer } from './Thermometer';
import { ThermometerStyles } from './Thermometer.styles';

const meta: Meta<typeof Thermometer> = {
  title: 'Components/Thermometer',
  component: Thermometer,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Thermometer>;

export const Default: Story = {
  args: {
    ...ThermometerStyles,
  },
};
