import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { add } from "date-fns";
import Calendar, { Props } from ".";

export default {
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
} as ComponentMeta<typeof Calendar>;

const Template: ComponentStory<typeof Calendar> = (args: Props) => {
  return <Calendar {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  date: new Date(),
  showNeighbors: true,
  showEra: false,
  size: "medium",
  interval: false,
};

export const CalendarWithInterval = Template.bind({});
CalendarWithInterval.args = {
  ...Default.args,
  date: [new Date(), add(new Date(), { days: 5 })],
  interval: true,
};

// Additional stories go here
