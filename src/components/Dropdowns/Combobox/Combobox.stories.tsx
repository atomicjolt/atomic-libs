import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import Combobox, { Props } from ".";

export default {
  title: "Dropdowns/Combobox",
  component: Combobox,
} as ComponentMeta<typeof Combobox>;

const Template: ComponentStory<typeof Combobox> = (args: Props<any>) => {
  const { value: valueInital, ...props } = args;
  const [value, setValue] = useState(valueInital);

  return <Combobox {...props} value={value} onChange={setValue} />;
};

export const Default = Template.bind({});
Default.args = {
  label: "Combobox label",
  value: "",
  options: ["Option 1", "Option 2", "Option 3"],
  id: "example-comp",
};

// Additional stories go here
