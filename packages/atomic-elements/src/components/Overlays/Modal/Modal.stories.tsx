import { Meta, StoryObj } from "@storybook/react";
import { Modal } from ".";
import { IconButton } from "../../Buttons/IconButton";
import { Button } from "../../Buttons/Button";
import { MaterialIcon } from "../../Icons/MaterialIcon";
import { OverlayTrigger } from "../OverlayTrigger";
import { Text } from "@components/Typography/Text";
import {
  DimensionsArgTypes,
  OverflowArgTypes,
  OverlayTriggerArgTypes,
  PositionArgTypes,
  RenderPropsArgTypes,
  SpacingArgTypes,
} from "@sb/helpers";

const meta: Meta<typeof Modal> = {
  title: "Overlays/Modals/Modal",
  component: Modal,
  parameters: {
    docs: {
      story: {
        inline: false,
        height: "400px",
      },
    },
  },
  argTypes: {
    ...RenderPropsArgTypes,
    ...SpacingArgTypes,
    ...DimensionsArgTypes,
    ...PositionArgTypes,
    ...OverflowArgTypes,
    ...OverlayTriggerArgTypes,
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

// NOTE: rendering these stories inline causes the code display to break, so we
// provide the source manually. Ideally this would be fixed in the future. In the meantime
// we can use the `parameters.docs.source` to provide the source code manually. Make sure
// to update the source code if the component changes.

export const Primary: Story = {
  args: {
    isOpen: true,
    children: [
      <Modal.Header key="header">
        <Modal.Title>Title</Modal.Title>
        <IconButton icon="close" variant="ghost" />
      </Modal.Header>,
      <Modal.Body key="body">
        <Text $size="3">This is the content of the modal</Text>
      </Modal.Body>,
      <Modal.Footer key="footer">
        <Button variant="secondary">Cancel</Button>
        <Button variant="primary">Save</Button>
      </Modal.Footer>,
    ],
  },
};

export const WithOverlayTrigger: Story = {
  render: (args) => {
    return (
      <OverlayTrigger>
        <Button>Open Modal</Button>
        <Modal {...args}>
          {(close) => (
            <>
              <Modal.Header>
                <Modal.Title>Modal Title</Modal.Title>
                <IconButton icon="close" variant="ghost" onPress={close} />
              </Modal.Header>
              <Modal.Body>
                <Text $size="3">Modal Body</Text>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onPress={close}>
                  Cancel
                </Button>
                <Button variant="primary" onPress={close}>
                  Save
                </Button>
              </Modal.Footer>
            </>
          )}
        </Modal>
      </OverlayTrigger>
    );
  },
  parameters: {
    docs: {
      source: {
        language: "jsx",
        code: `
<OverlayTrigger>
  <Button>Open Modal</Button>
  <Modal>
    {(close) => (
      <>
        <Modal.Header>
          <Modal.Title>Modal Title</Modal.Title>
          <IconButton icon="close" variant="ghost" onPress={close} />
        </Modal.Header>
        <Modal.Body>
          <Text $size="3">Modal Body</Text>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onPress={close}>Cancel</Button>
          <Button variant="primary" onPress={close}>Save</Button>
        </Modal.Footer>
      </>
    )}
  </Modal>
</OverlayTrigger>
        `,
      },
    },
  },
};

export const PopupModal: Story = {
  args: {
    ...Primary.args,
    $width: "400px",
    children: (
      <>
        <Modal.Header>
          <MaterialIcon icon="check" />
          <Modal.Title>Your Download is Ready!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Text $size="3">
            Your download is ready! Click the button below to download your
            file.
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success">
            <MaterialIcon icon="download" />
            Download
          </Button>
        </Modal.Footer>
      </>
    ),
  },
};

export const WithCustomContent: Story = {
  args: {
    ...Primary.args,
    children: (
      <Text $size="20px">
        You are able to put whatever content you'd like into the modal, the
        helper components are there for the common use cases.
      </Text>
    ),
  },
};
