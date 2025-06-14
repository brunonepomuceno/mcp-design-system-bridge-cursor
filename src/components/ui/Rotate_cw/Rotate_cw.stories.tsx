import type { Meta, StoryObj } from '@storybook/react';
import { Rotate_cw } from './Rotate_cw';
import { Rotate_cwStyles } from './Rotate_cw.styles';

const meta: Meta<typeof Rotate_cw> = {
  title: 'Components/Rotate_cw',
  component: Rotate_cw,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Rotate_cw>;

export const Default: Story = {
  args: {
    ...Rotate_cwStyles,
  },
};
