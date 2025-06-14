import type { Meta, StoryObj } from '@storybook/react';
import { Volume_1 } from './Volume_1';
import { Volume_1Styles } from './Volume_1.styles';

const meta: Meta<typeof Volume_1> = {
  title: 'Components/Volume_1',
  component: Volume_1,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Volume_1>;

export const Default: Story = {
  args: {
    ...Volume_1Styles,
  },
};
