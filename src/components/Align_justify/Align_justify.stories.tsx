import type { Meta, StoryObj } from '@storybook/react';
import { Align_justify } from './Align_justify';
import { Align_justifyStyles } from './Align_justify.styles';

const meta: Meta<typeof Align_justify> = {
  title: 'Components/Align_justify',
  component: Align_justify,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Align_justify>;

export const Default: Story = {
  args: {
    ...Align_justifyStyles,
  },
};
