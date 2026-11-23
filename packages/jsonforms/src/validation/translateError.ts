import type { ErrorTranslator } from "@jsonforms/core";

const TYPE_NAMES: Record<string, string> = {
  string: "text",
  number: "a number",
  integer: "a whole number",
  boolean: "true or false",
  object: "an object",
  array: "a list",
};

/**
 * Default error translator: turns AJV messages into user-facing text. Errors
 * from `validate` / `serverErrors` (no keyword) keep their message. App
 * translations (`i18n.translate`) still win for `error.<keyword>` keys.
 */
export const atomicTranslateError: ErrorTranslator = (error, t) => {
  const custom = t(`error.${error.keyword}`, undefined, { error });
  if (custom !== undefined) return custom;

  const params = error.params as Record<string, any>;

  switch (error.keyword) {
    case "required":
      return "Required";
    case "type": {
      const types: string[] = [].concat(params.type);
      return `Must be ${types.map((type) => TYPE_NAMES[type] ?? type).join(" or ")}`;
    }
    case "minLength":
      return `Must be at least ${params.limit} characters`;
    case "maxLength":
      return `Must be at most ${params.limit} characters`;
    case "minimum":
      return `Must be ${params.limit} or more`;
    case "maximum":
      return `Must be ${params.limit} or less`;
    case "exclusiveMinimum":
      return `Must be more than ${params.limit}`;
    case "exclusiveMaximum":
      return `Must be less than ${params.limit}`;
    case "minItems":
      return `Choose at least ${params.limit}`;
    case "maxItems":
      return `Choose at most ${params.limit}`;
    case "pattern":
      return "Invalid format";
    case "format":
      return `Must be a valid ${params.format}`;
    case "enum":
    case "oneOf":
    case "const":
      return "Choose one of the allowed values";
    default:
      return error.message ?? "Invalid value";
  }
};
