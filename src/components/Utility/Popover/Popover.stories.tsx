import React from "react";
import { createGlobalStyle } from "styled-components";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import PopoverComponent, { PopoverWrapper } from ".";
import { PopoverProps } from "./Popover.types";
import { CenterDecorator } from "../../storybook";

export default {
  title: "Utility/Popover",
  component: PopoverComponent,
  decorators: [
    CenterDecorator,
    (Story) => (
      <>
        <WrapperStyles />
        <Story />
      </>
    ),
  ],
  argTypes: {
    negotiatePosition: {
      control: false,
    },
  },
} as ComponentMeta<typeof PopoverComponent>;

const WrapperStyles = createGlobalStyle`
  .content, .popover-content {
    margin: 0px;
    font-size: 20px;
    border: 1px solid grey;
    border-radius: 10px;
    padding: 10px
  }

  .popover-content {
    font-size: 14px;
  }
`;

const Template: ComponentStory<typeof PopoverComponent> = (
  args: PopoverProps
) => {
  return (
    <PopoverWrapper>
      <p className="content">Here's the Content</p>
      <PopoverComponent {...args}>
        <div className="popover-content">Popover</div>
      </PopoverComponent>
    </PopoverWrapper>
  );
};

export const Popover = Template.bind({});
Popover.args = {
  show: true,
  size: "auto",
  position: "bottom-left",
};
