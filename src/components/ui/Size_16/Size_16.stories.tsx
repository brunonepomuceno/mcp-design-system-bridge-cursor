import type { Meta, StoryObj } from '@storybook/react';
import { Size_16 } from './Size_16';
import { Size_16Styles } from './Size_16.styles';

const meta: Meta<typeof Size_16> = {
  title: 'Components/Size_16',
  component: Size_16,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Size_16>;

export const Default: Story = {
  args: {
    ...Size_16Styles,
  },
};
