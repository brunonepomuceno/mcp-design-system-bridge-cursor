import type { Meta, StoryObj } from '@storybook/react';
import { State_Disabled_Value_Type_Unchecked } from './State_Disabled_Value_Type_Unchecked';
import { State_Disabled_Value_Type_UncheckedStyles } from './State_Disabled_Value_Type_Unchecked.styles';

const meta: Meta<typeof State_Disabled_Value_Type_Unchecked> = {
  title: 'Components/State_Disabled_Value_Type_Unchecked',
  component: State_Disabled_Value_Type_Unchecked,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof State_Disabled_Value_Type_Unchecked>;

export const Default: Story = {
  args: {
    ...State_Disabled_Value_Type_UncheckedStyles,
  },
};
