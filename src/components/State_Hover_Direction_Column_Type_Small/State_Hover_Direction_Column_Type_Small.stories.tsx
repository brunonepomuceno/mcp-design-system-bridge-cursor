import type { Meta, StoryObj } from '@storybook/react';
import { State_Hover_Direction_Column_Type_Small } from './State_Hover_Direction_Column_Type_Small';
import { State_Hover_Direction_Column_Type_SmallStyles } from './State_Hover_Direction_Column_Type_Small.styles';

const meta: Meta<typeof State_Hover_Direction_Column_Type_Small> = {
  title: 'Components/State_Hover_Direction_Column_Type_Small',
  component: State_Hover_Direction_Column_Type_Small,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof State_Hover_Direction_Column_Type_Small>;

export const Default: Story = {
  args: {
    ...State_Hover_Direction_Column_Type_SmallStyles,
  },
};
