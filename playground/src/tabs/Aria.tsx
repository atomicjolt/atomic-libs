import React from "react";
import {
  DisclosureGroup,
  Disclosure,
  DisclosureTrigger,
  DisclosurePanel,
} from "../../../packages/atomic-elements/src/components/Layout/Disclosure/Disclosure.component";

export default function Aria() {
  return (
    <>
      <DisclosureGroup defaultExpandedKeys={["d1"]}>
        <Disclosure id="d1">
          <DisclosureTrigger>Open</DisclosureTrigger>
          <DisclosurePanel>
            <p style={{ fontSize: "25px" }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
              aliquid consequuntur expedita ratione sed ab fugiat laudantium.
              Porro expedita, voluptate aspernatur consequatur inventore
              corporis odio voluptatem quod, corrupti, iste tempora.
            </p>
          </DisclosurePanel>
        </Disclosure>
        <Disclosure id="d2">
          <DisclosureTrigger>Open</DisclosureTrigger>
          <DisclosurePanel>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              nemo expedita officia quod, nihil molestiae voluptate vel
              laudantium facilis culpa debitis labore obcaecati temporibus ut
              repellendus, ab similique harum accusantium.
            </p>
          </DisclosurePanel>
        </Disclosure>
      </DisclosureGroup>

      <Disclosure>
        <DisclosureTrigger>Open</DisclosureTrigger>
        <DisclosurePanel>
          <div>Content</div>
        </DisclosurePanel>
      </Disclosure>
    </>
  );
}
