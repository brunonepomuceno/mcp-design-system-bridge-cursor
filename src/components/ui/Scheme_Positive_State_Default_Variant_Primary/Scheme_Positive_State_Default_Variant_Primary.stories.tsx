import type { Meta, StoryObj } from '@storybook/react';
import { Scheme_Positive_State_Default_Variant_Primary } from './Scheme_Positive_State_Default_Variant_Primary';
import { Scheme_Positive_State_Default_Variant_PrimaryStyles } from './Scheme_Positive_State_Default_Variant_Primary.styles';

const meta: Meta<typeof Scheme_Positive_State_Default_Variant_Primary> = {
  title: 'Components/Scheme_Positive_State_Default_Variant_Primary',
  component: Scheme_Positive_State_Default_Variant_Primary,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Scheme_Positive_State_Default_Variant_Primary>;

export const Default: Story = {
  args: {
    ...Scheme_Positive_State_Default_Variant_PrimaryStyles,
  },
};
