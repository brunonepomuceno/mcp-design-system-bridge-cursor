import type { Meta, StoryObj } from '@storybook/react';
import { Scheme_Brand_State_Hover_Variant_Secondary } from './Scheme_Brand_State_Hover_Variant_Secondary';
import { Scheme_Brand_State_Hover_Variant_SecondaryStyles } from './Scheme_Brand_State_Hover_Variant_Secondary.styles';

const meta: Meta<typeof Scheme_Brand_State_Hover_Variant_Secondary> = {
  title: 'Components/Scheme_Brand_State_Hover_Variant_Secondary',
  component: Scheme_Brand_State_Hover_Variant_Secondary,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Scheme_Brand_State_Hover_Variant_Secondary>;

export const Default: Story = {
  args: {
    ...Scheme_Brand_State_Hover_Variant_SecondaryStyles,
  },
};
