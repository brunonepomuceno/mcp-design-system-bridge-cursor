import type { Meta, StoryObj } from '@storybook/react';
import { Stats_Card } from './Stats_Card';
import { Stats_CardStyles } from './Stats_Card.styles';

const meta: Meta<typeof Stats_Card> = {
  title: 'Components/Stats_Card',
  component: Stats_Card,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Stats_Card>;

export const Default: Story = {
  args: {
    ...Stats_CardStyles,
  },
};
