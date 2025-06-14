import type { Meta, StoryObj } from '@storybook/react';
import { Radio_Field } from './Radio_Field';
import { Radio_FieldStyles } from './Radio_Field.styles';

const meta: Meta<typeof Radio_Field> = {
  title: 'Components/Radio_Field',
  component: Radio_Field,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Radio_Field>;

export const Default: Story = {
  args: {
    ...Radio_FieldStyles,
  },
};
