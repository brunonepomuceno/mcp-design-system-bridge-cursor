import type { Meta, StoryObj } from '@storybook/react';
import { Speaker } from './Speaker';
import { SpeakerStyles } from './Speaker.styles';

const meta: Meta<typeof Speaker> = {
  title: 'Components/Speaker',
  component: Speaker,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Speaker>;

export const Default: Story = {
  args: {
    ...SpeakerStyles,
  },
};
