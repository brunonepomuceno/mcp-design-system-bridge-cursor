import type { Meta, StoryObj } from '@storybook/react';
import { Card_Grid_Pricing } from './Card_Grid_Pricing';
import { Card_Grid_PricingStyles } from './Card_Grid_Pricing.styles';

const meta: Meta<typeof Card_Grid_Pricing> = {
  title: 'Components/Card_Grid_Pricing',
  component: Card_Grid_Pricing,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card_Grid_Pricing>;

export const Default: Story = {
  args: {
    ...Card_Grid_PricingStyles,
  },
};
