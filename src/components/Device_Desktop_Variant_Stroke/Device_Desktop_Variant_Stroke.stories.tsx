import type { Meta, StoryObj } from '@storybook/react';
import { Device_Desktop_Variant_Stroke } from './Device_Desktop_Variant_Stroke';
import { Device_Desktop_Variant_StrokeStyles } from './Device_Desktop_Variant_Stroke.styles';

const meta: Meta<typeof Device_Desktop_Variant_Stroke> = {
  title: 'Components/Device_Desktop_Variant_Stroke',
  component: Device_Desktop_Variant_Stroke,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Device_Desktop_Variant_Stroke>;

export const Default: Story = {
  args: {
    ...Device_Desktop_Variant_StrokeStyles,
  },
};
