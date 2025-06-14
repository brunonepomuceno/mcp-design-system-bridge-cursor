import type { Meta, StoryObj } from '@storybook/react';
import { Scheme_Warning_State_Hover_Variant_Secondary } from './Scheme_Warning_State_Hover_Variant_Secondary';
import { Scheme_Warning_State_Hover_Variant_SecondaryStyles } from './Scheme_Warning_State_Hover_Variant_Secondary.styles';

const meta: Meta<typeof Scheme_Warning_State_Hover_Variant_Secondary> = {
  title: 'Components/Scheme_Warning_State_Hover_Variant_Secondary',
  component: Scheme_Warning_State_Hover_Variant_Secondary,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Scheme_Warning_State_Hover_Variant_Secondary>;

export const Default: Story = {
  args: {
    ...Scheme_Warning_State_Hover_Variant_SecondaryStyles,
  },
};
