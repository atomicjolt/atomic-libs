import React from "react";
import { Heading, PureArgsTable, useOf } from "@storybook/blocks";

interface CssPropItem {
  value: string;
  control?: "text" | "color";
  category?: string;
  description?: string;
}

/**
 * A read-only list of the CSS variables a component reads, taken from the
 * component's `parameters.cssprops` (see `getCssProps`). Unlike the old
 * cssprops addon, it never writes values onto the page, so the active color
 * scheme always applies.
 */
export function CssVariablesTable() {
  const { preparedMeta } = useOf("meta");
  const cssprops = (preparedMeta.parameters?.cssprops ?? {}) as Record<
    string,
    unknown
  >;

  const rows = Object.fromEntries(
    Object.entries(cssprops)
      .filter(
        (entry): entry is [string, CssPropItem] =>
          typeof entry[1] === "object" &&
          entry[1] !== null &&
          "value" in entry[1]
      )
      .map(([name, item]) => [
        name,
        {
          name: `--${name}`,
          description: item.description,
          control: false,
          table: {
            category: item.category,
            defaultValue: { summary: item.value },
          },
        },
      ])
  );

  if (Object.keys(rows).length === 0) return null;

  return (
    <>
      <Heading>CSS Variables</Heading>
      <PureArgsTable rows={rows} />
    </>
  );
}
