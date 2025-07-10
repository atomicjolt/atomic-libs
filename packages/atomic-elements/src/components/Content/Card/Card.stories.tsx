import { Meta, StoryObj } from "@storybook/react";
import { getCssProps } from "@sb/cssprops";
import { Divider } from "../Divider";
import { Text } from "../../Typography/Text";
import { IconButton } from "@components/Buttons/IconButton";
import { Flex } from "@components/Layout/Flex";
import { Card } from ".";

export default {
  title: "Content/Card",
  component: Card,
  parameters: {
    cssprops: getCssProps("Card"),
  },
  subcomponents: {
    "Card.Header": Card.Header,
    "Card.Title": Card.Title,
    "Card.Panel": Card.Panel,
    "Card.Columns": Card.Columns,
    "Card.Stack": Card.Stack,
    "Card.Grid": Card.Grid,
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

export const WithGrid: Story = {
  args: {
    children: [
      <Card.Header key="header">
        <Card.Title>Card Title</Card.Title>
      </Card.Header>,
      <Card.Grid key="grid" $columns="2" $rows="2">
        <Card.Panel>
          <Text $size="3">Panel 1</Text>
        </Card.Panel>
        <Card.Panel>
          <Text $size="3">Panel 2</Text>
        </Card.Panel>
        <Card.Panel>
          <Text $size="3">Panel 3</Text>
        </Card.Panel>
        <Card.Panel>
          <Text $size="3">Panel 4</Text>
        </Card.Panel>
      </Card.Grid>,
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

export const WithActions: Story = {
  args: {
    ...Primary.args,
    children: [
      <Card.Header $justify="space-between">
        <Card.Title>Card Title</Card.Title>
        <Flex $gap="2">
          <IconButton icon="add" />
          <IconButton icon="delete" />
        </Flex>
      </Card.Header>,
      <Card.Panel>
        <Text $size="3">Here is some content within a panel</Text>
      </Card.Panel>,
    ],
  },
};
