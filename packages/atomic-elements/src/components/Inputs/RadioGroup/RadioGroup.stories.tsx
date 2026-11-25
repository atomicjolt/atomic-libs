import { Meta, StoryObj } from "@storybook/react-vite";
import {
  FieldStateControls,
  RenderPropsArgTypes,
  LoadingArgTypes,
} from "@sb/helpers";
import { radio } from "@styles/theme/component";
import { Radio, RadioGroup } from ".";

const meta: Meta<typeof RadioGroup> = {
  title: "Inputs/Choose State/RadioGroup",
  parameters: {
    layout: "centered",
    cssprops: { radio },
  },
  component: RadioGroup,
  subcomponents: { Radio },
  argTypes: {
    ...FieldStateControls,
    ...LoadingArgTypes,
    ...RenderPropsArgTypes,
    label: {
      control: "text",
      table: {
        category: "Helper Text",
      },
    },
    error: {
      control: "text",
      table: {
        category: "Helper Text",
      },
    },
    message: {
      control: "text",
      table: {
        category: "Helper Text",
      },
    },
    children: {
      ...RenderPropsArgTypes.children,
      description: "The `Radio` options in the group",
    },
    isReadOnly: {
      table: {
        category: "State",
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
    orientation: {
      control: "select",
      options: ["vertical", "horizontal"],
      description:
        "Sets `aria-orientation` (and, in right-to-left locales, which way the left and right arrow keys move). It doesn't change the visual layout: the radios always stack vertically.",
      table: {
        defaultValue: { summary: '"vertical"' },
      },
    },
    onChange: {
      action: "onChange",
      description: "Called with the selected radio's value when it changes",
      table: {
        category: "Events",
      },
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

export const WithDefaultValue: Story = {
  args: {
    ...Primary.args,
    defaultValue: "opt2",
  },
};

export const WithError: Story = {
  args: {
    ...Primary.args,
    isInvalid: true,
    error: "Please choose an option",
  },
};

export const Loading: Story = {
  args: {
    ...Primary.args,
    isLoading: true,
    loadingLabel: "Loading",
  },
};
