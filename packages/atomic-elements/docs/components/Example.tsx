import { ElementsProvider } from "@atomicjolt/atomic-elements";
import React from "react";

interface ExampleProps {
  style: React.CSSProperties;
  children: React.ReactNode;
}

export function Example(props: ExampleProps) {
  const { style = {}, children } = props;

  return (
    <div className="example" style={style}>
      {children}
    </div>
  );
}

Example.Code = function ExampleCode(props: ExampleProps) {
  const { style = {}, children } = props;

  return (
    <div
      className="example__code"
      style={{
        ...style,
      }}
    >
      {children}
    </div>
  );
};

Example.Rendered = function ExampleRendered(props: ExampleProps) {
  const { style = {}, children } = props;
  return (
    <div className="example__rendered" style={style}>
      <ElementsProvider>{children}</ElementsProvider>
    </div>
  );
};
