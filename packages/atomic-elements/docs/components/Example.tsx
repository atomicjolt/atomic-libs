import React from "react";

interface ExampleProps {
  style: React.CSSProperties;
  children: React.ReactNode;
}

export function Example(props: ExampleProps) {
  const { style = {}, children } = props;

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "5px",
        margin: "20px 0",
        border: "1px solid #e0e0e0",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
