import { PureArgsTable, Subheading, useOf } from "@storybook/addon-docs/blocks";
import { toCssValue } from "../../packages/atomic-elements/src/styles/theme/theme";

/** Token groups keyed by category, e.g. `{ dropdown, listbox }`. */
type CssPropGroups = Record<string, Record<string, string>>;

/**
 * A read-only list of the CSS variables a component reads, taken from the
 * component's `parameters.cssprops`: the component token objects from
 * `@styles/theme/component`, keyed by category. Unlike the old cssprops
 * addon, it never writes values onto the page, so the active color scheme
 * always applies.
 */
export function CssVariablesTable() {
  const resolved = useOf("meta");
  // useOf's return type is a union of component/meta/story; narrow to meta.
  const parameters =
    resolved.type === "meta" ? resolved.preparedMeta.parameters : {};
  const groups = (parameters?.cssprops ?? {}) as CssPropGroups;

  const rows = Object.fromEntries(
    Object.entries(groups).flatMap(([group, tokens]) =>
      Object.entries(tokens).map(([name, value]) => [
        name,
        {
          name: `--${name}`,
          control: false,
          table: {
            category: group.charAt(0).toUpperCase() + group.slice(1),
            defaultValue: { summary: toCssValue(value) },
          },
        },
      ])
    )
  );

  if (Object.keys(rows).length === 0) return null;

  return (
    <>
      <Subheading>CSS Variables</Subheading>
      <PureArgsTable rows={rows} />
    </>
  );
}
