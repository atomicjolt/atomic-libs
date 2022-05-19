import { ComponentMeta, ComponentStory } from "@storybook/react";
import NumberInput, { Props } from ".";
import { DefaultInputProperties } from "../../../utils";

export default {
  title: "Inputs/NumberInput",
  component: NumberInput,
} as ComponentMeta<typeof NumberInput>;

const Template: ComponentStory<typeof NumberInput> = (args: Props) => (
  <NumberInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  value: undefined,
  min: 0,
  max: undefined,
  ...DefaultInputProperties,
  size: "small",
  label: "Number input label",
};

// Additional stories go here
