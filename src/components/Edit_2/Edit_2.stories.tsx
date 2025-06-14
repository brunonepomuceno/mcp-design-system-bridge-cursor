import type { Meta, StoryObj } from '@storybook/react';
import { Edit_2 } from './Edit_2';
import { Edit_2Styles } from './Edit_2.styles';

const meta: Meta<typeof Edit_2> = {
  title: 'Components/Edit_2',
  component: Edit_2,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Edit_2>;

export const Default: Story = {
  args: {
    ...Edit_2Styles,
  },
};
