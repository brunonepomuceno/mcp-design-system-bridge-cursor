import type { Meta, StoryObj } from '@storybook/react';
import { Text_Strong } from './Text_Strong';
import { Text_StrongStyles } from './Text_Strong.styles';

const meta: Meta<typeof Text_Strong> = {
  title: 'Components/Text_Strong',
  component: Text_Strong,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Text_Strong>;

export const Default: Story = {
  args: {
    ...Text_StrongStyles,
  },
};
