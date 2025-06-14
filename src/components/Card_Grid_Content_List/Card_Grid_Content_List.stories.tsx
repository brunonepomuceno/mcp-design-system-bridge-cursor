import type { Meta, StoryObj } from '@storybook/react';
import { Card_Grid_Content_List } from './Card_Grid_Content_List';
import { Card_Grid_Content_ListStyles } from './Card_Grid_Content_List.styles';

const meta: Meta<typeof Card_Grid_Content_List> = {
  title: 'Components/Card_Grid_Content_List',
  component: Card_Grid_Content_List,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card_Grid_Content_List>;

export const Default: Story = {
  args: {
    ...Card_Grid_Content_ListStyles,
  },
};
