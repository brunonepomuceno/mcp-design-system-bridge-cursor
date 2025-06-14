import type { Meta, StoryObj } from '@storybook/react';
import { Type_Card } from './Type_Card';
import { Type_CardStyles } from './Type_Card.styles';

const meta: Meta<typeof Type_Card> = {
  title: 'Components/Type_Card',
  component: Type_Card,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Type_Card>;

export const Default: Story = {
  args: {
    ...Type_CardStyles,
  },
};
