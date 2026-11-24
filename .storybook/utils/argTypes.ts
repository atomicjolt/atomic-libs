import type { ArgTypesEnhancer } from "storybook/internal/types";

/**
 * Props whose types can't be edited meaningfully in the Controls panel:
 * React nodes and elements, component types and functions. Docgen gives
 * these a JSON object editor, which is worse than no control.
 */
const NON_EDITABLE_TYPE =
  /ReactNode|ReactElement|JSX\.Element|ElementType|ComponentType|=>/;

/** Ref props are wiring, not configuration. Hide them from the docs. */
const REF_TYPE = /\bRef(Object)?</;

/** Readable type for `className`, instead of classnames' `Argument` type. */
const CLASS_NAME_SUMMARY =
  "string | string[] | Record<string, boolean> | ((renderProps) => string)";

/**
 * Corrects argTypes that docgen infers badly, for every story.
 *
 * Runs in Storybook's second pass, after the built-in control inference,
 * so it sees the final controls. Explicit controls from stories (such as
 * a text control on `children`) are left alone: only inferred object
 * editors are replaced.
 */
export const fixInferredArgTypes: ArgTypesEnhancer = ({ argTypes }) => {
  const result = { ...argTypes };

  for (const [name, argType] of Object.entries(argTypes)) {
    const summary = String(argType.table?.type?.summary ?? "");
    const control = argType.control as { type?: string } | false | undefined;
    const isInferredObject =
      control !== false && (control === undefined || control.type === "object");

    if (name === "className") {
      result[name] = {
        ...argType,
        control: { type: "text" },
        table: { ...argType.table, type: { summary: CLASS_NAME_SUMMARY } },
      };
    } else if (REF_TYPE.test(summary)) {
      result[name] = {
        ...argType,
        table: { ...argType.table, disable: true },
      };
    } else if (isInferredObject && NON_EDITABLE_TYPE.test(summary)) {
      result[name] = { ...argType, control: false };
    }
  }

  return result;
};

fixInferredArgTypes.secondPass = true;
