import type { Meta, StoryObj } from '@storybook/react';
import { Form_Log_In } from './Form_Log_In';
import { Form_Log_InStyles } from './Form_Log_In.styles';

const meta: Meta<typeof Form_Log_In> = {
  title: 'Components/Form_Log_In',
  component: Form_Log_In,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Form_Log_In>;

export const Default: Story = {
  args: {
    ...Form_Log_InStyles,
  },
};
