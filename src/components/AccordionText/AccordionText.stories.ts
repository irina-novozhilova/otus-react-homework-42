import type { Meta, StoryObj } from '@storybook/react';

import { AccordionText } from './AccordionText';

const meta = {
  title: 'Accordion',
  component: AccordionText,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: { type: 'radio' },
    }
  },
} satisfies Meta<typeof AccordionText>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const AccordionComponent: Story = {
  args: {
    size: 'h1',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    title: 'Hello otus!'
  },
};







