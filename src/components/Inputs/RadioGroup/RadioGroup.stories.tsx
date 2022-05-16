import { ComponentMeta, ComponentStory } from "@storybook/react";
import RadioGroup, { Props } from ".";

export default {
  title: "Inputs/RadioGroup",
  component: RadioGroup,
} as ComponentMeta<typeof RadioGroup>;

const Template: ComponentStory<typeof RadioGroup> = (args: Props) => (
  <RadioGroup {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Radio Group label",
  name: "radiogroup",
  options: [
    { label: "Radio One", id: "rad1" },
    { label: "Radio Two", id: "rad2" },
    { label: "Radio Three", id: "rad3" },
  ],
};

// Additional stories go here
