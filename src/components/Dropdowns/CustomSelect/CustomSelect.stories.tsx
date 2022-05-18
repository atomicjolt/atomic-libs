import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useEffect, useState } from "react";
import CustomSelect, { Props } from ".";

export default {
  title: "Dropdowns/CustomSelect",
  component: CustomSelect,
} as ComponentMeta<typeof CustomSelect>;

const Template: ComponentStory<typeof CustomSelect> = (args: Props<any>) => {
  const { selected: initial, onSelect: _ignore, ...props } = args;
  const [selected, setSelected] = useState<string | null>(initial);

  useEffect(() => setSelected(initial), [initial]);

  return (
    // @ts-ignore
    <CustomSelect onSelect={setSelected} selected={selected} {...props} />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "Custom Select label",
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
  label: "Custom Select label",
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
