import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useEffect, useState } from "react";
import CustomDropdown, { Props } from ".";

export default {
  title: "Dropdowns/CustomDropdown",
  component: CustomDropdown,
} as ComponentMeta<typeof CustomDropdown>;

const Template: ComponentStory<typeof CustomDropdown> = (args: Props<any>) => {
  const { selected: initial, onSelect: _ignore, ...props } = args;
  const [selected, setSelected] = useState<string | null>(initial);

  useEffect(() => setSelected(initial), [initial]);

  return (
    // @ts-ignore
    <CustomDropdown onSelect={setSelected} selected={selected} {...props} />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "Custom dropdown label",
  selected: "opt1",
  options: [
    {
      label: "Option 1",
      value: "opt1",
    },
    {
      label: "Option 2",
      value: "opt2",
    },
  ],
  empty: false,
};

export const EmptyAllowed = Template.bind({});
EmptyAllowed.args = {
  label: "Custom dropdown label",
  selected: null,
  options: [
    {
      label: "Option 1",
      value: "opt1",
    },
    {
      label: "Option 2",
      value: "opt2",
    },
  ],
  empty: true,
  emptyLabel: "-- Select Option --",
};

// Additional stories go here
