import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { RenderPropsArgTypes } from "@sb/helpers";
import { Button } from "@components/Buttons/Button";
import { Disclosure } from ".";

export default {
  title: "Layouts/Disclosure/Disclosure",
  component: Disclosure,
  argTypes: {
    ...RenderPropsArgTypes,
    isExpanded: {
      type: "boolean",
    },
    defaultExpanded: {
      type: "boolean",
    },
    onExpandedChange: {
      table: {
        category: "Events",
      },
    },
  },
} as Meta<typeof Disclosure>;

type Story = StoryObj<typeof Disclosure>;

export const Primary: Story = {
  args: {
    onExpandedChange: fn(),
    children: [
      <Disclosure.Trigger key="trigger">
        Additional Information
      </Disclosure.Trigger>,
      <Disclosure.Panel key="panel">
        <p style={{ fontSize: "2rem" }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam atque
          ea, nisi vero nam libero, quae, quam dicta ratione autem voluptatum
          asperiores blanditiis. Sint delectus perspiciatis accusantium eaque
          nemo inventore! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Magnam atque ea, nisi vero nam libero, quae, quam dicta ratione
          autem voluptatum asperiores blanditiis. Sint delectus perspiciatis
          accusantium eaque nemo inventore!
        </p>
      </Disclosure.Panel>,
    ],
  },
};

export const CustomTrigger: Story = {
  args: {
    ...Primary.args,
    children: [
      <Button slot="trigger" key="button" variant="secondary">
        Additional Information
      </Button>,
      <Disclosure.Panel key="panel">
        <p style={{ fontSize: "2rem" }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam atque
          ea, nisi vero nam libero, quae, quam dicta ratione autem voluptatum
          asperiores blanditiis. Sint delectus perspiciatis accusantium eaque
          nemo inventore! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Magnam atque ea, nisi vero nam libero, quae, quam dicta ratione
          autem voluptatum asperiores blanditiis. Sint delectus perspiciatis
          accusantium eaque nemo inventore!
        </p>
      </Disclosure.Panel>,
    ],
  },
};

export const TriggerIcons: Story = {
  args: {
    ...Primary.args,
    children: [
      <Disclosure.Trigger
        key="trigger"
        icons={{
          expanded: "remove",
          collapsed: "add",
        }}
      >
        Additional Information
      </Disclosure.Trigger>,
      <Disclosure.Panel key="panel">
        <p style={{ fontSize: "2rem" }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam atque
          ea, nisi vero nam libero, quae, quam dicta ratione autem voluptatum
          asperiores blanditiis. Sint delectus perspiciatis accusantium eaque
          nemo inventore! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Magnam atque ea, nisi vero nam libero, quae, quam dicta ratione
          autem voluptatum asperiores blanditiis. Sint delectus perspiciatis
          accusantium eaque nemo inventore!
        </p>
      </Disclosure.Panel>,
    ],
  },
};
