import type { Meta, StoryObj } from '@storybook/react';
import { Direction_Row } from './Direction_Row';
import { Direction_RowStyles } from './Direction_Row.styles';

const meta: Meta<typeof Direction_Row> = {
  title: 'Components/Direction_Row',
  component: Direction_Row,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Direction_Row>;

export const Default: Story = {
  args: {
    ...Direction_RowStyles,
  },
};
