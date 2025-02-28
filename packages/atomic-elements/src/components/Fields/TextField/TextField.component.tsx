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
import { filterDOMProps } from "@react-aria/utils";
import { ComboInputContext } from "../ComboInput";
import { TextAreaContext } from "../Atoms/TextArea";

export interface TextFieldProps
  extends FieldProps,
    Omit<AriaProps<AriaTextFieldProps>, "placeholder"> {}

/** Provides the accessbility implementation for a
 * text field and its associated label, error message, and description.
 * */
export function TextField(props: TextFieldProps) {
  const { type = "text", isDisabled, isRequired, isReadOnly, name } = props;

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

  const inputCtx = {
    ...inputProps,
    disabled: isDisabled,
    readOnly: isReadOnly,
    name,
    ref: inputOrTextAreaRef,
  };

  return (
    <StyledField {...renderProps} {...filterDOMProps(props)}>
      <Provider
        values={[
          [FieldLabelContext.Provider, labelProps],
          [FieldMessageContext.Provider, descriptionProps],
          [FieldErrorContext.Provider, { ...errorMessageProps, isInvalid }],
          [ComboInputContext.Provider, { inputRef }],
          [FieldInputContext.Provider, inputCtx],
          [TextAreaContext.Provider, inputCtx],
        ]}
      >
        {renderProps.children}
      </Provider>
    </StyledField>
  );
}
