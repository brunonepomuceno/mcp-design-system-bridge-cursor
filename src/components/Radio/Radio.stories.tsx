import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';
import { RadioStyles } from './Radio.styles';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    ...RadioStyles,
  },
};
