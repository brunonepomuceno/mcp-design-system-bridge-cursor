import type { Meta, StoryObj } from '@storybook/react';
import { Edit_3 } from './Edit_3';
import { Edit_3Styles } from './Edit_3.styles';

const meta: Meta<typeof Edit_3> = {
  title: 'Components/Edit_3',
  component: Edit_3,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Edit_3>;

export const Default: Story = {
  args: {
    ...Edit_3Styles,
  },
};
