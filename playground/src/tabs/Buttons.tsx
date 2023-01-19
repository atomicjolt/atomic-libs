import React from "react";
import { Button, IconButton, IconMenu } from "../elements";

export default function Buttons() {
  return (
    <>
      <div className="padder">
        <div className="primary">
          <Button>Primary</Button>
        </div>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
        <Button variant="error">Error</Button>
        <Button variant="inverted">Inverted</Button>
      </div>
      <div className="padder">
        <IconButton icon="more_vert" ariaLabel="more" />
      </div>
      <div className="padder">
        <IconMenu icon="more_vert" label="more">
          <IconMenu.Item>Test</IconMenu.Item>
          <IconMenu.Item>Test</IconMenu.Item>
          <IconMenu.Item>Test</IconMenu.Item>
        </IconMenu>
      </div>
    </>
  );
}
