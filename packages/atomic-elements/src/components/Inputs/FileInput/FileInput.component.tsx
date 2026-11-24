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
  StyledLoadingFileInput,
} from "./FileInput.styles";
import { ErrorMessage, Message } from "../../Fields";
import { FileTrigger } from "@components/Buttons/FileTrigger";
import { useFocusRing } from "@hooks/useFocusRing";
import { DropZone } from "@components/DragAndDrop/DropZone";
import { useLoading } from "@components/Feedback/Loading";

export interface FileInputProps
  extends Omit<FieldInputProps, "isReadOnly">,
    AriaLabelProps {
  /** The currently selected file (controlled) */
  file?: File | null;
  /** Called with the selected or dropped file, or null */
  onChange?: (f: File | null) => void;
  /**
   * Text shown when no file is selected
   * @default "No file selected"
   */
  placeholder?: string;

  /** Array of accepted file types
   *
   * [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept)
   */
  acceptedFileTypes?: string[];
}

/** FileInput component. Used to select singular files
 *
 * Check out [FileTrigger](?path=/docs/buttons-filetrigger--overview) for a more general file selection component
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
      isLoading: _isLoading,
      loadingLabel: _loadingLabel,
      // Labelling props belong on the button people interact with, not the
      // wrapper div.
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledby,
      "aria-describedby": ariaDescribedby,
      "aria-details": ariaDetails,
      ...rest
    } = props;

    // Describe the button with the message and error, as well as anything
    // passed in, so screen readers announce them.
    const describedBy =
      [
        ariaDescribedby,
        message ? messageId : undefined,
        isInvalid && error ? errorId : undefined,
      ]
        .filter(Boolean)
        .join(" ") || undefined;

    const { isLoading, loadingLabel } = useLoading(props);

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

    if (isLoading) {
      return (
        <FileInputWrapper {...renderProps}>
          <StyledLoadingFileInput title={loadingLabel}>
            <rect x="0" y="0" width="100%" height="100%" rx="5" ry="5" />
          </StyledLoadingFileInput>
        </FileInputWrapper>
      );
    }

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
            ref={ref}
            id={id}
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
              aria-label={ariaLabel}
              aria-labelledby={ariaLabelledby}
              aria-describedby={describedBy}
              aria-details={ariaDetails}
            />
            {message && <Message id={messageId}>{message}</Message>}
            {isInvalid && error && (
              <ErrorMessage id={errorId} isInvalid>
                {error}
              </ErrorMessage>
            )}
          </FileTrigger>
        </DropZone>
      </FileInputWrapper>
    );
  }
);

interface FileInputButtonProps extends AriaLabelProps {
  file?: File | null;
  label?: React.ReactNode;
  placeholder: string;
  isRequired: boolean;
  isDisabled: boolean;
}

function FileInputButton(props: FileInputButtonProps) {
  const { file, label, placeholder, isRequired, isDisabled, ...ariaProps } =
    props;

  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const { buttonProps } = useButton({ isDisabled, ...ariaProps }, buttonRef);
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
