import type { Meta, StoryObj } from '@storybook/react';
import { Gift } from './Gift';
import { GiftStyles } from './Gift.styles';

const meta: Meta<typeof Gift> = {
  title: 'Components/Gift',
  component: Gift,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Gift>;

export const Default: Story = {
  args: {
    ...GiftStyles,
  },
};
