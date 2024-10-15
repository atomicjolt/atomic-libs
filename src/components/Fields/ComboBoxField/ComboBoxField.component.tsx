import React, { forwardRef, useRef } from "react";
import { useContextPropsV2 } from "@hooks/useContextProps";
import { PressResponder } from "@react-aria/interactions";
import { CollectionBuilder } from "@react-aria/collections";
import { useComboBoxState } from "react-stately";
import { useRenderProps } from "@hooks";
import { ComboBoxFieldWrapper } from "./ComboBoxField.styles";
import { useComboBox } from "@react-aria/combobox";
import { Provider } from "@components/Internal/Provider";
import {
  FieldErrorContext,
  FieldInputContext,
  FieldLabelContext,
  FieldMessageContext,
} from "../contexts";
import { OverlayTriggerStateContext } from "@components/Overlays/OverlayTrigger/context";
import { PopoverContext } from "@components/Overlays/Popover/context";
import {
  ListBoxContext,
  ListStateContext,
} from "@components/Dropdowns/ListBox";
import { ButtonContext } from "@components/Buttons/Button/Button.context";
import {
  ComboBoxFieldInnerProps,
  ComboBoxFieldProps,
} from "./ComboBoxField.types";
import {
  ComboBoxFieldContext,
  ComboBoxFieldStateContext,
} from "./ComboBoxField.context";
import { useFilter } from "@react-aria/i18n";

export const ComboBoxField = forwardRef(function ComboBoxField<
  T extends object,
>(props: ComboBoxFieldProps<T>, ref: React.Ref<HTMLInputElement>) {
  [props, ref] = useContextPropsV2(ComboBoxFieldContext, props, ref);

  return (
    <CollectionBuilder content={props.children}>
      {(collection) => (
        <ComboBoxFieldInner
          {...props}
          collection={collection}
          comboBoxRef={ref}
        />
      )}
    </CollectionBuilder>
  );
});

function ComboBoxFieldInner<T extends object>(
  props: ComboBoxFieldInnerProps<T>
) {
  const {
    isInvalid,
    isDisabled,
    isRequired,
    isReadOnly,
    size = "medium",
  } = props;

  const { contains } = useFilter({ sensitivity: "base" });
  const state = useComboBoxState({
    ...props,
    defaultFilter: contains,
    children: undefined,
  });

  const { comboBoxRef: ref } = props;

  const buttonRef = useRef<HTMLButtonElement>(null);
  const inputWrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listBoxRef = useRef<HTMLUListElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  const {
    buttonProps,
    inputProps,
    listBoxProps,
    labelProps,
    descriptionProps,
    errorMessageProps,
  } = useComboBox(
    {
      ...props,
      inputRef,
      buttonRef,
      listBoxRef,
      popoverRef,
    },
    state
  );

  const renderProps = useRenderProps({
    componentClassName: "aje-combobox",
    ...props,
    size,
    selectors: {
      "data-disabled": isDisabled,
      "data-readonly": isReadOnly,
      "data-required": isRequired,
      "data-invalid": isInvalid,
    },
  });

  return (
    <ComboBoxFieldWrapper {...renderProps} ref={ref}>
      <Provider
        values={[
          [ComboBoxFieldStateContext.Provider, state],
          [FieldLabelContext.Provider, labelProps],
          [FieldMessageContext.Provider, descriptionProps],
          [FieldErrorContext.Provider, { errorMessageProps, isInvalid }],
          [FieldInputContext.Provider, { inputProps, ref: inputRef }],
          [OverlayTriggerStateContext.Provider, state],
          [
            PopoverContext.Provider,
            { triggerRef: inputRef, isOpen: state.isOpen, variant: "listbox" },
          ],
          [ListBoxContext.Provider, listBoxProps],
          [ListStateContext.Provider, state],
          [OverlayTriggerStateContext.Provider, state],
          [ButtonContext.Provider, { size }],
        ]}
      >
        <PressResponder
          {...buttonProps}
          ref={ref}
          isPressed={state.isOpen}
          isDisabled={isDisabled || isReadOnly}
        >
          {renderProps.children}
        </PressResponder>
      </Provider>
    </ComboBoxFieldWrapper>
  );
}
