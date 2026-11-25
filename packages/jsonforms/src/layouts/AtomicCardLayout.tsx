import {
  Layout,
  LayoutProps,
  RankedTester,
  rankWith,
  uiTypeIs,
} from "@jsonforms/core";
import { JsonFormsDispatch, withJsonFormsLayoutProps } from "@jsonforms/react";
import { Card, Heading } from "@atomicjolt/atomic-elements";
import { AtomicLayoutRenderer } from "./AtomicLayoutRenderer";
import { headingLevel, HeadingLevel } from "./heading";

/** A UI schema `Card` element: `{ type: "Card", label?, elements, options? }`. */
export interface CardLayout extends Layout {
  type: "Card";
  label?: string;
  options?: AtomicCardLayoutOptions;
}

export interface AtomicCardLayoutOptions {
  /**
   * How elements map to card panels: `"single"` puts them all in one panel,
   * `"stack"` gives each its own panel stacked vertically, and `"columns"`
   * gives each its own panel side by side. @default "single"
   */
  panels?: "single" | "stack" | "columns";
  /** Element the label renders as. @default "h2" */
  headingLevel?: HeadingLevel;
  /** Font size of the label: a scale step. @default "3" (Card.Title's size) */
  headingSize?: string;
}

/** Renders a `Card` UI schema element as an atomic-elements `Card`. */
export function AtomicCardLayout(props: LayoutProps) {
  const { uischema, label, visible, schema, path, enabled, renderers, cells } = props;
  const options: AtomicCardLayoutOptions = uischema.options ?? {};
  const elements = (uischema as CardLayout).elements;

  if (!visible) return null;

  const dispatch = (index: number) => (
    <JsonFormsDispatch
      uischema={elements[index]}
      schema={schema}
      path={path}
      enabled={enabled}
      renderers={renderers}
      cells={cells}
    />
  );

  // One panel per element, stacked or side by side.
  const ownPanels = (Container: typeof Card.Stack) => (
    <Container>
      {elements.map((_, index) => (
        <Card.Panel key={`${path}-${index}`} style={{ flex: "1 1 0", minWidth: 0 }}>
          {dispatch(index)}
        </Card.Panel>
      ))}
    </Container>
  );

  return (
    <Card>
      {label && (
        // Card.Title is plain text; a Heading with its look keeps the card navigable.
        <Card.Header>
          <Heading
            as={headingLevel(options.headingLevel)}
            $size={options.headingSize ?? "3"}
            $weight="bold"
          >
            {label}
          </Heading>
        </Card.Header>
      )}
      {options.panels === "stack" && ownPanels(Card.Stack)}
      {options.panels === "columns" && ownPanels(Card.Columns)}
      {options.panels !== "stack" && options.panels !== "columns" && (
        <Card.Panel>
          <AtomicLayoutRenderer
            elements={elements}
            schema={schema}
            path={path}
            enabled={enabled}
            visible={visible}
            renderers={renderers}
            cells={cells}
            direction="column"
          />
        </Card.Panel>
      )}
    </Card>
  );
}

export const atomicCardLayoutTester: RankedTester = rankWith(1, uiTypeIs("Card"));

export default withJsonFormsLayoutProps(AtomicCardLayout);
