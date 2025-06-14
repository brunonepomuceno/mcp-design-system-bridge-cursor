import type { Meta, StoryObj } from '@storybook/react';
import { Pagination_Previous } from './Pagination_Previous';
import { Pagination_PreviousStyles } from './Pagination_Previous.styles';

const meta: Meta<typeof Pagination_Previous> = {
  title: 'Components/Pagination_Previous',
  component: Pagination_Previous,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Pagination_Previous>;

export const Default: Story = {
  args: {
    ...Pagination_PreviousStyles,
  },
};
