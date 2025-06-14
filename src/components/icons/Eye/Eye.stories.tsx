import type { Meta, StoryObj } from '@storybook/react';
import { Eye } from './Eye';
import { EyeStyles } from './Eye.styles';

const meta: Meta<typeof Eye> = {
  title: 'Components/Eye',
  component: Eye,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Eye>;

export const Default: Story = {
  args: {
    ...EyeStyles,
  },
};
