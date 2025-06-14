import type { Meta, StoryObj } from '@storybook/react';
import { Briefcase } from './Briefcase';
import { BriefcaseStyles } from './Briefcase.styles';

const meta: Meta<typeof Briefcase> = {
  title: 'Components/Briefcase',
  component: Briefcase,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Briefcase>;

export const Default: Story = {
  args: {
    ...BriefcaseStyles,
  },
};
