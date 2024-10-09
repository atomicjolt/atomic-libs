import { createContext, useContext, useRef } from "react";
import { SelectState, useSelectState } from "react-stately";
import { AriaSelectProps, HiddenSelect, useSelect } from "@react-aria/select";
import { filterDOMProps } from "@react-aria/utils";
import { PressResponder } from "@react-aria/interactions";
import { MaterialIcon } from "../../Icons/MaterialIcon";
import {
  ListBoxContext,
  ListStateContext,
} from "@components/Dropdowns/ListBox";
import { OverlayTriggerStateContext } from "../../Overlays/OverlayTrigger/context";
import { useRenderProps } from "@hooks/useRenderProps";
import { useContextProps } from "@hooks/useContextProps";
import { Provider } from "@components/Internal/Provider";
import {
  FieldErrorContext,
  FieldLabelContext,
  FieldMessageContext,
} from "@components/Fields";
import { FieldProps } from "..";
import { PopoverContext } from "@components/Overlays/Popover/context";
import { BaseCollection, CollectionBuilder } from "@react-aria/collections";
import { DOMAttributes, FocusableElement, Node } from "@react-types/shared";
import { ButtonContext } from "@components/Buttons/Button/Button.context";
import { ButtonProps } from "@components/Buttons/Button";
import { DropdownButton } from "@components/Dropdowns/Dropdowns.styles";
import { AriaProps, Key } from "../../../types";
import { ButtonText, CustomSelectWrapper } from "./SelectField.styles";

export interface CustomSelectFieldProps<T>
  extends Omit<FieldProps, "children">,
    Omit<AriaProps<AriaSelectProps<T>>, "children"> {
  children: React.ReactNode;
}

export const SelectFieldContext =
  createContext<CustomSelectFieldProps<any> | null>(null);
export const SelectStateContext = createContext<SelectState<any> | null>(null);

export const SelectFieldValueContext =
  createContext<DOMAttributes<FocusableElement> | null>(null);

/** Building blocks for building custom & accessible select components */
export function SelectField<T extends object>(
  props: CustomSelectFieldProps<T>
) {
  props = useContextProps(SelectFieldContext, props);

  return (
    <CollectionBuilder content={props.children}>
      {(collection) => <SelectFieldInner {...props} collection={collection} />}
    </CollectionBuilder>
  );
}

interface SelectFieldInnerProps<T extends object>
  extends CustomSelectFieldProps<T> {
  collection: BaseCollection<T>;
}

export function SelectFieldInner<T extends object>(
  props: SelectFieldInnerProps<T>
) {
  const state = useSelectState<T>({ ...props, children: undefined });
  const ref = useRef(null);

  const {
    className,
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
  } = useSelect(props, state, ref);

  const renderProps = useRenderProps({
    componentClassName: "aje-select",
    className,
    size,
    selectors: {
      "data-invalid": isInvalid,
      "data-disabled": isDisabled,
      "data-required": isRequired,
      "data-readonly": isReadOnly,
    },
  });

  return (
    <CustomSelectWrapper {...renderProps} {...filterDOMProps(props)}>
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
          [FieldErrorContext.Provider, { errorMessageProps, isInvalid }],
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
          {props.children}
        </PressResponder>
      </Provider>
    </CustomSelectWrapper>
  );
}

interface SelectValueProps {
  placeholder?: React.ReactNode;
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

function SelectFieldButton(props: ButtonProps) {
  const { variant = "dropdown" } = props;

  return (
    <DropdownButton
      {...props}
      variant={variant === "ghost" ? "dropdown-ghost" : variant}
    >
      {props.children}
      <MaterialIcon icon="arrow_drop_down" />
    </DropdownButton>
  );
}

SelectField.Button = SelectFieldButton;
