import React, { useContext } from "react";
import classNames from "classnames";
import type { ItemProps } from "react-stately";
import { copyStaticProperties } from "@/clone";
import { useVariantClass } from "@/hooks";
import { HasClassName } from "@/types";
import { Item } from "@/components/Collection";
import { ChipContent, ChipWrapper } from "./Chip.styles";
import { PressEvent, PressProps, mergeProps, usePress } from "react-aria";
import IconButton from "@/components/Buttons/IconButton";
import { WrapperChipGroupContext } from "./contexts";
import { useConditionalPress } from "@/hooks/useConditionalPress";

export interface ChipProps<T> extends ItemProps<T>, HasClassName, PressProps {
  children: React.ReactNode;
  variant?: "default" | "warning" | "success";
  /** Handler that is called when the user clicks the remove button */
  onRemove?: (e: PressEvent) => void;
  isDisabled?: boolean;
}

/** Chip component */
const Chip = React.forwardRef<HTMLDivElement, ChipProps<any>>(function Chip(
  props: ChipProps<any>,
  ref: React.Ref<HTMLDivElement>
) {
  const {
    className,
    variant = "default",
    onRemove,
    isDisabled,
    children,
    ...rest
  } = props;

  const variantClass = useVariantClass("aje-chip", variant);
  const { pressProps } = useConditionalPress(rest);

  const {
    wrapperProps = {},
    contentProps = {},
    removeButtonProps = {},
    allowsRemoving = false,
  } = useContext(WrapperChipGroupContext);

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

        {(allowsRemoving || onRemove) && (
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

copyStaticProperties(Item, Chip);

export { Chip };
