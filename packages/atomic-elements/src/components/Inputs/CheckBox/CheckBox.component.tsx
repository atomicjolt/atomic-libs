import React from "react";
import { useToggleState } from "react-stately";
import { AriaCheckboxProps, useCheckbox } from "@react-aria/checkbox";
import { useLocale } from "@react-aria/i18n";
import { useId } from "@react-aria/utils";
import {
  AriaProps,
  FieldStatusProps,
  HelpTextProps,
  LoadingProps,
  RenderBaseProps,
} from "../../../types";
import { HiddenInput, ToggleHelpText } from "../Inputs.styles";
import {
  CheckBoxLabel,
  CheckBoxWrapper,
  StyledLoadingCheckbox,
} from "./CheckBox.styles";
import { ErrorMessage, Message } from "../../Fields";
import { useContextProps } from "@hooks/useContextProps";
import { CheckBoxContext } from "./CheckBox.context";
import { SlotProps } from "@hooks/useSlottedContext";
import { useRenderProps } from "@hooks";
import { RequiredMarker } from "@components/Internal/RequiredMarker";
import { useLoading } from "@components/Feedback/Loading";

interface CheckBoxRenderProps {
  isSelected: boolean;
  isIndeterminate: boolean;
  isInvalid: boolean;
  isDisabled: boolean;
  isReadOnly: boolean;
  isRequired: boolean;
}

export interface CheckBoxProps
  extends Omit<AriaProps<AriaCheckboxProps>, "children">,
    Omit<HelpTextProps, "label">,
    FieldStatusProps,
    RenderBaseProps<CheckBoxRenderProps>,
    LoadingProps,
    SlotProps {
  /** Name of the input, submitted with form data */
  name?: string;
}

/** CheckBox Component. Accepts a `ref` */
export const CheckBox = React.forwardRef<HTMLInputElement, CheckBoxProps>(
  (props, ref) => {
    [props, ref] = useContextProps(CheckBoxContext, props, ref);

    const {
      error,
      message,
      isRequired = false,
      isInvalid = false,
      isIndeterminate = false,
      isReadOnly = false,
      isDisabled = false,
      name,
    } = props;

    const state = useToggleState(props);
    const { direction } = useLocale();
    const { inputProps, labelProps } = useCheckbox(
      { ...props, children: true },
      state,
      ref
    );

    const { isLoading, loadingLabel } = useLoading(props);

    // The <label> names the input through htmlFor; message and error describe it.
    const inputId = useId(inputProps.id);
    const messageId = useId();
    const errorId = useId();
    const showError = isInvalid && !!error;
    const describedBy =
      [
        inputProps["aria-describedby"],
        message ? messageId : undefined,
        showError ? errorId : undefined,
      ]
        .filter(Boolean)
        .join(" ") || undefined;

    const renderProps = useRenderProps({
      componentClassName: "aje-checkbox",
      values: {
        isSelected: state.isSelected,
        isIndeterminate,
        isInvalid,
        isDisabled,
        isReadOnly,
        isRequired,
      },
      selectors: {
        "data-selected": state.isSelected,
        "data-indeterminate": isIndeterminate,
        "data-invalid": isInvalid,
        "data-disabled": isDisabled,
        "data-readonly": isReadOnly,
        "data-required": isRequired,
        "data-loading": isLoading,
      },
      ...props,
    });

    const ariaChecked = isIndeterminate ? "mixed" : undefined;

    return (
      <CheckBoxWrapper $rtl={direction === "rtl"} {...renderProps}>
        <HiddenInput
          {...inputProps}
          id={inputId}
          aria-describedby={describedBy}
          ref={ref}
          aria-checked={ariaChecked}
          name={name}
          disabled={isLoading || inputProps.disabled}
        />
        <CheckBoxLabel
          {...labelProps}
          htmlFor={inputId}
          $rtl={direction === "rtl"}
        >
          {isLoading && (
            <StyledLoadingCheckbox
              $rtl={direction === "rtl"}
              title={loadingLabel}
            >
              <rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                rx="var(--checkbox-border-radius, 0)"
                ry="var(--checkbox-border-radius, 0)"
              />
            </StyledLoadingCheckbox>
          )}
          {renderProps.children}
          {isRequired && <RequiredMarker />}
        </CheckBoxLabel>
        {(message || showError) && (
          <ToggleHelpText $prefix="checkbox" $rtl={direction === "rtl"}>
            {message && <Message id={messageId}>{message}</Message>}
            {showError && (
              <ErrorMessage id={errorId} isInvalid>
                {error}
              </ErrorMessage>
            )}
          </ToggleHelpText>
        )}
      </CheckBoxWrapper>
    );
  }
);
