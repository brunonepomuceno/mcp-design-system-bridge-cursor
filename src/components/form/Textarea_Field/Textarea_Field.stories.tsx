import type { Meta, StoryObj } from '@storybook/react';
import { Textarea_Field } from './Textarea_Field';
import { Textarea_FieldStyles } from './Textarea_Field.styles';

const meta: Meta<typeof Textarea_Field> = {
  title: 'Components/Textarea_Field',
  component: Textarea_Field,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Textarea_Field>;

export const Default: Story = {
  args: {
    ...Textarea_FieldStyles,
  },
};
