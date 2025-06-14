import type { Meta, StoryObj } from '@storybook/react';
import { Direction_Bottom_Type_Group } from './Direction_Bottom_Type_Group';
import { Direction_Bottom_Type_GroupStyles } from './Direction_Bottom_Type_Group.styles';

const meta: Meta<typeof Direction_Bottom_Type_Group> = {
  title: 'Components/Direction_Bottom_Type_Group',
  component: Direction_Bottom_Type_Group,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Direction_Bottom_Type_Group>;

export const Default: Story = {
  args: {
    ...Direction_Bottom_Type_GroupStyles,
  },
};
