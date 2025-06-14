import type { Meta, StoryObj } from '@storybook/react';
import { Bookmark } from './Bookmark';
import { BookmarkStyles } from './Bookmark.styles';

const meta: Meta<typeof Bookmark> = {
  title: 'Components/Bookmark',
  component: Bookmark,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Bookmark>;

export const Default: Story = {
  args: {
    ...BookmarkStyles,
  },
};
