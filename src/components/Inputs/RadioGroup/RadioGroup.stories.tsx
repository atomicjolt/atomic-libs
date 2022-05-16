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
};

// Additional stories go here
