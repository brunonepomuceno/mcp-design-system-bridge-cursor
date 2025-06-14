import type { Meta, StoryObj } from '@storybook/react';
import { Pagination_List } from './Pagination_List';
import { Pagination_ListStyles } from './Pagination_List.styles';

const meta: Meta<typeof Pagination_List> = {
  title: 'Components/Pagination_List',
  component: Pagination_List,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Pagination_List>;

export const Default: Story = {
  args: {
    ...Pagination_ListStyles,
  },
};
