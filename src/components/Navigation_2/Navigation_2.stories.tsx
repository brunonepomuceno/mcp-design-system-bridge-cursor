import type { Meta, StoryObj } from '@storybook/react';
import { Navigation_2 } from './Navigation_2';
import { Navigation_2Styles } from './Navigation_2.styles';

const meta: Meta<typeof Navigation_2> = {
  title: 'Components/Navigation_2',
  component: Navigation_2,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Navigation_2>;

export const Default: Story = {
  args: {
    ...Navigation_2Styles,
  },
};
