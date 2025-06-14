import type { Meta, StoryObj } from '@storybook/react';
import { Navigation_Pill_List } from './Navigation_Pill_List';
import { Navigation_Pill_ListStyles } from './Navigation_Pill_List.styles';

const meta: Meta<typeof Navigation_Pill_List> = {
  title: 'Components/Navigation_Pill_List',
  component: Navigation_Pill_List,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Navigation_Pill_List>;

export const Default: Story = {
  args: {
    ...Navigation_Pill_ListStyles,
  },
};
