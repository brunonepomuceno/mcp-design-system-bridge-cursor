import type { Meta, StoryObj } from '@storybook/react';
import { Divide } from './Divide';
import { DivideStyles } from './Divide.styles';

const meta: Meta<typeof Divide> = {
  title: 'Components/Divide',
  component: Divide,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Divide>;

export const Default: Story = {
  args: {
    ...DivideStyles,
  },
};
