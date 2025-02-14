import styled from "styled-components";
import { display, DisplayProps, layout, LayoutProps } from "@styles/layout";
import { backgroundColor, BackgroundColorProps } from "@styles/colors";
import { shadow, ShadowProps } from '@styles/shadows';

export const ViewWrapper = styled.div<
  LayoutProps & DisplayProps & BackgroundColorProps & ShadowProps
>((props) => ({
  ...layout(props),
  ...display(props),
  ...backgroundColor(props),
  ...shadow(props),
}));
