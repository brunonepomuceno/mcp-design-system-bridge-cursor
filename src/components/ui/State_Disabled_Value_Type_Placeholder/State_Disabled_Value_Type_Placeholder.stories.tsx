import type { Meta, StoryObj } from '@storybook/react';
import { State_Disabled_Value_Type_Placeholder } from './State_Disabled_Value_Type_Placeholder';
import { State_Disabled_Value_Type_PlaceholderStyles } from './State_Disabled_Value_Type_Placeholder.styles';

const meta: Meta<typeof State_Disabled_Value_Type_Placeholder> = {
  title: 'Components/State_Disabled_Value_Type_Placeholder',
  component: State_Disabled_Value_Type_Placeholder,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof State_Disabled_Value_Type_Placeholder>;

export const Default: Story = {
  args: {
    ...State_Disabled_Value_Type_PlaceholderStyles,
  },
};
