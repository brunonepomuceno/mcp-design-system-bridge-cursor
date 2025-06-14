import type { Meta, StoryObj } from '@storybook/react';
import { Rss } from './Rss';
import { RssStyles } from './Rss.styles';

const meta: Meta<typeof Rss> = {
  title: 'Components/Rss',
  component: Rss,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Rss>;

export const Default: Story = {
  args: {
    ...RssStyles,
  },
};
