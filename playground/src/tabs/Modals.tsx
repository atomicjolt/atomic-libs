import React, { useState } from "react";
import { Button, ErrorModal } from "../elements";

export default function Modals() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="padder">
      <Button onClick={() => setModalOpen((open) => !open)}>Open Modal</Button>
      <ErrorModal
        title="Title"
        open={modalOpen}
        centered
        onClose={() => setModalOpen(false)}
      >
        Here is some content
      </ErrorModal>
    </div>
  );
}
