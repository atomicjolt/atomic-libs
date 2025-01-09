import { Meta, StoryObj } from "@storybook/react";
import { Disclosure, DisclosureGroup } from ".";
import { Flex } from "../Flex/Flex";
import { RenderPropsArgTypes } from "@sb/helpers";
import { fn } from "@storybook/test";

export default {
  title: "Layouts/Disclosure/DisclosureGroup",
  component: DisclosureGroup,
  argTypes: {
    ...RenderPropsArgTypes,
    allowsMultipleExpanded: {
      type: "boolean",
      description: "Allow multiple panels to be expanded at once",
    },
    defaultExpandedKeys: {
      description:
        "Keys of the panels that are expanded by default (uncontrolled)",
    },
    expandedKeys: {
      description: "Keys of the panels that are expanded (controlled)",
    },
    onExpandedChange: {
      table: {
        category: "Events",
      },
    },
    isDisabled: {
      type: "boolean",
      description: "Disable all panels",
    },
  },
} as Meta<typeof DisclosureGroup>;

type Story = StoryObj<typeof DisclosureGroup>;

export const Primary: Story = {
  args: {
    allowsMultipleExpanded: false,
    onExpandedChange: fn(),
    children: [
      <Flex key="flex" direction="column" gap="10px">
        <Disclosure key="d1" id="d1">
          <Disclosure.Trigger>First Disclosure</Disclosure.Trigger>
          <Disclosure.Panel>
            <p style={{ fontSize: "25px" }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
              aliquid consequuntur expedita ratione sed ab fugiat laudantium.
              Porro expedita, voluptate aspernatur consequatur inventore
              corporis odio voluptatem quod, corrupti, iste tempora.
            </p>
          </Disclosure.Panel>
        </Disclosure>
        <Disclosure key="d2" id="d2">
          <Disclosure.Trigger>Second Disclosure</Disclosure.Trigger>
          <Disclosure.Panel>
            <p style={{ fontSize: "25px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              nemo expedita officia quod, nihil molestiae voluptate vel
              laudantium facilis culpa debitis labore obcaecati temporibus ut
              repellendus, ab similique harum accusantium.
            </p>
          </Disclosure.Panel>
        </Disclosure>
      </Flex>,
    ],
  },
};
