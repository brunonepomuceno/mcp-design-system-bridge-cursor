import React from 'react';
import { Story, Meta } from '@storybook/react';
import Box from './Box';

export default {
  title: 'Components/Box',
  component: Box,
} as Meta;

const Template: Story = args => <Box {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const CustomBackground = Template.bind({});
CustomBackground.args = {
  backgroundColor: 'lightblue',
};

export const CustomTextColor = Template.bind({});
CustomTextColor.args = {
  textColor: 'darkblue',
};
