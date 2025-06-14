import type { Meta, StoryObj } from '@storybook/react';
import { Tab } from './Tab';
import { TabStyles } from './Tab.styles';

const meta: Meta<typeof Tab> = {
  title: 'Components/Tab',
  component: Tab,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tab>;

export const Default: Story = {
  args: {
    ...TabStyles,
  },
};
