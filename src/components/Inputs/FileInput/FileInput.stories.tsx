import { Meta, StoryObj } from "@storybook/react";
import FileInput from ".";
import { CallbackControls, inputProperties } from "../../storybook";

const meta: Meta<typeof FileInput> = {
  title: "Inputs/Choose State/FileInput",
  component: FileInput,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    file: {
      control: false,
    },
    ...CallbackControls,
  },
};

export default meta;

type Story = StoryObj<typeof FileInput>;

export const Primary: Story = {
  args: {
    ...inputProperties({ filter: ["hideLabel", "size", "message"] }),
    label: "Choose a file...",
  },
};

export const WithFile: Story = {
  args: {
    ...Primary.args,
    file: new File(["test"], "test.txt"),
  },
};
