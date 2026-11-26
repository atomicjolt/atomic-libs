import type { CellProps, ControlProps } from "@jsonforms/core";

/**
 * Maps JSON Forms control props onto the props shared by atomic-elements
 * fields. `uischema.options.props` is spread last so a schema can pass any
 * field prop through.
 */
export function useControlProps(props: ControlProps) {
  const { label, description, errors, required, enabled, uischema, config } =
    props;

  const options = { ...config, ...uischema.options };
  const { props: passthrough = {} } = options;
  const isInvalid = errors.length > 0;

  return {
    options,
    isInvalid,
    errorMessage: errors,
    label,
    description,
    /** For components that take `label` / `message` / `error` props. */
    helpText: {
      label,
      message: description || undefined,
      error: errors || undefined,
    },
    fieldProps: {
      isRequired: !!required,
      // A read-only form (or a DISABLE rule) keeps text selectable rather than greying out.
      isReadOnly: !enabled,
      isInvalid,
      ...passthrough,
    },
  };
}

/**
 * The cell equivalent of `useControlProps`: no label, description or error
 * text, so the input is named with `aria-label` instead.
 */
export function useCellProps(props: CellProps) {
  const { enabled, isValid, schema, path, uischema, config } = props;

  const options = { ...config, ...uischema.options };
  const { props: passthrough = {} } = options;

  return {
    options,
    fieldProps: {
      "aria-label": schema.title ?? path,
      isReadOnly: !enabled,
      isInvalid: !isValid,
      ...passthrough,
    },
  };
}
