import type { Meta, StoryObj } from '@storybook/react';
import { Product_Info_Card } from './Product_Info_Card';
import { Product_Info_CardStyles } from './Product_Info_Card.styles';

const meta: Meta<typeof Product_Info_Card> = {
  title: 'Components/Product_Info_Card',
  component: Product_Info_Card,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Product_Info_Card>;

export const Default: Story = {
  args: {
    ...Product_Info_CardStyles,
  },
};
