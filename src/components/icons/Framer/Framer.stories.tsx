import type { Meta, StoryObj } from '@storybook/react';
import { Framer } from './Framer';
import { FramerStyles } from './Framer.styles';

const meta: Meta<typeof Framer> = {
  title: 'Components/Framer',
  component: Framer,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Framer>;

export const Default: Story = {
  args: {
    ...FramerStyles,
  },
};
