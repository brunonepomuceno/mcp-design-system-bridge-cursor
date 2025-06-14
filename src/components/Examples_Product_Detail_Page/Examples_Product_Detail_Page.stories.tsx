import type { Meta, StoryObj } from '@storybook/react';
import { Examples_Product_Detail_Page } from './Examples_Product_Detail_Page';
import { Examples_Product_Detail_PageStyles } from './Examples_Product_Detail_Page.styles';

const meta: Meta<typeof Examples_Product_Detail_Page> = {
  title: 'Components/Examples_Product_Detail_Page',
  component: Examples_Product_Detail_Page,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Examples_Product_Detail_Page>;

export const Default: Story = {
  args: {
    ...Examples_Product_Detail_PageStyles,
  },
};
