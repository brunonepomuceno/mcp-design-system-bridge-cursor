import type { Meta, StoryObj } from '@storybook/react';
import { Codesandbox } from './Codesandbox';
import { CodesandboxStyles } from './Codesandbox.styles';

const meta: Meta<typeof Codesandbox> = {
  title: 'Components/Codesandbox',
  component: Codesandbox,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Codesandbox>;

export const Default: Story = {
  args: {
    ...CodesandboxStyles,
  },
};
