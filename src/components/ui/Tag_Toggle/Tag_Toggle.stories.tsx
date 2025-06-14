import type { Meta, StoryObj } from '@storybook/react';
import { Tag_Toggle } from './Tag_Toggle';
import { Tag_ToggleStyles } from './Tag_Toggle.styles';

const meta: Meta<typeof Tag_Toggle> = {
  title: 'Components/Tag_Toggle',
  component: Tag_Toggle,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tag_Toggle>;

export const Default: Story = {
  args: {
    ...Tag_ToggleStyles,
  },
};
