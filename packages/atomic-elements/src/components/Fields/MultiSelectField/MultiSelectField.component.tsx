import { forwardRef, RefAttributes, useRef } from "react";
import { PressResponder } from "@react-aria/interactions";

import { ListBoxContext, ListStateContext } from "../../Dropdowns/ListBox";
import { OverlayTriggerStateContext } from "@components/Overlays/OverlayTrigger/context";
import { useRenderProps } from "@hooks/useRenderProps";
import { useContextProps } from "@hooks/useContextProps";
import { BaseCollection, CollectionBuilder } from "@react-aria/collections";
import { Provider } from "@components/Internal/Provider";
import { PopoverContext } from "@components/Overlays/Popover/Popover.context";
import { ButtonContext } from "@components/Buttons/Button/Button.context";
import { DropdownButton } from "@components/Internal/DropdownButton";
import {
  FieldErrorContext,
  FieldLabelContext,
  FieldMessageContext,
} from "../contexts";

import { MultiSelectFieldWrapper } from "./MultiSelectField.styles";
import {
  MultiSelectFieldContext,
  MultiSelectStateContext,
} from "./MultiSelectField.context";
import { useMultiSelectState } from "./useMultiSelectState";
import { MultiSelectFieldProps } from "./MutliSelectField.types";
import { useMultiSelect } from "./useMultiSelect";

export interface MultiSelectFieldComponent
  extends React.ForwardRefExoticComponent<
    MultiSelectFieldProps<any> & RefAttributes<HTMLButtonElement>
  > {
  /** Wrapper around `Button` that configures default visual styling
   * for the button that opens the dropdown for a `SelectField` */
  Button: typeof DropdownButton;
}

/** Building blocks for building custom & accessible select components */
export const MultiSelectField = forwardRef(function MultiSelectField<
  T extends object
>(props: MultiSelectFieldProps<T>, ref: React.Ref<HTMLButtonElement>) {
  [props, ref] = useContextProps(MultiSelectFieldContext, props, ref);

  return (
    <CollectionBuilder content={props.children}>
      {(collection) => (
        <MultiSelectFieldInner
          {...props}
          collection={collection}
          selectRef={ref}
        />
      )}
    </CollectionBuilder>
  );
}) as MultiSelectFieldComponent;

interface MultiSelectFieldInnerProps<T extends object>
  extends MultiSelectFieldProps<T> {
  collection: BaseCollection<T>;
  selectRef: React.RefObject<HTMLButtonElement | null>;
}

/** MultiSelect is a dropdown that allows the user to select multiple options from a list */
export function MultiSelectFieldInner<T extends object>(
  props: MultiSelectFieldInnerProps<T>
) {
  const state = useMultiSelectState<T>({
    ...props,
    label: true,
    children: undefined,
  });
  const ref = useRef(null);
  const {
    labelProps,
    triggerProps,
    valueProps,
    menuProps,
    errorMessageProps,
    descriptionProps,
  } = useMultiSelect({ ...props, label: true }, state, ref);

  const {
    isInvalid,
    isDisabled,
    isRequired,
    isReadOnly,
    size = "medium",
  } = props;

  const renderProps = useRenderProps({
    componentClassName: "aje-multiselect",
    ...props,
    selectors: {
      "data-invalid": isInvalid,
      "data-disabled": isDisabled,
      "data-required": isRequired,
      "data-readonly": isReadOnly,
    },
  });

  return (
    <MultiSelectFieldWrapper {...renderProps}>
      <Provider
        values={[
          [MultiSelectStateContext.Provider, state],
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
    </MultiSelectFieldWrapper>
  );
}

MultiSelectField.Button = DropdownButton;
