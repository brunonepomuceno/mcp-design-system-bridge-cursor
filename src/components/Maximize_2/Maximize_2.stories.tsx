import type { Meta, StoryObj } from '@storybook/react';
import { Maximize_2 } from './Maximize_2';
import { Maximize_2Styles } from './Maximize_2.styles';

const meta: Meta<typeof Maximize_2> = {
  title: 'Components/Maximize_2',
  component: Maximize_2,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Maximize_2>;

export const Default: Story = {
  args: {
    ...Maximize_2Styles,
  },
};
