import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import Combobox, { Props } from ".";

export default {
  title: "Dropdowns/Combobox",
  component: Combobox,
} as ComponentMeta<typeof Combobox>;

const Template: ComponentStory<typeof Combobox> = (args: Props<any>) => {
  const { selected: selectedInital, ...props } = args;
  const [selected, setSelected] = useState(selectedInital);

  return <Combobox {...props} selected={selected} onSelect={setSelected} />;
};

export const Default = Template.bind({});
Default.args = {
  label: "Combobox label",
  selected: null,
  options: [
    {
      title: "Option 1",
      value: "opt1",
    },
    {
      title: "Option 2",
      value: "opt2",
    },
    {
      title: "Option 3",
      value: "opt3",
    },
  ],
};

// Additional stories go here
