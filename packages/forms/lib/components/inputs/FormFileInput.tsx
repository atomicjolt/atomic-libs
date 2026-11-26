import { FileInput } from "@atomicjolt/atomic-elements";
import type { FileInputProps } from "@atomicjolt/atomic-elements";
import { FormInputProps } from "../../types";
import { useFormField } from "../../hooks/useFormField";

export interface FormFileInputProps
  extends FormInputProps<Omit<FileInputProps, "file">, FileInputProps["file"]> {
  /** The initially selected file */
  defaultValue?: File | null;
}

/** Stores the selected `File` (or `null`) */
export function FormFileInput(props: FormFileInputProps) {
  const { fieldProps, inputProps, ref } = useFormField<
    FileInputProps,
    FileInputProps["file"]
  >(props);

  return (
    <FileInput
      {...fieldProps}
      file={inputProps.value ?? null}
      onChange={inputProps.onChange}
      ref={ref}
    />
  );
}
