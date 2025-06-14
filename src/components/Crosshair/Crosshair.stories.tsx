import type { Meta, StoryObj } from '@storybook/react';
import { Crosshair } from './Crosshair';
import { CrosshairStyles } from './Crosshair.styles';

const meta: Meta<typeof Crosshair> = {
  title: 'Components/Crosshair',
  component: Crosshair,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Crosshair>;

export const Default: Story = {
  args: {
    ...CrosshairStyles,
  },
};
