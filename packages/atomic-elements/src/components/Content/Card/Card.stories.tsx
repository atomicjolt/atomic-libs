import { Meta, StoryObj } from "@storybook/react";
import { Card } from ".";
import { getCssProps } from "@sb/cssprops";
import { Divider } from "../Divider";
import { Text } from "../../Typography/Text";

export default {
  title: "Content/Card",
  component: Card,
  parameters: {
    cssprops: getCssProps("Card"),
  },
  subcomponents: {
    "Card.Title": Card.Title,
    "Card.Panel": Card.Panel,
    "Card.Columns": Card.Columns,
    "Card.Header": Card.Header,
  },
} as Meta<typeof Card>;

type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  args: {
    children: [
      <Card.Header key="header">
        <Card.Title>Card Title</Card.Title>
      </Card.Header>,
      <Card.Panel key="panel">
        <Text $size="3">Here is some content within a panel</Text>
      </Card.Panel>,
    ],
  },
};

export const WithColumns: Story = {
  args: {
    children: [
      <Card.Header key="header">
        <Card.Title>Card Title</Card.Title>
      </Card.Header>,
      <Card.Columns key="columns">
        <Card.Panel>
          <Text $size="3">Column 1</Text>
        </Card.Panel>
        <Card.Panel>
          <Text $size="3">Column 2</Text>
        </Card.Panel>
      </Card.Columns>,
    ],
  },
};

export const WithStack: Story = {
  args: {
    children: [
      <Card.Header key="header">
        <Card.Title>Card Title</Card.Title>
      </Card.Header>,
      <Card.Stack key="stack">
        <Card.Panel>
          <Text $size="3">Stack 1</Text>
        </Card.Panel>
        <Card.Panel>
          <Text $size="3">Stack 2</Text>
        </Card.Panel>
      </Card.Stack>,
    ],
  },
};

export const WithDivider: Story = {
  args: {
    ...Primary.args,
    children: [
      <Card.Panel key="panel1">
        <Text $size="3">Here is some content within a panel</Text>
      </Card.Panel>,
      <Divider key="divider" />,
      <Card.Panel key="panel2">
        <Text $size="3">Here is some content within a panel</Text>
      </Card.Panel>,
    ],
  },
};
