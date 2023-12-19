import React from "react";
import IconMenuButton from ".";
import IconMenu from "../../Dropdowns/IconMenu";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof IconMenuButton> = {
  title: "Buttons/IconMenuButton",
  component: IconMenuButton,
  argTypes: {
    onClick: {
      control: false,
      table: {
        category: "Events",
      },
    },
    children: {
      control: "text",
    },
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof IconMenuButton>;

export const Default: Story = {
  args: {
    children: "Button",
    type: "button",
    disabled: false,
    loading: false,
    menuIcon: "more_vert",
    menuLabel: "Custom dropdown label",
    menuDisabled: false,
    menuPosition: "bottom-right",
    menuIconVariant: "default",
    menuChildren: <>
      <IconMenu.Item icon="add_alert" onClick={() => { }}>
        Option 1
      </IconMenu.Item>
      <IconMenu.Item icon="info" onClick={() => { }}>
        Option 2
      </IconMenu.Item>
      <IconMenu.Item icon="alarm_on" onClick={() => { }}>
        Option 3
      </IconMenu.Item>
    </>
  }
};

export const Loading: Story = {
  args: {
    ...Default.args,
    loading: true,
    loadingLabel: "Now Loading",
  },
};

export const LoadingComplete: Story = {
  args: {
    ...Default.args,
    loading: true,
    loadingLabel: "Now Loading",
    loadingComplete: true,
  },
};
