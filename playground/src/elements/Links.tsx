import React from "react";
import { Button, IconMenu, Link, RouterProvider } from "@atomicjolt/atomic-elements";
import { Demo, DemoPage } from "../components/Demo";

export default function Links() {
  return (
    <RouterProvider navigate={(href) => alert(`Client-side navigation to: ${href}`)}>
      <DemoPage>
        <Demo
          title="RouterProvider"
          description="Internal links (/somewhere) go through RouterProvider's navigate; external links navigate normally."
        >
          <div className="pg-row">
            <Link href="https://www.atomicjolt.com">External link</Link>
            <Link href="/somewhere">Internal link</Link>
          </div>
          <div className="pg-row">
            <Button href="https://www.atomicjolt.com">External button</Button>
            <Button href="/somewhere" onPress={() => console.log("pressed")}>
              Internal button
            </Button>
          </div>
          <IconMenu icon="more_vert" aria-label="More options">
            <IconMenu.Item href="https://www.atomicjolt.com">External</IconMenu.Item>
            <IconMenu.Item href="/somewhere">Internal</IconMenu.Item>
            <IconMenu.Item>Not a link</IconMenu.Item>
          </IconMenu>
        </Demo>
      </DemoPage>
    </RouterProvider>
  );
}
