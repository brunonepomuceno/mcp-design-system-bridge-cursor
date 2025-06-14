import type { Meta, StoryObj } from '@storybook/react';
import { Hero_Form } from './Hero_Form';
import { Hero_FormStyles } from './Hero_Form.styles';

const meta: Meta<typeof Hero_Form> = {
  title: 'Components/Hero_Form',
  component: Hero_Form,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Hero_Form>;

export const Default: Story = {
  args: {
    ...Hero_FormStyles,
  },
};
