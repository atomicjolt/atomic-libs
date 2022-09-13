import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import IconMenuComponent, { IconMenuProps } from ".";

export default {
  title: "Dropdowns/IconMenu",
  component: IconMenuComponent,
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
};
