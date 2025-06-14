import type { Meta, StoryObj } from '@storybook/react';
import { Edit } from './Edit';
import { EditStyles } from './Edit.styles';

const meta: Meta<typeof Edit> = {
  title: 'Components/Edit',
  component: Edit,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Edit>;

export const Default: Story = {
  args: {
    ...EditStyles,
  },
};
