import type { Meta, StoryObj } from '@storybook/react';
import { Underline } from './Underline';
import { UnderlineStyles } from './Underline.styles';

const meta: Meta<typeof Underline> = {
  title: 'Components/Underline',
  component: Underline,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Underline>;

export const Default: Story = {
  args: {
    ...UnderlineStyles,
  },
};
