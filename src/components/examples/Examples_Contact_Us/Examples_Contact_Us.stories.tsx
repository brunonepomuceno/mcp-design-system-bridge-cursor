import type { Meta, StoryObj } from '@storybook/react';
import { Examples_Contact_Us } from './Examples_Contact_Us';
import { Examples_Contact_UsStyles } from './Examples_Contact_Us.styles';

const meta: Meta<typeof Examples_Contact_Us> = {
  title: 'Components/Examples_Contact_Us',
  component: Examples_Contact_Us,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Examples_Contact_Us>;

export const Default: Story = {
  args: {
    ...Examples_Contact_UsStyles,
  },
};
