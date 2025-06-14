import type { Meta, StoryObj } from '@storybook/react';
import { Skip_forward } from './Skip_forward';
import { Skip_forwardStyles } from './Skip_forward.styles';

const meta: Meta<typeof Skip_forward> = {
  title: 'Components/Skip_forward',
  component: Skip_forward,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Skip_forward>;

export const Default: Story = {
  args: {
    ...Skip_forwardStyles,
  },
};
