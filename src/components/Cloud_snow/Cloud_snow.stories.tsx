import type { Meta, StoryObj } from '@storybook/react';
import { Cloud_snow } from './Cloud_snow';
import { Cloud_snowStyles } from './Cloud_snow.styles';

const meta: Meta<typeof Cloud_snow> = {
  title: 'Components/Cloud_snow',
  component: Cloud_snow,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Cloud_snow>;

export const Default: Story = {
  args: {
    ...Cloud_snowStyles,
  },
};
