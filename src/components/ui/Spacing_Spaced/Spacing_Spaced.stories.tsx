import type { Meta, StoryObj } from '@storybook/react';
import { Spacing_Spaced } from './Spacing_Spaced';
import { Spacing_SpacedStyles } from './Spacing_Spaced.styles';

const meta: Meta<typeof Spacing_Spaced> = {
  title: 'Components/Spacing_Spaced',
  component: Spacing_Spaced,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Spacing_Spaced>;

export const Default: Story = {
  args: {
    ...Spacing_SpacedStyles,
  },
};
