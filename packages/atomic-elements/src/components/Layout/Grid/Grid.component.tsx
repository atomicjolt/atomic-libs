import { forwardRef } from "react";
import { RenderBaseProps } from "../../../types";
import { useContextProps } from "@hooks/useContextProps";
import { useRenderProps } from "@hooks/useRenderProps";
import { LayoutProps } from "@styles/layout";
import { GridStyleProps } from "@styles/grid";
import { GridContext } from "./Grid.context";
import { GridWrapper } from "./Grid.styles";

export interface GridProps
  extends RenderBaseProps<never>,
    GridStyleProps,
    LayoutProps {
  as?: "div" | "span";
}

export const Grid = forwardRef<HTMLDivElement, GridProps>(function Grid(
  props,
  ref
) {
  [props, ref] = useContextProps(GridContext, props, ref);

  const { className, style, children, ...rest } = props;

  const renderProps = useRenderProps({
    componentClassName: "aje-grid",
    className,
    style,
    children,
  });

  return (
    <GridWrapper ref={ref} {...renderProps} {...rest}>
      {renderProps.children}
    </GridWrapper>
  );
});

Grid.displayName = "Grid";
