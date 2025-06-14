import type { Meta, StoryObj } from '@storybook/react';
import { Text_Small } from './Text_Small';
import { Text_SmallStyles } from './Text_Small.styles';

const meta: Meta<typeof Text_Small> = {
  title: 'Components/Text_Small',
  component: Text_Small,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Text_Small>;

export const Default: Story = {
  args: {
    ...Text_SmallStyles,
  },
};
