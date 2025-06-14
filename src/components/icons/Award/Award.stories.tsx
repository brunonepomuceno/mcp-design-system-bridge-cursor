import type { Meta, StoryObj } from '@storybook/react';
import { Award } from './Award';
import { AwardStyles } from './Award.styles';

const meta: Meta<typeof Award> = {
  title: 'Components/Award',
  component: Award,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Award>;

export const Default: Story = {
  args: {
    ...AwardStyles,
  },
};
