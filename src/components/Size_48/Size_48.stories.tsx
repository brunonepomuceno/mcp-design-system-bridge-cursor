import type { Meta, StoryObj } from '@storybook/react';
import { Size_48 } from './Size_48';
import { Size_48Styles } from './Size_48.styles';

const meta: Meta<typeof Size_48> = {
  title: 'Components/Size_48',
  component: Size_48,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Size_48>;

export const Default: Story = {
  args: {
    ...Size_48Styles,
  },
};
