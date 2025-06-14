import type { Meta, StoryObj } from '@storybook/react';
import { Volume_x } from './Volume_x';
import { Volume_xStyles } from './Volume_x.styles';

const meta: Meta<typeof Volume_x> = {
  title: 'Components/Volume_x',
  component: Volume_x,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Volume_x>;

export const Default: Story = {
  args: {
    ...Volume_xStyles,
  },
};
