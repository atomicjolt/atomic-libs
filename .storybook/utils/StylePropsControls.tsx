import React from "react";
import { Controls, useOf } from "@storybook/addon-docs/blocks";
import { CollapsibleSection } from "./CollapsibleSection";

/** Style-system props are the ones prefixed with `$` (e.g. `$p`, `$gap`). */
const isStyleProp = (name: string) => name.startsWith("$");

/**
 * The meta's argTypes, and the `$` props it lists in
 * `parameters.primaryStyleProps`. Those are the component's own key props
 * (e.g. Flex's `$direction` and `$gap`), so they stay in the main table.
 */
function useStyleProps() {
  const resolved = useOf("meta");
  if (resolved.type !== "meta") return { styleProps: [], primary: [] };

  const { argTypes, parameters } = resolved.preparedMeta;
  const primary: string[] = parameters?.primaryStyleProps ?? [];
  const styleProps = Object.entries(argTypes)
    .filter(([name, argType]) => isStyleProp(name) && !argType.table?.disable)
    .map(([name]) => name)
    .filter((name) => !primary.includes(name));

  return { styleProps, primary };
}

/** The main props table, without the secondary `$` style props. */
export function MainControls() {
  const { styleProps } = useStyleProps();
  return <Controls exclude={styleProps} />;
}

/**
 * The secondary `$` style props, in their own table inside a collapsed
 * section. They stay documented, but out of the way of the component's own
 * props. Renders nothing for components without any.
 *
 * Storybook's props table can't start a category collapsed, so this uses a
 * second Controls block instead.
 */
export function StylePropsControls() {
  const { styleProps } = useStyleProps();
  if (styleProps.length === 0) return null;

  return (
    <CollapsibleSection
      title="Style props"
      count={styleProps.length}
      description={
        <>
          Props prefixed with <code>$</code> set CSS directly on the component,
          for example padding, margin or size. Values can be a theme token or
          any valid CSS value.
        </>
      }
    >
      <Controls include={styleProps} />
    </CollapsibleSection>
  );
}
