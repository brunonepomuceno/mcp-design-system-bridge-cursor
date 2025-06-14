import type { Meta, StoryObj } from '@storybook/react';
import { Testimonial_Card } from './Testimonial_Card';
import { Testimonial_CardStyles } from './Testimonial_Card.styles';

const meta: Meta<typeof Testimonial_Card> = {
  title: 'Components/Testimonial_Card',
  component: Testimonial_Card,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Testimonial_Card>;

export const Default: Story = {
  args: {
    ...Testimonial_CardStyles,
  },
};
