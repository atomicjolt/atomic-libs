import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { PageSizeSelect } from ".";
import { AriaLabelArgTypes } from "@sb/helpers";

export default {
  title: "Pagination/PageSizeSelect",
  component: PageSizeSelect,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ...AriaLabelArgTypes,
  },
} as Meta<typeof PageSizeSelect>;

type Story = StoryObj<typeof PageSizeSelect>;

export const Primary: Story = {
  args: {
    page: 1,
    pageSize: 10,
    totalItems: 142,
    onSelectPageSize: fn(),
  },
};
