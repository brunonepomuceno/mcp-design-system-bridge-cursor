import type { Meta, StoryObj } from '@storybook/react';
import { Type } from './Type';
import { TypeStyles } from './Type.styles';

const meta: Meta<typeof Type> = {
  title: 'Components/Type',
  component: Type,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Type>;

export const Default: Story = {
  args: {
    ...TypeStyles,
  },
};
