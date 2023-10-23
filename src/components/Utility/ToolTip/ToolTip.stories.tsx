import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import ToolTipComponent, { ToolTipProps } from ".";
import Button from "../../Buttons/Button";
import MaterialIcon from "../MaterialIcon";

export default {
  title: "Utility/ToolTip",
  component: ToolTipComponent,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: {
      control: false,
    },
    tip: {
      control: "text",
    },
    negotiatePosition: {
      control: false,
    },
  },
} as ComponentMeta<typeof ToolTipComponent>;

const Template: ComponentStory<typeof ToolTipComponent> = (
  args: ToolTipProps
) => <ToolTipComponent {...args} />;

export const ToolTip = Template.bind({});
ToolTip.args = {
  children: <Button>Hover Over Me</Button>,
  tip: "Here's the tooltip",
  className: "",
  position: "top",
  show: false,
};
