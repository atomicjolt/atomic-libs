import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Modal from ".";
import IconButton from "../../Buttons/IconButton";
import Button from "../../Buttons/Button";
import MaterialIcon from "../../Icons/MaterialIcon";

const meta: Meta<typeof Modal> = {
  title: "Modals/Modal",
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
    children: {
      control: false,
    },
    variant: {
      control: "select",
      options: ["default", "popup"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
  args: {
    isOpen: true,
    children: [
      <Modal.Header>
        <Modal.Title>Title</Modal.Title>
        <IconButton icon="close" variant="ghost" />
      </Modal.Header>,
      <Modal.Body>
        <p>This is the content of the modal</p>
      </Modal.Body>,
      <Modal.Footer>
        <Button variant="secondary">Cancel</Button>
        <Button variant="primary">Save</Button>
      </Modal.Footer>,
    ],
  },
};

export const PopupModal: Story = {
  args: {
    ...Primary.args,
    variant: "popup",
    children: [
      <Modal.Header>
        <MaterialIcon icon="check" />
        <Modal.Title>Your Download is Ready!</Modal.Title>
      </Modal.Header>,
      <Modal.Body>
        <p>
          Your download is ready! Click the button below to download your file.
        </p>
      </Modal.Body>,
      <Modal.Footer>
        <Button variant="success">
          <MaterialIcon icon="download" />
          Download
        </Button>
      </Modal.Footer>,
    ],
  },
};

export const WithCustomContent: Story = {
  args: {
    ...Primary.args,
    children: (
      <p style={{ fontSize: "20px" }}>
        You are able to put whatever content you'd like into the modal, the
        helper components are there for the common use cases.
      </p>
    ),
  },
};
