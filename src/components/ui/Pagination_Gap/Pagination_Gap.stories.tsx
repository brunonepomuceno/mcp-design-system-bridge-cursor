import type { Meta, StoryObj } from '@storybook/react';
import { Pagination_Gap } from './Pagination_Gap';
import { Pagination_GapStyles } from './Pagination_Gap.styles';

const meta: Meta<typeof Pagination_Gap> = {
  title: 'Components/Pagination_Gap',
  component: Pagination_Gap,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Pagination_Gap>;

export const Default: Story = {
  args: {
    ...Pagination_GapStyles,
  },
};
