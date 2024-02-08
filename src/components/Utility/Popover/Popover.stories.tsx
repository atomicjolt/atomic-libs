import React from "react";
import { createGlobalStyle } from "styled-components";
import { Meta, StoryObj } from "@storybook/react";
import PopoverComponent, { PopoverWrapper } from ".";

const meta: Meta<typeof PopoverComponent> = {
  title: "Atoms/Popover",
  component: PopoverComponent,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Comp) => (
      <>
        {/* @ts-ignore */}
        <WrapperStyles />
        {/* @ts-ignore */}
        <Comp />
      </>
    ),
  ],
  argTypes: {
    negotiatePosition: {
      control: false,
    },
  },
};

export default meta;

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

type Story = StoryObj<typeof PopoverComponent>;

export const Popover: Story = {
  render: (props) => (
    <PopoverWrapper>
      <p className="content">Here's the Content</p>
      {/* @ts-ignore */}
      <PopoverComponent {...props}>
        <div className="popover-content">Popover</div>
      </PopoverComponent>
    </PopoverWrapper>
  ),
  args: {
    show: true,
    size: "auto",
    position: "bottom-left",
  },
};
