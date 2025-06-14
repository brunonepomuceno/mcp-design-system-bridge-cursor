import type { Meta, StoryObj } from '@storybook/react';
import { Card_Grid_Reviews } from './Card_Grid_Reviews';
import { Card_Grid_ReviewsStyles } from './Card_Grid_Reviews.styles';

const meta: Meta<typeof Card_Grid_Reviews> = {
  title: 'Components/Card_Grid_Reviews',
  component: Card_Grid_Reviews,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card_Grid_Reviews>;

export const Default: Story = {
  args: {
    ...Card_Grid_ReviewsStyles,
  },
};
