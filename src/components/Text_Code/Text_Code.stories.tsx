import type { Meta, StoryObj } from '@storybook/react';
import { Text_Code } from './Text_Code';
import { Text_CodeStyles } from './Text_Code.styles';

const meta: Meta<typeof Text_Code> = {
  title: 'Components/Text_Code',
  component: Text_Code,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Text_Code>;

export const Default: Story = {
  args: {
    ...Text_CodeStyles,
  },
};
