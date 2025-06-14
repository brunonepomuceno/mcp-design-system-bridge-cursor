import type { Meta, StoryObj } from '@storybook/react';
import { Platform_Mobile } from './Platform_Mobile';
import { Platform_MobileStyles } from './Platform_Mobile.styles';

const meta: Meta<typeof Platform_Mobile> = {
  title: 'Components/Platform_Mobile',
  component: Platform_Mobile,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Platform_Mobile>;

export const Default: Story = {
  args: {
    ...Platform_MobileStyles,
  },
};
