import type { Meta, StoryObj } from '@storybook/react';
import { Menu_Heading } from './Menu_Heading';
import { Menu_HeadingStyles } from './Menu_Heading.styles';

const meta: Meta<typeof Menu_Heading> = {
  title: 'Components/Menu_Heading',
  component: Menu_Heading,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Menu_Heading>;

export const Default: Story = {
  args: {
    ...Menu_HeadingStyles,
  },
};
