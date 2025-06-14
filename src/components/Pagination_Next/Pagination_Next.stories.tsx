import type { Meta, StoryObj } from '@storybook/react';
import { Pagination_Next } from './Pagination_Next';
import { Pagination_NextStyles } from './Pagination_Next.styles';

const meta: Meta<typeof Pagination_Next> = {
  title: 'Components/Pagination_Next',
  component: Pagination_Next,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Pagination_Next>;

export const Default: Story = {
  args: {
    ...Pagination_NextStyles,
  },
};
