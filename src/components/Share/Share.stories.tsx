import type { Meta, StoryObj } from '@storybook/react';
import { Share } from './Share';
import { ShareStyles } from './Share.styles';

const meta: Meta<typeof Share> = {
  title: 'Components/Share',
  component: Share,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Share>;

export const Default: Story = {
  args: {
    ...ShareStyles,
  },
};
