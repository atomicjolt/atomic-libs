import React, { useRef, useState } from "react";
import { Button, Dialog, ErrorModal, Modal, IconButton } from "../elements";

export default function Modals() {
  const [modalOpen, setModalOpen] = useState(true);

  return (
    <div className="padder">
      <Modal isOpen={modalOpen}>
        <Modal.Header>
          <Modal.Title>Title</Modal.Title>
          <IconButton
            icon="close"
            onPress={() => setModalOpen(false)}
            variant="ghost"
          />
        </Modal.Header>

        <Modal.Body>
          <p>This is the content of the modal</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onPress={() => setModalOpen(false)}>
            Cancel
          </Button>
          <Button variant="primary">Save</Button>
        </Modal.Footer>
      </Modal>

      <Button onPress={() => setModalOpen(!modalOpen)}>Open Modal</Button>
      {/* <ErrorModal
        title="Title"
        open={modalOpen}
        centered
        onClose={() => setModalOpen(false)}
      >
        Here is some content
      </ErrorModal> */}
    </div>
  );
}
