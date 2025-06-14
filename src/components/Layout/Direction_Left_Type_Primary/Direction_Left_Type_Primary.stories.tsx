import type { Meta, StoryObj } from '@storybook/react';
import { Direction_Left_Type_Primary } from './Direction_Left_Type_Primary';
import { Direction_Left_Type_PrimaryStyles } from './Direction_Left_Type_Primary.styles';

const meta: Meta<typeof Direction_Left_Type_Primary> = {
  title: 'Components/Direction_Left_Type_Primary',
  component: Direction_Left_Type_Primary,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Direction_Left_Type_Primary>;

export const Default: Story = {
  args: {
    ...Direction_Left_Type_PrimaryStyles,
  },
};
