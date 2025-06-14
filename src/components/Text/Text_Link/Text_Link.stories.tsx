import type { Meta, StoryObj } from '@storybook/react';
import { Text_Link } from './Text_Link';
import { Text_LinkStyles } from './Text_Link.styles';

const meta: Meta<typeof Text_Link> = {
  title: 'Components/Text_Link',
  component: Text_Link,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Text_Link>;

export const Default: Story = {
  args: {
    ...Text_LinkStyles,
  },
};
