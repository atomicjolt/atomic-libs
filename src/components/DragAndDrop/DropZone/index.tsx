import { useRef } from "react";
import {
  DropEnterEvent,
  DropMoveEvent,
  VisuallyHidden,
  mergeProps,
  useButton,
  useClipboard,
  useDrop,
  useHover,
} from "react-aria";
import { isFocusable } from "@react-aria/focus";
import {
  DropActivateEvent,
  DropEvent,
  DropExitEvent,
} from "@react-types/shared";

import { DomProps, RenderBaseProps, AriaLabelProps } from "../../../types";
import { useFocusRing } from "@/hooks/useFocusRing";
import { useRenderProps } from "@/hooks";

import { DropZoneWrapper } from "./DropZone.styles";

interface DropZoneRenderProps {
  isDisabled: boolean;
  isFocused: boolean;
  isFocusVisible: boolean;
  isDropTarget: boolean;
}

export interface DropZoneProps
  extends DomProps,
    RenderBaseProps<DropZoneRenderProps>,
    AriaLabelProps {
  /** Handler that is called when a valid drag enters the drop target. */
  onDropEnter?: (e: DropEnterEvent) => void;
  /** Handler that is called when a valid drag is moved within the drop target. */
  onDropMove?: (e: DropMoveEvent) => void;
  /** Handler that is called after a valid drag is held over the drop target for a period of time */
  onDropActivate?: (e: DropActivateEvent) => void;
  /** Handler called when a valid drag exits the drop target. */
  onDropExit?: (e: DropExitEvent) => void;
  /** Handler that is called when a valid drag is dropped on the drop target. */
  onDrop?: (e: DropEvent) => void;
  /** Whether the DropZone is disabled. When disabled, it will not accept any drops */
  isDisabled?: boolean;
}

/** DropZone component. Used to create an area
 * where one or multiple objects can be dragged and dropped */
export function DropZone(props: DropZoneProps) {
  const { isDisabled = false } = props;
  const dropZoneRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const { dropProps, dropButtonProps, isDropTarget } = useDrop({
    ...props,
    ref: dropZoneRef,
  });
  const { buttonProps } = useButton(dropButtonProps!, buttonRef);
  const { focusProps, isFocusVisible, isFocused } = useFocusRing();
  const { hoverProps } = useHover(props);

  const { clipboardProps } = useClipboard({
    isDisabled,
    onPaste: (items) =>
      props.onDrop?.({
        type: "drop",
        items,
        x: 0,
        y: 0,
        dropOperation: "copy",
      }),
  });

  const renderProps = useRenderProps({
    ...props,
    componentClassName: "aje-dropzone",
    values: { isDisabled, isDropTarget, isFocused, isFocusVisible },
    selectors: {
      "data-drag-over": isDropTarget,
      "data-focused": isFocused,
      "data-focus-visible": isFocusVisible,
      "data-disabled": isDisabled,
    },
  });

  const dropZoneProps = mergeProps(dropProps, hoverProps, renderProps);

  return (
    <DropZoneWrapper
      {...dropZoneProps}
      id={props.id}
      ref={dropZoneRef}
      onClick={(e) => {
        let target = e.target as HTMLElement | null;
        while (target && dropZoneRef?.current?.contains(target)) {
          if (isFocusable(target)) {
            break;
          } else if (target === dropZoneRef.current) {
            buttonRef.current?.focus();
            break;
          }

          target = target.parentElement;
        }
      }}
    >
      <VisuallyHidden>
        <button {...mergeProps(buttonProps, focusProps, clipboardProps)} />
      </VisuallyHidden>
      {renderProps.children}
    </DropZoneWrapper>
  );
}
