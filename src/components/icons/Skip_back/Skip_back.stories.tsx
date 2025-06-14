import type { Meta, StoryObj } from '@storybook/react';
import { Skip_back } from './Skip_back';
import { Skip_backStyles } from './Skip_back.styles';

const meta: Meta<typeof Skip_back> = {
  title: 'Components/Skip_back',
  component: Skip_back,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Skip_back>;

export const Default: Story = {
  args: {
    ...Skip_backStyles,
  },
};
