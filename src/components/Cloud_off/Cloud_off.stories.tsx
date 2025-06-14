import type { Meta, StoryObj } from '@storybook/react';
import { Cloud_off } from './Cloud_off';
import { Cloud_offStyles } from './Cloud_off.styles';

const meta: Meta<typeof Cloud_off> = {
  title: 'Components/Cloud_off',
  component: Cloud_off,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Cloud_off>;

export const Default: Story = {
  args: {
    ...Cloud_offStyles,
  },
};
