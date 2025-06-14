import type { Meta, StoryObj } from '@storybook/react';
import { Component_Annotation } from './Component_Annotation';
import { Component_AnnotationStyles } from './Component_Annotation.styles';

const meta: Meta<typeof Component_Annotation> = {
  title: 'Components/Component_Annotation',
  component: Component_Annotation,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Component_Annotation>;

export const Default: Story = {
  args: {
    ...Component_AnnotationStyles,
  },
};
