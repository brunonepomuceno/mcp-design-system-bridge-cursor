import type { Meta, StoryObj } from '@storybook/react';
import { State_Disabled_Value_Type_Indeterminate } from './State_Disabled_Value_Type_Indeterminate';
import { State_Disabled_Value_Type_IndeterminateStyles } from './State_Disabled_Value_Type_Indeterminate.styles';

const meta: Meta<typeof State_Disabled_Value_Type_Indeterminate> = {
  title: 'Components/State_Disabled_Value_Type_Indeterminate',
  component: State_Disabled_Value_Type_Indeterminate,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof State_Disabled_Value_Type_Indeterminate>;

export const Default: Story = {
  args: {
    ...State_Disabled_Value_Type_IndeterminateStyles,
  },
};
