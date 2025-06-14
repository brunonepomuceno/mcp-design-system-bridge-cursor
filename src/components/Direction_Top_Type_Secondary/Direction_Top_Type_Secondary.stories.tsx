import type { Meta, StoryObj } from '@storybook/react';
import { Direction_Top_Type_Secondary } from './Direction_Top_Type_Secondary';
import { Direction_Top_Type_SecondaryStyles } from './Direction_Top_Type_Secondary.styles';

const meta: Meta<typeof Direction_Top_Type_Secondary> = {
  title: 'Components/Direction_Top_Type_Secondary',
  component: Direction_Top_Type_Secondary,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Direction_Top_Type_Secondary>;

export const Default: Story = {
  args: {
    ...Direction_Top_Type_SecondaryStyles,
  },
};
