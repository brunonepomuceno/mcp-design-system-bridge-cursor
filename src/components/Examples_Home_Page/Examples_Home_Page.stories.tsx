import type { Meta, StoryObj } from '@storybook/react';
import { Examples_Home_Page } from './Examples_Home_Page';
import { Examples_Home_PageStyles } from './Examples_Home_Page.styles';

const meta: Meta<typeof Examples_Home_Page> = {
  title: 'Components/Examples_Home_Page',
  component: Examples_Home_Page,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Examples_Home_Page>;

export const Default: Story = {
  args: {
    ...Examples_Home_PageStyles,
  },
};
