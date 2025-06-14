import type { Meta, StoryObj } from '@storybook/react';
import { Cloud_drizzle } from './Cloud_drizzle';
import { Cloud_drizzleStyles } from './Cloud_drizzle.styles';

const meta: Meta<typeof Cloud_drizzle> = {
  title: 'Components/Cloud_drizzle',
  component: Cloud_drizzle,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Cloud_drizzle>;

export const Default: Story = {
  args: {
    ...Cloud_drizzleStyles,
  },
};
