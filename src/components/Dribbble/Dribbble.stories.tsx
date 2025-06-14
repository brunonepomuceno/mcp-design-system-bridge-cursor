import type { Meta, StoryObj } from '@storybook/react';
import { Dribbble } from './Dribbble';
import { DribbbleStyles } from './Dribbble.styles';

const meta: Meta<typeof Dribbble> = {
  title: 'Components/Dribbble',
  component: Dribbble,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Dribbble>;

export const Default: Story = {
  args: {
    ...DribbbleStyles,
  },
};
