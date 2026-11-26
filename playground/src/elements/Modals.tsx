import React, { useState } from "react";
import {
  Button,
  ConfirmationModal,
  ErrorModal,
  IconButton,
  Modal,
  OverlayTrigger,
  Text,
} from "@atomicjolt/atomic-elements";
import { Demo, DemoGrid, DemoPage } from "../components/Demo";

export default function Modals() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <DemoPage>
      <DemoGrid>
        <Demo title="Externally controlled" description="isOpen held in page state.">
          <Button onPress={() => setModalOpen(true)}>Open modal</Button>
          <Modal isOpen={modalOpen}>
            <Modal.Header>
              <Modal.Title>Title</Modal.Title>
              <IconButton icon="close" aria-label="Close" onPress={() => setModalOpen(false)} variant="ghost" />
            </Modal.Header>
            <Modal.Body>
              <Text $size="3">This modal's state is controlled externally</Text>
            </Modal.Body>
          </Modal>
        </Demo>

        <Demo title="Internally controlled" description="OverlayTrigger owns the open state.">
          <OverlayTrigger>
            <Button>Open modal</Button>
            <Modal>
              {(close) => (
                <>
                  <Modal.Header>
                    <Modal.Title>Modal title</Modal.Title>
                    <IconButton icon="close" aria-label="Close" onPress={close} variant="ghost" />
                  </Modal.Header>
                  <Modal.Body>
                    <Text $size="3">This modal's state is controlled by OverlayTrigger</Text>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onPress={close} variant="secondary">
                      Close
                    </Button>
                  </Modal.Footer>
                </>
              )}
            </Modal>
          </OverlayTrigger>
        </Demo>

        <Demo title="ErrorModal">
          <OverlayTrigger>
            <Button variant="error">Show error</Button>
            <ErrorModal title="Error!" onClose={() => console.log("close")}>
              This is an error message
            </ErrorModal>
          </OverlayTrigger>
        </Demo>

        <Demo title="ConfirmationModal">
          <OverlayTrigger>
            <Button>Delete…</Button>
            <ConfirmationModal
              title="Are you sure?"
              confirmText="Yes"
              onConfirm={() => console.log("confirm")}
              onReject={() => console.log("reject")}
            >
              Are you sure you want to delete this?
            </ConfirmationModal>
          </OverlayTrigger>
        </Demo>
      </DemoGrid>
    </DemoPage>
  );
}
