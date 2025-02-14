import { StyledCardPanel, CardWrapper } from "./Card.styles";
import { ElementWrapper, ExtendedSize, RenderBaseProps } from "../../../types";
import { Flex, FlexProps } from "../../Layout/Flex";
import { useRenderProps } from "@hooks";
import { Text, TextProps } from "@components/Typography/Text";
import { ViewProps } from "@components/Layout/View";

export interface CardProps
  extends RenderBaseProps<never>,
    ElementWrapper<HTMLDivElement> {}

export function Card(props: CardProps) {
  const { children, className, style, ...rest } = props;

  const renderProps = useRenderProps({
    componentClassName: "aje-card",
    children,
    className,
    style,
  });

  return <CardWrapper {...renderProps} {...rest} />;
}

interface CardPanelProps
  extends RenderBaseProps<never>,
    ElementWrapper<HTMLDivElement> {
  size?: ExtendedSize;
}

function CardPanel(props: ViewProps) {
  const { className, style, children, ...rest } = props;

  const renderProps = useRenderProps({
    componentClassName: "aje-card-panel",
    className,
    style,
    children,
  });

  return <StyledCardPanel $flexGrow="1" {...renderProps} {...rest} />;
}

function CardStack(props: FlexProps) {
  return <Flex $gap="var(--card-padding)" $direction="column" {...props} />;
}

function CardColumns(props: FlexProps) {
  return <Flex $gap="var(--card-padding)" {...props} />;
}

function CardTitle(props: TextProps) {
  return <Text $size="3" $weight="bold" {...props} />;
}

function CardHeader(props: FlexProps) {
  return <Flex $gap="2" $mb="var(--card-padding)" $align="center" {...props} />;
}

Card.Header = CardHeader;
CardHeader.displayName = "Card.Header";
Card.Title = CardTitle;
CardTitle.displayName = "Card.Title";
Card.Panel = CardPanel;
CardPanel.displayName = "Card.Panel";
Card.Columns = CardColumns;
CardColumns.displayName = "Card.Columns";
Card.Stack = CardStack;
CardStack.displayName = "Card.Stack";
