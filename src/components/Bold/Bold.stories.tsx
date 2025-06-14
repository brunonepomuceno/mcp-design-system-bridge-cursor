import type { Meta, StoryObj } from '@storybook/react';
import { Bold } from './Bold';
import { BoldStyles } from './Bold.styles';

const meta: Meta<typeof Bold> = {
  title: 'Components/Bold',
  component: Bold,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Bold>;

export const Default: Story = {
  args: {
    ...BoldStyles,
  },
};
