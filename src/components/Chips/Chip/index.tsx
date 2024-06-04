import React from "react";
import classNames from "classnames";
import type { ItemProps } from "react-stately";
import {
  AriaButtonProps,
  PressEvent,
  PressProps,
  mergeProps,
} from "react-aria";
import { copyStaticProperties } from "@/clone";
import { useVariantClass } from "@/hooks";
import { HasClassName, SuggestStrings } from "@/types";
import { Item } from "@/components/Collection";
import IconButton from "@/components/Buttons/IconButton";
import { useConditionalPress } from "@/hooks/useConditionalPress";
import { ChipContent, ChipWrapper } from "./Chip.styles";

type ChipVariants = SuggestStrings<"default" | "warning" | "success">;

export interface ChipProps<T> extends ItemProps<T>, PressProps, HasClassName {
  children: React.ReactNode;
  variant?: ChipVariants;
  /** Handler that is called when the user
   * clicks the remove button for the chip */
  onRemove?: (e: PressEvent) => void;
  isDisabled?: boolean;
}

/** Chip component */
export function Chip<T>(props: ChipProps<T>) {
  return <ChipInternal {...props} allowsRemoving={!!props.onRemove} />;
}

copyStaticProperties(Item, Chip);

interface ChipInternalProps<T> extends ChipProps<T> {
  wrapperProps?: React.DOMAttributes<HTMLDivElement>;
  contentProps?: React.DOMAttributes<HTMLDivElement>;
  removeButtonProps?: AriaButtonProps<"button">;
  allowsRemoving?: boolean;
}

export const ChipInternal = React.forwardRef<
  HTMLDivElement,
  ChipInternalProps<any>
>(function ChipInternal<T>(
  props: ChipInternalProps<T>,
  ref: React.Ref<HTMLDivElement>
) {
  const {
    className,
    variant = "default",
    onRemove,
    isDisabled,
    children,
    wrapperProps = {},
    contentProps = {},
    removeButtonProps = {},
    allowsRemoving = false,
    ...rest
  } = props;

  const variantClass = useVariantClass("aje-chip", variant);
  const { pressProps } = useConditionalPress(rest);

  const allWrapperProps = [
    wrapperProps,
    { "aria-disabled": isDisabled || undefined },
  ];

  if (!isDisabled) {
    allWrapperProps.push(pressProps);
  }

  return (
    <ChipWrapper
      className={classNames("aje-chip", variantClass, className)}
      ref={ref}
      {...mergeProps(...allWrapperProps)}
    >
      <ChipContent {...contentProps}>
        {children}

        {allowsRemoving && (
          <IconButton
            icon="close"
            size="small"
            variant="content"
            {...mergeProps(
              {
                isDisabled,
                onPress: onRemove,
              },
              removeButtonProps
            )}
          />
        )}
      </ChipContent>
    </ChipWrapper>
  );
});
