import React, { useRef, useState } from "react";
import { Button, Dialog, ErrorModal, BasicModal, Modal } from "../elements";

import { Overlay, useModalOverlay, useOverlayTrigger } from "react-aria";
import { useOverlayTriggerState } from "react-stately";

export default function Modals() {
  const [modalOpen, setModalOpen] = useState(true);

  return (
    <div className="padder">
      {/* <BasicModal isOpen={modalOpen}>
        <Dialog title="Enter Your Name">
          <button onClick={() => setModalOpen(false)}>Close</button>
        </Dialog>
      </BasicModal> */}

      <Modal
        title="Title"
        primaryButton="Save"
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      >
        This is the content of the modal
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
