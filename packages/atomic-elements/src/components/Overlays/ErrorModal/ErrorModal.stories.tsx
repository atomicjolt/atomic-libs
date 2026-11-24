import { Meta, StoryObj } from "@storybook/react-vite";
import { OverlayTriggerArgTypes, RenderStylePropsArgTypes } from "@sb/helpers";
import { ErrorModal } from ".";

const meta: Meta<typeof ErrorModal> = {
  title: "Overlays/Modals/ErrorModal",
  component: ErrorModal,
  parameters: {
    docs: {
      story: {
        inline: false,
        height: "400px",
      },
    },
  },
  argTypes: {
    ...OverlayTriggerArgTypes,
    ...RenderStylePropsArgTypes,
    $width: {
      table: { defaultValue: { summary: '"400px"' } },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ErrorModal>;

export const Primary: Story = {
  args: {
    isOpen: true,
    title: "Error",
    children: "An error has occurred",
    buttonText: "Close",
    isCentered: true,
  },
};
