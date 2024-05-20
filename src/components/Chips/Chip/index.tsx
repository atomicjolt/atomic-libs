import React from "react";
import classNames from "classnames";
import type { ItemProps } from "react-stately";
import { copyStaticProperties } from "@/clone";
import { useVariantClass } from "@/hooks";
import { HasClassName } from "@/types";
import { Item } from "@/components/Collection";
import { ChipContent, ChipWrapper } from "./Chip.styles";
import {
  AriaButtonProps,
  PressEvent,
  PressProps,
  mergeProps,
} from "react-aria";
import IconButton from "@/components/Buttons/IconButton";
import { useConditionalPress } from "@/hooks/useConditionalPress";

export interface ChipProps<T> extends ItemProps<T>, HasClassName, PressProps {
  children: React.ReactNode;
  variant?: "default" | "warning" | "success";
  /** Handler that is called when the user clicks the remove button */
  onRemove?: (e: PressEvent) => void;
  isDisabled?: boolean;
}

/** Chip component */
export const Chip = React.forwardRef<HTMLDivElement, ChipProps<any>>(
  function Chip(props: ChipProps<any>, ref: React.Ref<HTMLDivElement>) {
    return (
      <ChipInternal {...props} allowsRemoving={!!props.onRemove} ref={ref} />
    );
  }
);

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
>(function ChipInternal(props: ChipInternalProps<any>, ref) {
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

  return (
    <ChipWrapper
      className={classNames("aje-chip", variantClass, className)}
      ref={ref}
      {...mergeProps(wrapperProps, pressProps, {
        "aria-disabled": isDisabled || undefined,
      })}
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
