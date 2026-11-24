import { Meta, StoryObj } from "@storybook/react-vite";
import { ChipGroup } from ".";
import { InputControls, MultiSelectionArgTypes } from "@sb/helpers";
import { chip } from "@styles/theme/component";
import { Chip } from "../Chip";
import { fn } from "storybook/test";

export default {
  title: "Chips/ChipGroup",
  component: ChipGroup,
  parameters: {
    layout: "centered",
    cssprops: { chip },
  },
  argTypes: {
    ...InputControls,
    ...MultiSelectionArgTypes,
    children: {
      control: false,
      description: "`Chip` elements to render",
    },
    // Not supported by ChipGroup: isReadOnly and placeholder aren't in its
    // props, and name / isLoading / loadingLabel are accepted but ignored.
    isReadOnly: { table: { disable: true } },
    placeholder: { table: { disable: true } },
    name: { table: { disable: true } },
    isLoading: { table: { disable: true } },
    loadingLabel: { table: { disable: true } },
    onRemove: {
      description: "Function to call when a chip is removed",
      table: {
        category: "Events",
      },
    },
  },
} as Meta<typeof ChipGroup>;

type Story = StoryObj<typeof ChipGroup>;

export const Primary: Story = {
  args: {
    label: "Chip Group",
    children: [
      <Chip key="news" id="news">
        News
      </Chip>,
      <Chip key="travel" id="travel">
        Travel
      </Chip>,
      <Chip key="gaming" id="gaming">
        Gaming
      </Chip>,
      <Chip key="shopping" id="shopping">
        Shopping
      </Chip>,
    ],
  },
};

export const RemoveChip: Story = {
  args: {
    ...Primary.args,
    onRemove: fn(),
  },
};

export const MultipleSelection: Story = {
  args: {
    ...Primary.args,
    selectionMode: "multiple",
    defaultSelectedKeys: ["news", "shopping"],
  },
};

export const DisabledChips: Story = {
  args: {
    ...Primary.args,
    disabledKeys: ["shopping"],
  },
};

export const InlineLabel: Story = {
  args: {
    ...Primary.args,
    labelPlacement: "inline",
  },
};

export const WithMessage: Story = {
  args: {
    ...Primary.args,
    message: "Pick the topics you're interested in",
  },
};

export const WithError: Story = {
  args: {
    ...Primary.args,
    isInvalid: true,
    error: "Pick at least one topic",
  },
};
