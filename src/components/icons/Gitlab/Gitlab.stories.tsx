import type { Meta, StoryObj } from '@storybook/react';
import { Gitlab } from './Gitlab';
import { GitlabStyles } from './Gitlab.styles';

const meta: Meta<typeof Gitlab> = {
  title: 'Components/Gitlab',
  component: Gitlab,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Gitlab>;

export const Default: Story = {
  args: {
    ...GitlabStyles,
  },
};
