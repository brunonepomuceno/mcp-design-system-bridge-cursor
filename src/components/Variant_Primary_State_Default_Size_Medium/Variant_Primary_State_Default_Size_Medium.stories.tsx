import type { Meta, StoryObj } from '@storybook/react';
import { Variant_Primary_State_Default_Size_Medium } from './Variant_Primary_State_Default_Size_Medium';
import { Variant_Primary_State_Default_Size_MediumStyles } from './Variant_Primary_State_Default_Size_Medium.styles';

const meta: Meta<typeof Variant_Primary_State_Default_Size_Medium> = {
  title: 'Components/Variant_Primary_State_Default_Size_Medium',
  component: Variant_Primary_State_Default_Size_Medium,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Variant_Primary_State_Default_Size_Medium>;

export const Default: Story = {
  args: {
    ...Variant_Primary_State_Default_Size_MediumStyles,
  },
};
