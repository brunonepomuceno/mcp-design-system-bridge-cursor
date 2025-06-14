import type { Meta, StoryObj } from '@storybook/react';
import { Text_List_Item } from './Text_List_Item';
import { Text_List_ItemStyles } from './Text_List_Item.styles';

const meta: Meta<typeof Text_List_Item> = {
  title: 'Components/Text_List_Item',
  component: Text_List_Item,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Text_List_Item>;

export const Default: Story = {
  args: {
    ...Text_List_ItemStyles,
  },
};
