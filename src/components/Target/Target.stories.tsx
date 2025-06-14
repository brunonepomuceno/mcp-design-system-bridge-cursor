import type { Meta, StoryObj } from '@storybook/react';
import { Target } from './Target';
import { TargetStyles } from './Target.styles';

const meta: Meta<typeof Target> = {
  title: 'Components/Target',
  component: Target,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Target>;

export const Default: Story = {
  args: {
    ...TargetStyles,
  },
};
