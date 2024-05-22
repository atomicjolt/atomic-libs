import React, { useState } from "react";
import { Button, Modal, IconButton, OverlayTrigger } from "../elements";

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
            <p>This modals state is controlled externally</p>
          </Modal.Body>
        </Modal>
      </div>
      <br />
      <div>
        <OverlayTrigger>
          <Button>Internally Controlled Modal</Button>
          <Modal>
            {(close) => (
              <>
                <Modal.Header>
                  <Modal.Title>Modal Title</Modal.Title>
                  <IconButton icon="close" onPress={close} variant="ghost" />
                </Modal.Header>
                <Modal.Body>
                  <p>
                    This modal's state is controlled internally by
                    OverlayTrigger
                  </p>
                </Modal.Body>
              </>
            )}
          </Modal>
        </OverlayTrigger>
      </div>
    </div>
  );
}
