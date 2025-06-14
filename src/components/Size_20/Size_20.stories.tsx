import type { Meta, StoryObj } from '@storybook/react';
import { Size_20 } from './Size_20';
import { Size_20Styles } from './Size_20.styles';

const meta: Meta<typeof Size_20> = {
  title: 'Components/Size_20',
  component: Size_20,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Size_20>;

export const Default: Story = {
  args: {
    ...Size_20Styles,
  },
};
