import type { Meta, StoryObj } from '@storybook/react';
import { Switch_Field } from './Switch_Field';
import { Switch_FieldStyles } from './Switch_Field.styles';

const meta: Meta<typeof Switch_Field> = {
  title: 'Components/Switch_Field',
  component: Switch_Field,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Switch_Field>;

export const Default: Story = {
  args: {
    ...Switch_FieldStyles,
  },
};
