import type { Meta, StoryObj } from '@storybook/react';
import { State_Hover_Direction_Row_Type_Medium } from './State_Hover_Direction_Row_Type_Medium';
import { State_Hover_Direction_Row_Type_MediumStyles } from './State_Hover_Direction_Row_Type_Medium.styles';

const meta: Meta<typeof State_Hover_Direction_Row_Type_Medium> = {
  title: 'Components/State_Hover_Direction_Row_Type_Medium',
  component: State_Hover_Direction_Row_Type_Medium,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof State_Hover_Direction_Row_Type_Medium>;

export const Default: Story = {
  args: {
    ...State_Hover_Direction_Row_Type_MediumStyles,
  },
};
