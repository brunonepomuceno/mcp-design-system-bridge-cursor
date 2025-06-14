import type { Meta, StoryObj } from '@storybook/react';
import { Direction_Left_Type_Secondary } from './Direction_Left_Type_Secondary';
import { Direction_Left_Type_SecondaryStyles } from './Direction_Left_Type_Secondary.styles';

const meta: Meta<typeof Direction_Left_Type_Secondary> = {
  title: 'Components/Direction_Left_Type_Secondary',
  component: Direction_Left_Type_Secondary,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Direction_Left_Type_Secondary>;

export const Default: Story = {
  args: {
    ...Direction_Left_Type_SecondaryStyles,
  },
};
