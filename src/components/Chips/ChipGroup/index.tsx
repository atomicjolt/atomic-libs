import { useRef } from "react";
import type { ListState } from "react-stately";
import classNames from "classnames";
import type { AriaTagGroupProps, AriaTagProps } from "react-aria";
import { useListState } from "react-stately";
import { useTag, useTagGroup } from "react-aria";
import { AriaProps, FieldInputProps } from "../../../types";
import { ErrorMessage, Label, Message } from "@/components/Fields";
import { ChipsWrapper, ChipGroupWrapper } from "./ChipGroup.styles";
import { useFocusRing } from "../../../hooks/useFocusRing";
import { ChipInternal } from "../Chip";

export interface ChipGroupProps<T extends object>
  extends AriaProps<AriaTagGroupProps<T>>,
    Omit<FieldInputProps, "isReadOnly"> {
  /** Whether the label is placed above the
   * group, or inline with the chips */
  labelPlacement?: "above" | "inline";
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
      className={classNames(className, "aje-chip-group")}
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
          <ChipGroupChip key={item.key} item={item} state={state} />
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

interface ChipGroupChipProps<T> extends AriaTagProps<T> {
  state: ListState<T>;
}

function ChipGroupChip<T>(props: ChipGroupChipProps<T>) {
  const { item, state } = props;
  const ref = useRef(null);
  const { rowProps, gridCellProps, removeButtonProps, allowsRemoving } = useTag(
    props,
    state,
    ref
  );

  const { focusProps } = useFocusRing({ within: true });

  const isDisabled = state.disabledKeys.has(item.key);

  return (
    <ChipInternal
      ref={ref}
      wrapperProps={{ ...rowProps, ...focusProps }}
      contentProps={gridCellProps}
      removeButtonProps={{
        ...removeButtonProps,
        isDisabled,
      }}
      {...item.props}
      allowsRemoving={allowsRemoving}
      isDisabled={isDisabled}
    >
      {item.rendered}
    </ChipInternal>
  );
}
