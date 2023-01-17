import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Popover, { PopoverWrapper, PopoverProps } from ".";

export default {
  title: "Utility/Popover",
  component: Popover,
  decorators: [
    (Story) => (
      <div style={{ padding: "5rem", width: "max-content" }}>
        <PopoverWrapper>
          <Story />
        </PopoverWrapper>
      </div>
    ),
  ],
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args: PopoverProps) => {
  const [show, setShow] = React.useState(false);

  return (
    <>
      <p style={{ fontSize: "20px", backgroundColor: "peru" }}>
        Here's the Content
      </p>
      <Popover {...args}>
        <div
          style={{
            backgroundColor: "lightblue",
            fontSize: "20px",
            padding: "10px",
          }}
        >
          Hi
        </div>
      </Popover>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  show: true,
  size: "auto",
  position: "bottom-left",
};

// Additional stories go here
