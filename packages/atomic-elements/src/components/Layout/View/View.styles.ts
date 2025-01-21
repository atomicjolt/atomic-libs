import styled from "styled-components";
import { display, DisplayProps, layout, LayoutProps } from "@styles/layout";

export const ViewWrapper = styled.div<LayoutProps & DisplayProps>((props) => ({
  ...layout(props),
  ...display(props),
}));
