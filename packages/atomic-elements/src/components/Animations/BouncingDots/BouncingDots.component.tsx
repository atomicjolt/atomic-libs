import { filterDOMProps } from "@react-aria/utils";
import { useRenderProps } from "@hooks/useRenderProps";
import {
  AriaLabelProps,
  RenderClassName,
  RenderStyle,
  Size,
} from "../../../types";
import { Dot, DotsContainer } from "./BouncingDots.styles";

export interface BouncingDotsProps extends AriaLabelProps {
  className?: RenderClassName<never>;
  style?: RenderStyle<never>;
  /** Size of the dots
   * @default "medium"
   */
  size?: Size;

  /** Duration of the animation in milliseconds
   * @default 500
   */
  duration?: number;

  /** Number of dots to render
   * @default 3
   */
  count?: number;
}

/** A row of dots that bounce in turn. Decorative unless given an
 * `aria-label` or `aria-labelledby`, in which case it is exposed as an image. */
export function BouncingDots(props: BouncingDotsProps) {
  const { size = "medium", duration = 500, count = 3 } = props;

  const renderProps = useRenderProps({
    ...props,
    componentClassName: "aje-bouncing-dots",
    size,
  });

  return (
    <DotsContainer
      {...renderProps}
      {...filterDOMProps(props, { labelable: true })}
      // Decorative unless labelled; a label makes it an image to assistive tech.
      role={props["aria-label"] || props["aria-labelledby"] ? "img" : undefined}
      $duration={duration}
    >
      {[...Array(count)].map((_, i) => (
        <Dot key={i} $count={i} className="aje-bouncing-dots__dot" />
      ))}
    </DotsContainer>
  );
}
