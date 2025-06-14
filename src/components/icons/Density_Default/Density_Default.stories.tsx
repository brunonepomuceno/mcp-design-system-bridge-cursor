import type { Meta, StoryObj } from '@storybook/react';
import { Density_Default } from './Density_Default';
import { Density_DefaultStyles } from './Density_Default.styles';

const meta: Meta<typeof Density_Default> = {
  title: 'Components/Density_Default',
  component: Density_Default,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Density_Default>;

export const Default: Story = {
  args: {
    ...Density_DefaultStyles,
  },
};
