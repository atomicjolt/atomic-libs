import { ComponentMeta, ComponentStory } from "@storybook/react";
import IconButton, { Props } from ".";

export default {
  title: "Buttons/IconButton",
  component: IconButton,
  argTypes: {
    onClick: {
      control: false,
    },
  },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args: Props) => (
  <IconButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  icon: "more_vert",
  ariaLabel: "More options",
};
