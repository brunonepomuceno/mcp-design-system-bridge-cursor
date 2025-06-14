import type { Meta, StoryObj } from '@storybook/react';
import { Card_Grid_Testimonials } from './Card_Grid_Testimonials';
import { Card_Grid_TestimonialsStyles } from './Card_Grid_Testimonials.styles';

const meta: Meta<typeof Card_Grid_Testimonials> = {
  title: 'Components/Card_Grid_Testimonials',
  component: Card_Grid_Testimonials,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card_Grid_Testimonials>;

export const Default: Story = {
  args: {
    ...Card_Grid_TestimonialsStyles,
  },
};
