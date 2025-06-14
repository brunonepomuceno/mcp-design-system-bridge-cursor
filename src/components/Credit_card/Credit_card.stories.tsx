import type { Meta, StoryObj } from '@storybook/react';
import { Credit_card } from './Credit_card';
import { Credit_cardStyles } from './Credit_card.styles';

const meta: Meta<typeof Credit_card> = {
  title: 'Components/Credit_card',
  component: Credit_card,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Credit_card>;

export const Default: Story = {
  args: {
    ...Credit_cardStyles,
  },
};
