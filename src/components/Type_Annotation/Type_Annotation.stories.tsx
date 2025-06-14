import type { Meta, StoryObj } from '@storybook/react';
import { Type_Annotation } from './Type_Annotation';
import { Type_AnnotationStyles } from './Type_Annotation.styles';

const meta: Meta<typeof Type_Annotation> = {
  title: 'Components/Type_Annotation',
  component: Type_Annotation,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Type_Annotation>;

export const Default: Story = {
  args: {
    ...Type_AnnotationStyles,
  },
};
