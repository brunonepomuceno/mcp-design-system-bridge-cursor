import type { Meta, StoryObj } from '@storybook/react';
import { Scheme_Neutral_State_Hover_Variant_Primary } from './Scheme_Neutral_State_Hover_Variant_Primary';
import { Scheme_Neutral_State_Hover_Variant_PrimaryStyles } from './Scheme_Neutral_State_Hover_Variant_Primary.styles';

const meta: Meta<typeof Scheme_Neutral_State_Hover_Variant_Primary> = {
  title: 'Components/Scheme_Neutral_State_Hover_Variant_Primary',
  component: Scheme_Neutral_State_Hover_Variant_Primary,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Scheme_Neutral_State_Hover_Variant_Primary>;

export const Default: Story = {
  args: {
    ...Scheme_Neutral_State_Hover_Variant_PrimaryStyles,
  },
};
