import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox_Field } from './Checkbox_Field';
import { Checkbox_FieldStyles } from './Checkbox_Field.styles';

const meta: Meta<typeof Checkbox_Field> = {
  title: 'Components/Checkbox_Field',
  component: Checkbox_Field,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Checkbox_Field>;

export const Default: Story = {
  args: {
    ...Checkbox_FieldStyles,
  },
};
