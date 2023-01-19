import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import BasicModalC, { BasicModalProps } from ".";

export default {
  title: "Modals/Basic Modal",
  component: BasicModalC,
} as ComponentMeta<typeof BasicModalC>;

const Template: ComponentStory<typeof BasicModalC> = (
  args: BasicModalProps
) => <BasicModalC {...args} />;

export const BasicModal = Template.bind({});
BasicModal.args = {
  open: true,
  children: "Modal Content",
};
