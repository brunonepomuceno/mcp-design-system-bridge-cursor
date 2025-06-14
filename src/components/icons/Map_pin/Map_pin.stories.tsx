import type { Meta, StoryObj } from '@storybook/react';
import { Map_pin } from './Map_pin';
import { Map_pinStyles } from './Map_pin.styles';

const meta: Meta<typeof Map_pin> = {
  title: 'Components/Map_pin',
  component: Map_pin,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Map_pin>;

export const Default: Story = {
  args: {
    ...Map_pinStyles,
  },
};
