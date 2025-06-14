import type { Meta, StoryObj } from '@storybook/react';
import { State_Default_Value_Type_Placeholder } from './State_Default_Value_Type_Placeholder';
import { State_Default_Value_Type_PlaceholderStyles } from './State_Default_Value_Type_Placeholder.styles';

const meta: Meta<typeof State_Default_Value_Type_Placeholder> = {
  title: 'Components/State_Default_Value_Type_Placeholder',
  component: State_Default_Value_Type_Placeholder,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof State_Default_Value_Type_Placeholder>;

export const Default: Story = {
  args: {
    ...State_Default_Value_Type_PlaceholderStyles,
  },
};
