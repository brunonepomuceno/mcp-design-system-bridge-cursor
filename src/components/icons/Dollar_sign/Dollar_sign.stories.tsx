import type { Meta, StoryObj } from '@storybook/react';
import { Dollar_sign } from './Dollar_sign';
import { Dollar_signStyles } from './Dollar_sign.styles';

const meta: Meta<typeof Dollar_sign> = {
  title: 'Components/Dollar_sign',
  component: Dollar_sign,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Dollar_sign>;

export const Default: Story = {
  args: {
    ...Dollar_signStyles,
  },
};
