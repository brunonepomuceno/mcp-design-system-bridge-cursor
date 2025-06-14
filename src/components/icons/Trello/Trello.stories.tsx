import type { Meta, StoryObj } from '@storybook/react';
import { Trello } from './Trello';
import { TrelloStyles } from './Trello.styles';

const meta: Meta<typeof Trello> = {
  title: 'Components/Trello',
  component: Trello,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Trello>;

export const Default: Story = {
  args: {
    ...TrelloStyles,
  },
};
