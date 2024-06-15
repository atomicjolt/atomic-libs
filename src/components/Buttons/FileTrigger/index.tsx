import useForwardedRef from "@/hooks/useForwardedRef";
import { FieldDomProps } from "../../../types";
import { PressResponder } from "@react-aria/interactions";
import React from "react";

export interface FileTriggerProps extends FieldDomProps {
  children?: React.ReactNode;

  /** Configure if the input should accept files or directories
   *
   * [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/webkitdirectory)
   */
  accept?: "files" | "directories";

  /** Whether or not the input allows multiple files to be selected
   *
   * [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/multiple)
   */
  allowsMultiple?: boolean;

  /** Array of accepted file types
   *
   * [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept)
   */
  acceptedFileTypes?: string[];

  /** Specifies that a new file should be captured from the device camera
   * Typically only works on mobile devices
   *
   * [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/capture)
   */
  captureMode?: "user" | "environment";

  /** Callback function that is called when a file is selected */
  onSelect?: (files: FileList) => void;
}

/** FileTrigger component. Provides the ability to trigger file selection
 * for any child pressable component
 */
export const FileTrigger = React.forwardRef(function FileTrigger(
  props: FileTriggerProps,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  const {
    children,
    allowsMultiple,
    acceptedFileTypes = [],
    captureMode,
    accept,
    name,
  } = props;
  const inputRef = useForwardedRef(ref);

  return (
    <>
      <PressResponder
        onPress={() => {
          // Clear out the input for repeat file selection
          if (inputRef.current?.value) inputRef.current.value = "";

          inputRef.current?.click();
        }}
      >
        {children}
      </PressResponder>
      <input
        name={name}
        type="file"
        ref={inputRef}
        style={{ display: "none" }}
        accept={
          acceptedFileTypes.length > 0 ? acceptedFileTypes.join(",") : undefined
        }
        multiple={allowsMultiple}
        capture={captureMode}
        onChange={(e) => props.onSelect?.(e.target.files!)}
        // @ts-expect-error - webkitdirectory is not a standard attribute
        // But it is supported by most modern browsers
        webkitdirectory={accept === "directory" ? "true" : undefined}
      />
    </>
  );
});
