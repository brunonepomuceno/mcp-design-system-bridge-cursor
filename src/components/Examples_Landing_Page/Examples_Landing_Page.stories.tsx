import type { Meta, StoryObj } from '@storybook/react';
import { Examples_Landing_Page } from './Examples_Landing_Page';
import { Examples_Landing_PageStyles } from './Examples_Landing_Page.styles';

const meta: Meta<typeof Examples_Landing_Page> = {
  title: 'Components/Examples_Landing_Page',
  component: Examples_Landing_Page,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Examples_Landing_Page>;

export const Default: Story = {
  args: {
    ...Examples_Landing_PageStyles,
  },
};
