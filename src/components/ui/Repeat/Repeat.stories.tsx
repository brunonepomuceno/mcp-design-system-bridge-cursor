import type { Meta, StoryObj } from '@storybook/react';
import { Repeat } from './Repeat';
import { RepeatStyles } from './Repeat.styles';

const meta: Meta<typeof Repeat> = {
  title: 'Components/Repeat',
  component: Repeat,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Repeat>;

export const Default: Story = {
  args: {
    ...RepeatStyles,
  },
};
