import { ComponentMeta, ComponentStory } from "@storybook/react";
import MaterialIcon, { Props } from ".";

export default {
  title: "Utility/MaterialIcon",
  component: MaterialIcon,
} as ComponentMeta<typeof MaterialIcon>;

const Template: ComponentStory<typeof MaterialIcon> = (args: Props) => (
  <MaterialIcon {...args} />
);

export const Default = Template.bind({});
Default.args = {
  icon: "search",
  size: "medium",
  disabled: false,
  className: "",
};

// Additional stories go here
