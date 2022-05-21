import { ComponentMeta, ComponentStory } from "@storybook/react";
import RadioGroup, { Props } from ".";
import { DefaultInputProperties } from "../../../utils";
import Radio from "./Radio";

export default {
  title: "Inputs/RadioGroup",
  component: RadioGroup,
  argTypes: {
    children: {
      control: false,
    },
    onChange: {
      control: false,
    },
  },
  subcomponents: {
    Radio,
  },
} as ComponentMeta<typeof RadioGroup>;

const Template: ComponentStory<typeof RadioGroup> = (args: Props) => (
  <RadioGroup {...args}>
    <Radio value="opt1">Option 1</Radio>
    <Radio value="otp2">Option 2</Radio>
    <Radio value="opt3">Option 3</Radio>
  </RadioGroup>
);

export const Default = Template.bind({});
Default.args = {
  value: "opt1",
  name: "radiogroup",
  label: "Radio Group Label",
  hideLabel: false,
  error: "",
  message: "",
  disabled: false,
};

// Additional stories go here
