import type { Meta, StoryObj } from '@storybook/react';
import { Minimize_2 } from './Minimize_2';
import { Minimize_2Styles } from './Minimize_2.styles';

const meta: Meta<typeof Minimize_2> = {
  title: 'Components/Minimize_2',
  component: Minimize_2,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Minimize_2>;

export const Default: Story = {
  args: {
    ...Minimize_2Styles,
  },
};
