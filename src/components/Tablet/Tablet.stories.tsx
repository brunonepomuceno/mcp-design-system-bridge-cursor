import type { Meta, StoryObj } from '@storybook/react';
import { Tablet } from './Tablet';
import { TabletStyles } from './Tablet.styles';

const meta: Meta<typeof Tablet> = {
  title: 'Components/Tablet',
  component: Tablet,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tablet>;

export const Default: Story = {
  args: {
    ...TabletStyles,
  },
};
