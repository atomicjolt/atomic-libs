import { Meta, StoryObj } from "@storybook/react";
import { FileInput } from ".";
import { NewInputControls } from "../../storybook";

const meta: Meta<typeof FileInput> = {
  title: "Inputs/Choose State/FileInput",
  component: FileInput,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ...NewInputControls,
    file: {
      control: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof FileInput>;

export const Primary: Story = {
  args: {
    label: "Choose a file...",
  },
};

export const WithFile: Story = {
  args: {
    ...Primary.args,
    file: new File(["test"], "test.txt"),
  },
};
