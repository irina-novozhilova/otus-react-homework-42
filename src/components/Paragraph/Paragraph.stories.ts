import type { Meta, StoryObj } from '@storybook/react';

import { Paragraph } from './Paragraph';

const meta = {
  title: 'Paragraph',
  component: Paragraph,
  tags: ['autodocs'],
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const ParagraphText: Story = {
  args: {
    text: 'Paragraph text',
  },
};







