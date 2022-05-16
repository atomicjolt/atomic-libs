import React from "react";
import "../../general.scss";
import "./styles.scss";

export interface Props {
  /** Must include a label for the tab. */
  label: string;
  linkTarget: string;
  content?: any;
}

/** Tabs Component */
export default function Tabs({ label, linkTarget, content }: Props) {
  const tabID = label + "Tab";
  const tabContentID = label + "Content";
  const selected = false;
  const current = selected ? "page" : undefined;

  return (
    <>
      <div className="aj-tab-list" role="tablist" aria-label="navigation">
        <a
          className="aj-tab"
          id={tabID}
          role="tab"
          aria-controls={tabContentID}
          aria-selected="true"
          aria-current={current}
          href={linkTarget}
        >
          {label}
        </a>
        <a
          className="aj-tab"
          id={tabID}
          role="tab"
          aria-controls={tabContentID}
          aria-selected={selected}
          aria-current={current}
          href={linkTarget}
          tabIndex={-1}
        >
          {label}
        </a>
      </div>
      <div
        className="aj-tab-content"
        id={tabContentID}
        tabIndex={0}
        role="tabpanel"
        aria-labelledby={tabID}
      >
        {content}
      </div>
    </>
  );
}
