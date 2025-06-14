import type { Meta, StoryObj } from '@storybook/react';
import { Review_Card } from './Review_Card';
import { Review_CardStyles } from './Review_Card.styles';

const meta: Meta<typeof Review_Card> = {
  title: 'Components/Review_Card',
  component: Review_Card,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Review_Card>;

export const Default: Story = {
  args: {
    ...Review_CardStyles,
  },
};
