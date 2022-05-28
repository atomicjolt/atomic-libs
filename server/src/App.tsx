import React, { useState } from "react";

import "atomic-elements/dist/defines.css";
import { Button } from "atomic-elements";
import Modal from "../../src/components/Modals/Modal";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <Button onClick={() => setOpen(!open)}>Open / Close </Button>
      <Modal title="Modal Title" content="content" open={open} />
    </div>
  );
}

export default App;
