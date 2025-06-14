import type { Meta, StoryObj } from '@storybook/react';
import { Linkedin } from './Linkedin';
import { LinkedinStyles } from './Linkedin.styles';

const meta: Meta<typeof Linkedin> = {
  title: 'Components/Linkedin',
  component: Linkedin,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Linkedin>;

export const Default: Story = {
  args: {
    ...LinkedinStyles,
  },
};
