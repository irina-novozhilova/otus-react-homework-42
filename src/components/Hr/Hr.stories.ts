import type { Meta, StoryObj } from "@storybook/react";

import { Hr } from "./Hr";

const meta = {
  title: "Hr",
  component: Hr,
  tags: ["autodocs"],
} satisfies Meta<typeof Hr>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const HrComponent: Story = {};
