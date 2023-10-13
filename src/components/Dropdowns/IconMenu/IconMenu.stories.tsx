import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import IconMenuComponent, { IconMenuProps } from ".";
import { CenterDecorator } from "../../storybook";

export default {
  title: "Dropdowns/IconMenu",
  component: IconMenuComponent,
  decorators: [CenterDecorator],
  argTypes: {
    buttonVariant: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "error",
        "success",
        "inverted",
        "content",
      ],
    },
    iconVariant: {
      control: "select",
      options: ["default", "outlined", "round", "sharp", "two-tone"],
    },
    position: {
      control: "select",
      options: [
        "top",
        "bottom",
        "left",
        "right",
        "bottom-right",
        "bottom-left",
        "top-right",
        "top-left",
      ],
    },
  },
} as ComponentMeta<typeof IconMenuComponent>;

const Template: ComponentStory<typeof IconMenuComponent> = (
  args: IconMenuProps
) => (
  <IconMenuComponent {...args}>
    <IconMenuComponent.Item icon="add_alert" onClick={() => {}}>
      Option 1
    </IconMenuComponent.Item>
    <IconMenuComponent.Item icon="info" onClick={() => {}}>
      Option 2
    </IconMenuComponent.Item>
    <IconMenuComponent.Item icon="alarm_on" onClick={() => {}}>
      Option 3
    </IconMenuComponent.Item>
  </IconMenuComponent>
);

export const IconMenu = Template.bind({});
IconMenu.args = {
  icon: "more_vert",
  label: "Custom dropdown label",
  disabled: false,
  position: "bottom-left",
  iconVariant: "default",
};
