import type { Meta, StoryObj } from '@storybook/react';
import { Key } from './Key';
import { KeyStyles } from './Key.styles';

const meta: Meta<typeof Key> = {
  title: 'Components/Key',
  component: Key,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Key>;

export const Default: Story = {
  args: {
    ...KeyStyles,
  },
};
