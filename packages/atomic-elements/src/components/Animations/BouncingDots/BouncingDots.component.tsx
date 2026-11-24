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
  /** @default "medium" */
  size?: Size;

  /** Duration of the animation in milliseconds
   * @default 500
   */
  duration?: number;

  /** @default 3 */
  count?: number;
}

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
