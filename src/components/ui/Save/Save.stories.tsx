import type { Meta, StoryObj } from '@storybook/react';
import { Save } from './Save';
import { SaveStyles } from './Save.styles';

const meta: Meta<typeof Save> = {
  title: 'Components/Save',
  component: Save,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Save>;

export const Default: Story = {
  args: {
    ...SaveStyles,
  },
};
