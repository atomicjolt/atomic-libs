import { Meta, StoryObj } from "@storybook/react-vite";
import { MaterialIcon } from ".";

const meta: Meta<typeof MaterialIcon> = {
  title: "Icons/MaterialIcon",
  component: MaterialIcon,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      table: { defaultValue: { summary: '"medium"' } },
    },
    isDisabled: {
      table: { defaultValue: { summary: "false" } },
    },
    isFocusable: {
      table: { defaultValue: { summary: "false" } },
    },
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
