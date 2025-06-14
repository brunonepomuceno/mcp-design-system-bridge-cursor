import type { Meta, StoryObj } from '@storybook/react';
import { Spacing_Overlap } from './Spacing_Overlap';
import { Spacing_OverlapStyles } from './Spacing_Overlap.styles';

const meta: Meta<typeof Spacing_Overlap> = {
  title: 'Components/Spacing_Overlap',
  component: Spacing_Overlap,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Spacing_Overlap>;

export const Default: Story = {
  args: {
    ...Spacing_OverlapStyles,
  },
};
