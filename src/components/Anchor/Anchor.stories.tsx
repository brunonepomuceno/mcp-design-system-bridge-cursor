import type { Meta, StoryObj } from '@storybook/react';
import { Anchor } from './Anchor';
import { AnchorStyles } from './Anchor.styles';

const meta: Meta<typeof Anchor> = {
  title: 'Components/Anchor',
  component: Anchor,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Anchor>;

export const Default: Story = {
  args: {
    ...AnchorStyles,
  },
};
