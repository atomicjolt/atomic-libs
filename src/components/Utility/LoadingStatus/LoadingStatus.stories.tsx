import { ComponentMeta, ComponentStory } from "@storybook/react";
import LoadingStatus, { Props } from ".";
import Doc from "./LoadingStatus.doc.mdx";

export default {
  title: "Utility/LoadingStatus",
  component: LoadingStatus,
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
} as ComponentMeta<typeof LoadingStatus>;

const Template: ComponentStory<typeof LoadingStatus> = (args: Props) => (
  <LoadingStatus {...args}>
    <div>Here's some Content that will render when loading completes</div>
  </LoadingStatus>
);

export const Default = Template.bind({});
Default.args = {
  loading: true,
  loadingMessage: "Loading, please wait...",
  error: "",
};

// Additional stories go here
