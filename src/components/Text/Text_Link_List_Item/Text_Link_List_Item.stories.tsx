import type { Meta, StoryObj } from '@storybook/react';
import { Text_Link_List_Item } from './Text_Link_List_Item';
import { Text_Link_List_ItemStyles } from './Text_Link_List_Item.styles';

const meta: Meta<typeof Text_Link_List_Item> = {
  title: 'Components/Text_Link_List_Item',
  component: Text_Link_List_Item,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Text_Link_List_Item>;

export const Default: Story = {
  args: {
    ...Text_Link_List_ItemStyles,
  },
};
