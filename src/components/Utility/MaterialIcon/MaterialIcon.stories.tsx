import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import MaterialIconComponent, { MaterialIconProps } from ".";

export default {
  title: "Utility/MaterialIcon",
  component: MaterialIconComponent,
} as ComponentMeta<typeof MaterialIconComponent>;

const Template: ComponentStory<typeof MaterialIconComponent> = (
  args: MaterialIconProps
) => <MaterialIconComponent {...args} />;

export const MaterialIcon = Template.bind({});
MaterialIcon.args = {
  icon: "home",
  size: "medium",
  disabled: false,
  className: "",
};

// Additional stories go here
