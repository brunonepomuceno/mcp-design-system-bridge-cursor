import type { Meta, StoryObj } from '@storybook/react';
import { Umbrella } from './Umbrella';
import { UmbrellaStyles } from './Umbrella.styles';

const meta: Meta<typeof Umbrella> = {
  title: 'Components/Umbrella',
  component: Umbrella,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Umbrella>;

export const Default: Story = {
  args: {
    ...UmbrellaStyles,
  },
};
