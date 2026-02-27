import { useContext } from "react";
import { DateSegment as ReactStatelyDateSegment } from "react-stately";
import { DateFieldContext } from "./DateField.component";
import { ComboInput } from "../ComboInput";
import { StyledDateSegments } from "./DateField.styles";

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
    <StyledDateSegments className="aje-input__date-segments" {...fieldProps}>
      {segments.map((segment, index) => children(segment, index))}
    </StyledDateSegments>
  );
}
