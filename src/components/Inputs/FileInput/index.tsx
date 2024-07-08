import React, { useRef } from "react";
import { FileDropItem } from "@react-types/shared";
import { useButton } from "@react-aria/button";
import { mergeProps } from "@react-aria/utils";
import { useId } from "@react-aria/utils";

import { useRenderProps } from "../../../hooks";
import { AriaLabelProps, FieldInputProps } from "../../../types";
import {
  FileInputSpan,
  FileInputStrong,
  FileInputWrapper,
  StyledFileInputButton,
} from "./FileInput.styles";
import { ErrorMessage, Message } from "../../Fields";
import { FileTrigger } from "@components/Buttons/FileTrigger";
import { useFocusRing } from "@hooks/useFocusRing";
import { DropZone } from "@components/DragAndDrop/DropZone";

export interface FileInputProps
  extends Omit<FieldInputProps, "isReadOnly">,
    AriaLabelProps {
  file?: File | null;
  onChange?: (f: File | null) => void;
  placeholder?: string;

  /** Array of accepted file types
   *
   * [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept)
   */
  acceptedFileTypes?: string[];
}

/** FileInput component. Used to select singular files
 *
 * Checkout [FileTrigger](?path=/docs/buttons-filetrigger--overview) For a more general file selection component
 */
export const FileInput = React.forwardRef<HTMLInputElement, FileInputProps>(
  function FileInput(props, ref) {
    const inputId = useId(props.id);
    const errorId = useId();
    const messageId = useId();

    const {
      file,
      onChange,
      label,
      error,
      message,
      isDisabled = false,
      isRequired = false,
      isInvalid = false,
      className,
      placeholder = "No file selected",
      size = "medium",
      id = inputId,
      acceptedFileTypes,
      name,
      ...rest
    } = props;

    const renderProps = useRenderProps({
      componentClassName: "aje-input__file",
      className,
      size,
      selectors: {
        "data-invalid": isInvalid,
        "data-disabled": isDisabled,
        "data-required": isRequired,
      },
    });

    return (
      <FileInputWrapper {...renderProps} {...rest}>
        <DropZone
          onDrop={(e) => {
            const files = e.items.filter(
              (item) => item.kind === "file"
            ) as FileDropItem[];

            if (files.length > 0) {
              files[0].getFile().then((file) => onChange?.(file));
            }
          }}
        >
          <FileTrigger
            acceptedFileTypes={acceptedFileTypes}
            onSelect={(files) => onChange?.(files[0] || null)}
            name={name}
          >
            <FileInputButton
              file={file}
              label={label}
              placeholder={placeholder}
              isRequired={isRequired}
              isDisabled={isDisabled}
            />
            {message && <Message id={messageId}>{message}</Message>}
            {isInvalid && error && (
              <ErrorMessage id={errorId}>{error}</ErrorMessage>
            )}
          </FileTrigger>
        </DropZone>
      </FileInputWrapper>
    );
  }
);

interface FileInputButtonProps {
  file?: File | null;
  label?: React.ReactNode;
  placeholder: string;
  isRequired: boolean;
  isDisabled: boolean;
}

function FileInputButton(props: FileInputButtonProps) {
  const { file, label, placeholder, isRequired, isDisabled } = props;

  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const { buttonProps } = useButton({ isDisabled }, buttonRef);
  const { focusProps } = useFocusRing();

  return (
    <StyledFileInputButton {...mergeProps(buttonProps, focusProps)}>
      <FileInputSpan>{file ? file.name : placeholder}</FileInputSpan>
      <FileInputStrong>
        {label}
        {isRequired && <span aria-hidden="true"> *</span>}
      </FileInputStrong>
    </StyledFileInputButton>
  );
}
