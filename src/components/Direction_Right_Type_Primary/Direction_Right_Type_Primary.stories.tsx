import type { Meta, StoryObj } from '@storybook/react';
import { Direction_Right_Type_Primary } from './Direction_Right_Type_Primary';
import { Direction_Right_Type_PrimaryStyles } from './Direction_Right_Type_Primary.styles';

const meta: Meta<typeof Direction_Right_Type_Primary> = {
  title: 'Components/Direction_Right_Type_Primary',
  component: Direction_Right_Type_Primary,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Direction_Right_Type_Primary>;

export const Default: Story = {
  args: {
    ...Direction_Right_Type_PrimaryStyles,
  },
};
