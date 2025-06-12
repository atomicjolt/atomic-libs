import React, { useState } from "react";
import {
  Button,
  Modal,
  IconButton,
  OverlayTrigger,
  ErrorModal,
  ConfirmationModal,
  Text,
} from "../elements";

export default function Modals() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="padder">
      <div>
        <Button onPress={() => setModalOpen(!modalOpen)}>
          Externally Controlled Modal
        </Button>
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
            <Text $size="3">This modal's state is controlled externally</Text>
          </Modal.Body>
        </Modal>
      </div>
      <br />
      <div>
        <OverlayTrigger>
          <Button>Internally Controlled Modal</Button>
          <Modal>
            {(close) => {
              console.log("Rendering internally controlled modal");
              return (
                <>
                  <Modal.Header>
                    <Modal.Title>Modal Title</Modal.Title>
                    <IconButton icon="close" onPress={close} variant="ghost" />
                  </Modal.Header>
                  <Modal.Body>
                    <Text $size="3">
                      This modal's state is controlled internally by
                      OverlayTrigger
                    </Text>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onPress={close} variant="secondary">
                      Close
                    </Button>
                  </Modal.Footer>
                </>
              );
            }}
          </Modal>
        </OverlayTrigger>
      </div>

      <br />
      <div>
        <OverlayTrigger>
          <Button>Error Modal</Button>
          <ErrorModal title="Error!" onClose={() => console.log("close")}>
            This is an error message
          </ErrorModal>
        </OverlayTrigger>
      </div>
      <br />
      <div>
        <OverlayTrigger>
          <Button>Confirmation Modal</Button>
          <ConfirmationModal
            isOpen
            title="Are you sure?"
            confirmText="Yes"
            onConfirm={() => console.log("confirm")}
            onReject={() => console.log("reject")}
          >
            Are you sure you want to delete this?
          </ConfirmationModal>
        </OverlayTrigger>
      </div>
    </div>
  );
}
