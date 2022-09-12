import React from "react";
import Highlight from "react-highlight";
import hljs from "highlight.js";

import "highlightjs-copy"; // Imported for Typings, the actual definitions get loaded in manager-head.html
import "highlight.js/styles/atom-one-dark.css";

import { getCSSRules } from "../utils";

hljs.addPlugin(new CopyButtonPlugin());

interface Props {
  readonly element: HTMLElement;
  readonly selectors?: string[];
}

interface CSSProperties {
  selector: string;
  customProperties: string[];
  properties: string[];
}

function makeCSSProperties(rules: CSSStyleRule[]): CSSProperties[] {
  return rules.map((rule) => {
    const customProperties: string[] = [];
    const properties: string[] = [];

    const allProperties = rule.style.cssText.split(";").map((v) => v.trim());
    for (const property of allProperties) {
      if (property.startsWith("--")) {
        customProperties.push(property);
      } else {
        properties.push(property);
      }
    }

    return {
      selector: rule.selectorText,
      properties,
      customProperties,
    };
  });
}

function formatCSS(css: CSSProperties) {
  let string = `${css.selector} {`;

  // IDK why, but prop.join() crashes storybook
  css.customProperties.forEach((prop) => {
    string += `\n   ${prop}`;
  });

  string += "\n}";

  return string;
}

export default function ScopedCSSProperties({ element, selectors }: Props) {
  let rules = getCSSRules(element);
  if (selectors) {
    rules = rules.filter((rule) =>
      selectors.some((v) => rule.selectorText.includes(v))
    );
  }

  const cssProps = makeCSSProperties(rules).filter(
    (css) => css.customProperties.length > 0
  );

  if (cssProps.length == 0) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "20px" }}>
        No Custom CSS Properties for Selected story
      </h2>
    );
  }

  return (
    <div>
      {cssProps.map((rule) => {
        const formatted = formatCSS(rule);

        return (
          <Highlight className="css" key={rule.selector}>
            {formatted}
          </Highlight>
        );
      })}
    </div>
  );
}
