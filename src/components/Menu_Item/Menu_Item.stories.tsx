import type { Meta, StoryObj } from '@storybook/react';
import { Menu_Item } from './Menu_Item';
import { Menu_ItemStyles } from './Menu_Item.styles';

const meta: Meta<typeof Menu_Item> = {
  title: 'Components/Menu_Item',
  component: Menu_Item,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Menu_Item>;

export const Default: Story = {
  args: {
    ...Menu_ItemStyles,
  },
};
