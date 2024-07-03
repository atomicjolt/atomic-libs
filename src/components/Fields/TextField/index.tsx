import { useCallback, useRef, useState } from "react";
import { AriaTextFieldProps, useTextField } from "@react-aria/textfield";
import { FieldProps } from "../Field";
import { AriaProps } from "../../../types";
import { StyledField } from "../Field.styles";
import { Provider } from "../../Internal/Provider";
import {
  FieldErrorContext,
  FieldInputContext,
  FieldLabelContext,
  FieldMessageContext,
} from "../contexts";
import { useRenderProps } from "@hooks";

export interface TextFieldProps
  extends FieldProps,
    Omit<AriaProps<AriaTextFieldProps>, "placeholder"> {
  "data-float"?: boolean;
  "data-resize"?: "none" | "both" | "horizontal" | "vertical";
}

/** Provides the accessbility implementation for a
 * text field and its associated label, error message, and description.
 * */
export function TextField(props: TextFieldProps) {
  const {
    type = "text",
    isDisabled,
    isRequired,
    isReadOnly,
    name,
    "data-float": dataFloat,
    "data-resize": dataResize,
  } = props;

  const [inputElementType, setInputElementType] = useState<
    "input" | "textarea" | null
  >(null);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);

  // TextField can wrap either an input or a textarea
  // This callback is used to determine which type of element is being wrapped
  // so that the correct type can be passed to useTextField
  const inputOrTextAreaRef = useCallback(
    (el: HTMLInputElement | HTMLTextAreaElement) => {
      inputRef.current = el;
      if (el) {
        setInputElementType(
          el instanceof HTMLTextAreaElement ? "textarea" : "input"
        );
      }
    },
    []
  );

  const {
    labelProps,
    inputProps,
    descriptionProps,
    errorMessageProps,
    isInvalid,
  } = useTextField(
    {
      ...props,
      inputElementType: inputElementType || "input",
      label: true,
    },
    inputRef
  );

  const renderProps = useRenderProps({
    ...props,
    componentClassName: `aje-input__${type}`,
    values: { isInvalid, isDisabled, isReadOnly, isRequired },
    selectors: {
      "data-invalid": isInvalid,
      "data-disabled": isDisabled,
      "data-readonly": isReadOnly,
      "data-required": isRequired,
    },
  });

  return (
    <StyledField
      {...renderProps}
      data-float={dataFloat}
      data-resize={dataResize}
    >
      <Provider
        values={[
          [FieldLabelContext.Provider, labelProps],
          [FieldMessageContext.Provider, descriptionProps],
          [FieldErrorContext.Provider, { errorMessageProps, isInvalid }],
          [
            FieldInputContext.Provider,
            {
              inputProps: {
                ...inputProps,
                disabled: isDisabled,
                readOnly: isReadOnly,
                name,
              },
              ref: inputOrTextAreaRef,
              inputRef: inputRef,
            },
          ],
        ]}
      >
        {renderProps.children}
      </Provider>
    </StyledField>
  );
}
