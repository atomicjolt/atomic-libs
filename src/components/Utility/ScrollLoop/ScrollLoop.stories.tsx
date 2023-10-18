import { ComponentMeta, ComponentStory } from "@storybook/react";
import ScrollLoop, { Props } from ".";

export default {
  title: "Utility/ScrollLoop",
  component: ScrollLoop,
} as ComponentMeta<typeof ScrollLoop>;

const Template: ComponentStory<typeof ScrollLoop> = (args: Props) => (
  <ScrollLoop {...args} />
);

export const Default = Template.bind({});
Default.args = {};

// Additional stories go here
