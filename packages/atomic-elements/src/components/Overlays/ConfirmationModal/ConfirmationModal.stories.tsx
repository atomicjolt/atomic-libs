import { Meta, StoryObj } from "@storybook/react-vite";
import { OverlayTriggerArgTypes, RenderStylePropsArgTypes } from "@sb/helpers";
import { ConfirmationModal } from ".";

const meta: Meta<typeof ConfirmationModal> = {
  title: "Overlays/Modals/ConfirmationModal",
  component: ConfirmationModal,
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

type Story = StoryObj<typeof ConfirmationModal>;

export const Primary: Story = {
  args: {
    isOpen: true,
    title: "Delete Post?",
    children:
      "Are you sure you want to delete this post? This action cannot be undone.",
    confirmText: "Delete",
    isCentered: true,
  },
};
