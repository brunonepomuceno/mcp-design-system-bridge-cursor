import type { Meta, StoryObj } from '@storybook/react';
import { More_horizontal } from './More_horizontal';
import { More_horizontalStyles } from './More_horizontal.styles';

const meta: Meta<typeof More_horizontal> = {
  title: 'Components/More_horizontal',
  component: More_horizontal,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof More_horizontal>;

export const Default: Story = {
  args: {
    ...More_horizontalStyles,
  },
};
