import type { Meta, StoryObj } from '@storybook/react';
import { Select_Field } from './Select_Field';
import { Select_FieldStyles } from './Select_Field.styles';

const meta: Meta<typeof Select_Field> = {
  title: 'Components/Select_Field',
  component: Select_Field,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Select_Field>;

export const Default: Story = {
  args: {
    ...Select_FieldStyles,
  },
};
