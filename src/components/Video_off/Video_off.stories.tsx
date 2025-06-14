import type { Meta, StoryObj } from '@storybook/react';
import { Video_off } from './Video_off';
import { Video_offStyles } from './Video_off.styles';

const meta: Meta<typeof Video_off> = {
  title: 'Components/Video_off',
  component: Video_off,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Video_off>;

export const Default: Story = {
  args: {
    ...Video_offStyles,
  },
};
