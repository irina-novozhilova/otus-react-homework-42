import type { Meta, StoryObj } from "@storybook/react";

import { Image } from "./Image";

// @ts-ignore
import imageFile from "./image.jpeg";

const meta = {
  title: "Image",
  component: Image,
  tags: ["autodocs"],
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const ImageComponent: Story = {
  args: {
    src: imageFile,
    alt: "Loki",
    title: "Loki Image",
  },
};
