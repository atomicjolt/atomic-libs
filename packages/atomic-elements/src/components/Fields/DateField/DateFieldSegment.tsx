import { useRef, useContext } from "react";
import cn from "classnames";
import { useDateSegment } from "@react-aria/datepicker";
import { DateFieldContext } from "./DateField.component";
import { StyledDateSegment } from "./DateField.styles";

export interface DateFieldSegmentProps {
  readonly index: number;
  readonly className?: string;
}

export function DateFieldSegment(props: DateFieldSegmentProps) {
  const { index, className } = props;
  const context = useContext(DateFieldContext);

  if (!context) {
    throw new Error("DateField.Segment must be used within a DateField");
  }

  const { state, segments } = context;
  const segment = segments[index];

  if (!segment) {
    return null;
  }

  const ref = useRef(null);
  const { segmentProps } = useDateSegment(segment, state, ref);

  const segmentClassName = cn("aje-input__segment", className, {
    placeholder: segment.isPlaceholder,
  });

  return (
    <StyledDateSegment {...segmentProps} ref={ref} className={segmentClassName}>
      {segment.text}
    </StyledDateSegment>
  );
}
