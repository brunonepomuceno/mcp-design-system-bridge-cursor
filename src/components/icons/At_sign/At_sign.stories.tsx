import type { Meta, StoryObj } from '@storybook/react';
import { At_sign } from './At_sign';
import { At_signStyles } from './At_sign.styles';

const meta: Meta<typeof At_sign> = {
  title: 'Components/At_sign',
  component: At_sign,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof At_sign>;

export const Default: Story = {
  args: {
    ...At_signStyles,
  },
};
