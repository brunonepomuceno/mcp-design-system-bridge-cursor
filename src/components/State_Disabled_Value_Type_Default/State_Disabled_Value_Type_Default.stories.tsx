import type { Meta, StoryObj } from '@storybook/react';
import { State_Disabled_Value_Type_Default } from './State_Disabled_Value_Type_Default';
import { State_Disabled_Value_Type_DefaultStyles } from './State_Disabled_Value_Type_Default.styles';

const meta: Meta<typeof State_Disabled_Value_Type_Default> = {
  title: 'Components/State_Disabled_Value_Type_Default',
  component: State_Disabled_Value_Type_Default,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof State_Disabled_Value_Type_Default>;

export const Default: Story = {
  args: {
    ...State_Disabled_Value_Type_DefaultStyles,
  },
};
