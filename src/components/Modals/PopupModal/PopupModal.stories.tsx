import { ComponentMeta, ComponentStory } from "@storybook/react";
import PopupModal, { Props } from ".";
import Button from "../../Buttons/Button";

export default {
  title: "Modals/PopupModal",
  component: PopupModal,
} as ComponentMeta<typeof PopupModal>;

const Template: ComponentStory<typeof PopupModal> = (args: Props) => (
  <PopupModal {...args} />
);

export const Default = Template.bind({});
Default.args = {
  open: true,
  title: "Popup!",
  children:
    "Here's the content for the popup, it should probably be brief because this modal is intended to be small",
  actions: [<Button key="2">OK</Button>],
};

// Additional stories go here
