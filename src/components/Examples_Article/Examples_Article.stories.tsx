import type { Meta, StoryObj } from '@storybook/react';
import { Examples_Article } from './Examples_Article';
import { Examples_ArticleStyles } from './Examples_Article.styles';

const meta: Meta<typeof Examples_Article> = {
  title: 'Components/Examples_Article',
  component: Examples_Article,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Examples_Article>;

export const Default: Story = {
  args: {
    ...Examples_ArticleStyles,
  },
};
