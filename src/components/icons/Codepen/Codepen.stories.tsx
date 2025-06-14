import type { Meta, StoryObj } from '@storybook/react';
import { Codepen } from './Codepen';
import { CodepenStyles } from './Codepen.styles';

const meta: Meta<typeof Codepen> = {
  title: 'Components/Codepen',
  component: Codepen,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Codepen>;

export const Default: Story = {
  args: {
    ...CodepenStyles,
  },
};
