import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';
import { FooterStyles } from './Footer.styles';

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    ...FooterStyles,
  },
};
