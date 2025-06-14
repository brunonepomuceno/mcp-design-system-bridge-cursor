import type { Meta, StoryObj } from '@storybook/react';
import { Component_Note } from './Component_Note';
import { Component_NoteStyles } from './Component_Note.styles';

const meta: Meta<typeof Component_Note> = {
  title: 'Components/Component_Note',
  component: Component_Note,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Component_Note>;

export const Default: Story = {
  args: {
    ...Component_NoteStyles,
  },
};
