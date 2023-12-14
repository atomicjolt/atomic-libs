import { Meta, StoryObj } from "@storybook/react";
import { add } from "date-fns";
import Calendar from ".";

const meta: Meta<typeof Calendar> = {
  title: "Inputs/Date & Time/Calendar",
  component: Calendar,
  argTypes: {
    date: {
      control: "date",
    },
    onSelect: {
      control: false,
    },
    interval: {
      control: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Calendar>;

export const Primary: Story = {
  args: {
    date: new Date(),
    showNeighbors: true,
    showEra: false,
    size: "medium",
    interval: false,
    disabled: false,
    withTime: false,
  },
};

export const WithInterval: Story = {
  args: {
    date: [new Date(), add(new Date(), { days: 5 })],
    interval: true,
    showNeighbors: true,
    showEra: false,
    size: "medium",
  },
};

export const WithTime: Story = {
  args: {
    ...Primary.args,
    withTime: true,
  },
};
