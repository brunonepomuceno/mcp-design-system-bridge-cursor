import type { Meta, StoryObj } from '@storybook/react';
import { Slider_Field } from './Slider_Field';
import { Slider_FieldStyles } from './Slider_Field.styles';

const meta: Meta<typeof Slider_Field> = {
  title: 'Components/Slider_Field',
  component: Slider_Field,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Slider_Field>;

export const Default: Story = {
  args: {
    ...Slider_FieldStyles,
  },
};
