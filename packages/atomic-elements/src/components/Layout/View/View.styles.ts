import styled from "styled-components";
import { display, DisplayProps, layout, LayoutProps } from "@styles/layout";
import { backgroundColor, BackgroundColorProps } from "@styles/colors";
import { border, BorderProps } from '@styles/border';

export const ViewWrapper = styled.div<
  LayoutProps & DisplayProps & BackgroundColorProps & BorderProps
>((props) => ({
  ...layout(props),
  ...display(props),
  ...backgroundColor(props),
  ...border(props),
}));
