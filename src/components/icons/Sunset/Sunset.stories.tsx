import type { Meta, StoryObj } from '@storybook/react';
import { Sunset } from './Sunset';
import { SunsetStyles } from './Sunset.styles';

const meta: Meta<typeof Sunset> = {
  title: 'Components/Sunset',
  component: Sunset,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Sunset>;

export const Default: Story = {
  args: {
    ...SunsetStyles,
  },
};
