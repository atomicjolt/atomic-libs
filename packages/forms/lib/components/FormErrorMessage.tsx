import React, { createContext, useContext } from "react";
import { ErrorMessage } from "@atomicjolt/atomic-elements";
import type { FieldErrorMessageProps as ErrorMessageProps } from "@atomicjolt/atomic-elements";

/** The react-hook-form error message for the composed field being rendered. */
const FormFieldErrorContext = createContext<string | undefined>(undefined);

/**
 * Wraps a composed field's children so a `<Form.ErrorMessage />` inside it
 * shows the field's validation message. Render-function children are wrapped
 * too.
 */
export function withFieldError<C>(children: C, error: string | undefined): C {
  const wrap = (node: React.ReactNode) => (
    <FormFieldErrorContext.Provider value={error}>
      {node}
    </FormFieldErrorContext.Provider>
  );

  if (typeof children === "function") {
    return ((...args: unknown[]) => wrap(children(...args))) as C;
  }
  return wrap(children as React.ReactNode) as C;
}

/**
 * atomic-elements' `ErrorMessage`. Inside a composed form field (e.g.
 * `Form.TextField`), it shows the field's validation message when it has no
 * children of its own.
 */
export function FormErrorMessage(props: ErrorMessageProps) {
  const error = useContext(FormFieldErrorContext);
  return <ErrorMessage {...props}>{props.children ?? error}</ErrorMessage>;
}
