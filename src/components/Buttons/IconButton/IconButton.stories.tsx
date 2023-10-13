import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import IconButtonComponent, { IconButtonProps } from ".";
import { CenterDecorator } from "../../storybook";

export default {
  title: "Buttons/IconButton",
  component: IconButtonComponent,
  decorators: [CenterDecorator],
  argTypes: {
    onClick: {
      control: false,
    },
    variant: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "error",
        "success",
        "inverted",
        "content",
      ],
    },
  },
} as ComponentMeta<typeof IconButtonComponent>;

const Template: ComponentStory<typeof IconButtonComponent> = (
  args: IconButtonProps
) => <IconButtonComponent {...args} />;

export const IconButton = Template.bind({});

IconButton.args = {
  icon: "more_vert",
  ariaLabel: "More options",
  loading: false,
  loadingComplete: false,
  disabled: false,
};
