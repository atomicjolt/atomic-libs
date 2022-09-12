import React, { useLayoutEffect, useState } from "react";

import { addons, types } from "@storybook/addons";
import { useParameter, useChannel, useStorybookApi } from "@storybook/api";
import { STORY_CHANGED } from "@storybook/core-events";

import { AddonPanel } from "@storybook/components";
import ScopedCSSProperties from "./components/ScopedCSSProperties";

const ADDON_ID = "css-scoped-custom-properties";
const PANEL_ID = `${ADDON_ID}/panel`;

const MyPanel = () => {
  const selectors = useParameter<string[] | undefined>("cssSelectors");
  const [element, setElement] = useState<HTMLElement>();

  const api = useStorybookApi();

  const loadElement = () => {
    const interval = setInterval(() => {
      const iframe: HTMLIFrameElement = document.querySelector(
        "#storybook-preview-iframe"
      ) as HTMLIFrameElement;
      if (iframe.contentDocument?.readyState === "complete") {
        const frameDoc = iframe?.contentWindow?.document;
        const element = frameDoc?.querySelector("#root")?.children[0];
        if (element) {
          clearInterval(interval);
          setElement(
            frameDoc?.querySelector("#root")?.children[0] as HTMLElement
          );
        }
      }
    }, 200);

    return interval;
  };

  useLayoutEffect(() => {
    api.on(STORY_CHANGED, () => {
      loadElement();
    });

    const interval = loadElement();
    return () => clearInterval(interval);
  }, []);

  if (element) {
    return <ScopedCSSProperties element={element} selectors={selectors} />;
  }

  return <div>Loading...</div>;
};

addons.register(ADDON_ID, (api) => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: "CSS Scoped Custom Properties",
    render: ({ active, key }) => (
      <AddonPanel active={!!active} key={key}>
        <MyPanel />
      </AddonPanel>
    ),
  });
});
