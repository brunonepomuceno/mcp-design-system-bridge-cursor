import type { Meta, StoryObj } from '@storybook/react';
import { Sliders } from './Sliders';
import { SlidersStyles } from './Sliders.styles';

const meta: Meta<typeof Sliders> = {
  title: 'Components/Sliders',
  component: Sliders,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Sliders>;

export const Default: Story = {
  args: {
    ...SlidersStyles,
  },
};
