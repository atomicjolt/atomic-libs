import { useContext } from "react";
import { DateSegment as ReactStatelyDateSegment } from "react-stately";
import { DateFieldContext } from "./DateField.component";
import { ComboInput } from "../ComboInput";

export interface DateFieldSegmentsProps {
  children: (
    segment: ReactStatelyDateSegment,
    index: number
  ) => React.ReactNode;
}

export function DateFieldSegments(props: DateFieldSegmentsProps) {
  const { children } = props;
  const context = useContext(DateFieldContext);

  if (!context) {
    throw new Error("DateField.Segments must be used within a DateField");
  }

  const { segments, fieldProps } = context;

  return (
    <ComboInput
      className="aje-input__date-segments"
      padding="both"
      {...fieldProps}
      style={{
        // @ts-expect-error CSS variable
        "--input-gap": "0px",
        ...fieldProps.style,
      }}
    >
      {segments.map((segment, index) => children(segment, index))}
    </ComboInput>
  );
}
