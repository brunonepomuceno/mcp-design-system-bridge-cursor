import type { Meta, StoryObj } from '@storybook/react';
import { Examples_Portfolio } from './Examples_Portfolio';
import { Examples_PortfolioStyles } from './Examples_Portfolio.styles';

const meta: Meta<typeof Examples_Portfolio> = {
  title: 'Components/Examples_Portfolio',
  component: Examples_Portfolio,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Examples_Portfolio>;

export const Default: Story = {
  args: {
    ...Examples_PortfolioStyles,
  },
};
