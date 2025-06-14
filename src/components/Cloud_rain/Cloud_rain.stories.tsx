import type { Meta, StoryObj } from '@storybook/react';
import { Cloud_rain } from './Cloud_rain';
import { Cloud_rainStyles } from './Cloud_rain.styles';

const meta: Meta<typeof Cloud_rain> = {
  title: 'Components/Cloud_rain',
  component: Cloud_rain,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Cloud_rain>;

export const Default: Story = {
  args: {
    ...Cloud_rainStyles,
  },
};
