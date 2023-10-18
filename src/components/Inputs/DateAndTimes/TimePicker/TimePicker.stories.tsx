import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import TimePickerComponent, { Props } from ".";

export default {
  title: "Inputs/Date & Time/TimePicker",
  component: TimePickerComponent,
  argTypes: {
    onChange: { control: false, table: { category: "actions" } },
  },
} as ComponentMeta<typeof TimePickerComponent>;

const Template: ComponentStory<typeof TimePickerComponent> = (args: Props) => {
  return <TimePickerComponent {...args} />;
};

export const TimePicker = Template.bind({});
TimePicker.args = {
  time: { hours: 12, minutes: 15 },
};

// Additional stories go here
