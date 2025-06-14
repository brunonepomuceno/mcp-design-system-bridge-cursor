import type { Meta, StoryObj } from '@storybook/react';
import { Size_24 } from './Size_24';
import { Size_24Styles } from './Size_24.styles';

const meta: Meta<typeof Size_24> = {
  title: 'Components/Size_24',
  component: Size_24,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Size_24>;

export const Default: Story = {
  args: {
    ...Size_24Styles,
  },
};
