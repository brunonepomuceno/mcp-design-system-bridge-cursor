import type { Meta, StoryObj } from '@storybook/react';
import { Direction_Bottom_Type_Secondary } from './Direction_Bottom_Type_Secondary';
import { Direction_Bottom_Type_SecondaryStyles } from './Direction_Bottom_Type_Secondary.styles';

const meta: Meta<typeof Direction_Bottom_Type_Secondary> = {
  title: 'Components/Direction_Bottom_Type_Secondary',
  component: Direction_Bottom_Type_Secondary,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Direction_Bottom_Type_Secondary>;

export const Default: Story = {
  args: {
    ...Direction_Bottom_Type_SecondaryStyles,
  },
};
