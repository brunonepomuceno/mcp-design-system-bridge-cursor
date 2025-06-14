import type { Meta, StoryObj } from '@storybook/react';
import { Variant_Neutral_State_Default_Size_Small } from './Variant_Neutral_State_Default_Size_Small';
import { Variant_Neutral_State_Default_Size_SmallStyles } from './Variant_Neutral_State_Default_Size_Small.styles';

const meta: Meta<typeof Variant_Neutral_State_Default_Size_Small> = {
  title: 'Components/Variant_Neutral_State_Default_Size_Small',
  component: Variant_Neutral_State_Default_Size_Small,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Variant_Neutral_State_Default_Size_Small>;

export const Default: Story = {
  args: {
    ...Variant_Neutral_State_Default_Size_SmallStyles,
  },
};
