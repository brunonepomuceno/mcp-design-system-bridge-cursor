import type { Meta, StoryObj } from '@storybook/react';
import { Volume_2 } from './Volume_2';
import { Volume_2Styles } from './Volume_2.styles';

const meta: Meta<typeof Volume_2> = {
  title: 'Components/Volume_2',
  component: Volume_2,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Volume_2>;

export const Default: Story = {
  args: {
    ...Volume_2Styles,
  },
};
