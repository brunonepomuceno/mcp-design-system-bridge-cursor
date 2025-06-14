import type { Meta, StoryObj } from '@storybook/react';
import { More_vertical } from './More_vertical';
import { More_verticalStyles } from './More_vertical.styles';

const meta: Meta<typeof More_vertical> = {
  title: 'Components/More_vertical',
  component: More_vertical,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof More_vertical>;

export const Default: Story = {
  args: {
    ...More_verticalStyles,
  },
};
