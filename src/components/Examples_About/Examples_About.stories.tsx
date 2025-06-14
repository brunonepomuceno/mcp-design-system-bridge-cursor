import type { Meta, StoryObj } from '@storybook/react';
import { Examples_About } from './Examples_About';
import { Examples_AboutStyles } from './Examples_About.styles';

const meta: Meta<typeof Examples_About> = {
  title: 'Components/Examples_About',
  component: Examples_About,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Examples_About>;

export const Default: Story = {
  args: {
    ...Examples_AboutStyles,
  },
};
