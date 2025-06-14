import type { Meta, StoryObj } from '@storybook/react';
import { List } from './List';
import { ListStyles } from './List.styles';

const meta: Meta<typeof List> = {
  title: 'Components/List',
  component: List,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof List>;

export const Default: Story = {
  args: {
    ...ListStyles,
  },
};
