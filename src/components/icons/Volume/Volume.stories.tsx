import type { Meta, StoryObj } from '@storybook/react';
import { Volume } from './Volume';
import { VolumeStyles } from './Volume.styles';

const meta: Meta<typeof Volume> = {
  title: 'Components/Volume',
  component: Volume,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Volume>;

export const Default: Story = {
  args: {
    ...VolumeStyles,
  },
};
