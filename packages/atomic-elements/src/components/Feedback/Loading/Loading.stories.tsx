import { Meta, StoryObj } from "@storybook/react-vite";
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
      description:
        "The ambient loading state. Descendants that read their loading state with `useLoading` (inputs, buttons, `LoadingStatus`…) show their loading state while it's true, unless they're given their own `isLoading`. Also sets `aria-busy` on the wrapper.",
      table: { category: "State" },
    },
    loadingLabel: {
      control: "text",
      description:
        'Announced to screen readers through a visually hidden status region while `isLoading` is true. Descendants don\'t receive it: they get the translated "loading" string instead.',
      table: { category: "State" },
    },
    children: {
      control: false,
      description: "Content that shares the loading state.",
    },
    // Accepted through BaseProps but not applied by Loading.
    id: { table: { disable: true } },
    size: { table: { disable: true } },
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
  },
  render: (args) => (
    <Loading {...args}>
      <Button>Submit</Button>
      <CheckBox>Subscribe to updates</CheckBox>
    </Loading>
  ),
};

/**
 * A more realistic example: a form with several different field types, all wrapped
 * in a single `Loading` provider. None of the fields are passed `isLoading` directly -
 * they all pick up the ambient state from context. Toggle the `isLoading` control to see every
 * field switch to its loading skeleton at once.
 */
export const ExampleForm: Story = {
  args: {
    isLoading: true,
    loadingLabel: "Loading",
  },
  render: (args) => (
    <Loading {...args}>
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
    </Loading>
  ),
};
