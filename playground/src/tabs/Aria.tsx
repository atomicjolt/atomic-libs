import React from "react";
import styled from "styled-components";
import { Flex, RenderBaseProps, useRenderProps } from "../elements";
import {
  display,
  DisplayProps,
  layout,
  LayoutProps,
} from "../../../packages/atomic-elements/src/styles/layout";

const StyledView = styled.div<LayoutProps & DisplayProps>((props) => ({
  ...layout(props),
  ...display(props),
}));

type ElementWrapper<T extends HTMLElement> = Omit<
  React.HTMLAttributes<T>,
  "children" | "className" | "style"
>;

interface ViewProps
  extends ElementWrapper<HTMLDivElement>,
    RenderBaseProps<never>,
    LayoutProps,
    DisplayProps {
  as?: "div" | "span";
  children: React.ReactNode;
}

function View(props: ViewProps) {
  const { className, style, children, ...rest } = props;

  const renderProps = useRenderProps({
    componentClassName: "aje-view",
    className,
    style,
    children,
  });

  return <StyledView {...rest} {...renderProps} />;
}

export default function Aria() {
  return (
    <Flex alignItems="center" style={{ height: "200px" }}>
      <View $flexGrow="1">View</View>
      <View $flexAlign="center">Second View</View>
    </Flex>
  );
}
