import type { Meta, StoryObj } from "@storybook/react";

import { Search } from "./search";

const meta: Meta<typeof Search> = {
  title: "Design System/Search",
  component: Search,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Search>;

export const Default: Story = {
  args: {},
};
