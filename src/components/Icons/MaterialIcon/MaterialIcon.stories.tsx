import { Meta, StoryObj } from "@storybook/react";
import MaterialIcon from ".";

const meta: Meta<typeof MaterialIcon> = {
  title: "Icons/MaterialIcon",
  component: MaterialIcon,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof MaterialIcon>;

export const Primary: Story = {
  args: {
    icon: "house",
    size: "large",
  },
};
