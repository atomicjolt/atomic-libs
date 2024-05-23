import React, { useContext } from "react";
import { useMultipleDomRefs } from "../../../hooks/useMultipleDomRefs";
import { FieldInputContext } from "../contexts";
import classNames from "classnames";
import { TextAreaProps, TextArea } from "../Atoms/TextArea";

export interface FieldTextAreaProps extends TextAreaProps {}

/** A TextArea component that should be nested within a Field */
export const FieldTextArea = React.forwardRef(function FieldTextArea(
  props: FieldTextAreaProps,
  providedRef: React.Ref<HTMLTextAreaElement>
) {
  const { className, ...rest } = props;
  const { inputProps, ref: contextRef } = useContext(FieldInputContext);

  // @ts-ignore
  const ref = useMultipleDomRefs(providedRef, contextRef);

  return (
    <TextArea
      className={classNames(className)}
      ref={ref}
      {...inputProps}
      {...rest}
    />
  );
});
