import styled from "styled-components";
import { display, DisplayProps, layout, LayoutProps } from "@styles/layout";
import { backgroundColor, BackgroundColorProps } from "@styles/colors";

export const ViewWrapper = styled.div<
  LayoutProps & DisplayProps & BackgroundColorProps
>((props) => ({
  ...layout(props),
  ...display(props),
  ...backgroundColor(props),
}));
