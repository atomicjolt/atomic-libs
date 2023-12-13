import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import IconMenuButton, { IconMenuButtonProps } from ".";
import Doc from "./IconMenuButton.doc.mdx";
import { CenterDecorator } from "../../storybook";
import IconMenu from "../../Dropdowns/IconMenu";

export default {
  title: "Buttons/IconMenuButton",
  component: IconMenuButton,
  decorators: [CenterDecorator],
  argTypes: {
    onClick: {
      control: false,
      table: {
        category: "Events",
      },
    },
    children: {
      control: "text",
    },
    variant: {
      control: "select",
      options: ["primary", "secondary", "error", "success", "inverted"],
    },
  },
  parameters: {
    docs: {
      page: Doc,
    },
  },
} as ComponentMeta<typeof IconMenuButton>;

const Template: ComponentStory<typeof IconMenuButton> = (args: IconMenuButtonProps) => (
  <IconMenuButton {...args} />
);

const iconMenuProps = {
  icon: "more_vert",
  label: "Custom dropdown label",
  disabled: false,
  position: "bottom-left",
  iconVariant: "default",
  children: <>
    <IconMenu.Item icon="add_alert" onClick={() => { }}>
      Option 1
    </IconMenu.Item>
    <IconMenu.Item icon="info" onClick={() => { }}>
      Option 2
    </IconMenu.Item>
    <IconMenu.Item icon="alarm_on" onClick={() => { }}>
      Option 3
    </IconMenu.Item>
  </>
}

export const Default = Template.bind({});
Default.args = {
  children: "Button",
  type: "button",
  disabled: false,
  loading: false,
  iconMenuProps,
};