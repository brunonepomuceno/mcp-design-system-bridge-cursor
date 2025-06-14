import type { Meta, StoryObj } from '@storybook/react';
import { Cloud } from './Cloud';
import { CloudStyles } from './Cloud.styles';

const meta: Meta<typeof Cloud> = {
  title: 'Components/Cloud',
  component: Cloud,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Cloud>;

export const Default: Story = {
  args: {
    ...CloudStyles,
  },
};
