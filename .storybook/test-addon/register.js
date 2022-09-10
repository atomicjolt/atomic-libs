import React, { useRef, useLayoutEffect, useState } from "react";

import { addons, types } from "@storybook/addons";
import { useParameter } from "@storybook/api";

import { AddonPanel } from "@storybook/components";
import Highlight from 'react-highlight'
import "highlight.js/styles/default.css";

const ADDON_ID = "myaddon";
const PANEL_ID = `${ADDON_ID}/panel`;

// https://stackoverflow.com/questions/2952667/find-all-css-rules-that-apply-to-an-element
const getMatchedCSSRules = (el, css = el.ownerDocument.styleSheets) =>
  []
    .concat(...[...css].map((s) => [...(s.cssRules || [])]))
    .filter((r) => el.matches(r.selectorText));

// give a unique name for the panel
const MyPanel = () => {
  const value = useParameter("cssClasses");
  const [element, setElement] = useState();

  useLayoutEffect(() => {
    const iframe = document.querySelector("#storybook-preview-iframe");

    iframe.addEventListener("load", () => {
      const frameDoc = iframe?.contentWindow?.document;
      setElement(frameDoc.querySelector("#root").children[0]);
    });
  }, []);

  if (!value) {
    return <div>No configuration</div>;
  }

  if (element) {
    const rules = getMatchedCSSRules(element).filter((rule) =>
      value.includes(rule.selectorText)
    );
    console.log(rules)
    return (
      <div>
        {rules.map((rule) => (
          <Highlight className='css' key={rule.selectorText}>
            {`${rule.selectorText} {\n\t${rule.style.cssText.split(";").map(v => v.trim()).join(";\n\t").trim()}\n}`}
          </Highlight>
        ))}
      </div>
    )
  }

  return <div>blah</div>;
};

addons.register(ADDON_ID, (api) => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: "Scoped CSS Properties",
    render: ({ active, key }) => (
      <AddonPanel active={active} key={key}>
        <MyPanel />
      </AddonPanel>
    ),
  });
});
