import type { Meta, StoryObj } from '@storybook/react';
import { Examples_Pricing } from './Examples_Pricing';
import { Examples_PricingStyles } from './Examples_Pricing.styles';

const meta: Meta<typeof Examples_Pricing> = {
  title: 'Components/Examples_Pricing',
  component: Examples_Pricing,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Examples_Pricing>;

export const Default: Story = {
  args: {
    ...Examples_PricingStyles,
  },
};
