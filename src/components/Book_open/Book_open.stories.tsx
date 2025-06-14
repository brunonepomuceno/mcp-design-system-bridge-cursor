import type { Meta, StoryObj } from '@storybook/react';
import { Book_open } from './Book_open';
import { Book_openStyles } from './Book_open.styles';

const meta: Meta<typeof Book_open> = {
  title: 'Components/Book_open',
  component: Book_open,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Book_open>;

export const Default: Story = {
  args: {
    ...Book_openStyles,
  },
};
