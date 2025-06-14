import type { Meta, StoryObj } from '@storybook/react';
import { Shield_off } from './Shield_off';
import { Shield_offStyles } from './Shield_off.styles';

const meta: Meta<typeof Shield_off> = {
  title: 'Components/Shield_off',
  component: Shield_off,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Shield_off>;

export const Default: Story = {
  args: {
    ...Shield_offStyles,
  },
};
