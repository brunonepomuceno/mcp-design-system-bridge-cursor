import type { Meta, StoryObj } from '@storybook/react';
import { Voicemail } from './Voicemail';
import { VoicemailStyles } from './Voicemail.styles';

const meta: Meta<typeof Voicemail> = {
  title: 'Components/Voicemail',
  component: Voicemail,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Voicemail>;

export const Default: Story = {
  args: {
    ...VoicemailStyles,
  },
};
