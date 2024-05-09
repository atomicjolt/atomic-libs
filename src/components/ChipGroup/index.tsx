import React, { useRef } from "react";
import type { ItemProps, ListState } from "react-stately";
import type { AriaTagGroupProps, AriaTagProps } from "react-aria";
import { useListState } from "react-stately";
import { usePress, useTag, useTagGroup } from "react-aria";
import { AriaProps, FieldInputProps, HasClassName } from "../../types";
import { ErrorMessage, Label, Message } from "../Internal/Field";
import IconButton from "../Buttons/IconButton";
import {
  ChipWrapper,
  ChipContent,
  ChipsWrapper,
  ChipGroupWrapper,
} from "./ChipGroup.styles";
import classNames from "classnames";
import { copyStaticProperties } from "../../clone";
import { Item } from "../Collection";
import { useFocusRing } from "../../hooks/useFocusRing";

interface ChipGroupProps<T extends object>
  extends AriaProps<AriaTagGroupProps<T>>,
    Omit<FieldInputProps, "isReadOnly"> {
  /** Whether the label is placed above the
   * group, or inline with the chips */
  labelPlacement: "above" | "inline";
}

/** Collection Component for displaying a group of chips.
 * Chips can be selected and removed by the user.
 */
export function ChipGroup<T extends object>(props: ChipGroupProps<T>) {
  const {
    label,
    message,
    error,
    isInvalid,
    isDisabled,
    isRequired,
    className,
    labelPlacement = "above",
    size = "full",
  } = props;

  const ref = useRef(null);

  const state = useListState(props);
  const { gridProps, labelProps, descriptionProps, errorMessageProps } =
    useTagGroup(props, state, ref);

  return (
    <ChipGroupWrapper
      className={classNames(className, "aj-chip-group")}
      isDisabled={isDisabled}
      isInvalid={isInvalid}
      isRequired={isRequired}
      size={size}
    >
      {labelPlacement === "above" && label && (
        <Label {...labelProps} $paddingBottom="0px">
          {label}
        </Label>
      )}
      <ChipsWrapper {...gridProps} ref={ref}>
        {labelPlacement === "inline" && label && (
          <Label {...labelProps} $paddingBottom="0px">
            {label}
          </Label>
        )}
        {[...state.collection].map((item) => (
          <ChipInternal key={item.key} item={item} state={state} />
        ))}
      </ChipsWrapper>
      {message && <Message {...descriptionProps}>{message}</Message>}
      {isInvalid && error && (
        <ErrorMessage {...errorMessageProps}>{error}</ErrorMessage>
      )}
    </ChipGroupWrapper>
  );
}

// NOTE: when Chip is rendered standalone, it renders the actual Chip component
// When rendered within a ChipGroup, it actually renders the ChipInternal component

interface ChipInternalProps<T> extends AriaTagProps<T> {
  state: ListState<T>;
}

function ChipInternal<T>(props: ChipInternalProps<T>) {
  const { item, state } = props;
  const ref = useRef(null);
  const { rowProps, gridCellProps, removeButtonProps, allowsRemoving } = useTag(
    props,
    state,
    ref
  );

  const { focusProps } = useFocusRing({ within: true });

  return (
    <ChipWrapper
      className={classNames("aj-chip", item.props.className)}
      ref={ref}
      {...rowProps}
      {...focusProps}
    >
      <ChipContent {...gridCellProps}>
        {item.rendered}
        {allowsRemoving && (
          <IconButton
            icon="close"
            size="small"
            variant="content"
            isDisabled={state.disabledKeys.has(item.key)}
            {...removeButtonProps}
          />
        )}
      </ChipContent>
    </ChipWrapper>
  );
}

interface ChipProps<T> extends Omit<ItemProps<T>, "title">, HasClassName {}

/** Chip component can be used either within a `<ChipGroup />` or standalone */
export function Chip<T>(props: ChipProps<T>) {
  const { className, ...rest } = props;

  return (
    <ChipWrapper className={classNames("aj-chip", className)} {...rest}>
      <ChipContent>{props.children}</ChipContent>
    </ChipWrapper>
  );
}

copyStaticProperties(Item, Chip);
