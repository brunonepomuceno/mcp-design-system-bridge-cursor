import type { Meta, StoryObj } from '@storybook/react';
import { Density_Tight } from './Density_Tight';
import { Density_TightStyles } from './Density_Tight.styles';

const meta: Meta<typeof Density_Tight> = {
  title: 'Components/Density_Tight',
  component: Density_Tight,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Density_Tight>;

export const Default: Story = {
  args: {
    ...Density_TightStyles,
  },
};
