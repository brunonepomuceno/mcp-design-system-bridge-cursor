import type { Meta, StoryObj } from '@storybook/react';
import { State_Default_Value_Type_Checked } from './State_Default_Value_Type_Checked';
import { State_Default_Value_Type_CheckedStyles } from './State_Default_Value_Type_Checked.styles';

const meta: Meta<typeof State_Default_Value_Type_Checked> = {
  title: 'Components/State_Default_Value_Type_Checked',
  component: State_Default_Value_Type_Checked,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof State_Default_Value_Type_Checked>;

export const Default: Story = {
  args: {
    ...State_Default_Value_Type_CheckedStyles,
  },
};
