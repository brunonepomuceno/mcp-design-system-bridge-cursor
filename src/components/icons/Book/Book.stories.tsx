import type { Meta, StoryObj } from '@storybook/react';
import { Book } from './Book';
import { BookStyles } from './Book.styles';

const meta: Meta<typeof Book> = {
  title: 'Components/Book',
  component: Book,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Book>;

export const Default: Story = {
  args: {
    ...BookStyles,
  },
};
