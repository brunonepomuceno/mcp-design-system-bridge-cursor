import type { Meta, StoryObj } from '@storybook/react';
import { Trash_2 } from './Trash_2';
import { Trash_2Styles } from './Trash_2.styles';

const meta: Meta<typeof Trash_2> = {
  title: 'Components/Trash_2',
  component: Trash_2,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Trash_2>;

export const Default: Story = {
  args: {
    ...Trash_2Styles,
  },
};
