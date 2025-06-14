import type { Meta, StoryObj } from '@storybook/react';
import { Link } from './Link';
import { LinkStyles } from './Link.styles';

const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    ...LinkStyles,
  },
};
