import type { Meta, StoryObj } from '@storybook/react';
import { Dialog_Body } from './Dialog_Body';
import { Dialog_BodyStyles } from './Dialog_Body.styles';

const meta: Meta<typeof Dialog_Body> = {
  title: 'Components/Dialog_Body',
  component: Dialog_Body,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Dialog_Body>;

export const Default: Story = {
  args: {
    ...Dialog_BodyStyles,
  },
};
