import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { CardStyles } from './Card.styles';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    ...CardStyles,
  },
};
