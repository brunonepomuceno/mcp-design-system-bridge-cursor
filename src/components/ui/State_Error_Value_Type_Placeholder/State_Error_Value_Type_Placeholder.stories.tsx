import type { Meta, StoryObj } from '@storybook/react';
import { State_Error_Value_Type_Placeholder } from './State_Error_Value_Type_Placeholder';
import { State_Error_Value_Type_PlaceholderStyles } from './State_Error_Value_Type_Placeholder.styles';

const meta: Meta<typeof State_Error_Value_Type_Placeholder> = {
  title: 'Components/State_Error_Value_Type_Placeholder',
  component: State_Error_Value_Type_Placeholder,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof State_Error_Value_Type_Placeholder>;

export const Default: Story = {
  args: {
    ...State_Error_Value_Type_PlaceholderStyles,
  },
};
