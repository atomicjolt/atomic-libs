import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { RadioGroup, Radio } from ".";
import { InputControls } from "@sb/helpers";
import { getCssProps } from "@sb/cssprops";

const meta: Meta<typeof RadioGroup> = {
  title: "Inputs/Choose State/RadioGroup",
  parameters: {
    layout: "centered",
    cssprops: getCssProps("Choose"),
  },
  component: RadioGroup,
  //  @ts-ignore
  subcomponents: { Radio },
  argTypes: {
    ...InputControls,
    children: {
      control: false,
    },
    isReadOnly: {
      table: {
        category: "Field State",
      },
    },
    value: {
      description: "The value of the selected radio in a controlled component",
      control: "select",
      options: ["opt1", "opt2", "opt3"],
    },
    defaultValue: {
      description:
        "The value of the selected radio in an uncontrolled component",
      control: "select",
      options: ["opt1", "opt2", "opt3"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Primary: Story = {
  args: {
    label: "Radio Group Label",
    children: [
      <Radio key="1" value="opt1">
        Option 1
      </Radio>,
      <Radio key="2" value="opt2">
        Option 2
      </Radio>,
      <Radio key="3" value="opt3">
        Option 3
      </Radio>,
    ],
  },
};

export const WithDisabledOptions: Story = {
  args: {
    label: "Radio Group Label",
    children: [
      <Radio key="1" value="opt1">
        Option 1
      </Radio>,
      <Radio key="2" value="opt2" isDisabled>
        Option 2
      </Radio>,
      <Radio key="3" value="opt3">
        Option 3
      </Radio>,
    ],
  },
};
