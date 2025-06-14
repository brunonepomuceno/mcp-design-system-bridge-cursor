import type { Meta, StoryObj } from '@storybook/react';
import { Heart } from './Heart';
import { HeartStyles } from './Heart.styles';

const meta: Meta<typeof Heart> = {
  title: 'Components/Heart',
  component: Heart,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Heart>;

export const Default: Story = {
  args: {
    ...HeartStyles,
  },
};
