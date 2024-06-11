import React from "react";
import { Button, LoadingStatus, Spinner, ThreeDotLoader } from "../elements";

export default function Loading() {
  return (
    <div>
      <div style={{ height: "400px", width: "400px", backgroundColor: "red" }}>
        <LoadingStatus
          isLoading
          loadingMessage="Loading..."
          renderLoading={Spinner}
        />
      </div>
      <div
        style={{
          height: "400px",
          width: "400px",
          backgroundColor: "powderblue",
          // display: "flex",
          // flexDirection: "column",
        }}
      >
        <p>Some other content </p>
        <ThreeDotLoader placement="absolute center" />
        <Spinner placement="center" message="message" />
        <span>some inline content</span>
      </div>
      <Button>Click Me</Button>
    </div>
  );
}
