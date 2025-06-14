import type { Meta, StoryObj } from '@storybook/react';
import { Refresh_cw } from './Refresh_cw';
import { Refresh_cwStyles } from './Refresh_cw.styles';

const meta: Meta<typeof Refresh_cw> = {
  title: 'Components/Refresh_cw',
  component: Refresh_cw,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Refresh_cw>;

export const Default: Story = {
  args: {
    ...Refresh_cwStyles,
  },
};
