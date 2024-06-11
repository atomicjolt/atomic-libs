import React from "react";
import { Button, Link, IconMenu, RouterProvider } from "../elements";

export default function Links() {
  return (
    <div>
      <RouterProvider
        navigate={(href) => alert(`Client-side-navigation to: ${href}`)}
      >
        <IconMenu icon="more_vert" aria-label="More options">
          <IconMenu.Item href="https://www.google.com">Google</IconMenu.Item>
          <IconMenu.Item href="/somewhere">Internal</IconMenu.Item>
          <IconMenu.Item>Non Link</IconMenu.Item>
        </IconMenu>
        <br />
        <br />
        <div style={{ fontSize: "2rem" }}>
          <Link href="https://www.google.com">External</Link>
          <br />
          <Link href="/somewhere">Internal</Link>
        </div>
        <br />
        <br />
        <Button href="https://www.google.com">External</Button>
        <br />
        <br />
        <Button href="/somewhere" onPress={() => console.log("hi!")}>
          Internal
        </Button>
      </RouterProvider>
    </div>
  );
}
