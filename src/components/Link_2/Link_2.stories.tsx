import type { Meta, StoryObj } from '@storybook/react';
import { Link_2 } from './Link_2';
import { Link_2Styles } from './Link_2.styles';

const meta: Meta<typeof Link_2> = {
  title: 'Components/Link_2',
  component: Link_2,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Link_2>;

export const Default: Story = {
  args: {
    ...Link_2Styles,
  },
};
