import type { Meta, StoryObj } from '@storybook/react';

import { Image } from './Image';

const meta = {
  title: 'Header',
  component: Image,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Heading: Story = {
  args: {
    size: 'h1',
    text: 'Heading Title',
  },
};







