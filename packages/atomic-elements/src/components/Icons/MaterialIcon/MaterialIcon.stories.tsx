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
      description: "Size of the icon",
      table: { defaultValue: { summary: '"medium"' } },
    },
    isDisabled: {
      description: "Applies disabled styling (`data-disabled`)",
      table: { defaultValue: { summary: "false" } },
    },
    isFocusable: {
      description: "Makes the icon focusable",
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
