import type { Meta, StoryObj } from '@storybook/react';
import { Headphones } from './Headphones';
import { HeadphonesStyles } from './Headphones.styles';

const meta: Meta<typeof Headphones> = {
  title: 'Components/Headphones',
  component: Headphones,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Headphones>;

export const Default: Story = {
  args: {
    ...HeadphonesStyles,
  },
};
