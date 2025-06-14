import type { Meta, StoryObj } from '@storybook/react';
import { Page_Accordion } from './Page_Accordion';
import { Page_AccordionStyles } from './Page_Accordion.styles';

const meta: Meta<typeof Page_Accordion> = {
  title: 'Components/Page_Accordion',
  component: Page_Accordion,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Page_Accordion>;

export const Default: Story = {
  args: {
    ...Page_AccordionStyles,
  },
};
