import type { Meta, StoryObj } from '@storybook/react';
import { Wind } from './Wind';
import { WindStyles } from './Wind.styles';

const meta: Meta<typeof Wind> = {
  title: 'Components/Wind',
  component: Wind,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Wind>;

export const Default: Story = {
  args: {
    ...WindStyles,
  },
};
