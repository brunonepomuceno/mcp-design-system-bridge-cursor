import type { Meta, StoryObj } from '@storybook/react';
import { Camera_off } from './Camera_off';
import { Camera_offStyles } from './Camera_off.styles';

const meta: Meta<typeof Camera_off> = {
  title: 'Components/Camera_off',
  component: Camera_off,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Camera_off>;

export const Default: Story = {
  args: {
    ...Camera_offStyles,
  },
};
