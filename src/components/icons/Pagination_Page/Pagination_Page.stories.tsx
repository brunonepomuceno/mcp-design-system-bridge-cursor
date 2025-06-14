import type { Meta, StoryObj } from '@storybook/react';
import { Pagination_Page } from './Pagination_Page';
import { Pagination_PageStyles } from './Pagination_Page.styles';

const meta: Meta<typeof Pagination_Page> = {
  title: 'Components/Pagination_Page',
  component: Pagination_Page,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Pagination_Page>;

export const Default: Story = {
  args: {
    ...Pagination_PageStyles,
  },
};
