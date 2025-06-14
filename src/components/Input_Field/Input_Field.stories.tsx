import type { Meta, StoryObj } from '@storybook/react';
import { Input_Field } from './Input_Field';
import { Input_FieldStyles } from './Input_Field.styles';

const meta: Meta<typeof Input_Field> = {
  title: 'Components/Input_Field',
  component: Input_Field,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input_Field>;

export const Default: Story = {
  args: {
    ...Input_FieldStyles,
  },
};
