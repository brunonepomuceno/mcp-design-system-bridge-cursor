import type { Meta, StoryObj } from '@storybook/react';
import { Smile } from './Smile';
import { SmileStyles } from './Smile.styles';

const meta: Meta<typeof Smile> = {
  title: 'Components/Smile',
  component: Smile,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Smile>;

export const Default: Story = {
  args: {
    ...SmileStyles,
  },
};
