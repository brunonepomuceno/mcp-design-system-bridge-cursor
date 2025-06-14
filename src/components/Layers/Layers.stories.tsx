import type { Meta, StoryObj } from '@storybook/react';
import { Layers } from './Layers';
import { LayersStyles } from './Layers.styles';

const meta: Meta<typeof Layers> = {
  title: 'Components/Layers',
  component: Layers,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Layers>;

export const Default: Story = {
  args: {
    ...LayersStyles,
  },
};
