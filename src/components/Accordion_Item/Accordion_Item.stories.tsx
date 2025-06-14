import type { Meta, StoryObj } from '@storybook/react';
import { Accordion_Item } from './Accordion_Item';
import { Accordion_ItemStyles } from './Accordion_Item.styles';

const meta: Meta<typeof Accordion_Item> = {
  title: 'Components/Accordion_Item',
  component: Accordion_Item,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Accordion_Item>;

export const Default: Story = {
  args: {
    ...Accordion_ItemStyles,
  },
};
