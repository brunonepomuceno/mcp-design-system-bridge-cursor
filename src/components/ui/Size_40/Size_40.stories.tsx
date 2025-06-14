import type { Meta, StoryObj } from '@storybook/react';
import { Size_40 } from './Size_40';
import { Size_40Styles } from './Size_40.styles';

const meta: Meta<typeof Size_40> = {
  title: 'Components/Size_40',
  component: Size_40,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Size_40>;

export const Default: Story = {
  args: {
    ...Size_40Styles,
  },
};
