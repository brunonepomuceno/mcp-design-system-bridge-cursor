import type { Meta, StoryObj } from '@storybook/react';
import { Navigation_Button_List } from './Navigation_Button_List';
import { Navigation_Button_ListStyles } from './Navigation_Button_List.styles';

const meta: Meta<typeof Navigation_Button_List> = {
  title: 'Components/Navigation_Button_List',
  component: Navigation_Button_List,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Navigation_Button_List>;

export const Default: Story = {
  args: {
    ...Navigation_Button_ListStyles,
  },
};
