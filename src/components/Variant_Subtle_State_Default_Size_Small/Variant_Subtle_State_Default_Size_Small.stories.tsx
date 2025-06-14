import type { Meta, StoryObj } from '@storybook/react';
import { Variant_Subtle_State_Default_Size_Small } from './Variant_Subtle_State_Default_Size_Small';
import { Variant_Subtle_State_Default_Size_SmallStyles } from './Variant_Subtle_State_Default_Size_Small.styles';

const meta: Meta<typeof Variant_Subtle_State_Default_Size_Small> = {
  title: 'Components/Variant_Subtle_State_Default_Size_Small',
  component: Variant_Subtle_State_Default_Size_Small,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Variant_Subtle_State_Default_Size_Small>;

export const Default: Story = {
  args: {
    ...Variant_Subtle_State_Default_Size_SmallStyles,
  },
};
