import type { Meta, StoryObj } from '@storybook/react';
import { Variant_Primary_State_Hover_Size_Small } from './Variant_Primary_State_Hover_Size_Small';
import { Variant_Primary_State_Hover_Size_SmallStyles } from './Variant_Primary_State_Hover_Size_Small.styles';

const meta: Meta<typeof Variant_Primary_State_Hover_Size_Small> = {
  title: 'Components/Variant_Primary_State_Hover_Size_Small',
  component: Variant_Primary_State_Hover_Size_Small,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Variant_Primary_State_Hover_Size_Small>;

export const Default: Story = {
  args: {
    ...Variant_Primary_State_Hover_Size_SmallStyles,
  },
};
