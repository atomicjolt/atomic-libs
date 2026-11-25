import {
  ProgressCircle,
  ProgressCircleProps,
} from "@components/Feedback/ProgressCircle";

export interface SpinnerProps
  extends Omit<ProgressCircleProps, "isIndeterminate"> {}

/** An indeterminate `ProgressCircle` styled as a loading spinner.
 * Give it an `aria-label` (or `aria-labelledby`) so screen readers can
 * announce it. */
export function Spinner(props: SpinnerProps) {
  return (
    <ProgressCircle
      $size="40px"
      $trackWidth="6"
      $linecap="round"
      $trackColor="transparent"
      $indicatorColor="var(--animation-clr)"
      isIndeterminate
      {...props}
      className={["aje-spinner", props.className]}
      data-testid="spinner-svg"
    />
  );
}
