import type { Meta, StoryObj } from '@storybook/react';
import { Pricing_Card } from './Pricing_Card';
import { Pricing_CardStyles } from './Pricing_Card.styles';

const meta: Meta<typeof Pricing_Card> = {
  title: 'Components/Pricing_Card',
  component: Pricing_Card,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Pricing_Card>;

export const Default: Story = {
  args: {
    ...Pricing_CardStyles,
  },
};
