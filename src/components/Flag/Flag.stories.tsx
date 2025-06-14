import type { Meta, StoryObj } from '@storybook/react';
import { Flag } from './Flag';
import { FlagStyles } from './Flag.styles';

const meta: Meta<typeof Flag> = {
  title: 'Components/Flag',
  component: Flag,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Flag>;

export const Default: Story = {
  args: {
    ...FlagStyles,
  },
};
