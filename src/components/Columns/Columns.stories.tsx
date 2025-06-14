import type { Meta, StoryObj } from '@storybook/react';
import { Columns } from './Columns';
import { ColumnsStyles } from './Columns.styles';

const meta: Meta<typeof Columns> = {
  title: 'Components/Columns',
  component: Columns,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Columns>;

export const Default: Story = {
  args: {
    ...ColumnsStyles,
  },
};
