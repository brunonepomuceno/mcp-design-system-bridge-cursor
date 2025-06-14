import type { Meta, StoryObj } from '@storybook/react';
import { Scheme_Neutral_State_Default_Variant_Secondary } from './Scheme_Neutral_State_Default_Variant_Secondary';
import { Scheme_Neutral_State_Default_Variant_SecondaryStyles } from './Scheme_Neutral_State_Default_Variant_Secondary.styles';

const meta: Meta<typeof Scheme_Neutral_State_Default_Variant_Secondary> = {
  title: 'Components/Scheme_Neutral_State_Default_Variant_Secondary',
  component: Scheme_Neutral_State_Default_Variant_Secondary,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Scheme_Neutral_State_Default_Variant_Secondary>;

export const Default: Story = {
  args: {
    ...Scheme_Neutral_State_Default_Variant_SecondaryStyles,
  },
};
