import type { Meta, StoryObj } from '@storybook/react';
import { Text_List } from './Text_List';
import { Text_ListStyles } from './Text_List.styles';

const meta: Meta<typeof Text_List> = {
  title: 'Components/Text_List',
  component: Text_List,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Text_List>;

export const Default: Story = {
  args: {
    ...Text_ListStyles,
  },
};
