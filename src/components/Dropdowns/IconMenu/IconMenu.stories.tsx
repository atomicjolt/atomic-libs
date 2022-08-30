import { ComponentMeta, ComponentStory } from "@storybook/react";
import IconMenu, { Props } from ".";

export default {
  title: "Dropdowns/IconMenu",
  component: IconMenu,
} as ComponentMeta<typeof IconMenu>;

const Template: ComponentStory<typeof IconMenu> = (args: Props) => (
  <IconMenu {...args}>
    <IconMenu.Item icon="add_alert" onClick={() => {}}>
      Option 1
    </IconMenu.Item>
    <IconMenu.Item icon="info" onClick={() => {}}>
      Option 2
    </IconMenu.Item>
    <IconMenu.Item icon="alarm_on" onClick={() => {}}>
      Option 3
    </IconMenu.Item>
  </IconMenu>
);

export const Default = Template.bind({});
Default.args = {
  icon: "more_vert",
  label: "Custom dropdown label",
  dropRight: true,
  disabled: false,
};

// Additional stories go here
