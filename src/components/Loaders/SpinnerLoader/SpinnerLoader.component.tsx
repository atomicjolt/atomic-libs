import { AriaLabelProps } from "../../../types";
import { Loader, LoaderProps } from "../Loader";
import { Spinner } from "@components/Animations/Spinner";

export interface SpinnerLoaderProps
  extends Omit<LoaderProps, "children">,
    AriaLabelProps {
  /** Duration of the animation in milliseconds
   * @default 2000
   */
  duration?: number;
}

/** SpinnerLoader component */
export function SpinnerLoader(props: SpinnerLoaderProps) {
  const { size = "medium", className, duration } = props;

  return (
    <Loader {...props} className={["aje-loader--spinner", className]}>
      <Spinner size={size} duration={duration} />
    </Loader>
  );
}
