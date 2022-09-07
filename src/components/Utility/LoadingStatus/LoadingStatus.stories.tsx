import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import LoadingStatusComp, { LoadingStatusProps } from ".";
import Doc from "./LoadingStatus.doc.mdx";

export default {
  title: "Utility/LoadingStatus",
  component: LoadingStatusComp,
  parameters: {
    docs: { page: Doc },
  },
  argTypes: {
    error: {
      control: {
        type: "text",
      },
    },
    loadingMessage: {
      control: {
        type: "text",
      },
    },
    children: {
      control: false,
    },
  },
} as ComponentMeta<typeof LoadingStatusComp>;

const Template: ComponentStory<typeof LoadingStatusComp> = (
  args: LoadingStatusProps
) => (
  <LoadingStatusComp {...args}>
    <div>Here's some Content that will render when loading completes</div>
  </LoadingStatusComp>
);

export const LoadingStatus = Template.bind({});
LoadingStatus.args = {
  loading: true,
  loadingMessage: "Loading, please wait...",
  error: "",
};

// Additional stories go here
