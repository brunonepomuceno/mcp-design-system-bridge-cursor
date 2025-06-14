import type { Meta, StoryObj } from '@storybook/react';
import { Direction_Column } from './Direction_Column';
import { Direction_ColumnStyles } from './Direction_Column.styles';

const meta: Meta<typeof Direction_Column> = {
  title: 'Components/Direction_Column',
  component: Direction_Column,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Direction_Column>;

export const Default: Story = {
  args: {
    ...Direction_ColumnStyles,
  },
};
