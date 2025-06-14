import type { Meta, StoryObj } from '@storybook/react';
import { Variant_Neutral_State_Hover_Size_Medium } from './Variant_Neutral_State_Hover_Size_Medium';
import { Variant_Neutral_State_Hover_Size_MediumStyles } from './Variant_Neutral_State_Hover_Size_Medium.styles';

const meta: Meta<typeof Variant_Neutral_State_Hover_Size_Medium> = {
  title: 'Components/Variant_Neutral_State_Hover_Size_Medium',
  component: Variant_Neutral_State_Hover_Size_Medium,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Variant_Neutral_State_Hover_Size_Medium>;

export const Default: Story = {
  args: {
    ...Variant_Neutral_State_Hover_Size_MediumStyles,
  },
};
