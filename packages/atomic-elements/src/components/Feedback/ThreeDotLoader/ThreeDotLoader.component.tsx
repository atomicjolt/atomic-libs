import { AriaLabelProps } from "../../../types";
import { Loader, LoaderProps } from "../Loader";
import { BouncingDots } from "@components/Animations/BouncingDots";

export interface ThreeDotLoaderProps
  extends AriaLabelProps,
    Omit<LoaderProps, "children"> {
  /** Duration of the animation in milliseconds
   * @default 500
   */
  duration?: number;
}

/** ThreeDotLoader Component */
export function ThreeDotLoader(props: ThreeDotLoaderProps) {
  const { className, size, duration } = props;

  return (
    <Loader {...props} className={["aje-loader--bouncing-dots", className]}>
      <BouncingDots size={size} duration={duration} />
    </Loader>
  );
}
