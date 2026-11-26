import React from "react";
import { Heading, Text } from "@atomicjolt/atomic-elements";

/** A page of demo sections. */
export function DemoPage({ children }: { children: React.ReactNode }) {
  return <div className="pg-page">{children}</div>;
}

/** One titled demo block on a page. */
export function Demo(props: {
  title: string;
  description?: React.ReactNode;
  /** Span two columns in a DemoGrid. */
  wide?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section className={props.wide ? "pg-panel pg-demo pg-demo--wide" : "pg-panel pg-demo"}>
      <Heading as="h2" $size="5">
        {props.title}
      </Heading>
      {props.description && (
        <Text $size="2" className="pg-demo__description">
          {props.description}
        </Text>
      )}
      <div className="pg-demo__body">{props.children}</div>
    </section>
  );
}

/** Lays demos out in responsive columns. */
export function DemoGrid({ children }: { children: React.ReactNode }) {
  return <div className="pg-grid">{children}</div>;
}

/** Shows a value as formatted JSON. */
export function Json({ value }: { value: unknown }) {
  return (
    <pre className="pg-code">
      {value === undefined ? "—" : JSON.stringify(value, null, 2)}
    </pre>
  );
}
