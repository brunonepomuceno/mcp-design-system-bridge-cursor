import type { Meta, StoryObj } from '@storybook/react';
import { Code } from './Code';
import { CodeStyles } from './Code.styles';

const meta: Meta<typeof Code> = {
  title: 'Components/Code',
  component: Code,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Code>;

export const Default: Story = {
  args: {
    ...CodeStyles,
  },
};
