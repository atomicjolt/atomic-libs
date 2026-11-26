import { useCallback, useMemo, useState } from "react";
import type {
  JsonFormsCellRendererRegistryEntry,
  JsonFormsCore,
  JsonFormsI18nState,
  JsonFormsRendererRegistryEntry,
  JsonSchema,
  UISchemaElement,
  ValidationMode,
} from "@jsonforms/core";
import type { JsonFormsInitStateProps, JsonFormsReactProps } from "@jsonforms/react";
import type Ajv from "ajv";
import type { ErrorObject } from "ajv";
import equal from "fast-deep-equal";
import { createAtomicAjv } from "../validation/createAtomicAjv";
import { atomicTranslateError } from "../validation/translateError";
import { atomicCells, atomicRenderers } from "../registry";

const defaultAjv = createAtomicAjv();

export interface UseJsonFormOptions<T> {
  /** Must be referentially stable (memoise it). */
  schema: JsonSchema;
  /** Must be referentially stable (memoise it). */
  uischema?: UISchemaElement;
  /** The initial data. `reset()` returns to it. */
  data: T;
  /** Called with the data when the form is submitted and valid. */
  onSubmit: (data: T) => void;
  /** Cross-field / business rules. Build errors with `fieldError`. */
  validate?: (data: T) => ErrorObject[];
  /** Errors from the server. Each is dropped once its field's value changes. */
  serverErrors?: ErrorObject[];
  /** Defaults to a shared `createAtomicAjv()` instance. Must be stable. */
  ajv?: Ajv;
  renderers?: JsonFormsRendererRegistryEntry[];
  cells?: JsonFormsCellRendererRegistryEntry[];
  readonly?: boolean;
  i18n?: JsonFormsI18nState;
  config?: any;
}

export interface UseJsonFormResult<T> {
  /** Current data. May hold a not-yet-valid value (e.g. unparseable text). */
  data: T;
  errors: ErrorObject[];
  isValid: boolean;
  isDirty: boolean;
  /** Calls `onSubmit` if valid; otherwise shows all errors. */
  submit: () => void;
  /** Restores the initial data and hides errors again. */
  reset: () => void;
  /** Spread onto `<JsonForms>`. */
  props: JsonFormsInitStateProps & JsonFormsReactProps;
}

export function useJsonForm<T>(options: UseJsonFormOptions<T>): UseJsonFormResult<T> {
  const {
    data: initialData,
    onSubmit,
    validate,
    serverErrors,
    ajv = defaultAjv,
    renderers = atomicRenderers,
    cells = atomicCells,
    i18n,
    ...rest
  } = options;

  const [data, setData] = useState<T>(initialData);
  // JSON Forms reports errors through a debounced onChange, so validate the
  // initial data here; otherwise the form counts as valid until the first emit.
  const [schemaErrors, setSchemaErrors] = useState<ErrorObject[]>(() =>
    validateData(ajv, rest.schema, initialData),
  );
  const [validationMode, setValidationMode] =
    useState<ValidationMode>("ValidateAndHide");

  const customErrors = useMemo(() => validate?.(data) ?? [], [validate, data]);

  // A server error is about the data as it was when the error arrived. Once
  // that field changes, the error no longer applies.
  const [serverSnapshot, setServerSnapshot] = useState({ serverErrors, data });
  let submittedData = serverSnapshot.data;
  if (serverSnapshot.serverErrors !== serverErrors) {
    submittedData = data;
    setServerSnapshot({ serverErrors, data });
  }

  const activeServerErrors = useMemo(
    () =>
      (serverErrors ?? []).filter((error) =>
        equal(
          valueAt(data, error.instancePath),
          valueAt(submittedData, error.instancePath),
        ),
      ),
    [serverErrors, data, submittedData],
  );

  const additionalErrors = useMemo(
    () => [...customErrors, ...activeServerErrors],
    [customErrors, activeServerErrors],
  );

  const errors = useMemo(
    () => [...schemaErrors, ...additionalErrors],
    [schemaErrors, additionalErrors],
  );
  const isValid = errors.length === 0;

  const onChange = useCallback(
    ({ data: next, errors: nextErrors }: Pick<JsonFormsCore, "data" | "errors">) => {
      // Note: JSON Forms debounces this by 10ms, so `data` / `errors` trail
      // keystrokes slightly.
      setData(next);
      setSchemaErrors(nextErrors ?? []);
    },
    [],
  );

  const submit = useCallback(() => {
    if (isValid) {
      onSubmit(data);
    } else {
      setValidationMode("ValidateAndShow");
    }
  }, [isValid, onSubmit, data]);

  const reset = useCallback(() => {
    setData(initialData);
    setValidationMode("ValidateAndHide");
  }, [initialData]);

  return {
    data,
    errors,
    isValid,
    isDirty: !equal(data, initialData),
    submit,
    reset,
    props: {
      ...rest,
      data,
      ajv,
      renderers,
      cells,
      validationMode,
      additionalErrors,
      i18n: { translateError: atomicTranslateError, ...i18n },
      onChange,
    },
  };
}

function validateData(ajv: Ajv, schema: JsonSchema, data: unknown): ErrorObject[] {
  const validate = ajv.compile(schema);
  // structuredClone: `useDefaults` would otherwise write into the caller's data.
  validate(structuredClone(data));
  return validate.errors ?? [];
}

function valueAt(data: unknown, instancePath: string): unknown {
  if (!instancePath) return data;
  return instancePath
    .split("/")
    .slice(1)
    .reduce<any>((value, key) => (value == null ? undefined : value[key]), data);
}
