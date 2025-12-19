import { DateField as DateFieldComponent } from "./DateField.component";
import { DateFieldSegment } from "./DateFieldSegment";
import { DateFieldSegments } from "./DateFieldSegments";

export const DateField = Object.assign(DateFieldComponent, {
  Segment: DateFieldSegment,
  Segments: DateFieldSegments,
});

export type { DateFieldProps, DateFieldContextType } from "./DateField.component";
export type { DateFieldSegmentProps } from "./DateFieldSegment";
export type { DateFieldSegmentsProps } from "./DateFieldSegments";
export { DateFieldContext } from "./DateField.component";