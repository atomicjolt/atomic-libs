import React, { useContext } from "react";
import { filterDOMProps, mergeProps, useObjectRef } from "@react-aria/utils";
import { useTag } from "@react-aria/tag";
import { createLeafComponent } from "@react-aria/collections";

import { IconButton } from "@components/Buttons/IconButton";
import { useConditionalPress } from "@hooks/useConditionalPress";
import { useFocusRing } from "@hooks/useFocusRing";
import { useContextProps } from "@hooks/useContextProps";
import { useRenderProps } from "@hooks";
import { ChipGroupStateContext } from "@components/Fields/ChipGroupField/ChipGroupField.context";

import { ChipArgs, ChipGroupChipProps, ChipInternalProps } from "./Chip.types";
import { ChipContent, ChipWrapper } from "./Chip.styles";
import { ChipContext } from "./Chip.context";

export function ChipLeaf<T>(...args: ChipArgs<T>) {
  const [props, ref] = useContextProps(ChipContext, args[0], args[1]);

  // We're being rendered standalone
  if (args.length === 2) {
    return (
      <ChipInternal {...props} ref={ref} allowsRemoving={!!props.onRemove} />
    );
  }

  // We're being rendered as part of a collection (i.e ChipGroup)
  const item = args[2];
  return <ChipGroupChip item={item} itemRef={ref} {...props} />;
}

/**
 * Chip component. Can be used stand-alone, or within a parent
 * `ChipGroup`
 */
export const Chip = createLeafComponent("item", ChipLeaf);

function ChipGroupChip<T>(props: ChipGroupChipProps<T>) {
  const { item } = props;
  const ref = useObjectRef<HTMLDivElement>(props.itemRef);
  const state = useContext(ChipGroupStateContext)!;
  const {
    rowProps,
    gridCellProps,
    removeButtonProps,
    allowsRemoving,
    isFocused,
    isSelected,
  } = useTag(props, state, ref);

  const { focusProps, isFocusVisible } = useFocusRing({ within: true });

  const isDisabled = state.disabledKeys.has(item.key);

  const renderProps = useRenderProps({
    componentClassName: "aje-chip",
    values: {
      isSelected,
      isFocusVisible,
      isFocused,
    },
    ...props,
  });

  return (
    <ChipWrapper
      ref={ref}
      {...mergeProps(rowProps, focusProps)}
      {...renderProps}
    >
      <ChipContent {...gridCellProps}>
        {renderProps.children}
        {allowsRemoving && (
          <IconButton
            icon="close"
            size="small"
            variant="chip"
            {...mergeProps(removeButtonProps, { isDisabled })}
          />
        )}
      </ChipContent>
    </ChipWrapper>
  );
}

export const ChipInternal = React.forwardRef(function ChipInternal<T>(
  props: ChipInternalProps<T>,
  ref: React.Ref<HTMLDivElement>
) {
  const {
    className,
    variant,
    onRemove,
    isDisabled,
    children,
    allowsRemoving = false,
    ...rest
  } = props;

  const { pressProps } = useConditionalPress(rest);

  const renderProps = useRenderProps({
    componentClassName: "aje-chip",
    values: {
      isSelected: false,
      isFocusVisible: false,
      isFocused: false,
    },
    ...props,
  });

  return (
    <ChipWrapper
      ref={ref}
      {...mergeProps({ "aria-disabled": isDisabled || undefined }, pressProps)}
      {...renderProps}
      {...filterDOMProps(props as any)}
    >
      <ChipContent>
        {renderProps.children}
        {allowsRemoving && (
          <IconButton
            icon="close"
            size="small"
            variant="chip"
            isDisabled={isDisabled}
            onPress={onRemove}
          />
        )}
      </ChipContent>
    </ChipWrapper>
  );
});
