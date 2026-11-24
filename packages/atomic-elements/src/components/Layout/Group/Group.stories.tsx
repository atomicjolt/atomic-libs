import { Meta, StoryObj } from "@storybook/react-vite";
import { Group } from ".";
import { Button } from "../../Buttons/Button";
import { TextInput } from "../../Inputs/TextInput";
import { FlexArgTypes, LayoutArgTypes, RenderPropsArgTypes } from "@sb/helpers";

export default {
  title: "Layouts/Group",
  component: Group,
  parameters: {
    layout: "centered",
    primaryStyleProps: ["$direction"],
  },

  argTypes: {
    ...RenderPropsArgTypes,
    ...LayoutArgTypes,
    ...FlexArgTypes,
    isMerged: { control: "boolean" },
    $direction: {
      ...FlexArgTypes.$direction,
      table: {
        ...FlexArgTypes.$direction?.table,
        defaultValue: { summary: '"row"' },
      },
    },
  },
} as Meta<typeof Group>;

type Story = StoryObj<typeof Group>;

export const Buttons: Story = {
  args: {
    isMerged: true,
    children: [
      <Button key="1" variant="secondary">
        Button 1
      </Button>,
      <Button key="2" variant="secondary">
        Button 2
      </Button>,
      <Button key="3" variant="secondary">
        Button 3
      </Button>,
    ],
  },
};

export const InputsAndButton: Story = {
  args: {
    isMerged: true,
    children: [
      <TextInput key="1" aria-label="Username" placeholder="Username" />,
      <TextInput key="2" aria-label="Password" placeholder="Password" />,
      <Button key="3" variant="primary">
        Login
      </Button>,
    ],
  },
};

export const Vertical: Story = {
  args: {
    isMerged: true,
    $direction: "column",
    children: [
      <Button key="1" variant="secondary">
        Button 1
      </Button>,
      <Button key="2" variant="secondary">
        Button 2
      </Button>,
      <Button key="3" variant="secondary">
        Button 3
      </Button>,
    ],
  },
};
