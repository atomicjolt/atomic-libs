import {
  and,
  ControlProps,
  DispatchPropsOfMultiEnumControl,
  hasType,
  JsonSchema,
  OwnPropsOfEnum,
  RankedTester,
  rankWith,
  resolveSchema,
  schemaMatches,
  schemaSubPathMatches,
  uiTypeIs,
} from "@jsonforms/core";
import { withJsonFormsMultiEnumProps } from "@jsonforms/react";
import { Item, Key, MultiSelect } from "@atomicjolt/atomic-elements";
import { useControlProps } from "../../hooks/useControlProps";
import { keysOf, valueOf } from "../../util/enumKeys";

type MultiEnumProps = ControlProps & OwnPropsOfEnum & DispatchPropsOfMultiEnumControl;

/**
 * An array of unique `enum` / `oneOf` values as a multi-select. Deselecting
 * everything stores `undefined`, matching how other cleared fields behave.
 */
export function AtomicMultiSelectControl(props: MultiEnumProps) {
  const { data, path, handleChange, visible, id, options = [] } = props;
  const { helpText, fieldProps } = useControlProps(props);
  if (!visible) return null;

  const onSelectionChange = (keys: "all" | Iterable<Key>) => {
    const values =
      keys === "all" ? options.map((option) => option.value) : [...keys].map((key) => valueOf(options, key));
    handleChange(path, values.length > 0 ? values : undefined);
  };

  return (
    <MultiSelect
      id={id}
      selectedKeys={keysOf(options, data)}
      onSelectionChange={onSelectionChange}
      {...helpText}
      {...fieldProps}
    >
      {options.map((option, index) => (
        <Item key={index} id={String(index)}>
          {option.label}
        </Item>
      ))}
    </MultiSelect>
  );
}

const hasEnumItems = (schema: JsonSchema) =>
  schema.enum !== undefined ||
  (Array.isArray(schema.oneOf) && schema.oneOf.every((option) => "const" in option));

/** Arrays with `uniqueItems: true` whose items are an enum or `oneOf` of consts. */
export const atomicMultiSelectControlTester: RankedTester = rankWith(
  5,
  and(
    uiTypeIs("Control"),
    schemaMatches(
      (schema) => hasType(schema, "array") && !Array.isArray(schema.items) && schema.uniqueItems === true,
    ),
    schemaSubPathMatches("items", (schema, rootSchema) =>
      hasEnumItems((schema.$ref && resolveSchema(rootSchema, schema.$ref, rootSchema)) || schema),
    ),
  ),
);

export const AtomicMultiSelectControlRenderer = withJsonFormsMultiEnumProps(AtomicMultiSelectControl);
