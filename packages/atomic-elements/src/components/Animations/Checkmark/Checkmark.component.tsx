import { RenderBaseProps, Size } from "../../../types";
import { useRenderProps } from "@hooks/useRenderProps";
import { StyledCheckmark } from "./Checkmark.styles";

export interface CheckmarkProps
  extends Omit<RenderBaseProps<never>, "children"> {
  /** Size of the checkmark
   * @default "medium"
   */
  size?: Size;
}

/** A checkmark that pops in with a short animation when it first renders. */
export function Checkmark(props: CheckmarkProps) {
  const { size = "medium" } = props;

  const renderProps = useRenderProps({
    ...props,
    componentClassName: "aje-checkmark",
    size,
  });

  return <StyledCheckmark {...renderProps} data-testid="checkmark" />;
}
