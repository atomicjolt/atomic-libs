import { ComponentMeta, ComponentStory } from "@storybook/react";
import Radio, { Props } from ".";

export default {
  title: "Inputs/Radio",
  component: Radio,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args: Props) => (
  <Radio {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Radio label",
  name: "radio",
};

// Additional stories go here
