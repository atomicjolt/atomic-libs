import { Meta, StoryObj } from "@storybook/react";
import { Loading } from ".";
import { Button } from "@components/Buttons/Button";
import { CheckBox } from "@components/Inputs/Checkbox";
import { NumberInput } from "@components/Inputs/NumberInput";
import { SearchInput } from "@components/Inputs/SearchInput";
import { TextInput } from "@components/Inputs/TextInput";

const meta: Meta<typeof Loading> = {
  title: "Feedback/Loading",
  component: Loading,
  argTypes: {
    isLoading: {
      control: "boolean",
    },
    loadingLabel: {
      control: "text",
    },
    children: {
      control: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Loading>;

export const Primary: Story = {
  args: {
    isLoading: true,
    loadingLabel: "Loading",
    children: <TextInput label="Name" placeholder="Jane Doe" />,
  },
};

export const NotLoading: Story = {
  args: {
    ...Primary.args,
    isLoading: false,
  },
};

export const WrappingMultipleComponents: Story = {
  args: {
    isLoading: true,
    loadingLabel: "Loading",
    children: (
      <>
        <Button>Submit</Button>
        <CheckBox>Subscribe to updates</CheckBox>
      </>
    ),
  },
};

/**
 * A more realistic example: a form with several different field types, all wrapped
 * in a single `Loading` provider. None of the fields are passed `isLoading` directly -
 * they all pick up the ambient state from context. Toggle the switch to see every
 * field switch to its loading skeleton at once.
 */
export const ExampleForm: Story = {
  args: {
    isLoading: true,
    loadingLabel: "Loading",
    children: (
      <>
        <TextInput label="Name" isRequired />

        <br />

        <TextInput label="Email" isRequired />

        <br />

        <NumberInput label="Age" minValue={0} maxValue={120} />

        <br />

        <SearchInput label="Search contacts" onSubmit={() => {}} />

        <br />

        <CheckBox>Subscribe to updates</CheckBox>

        <br />
        <br />

        <Button>Save</Button>
      </>
    ),
  },
};
