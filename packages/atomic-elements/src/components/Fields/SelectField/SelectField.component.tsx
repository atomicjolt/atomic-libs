import React, { forwardRef, RefAttributes, useContext } from "react";
import { useSelectState } from "react-stately";
import { HiddenSelect, useSelect } from "@react-aria/select";
import { filterDOMProps } from "@react-aria/utils";
import { PressResponder } from "@react-aria/interactions";
import { CollectionBuilder } from "@react-aria/collections";

import {
  ListBoxContext,
  ListStateContext,
} from "@components/Dropdowns/ListBox";
import { OverlayTriggerStateContext } from "../../Overlays/OverlayTrigger/context";
import { useRenderProps } from "@hooks/useRenderProps";
import { useContextPropsV2 } from "@hooks/useContextProps";
import { Provider } from "@components/Internal/Provider";
import {
  FieldErrorContext,
  FieldLabelContext,
  FieldMessageContext,
} from "@components/Fields";
import { PopoverContext } from "@components/Overlays/Popover/Popover.context";
import { ButtonContext } from "@components/Buttons/Button/Button.context";

import { ButtonText, SelectFieldWrapper } from "./SelectField.styles";
import {
  SelectFieldInnerProps,
  SelectFieldProps,
  SelectValueProps,
} from "./SelectField.types";
import {
  SelectFieldContext,
  SelectFieldValueContext,
  SelectStateContext,
} from "./SelectField.context";
import { DropdownButton } from "@components/Internal/DropdownButton";

type ForwardedSelectField = {
  <T>(
    props: SelectFieldProps<T> & RefAttributes<HTMLButtonElement>
  ): JSX.Element;
  displayName: string;
  /** Renders the selected value of a SelectField */
  Value: typeof SelectFieldValue;
  /** Wrapper around `Button` that configures default visual styling
   * for the button that opens the dropdown for a `SelectField` */
  Button: typeof DropdownButton;
};

/** Building blocks for building custom & accessible select components */
export const SelectField = forwardRef(function SelectField<T extends object>(
  props: SelectFieldProps<T>,
  ref: React.Ref<HTMLButtonElement>
) {
  [props, ref] = useContextPropsV2(SelectFieldContext, props, ref);

  return (
    <CollectionBuilder content={props.children}>
      {(collection) => (
        <SelectFieldInner {...props} collection={collection} selectRef={ref} />
      )}
    </CollectionBuilder>
  );
}) as unknown as ForwardedSelectField;

SelectField.displayName = "SelectField";

export function SelectFieldInner<T extends object>(
  props: SelectFieldInnerProps<T>
) {
  const state = useSelectState<T>({ ...props, children: undefined });
  const { selectRef: ref } = props;

  const {
    isInvalid,
    isDisabled,
    isRequired,
    isReadOnly,
    name,
    size = "medium",
  } = props;

  const {
    labelProps,
    triggerProps,
    valueProps,
    menuProps,
    errorMessageProps,
    descriptionProps,
  } = useSelect({ ...props, label: true }, state, ref);

  const renderProps = useRenderProps({
    componentClassName: "aje-select",
    ...props,
    selectors: {
      "data-invalid": isInvalid,
      "data-disabled": isDisabled,
      "data-required": isRequired,
      "data-readonly": isReadOnly,
    },
  });

  return (
    <SelectFieldWrapper {...renderProps} {...filterDOMProps(props)}>
      <HiddenSelect
        isDisabled={isDisabled}
        state={state}
        triggerRef={ref}
        label=""
        name={name}
      />
      <Provider
        values={[
          [SelectStateContext.Provider, state],
          [SelectFieldValueContext.Provider, valueProps],
          [FieldLabelContext.Provider, labelProps],
          [FieldMessageContext.Provider, descriptionProps],
          [FieldErrorContext.Provider, { ...errorMessageProps, isInvalid }],
          [OverlayTriggerStateContext.Provider, state],
          [
            PopoverContext.Provider,
            { triggerRef: ref, isOpen: state.isOpen, variant: "listbox" },
          ],
          [ListBoxContext.Provider, menuProps],
          [ListStateContext.Provider, state],
          [OverlayTriggerStateContext.Provider, state],
          [ButtonContext.Provider, { size }],
        ]}
      >
        <PressResponder
          {...triggerProps}
          ref={ref}
          isPressed={state.isOpen}
          isDisabled={isDisabled || isReadOnly}
        >
          {renderProps.children}
        </PressResponder>
      </Provider>
    </SelectFieldWrapper>
  );
}

function SelectFieldValue(props: SelectValueProps) {
  const { placeholder } = props;

  const valueProps = useContext(SelectFieldValueContext);
  const state = useContext(SelectStateContext);

  if (!state) return null;

  return (
    <ButtonText {...valueProps}>
      {state.selectedItem ? state.selectedItem.rendered : placeholder}
    </ButtonText>
  );
}

SelectField.Value = SelectFieldValue;
SelectField.Button = DropdownButton;
