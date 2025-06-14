import type { Meta, StoryObj } from '@storybook/react';
import { Text_Link_List } from './Text_Link_List';
import { Text_Link_ListStyles } from './Text_Link_List.styles';

const meta: Meta<typeof Text_Link_List> = {
  title: 'Components/Text_Link_List',
  component: Text_Link_List,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Text_Link_List>;

export const Default: Story = {
  args: {
    ...Text_Link_ListStyles,
  },
};
