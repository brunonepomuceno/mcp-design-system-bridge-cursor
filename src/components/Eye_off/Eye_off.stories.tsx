import type { Meta, StoryObj } from '@storybook/react';
import { Eye_off } from './Eye_off';
import { Eye_offStyles } from './Eye_off.styles';

const meta: Meta<typeof Eye_off> = {
  title: 'Components/Eye_off',
  component: Eye_off,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Eye_off>;

export const Default: Story = {
  args: {
    ...Eye_offStyles,
  },
};
