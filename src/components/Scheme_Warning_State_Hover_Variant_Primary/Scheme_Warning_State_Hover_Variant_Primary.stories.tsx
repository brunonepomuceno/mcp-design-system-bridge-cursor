import type { Meta, StoryObj } from '@storybook/react';
import { Scheme_Warning_State_Hover_Variant_Primary } from './Scheme_Warning_State_Hover_Variant_Primary';
import { Scheme_Warning_State_Hover_Variant_PrimaryStyles } from './Scheme_Warning_State_Hover_Variant_Primary.styles';

const meta: Meta<typeof Scheme_Warning_State_Hover_Variant_Primary> = {
  title: 'Components/Scheme_Warning_State_Hover_Variant_Primary',
  component: Scheme_Warning_State_Hover_Variant_Primary,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Scheme_Warning_State_Hover_Variant_Primary>;

export const Default: Story = {
  args: {
    ...Scheme_Warning_State_Hover_Variant_PrimaryStyles,
  },
};
