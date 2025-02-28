import { useRenderProps } from "@hooks/useRenderProps";
import { Text, TextProps } from "@components/Typography/Text";
import { ViewProps } from "@components/Layout/View";
import { Grid, GridProps } from "@components/Layout/Grid";
import { ElementWrapper, RenderBaseProps } from "../../../types";
import { Flex, FlexProps } from "../../Layout/Flex";
import { StyledCardPanel, CardWrapper, StyleProps } from "./Card.styles";

export interface CardProps
  extends RenderBaseProps<never>,
    ElementWrapper<HTMLDivElement>,
    StyleProps {}

/** Card component groups a set of related pieces of content and actions  */
export function Card(props: CardProps) {
  const { children, className, style, ...rest } = props;

  const renderProps = useRenderProps({
    componentClassName: "aje-card",
    children,
    className,
    style,
  });

  return (
    <CardWrapper
      $bg="var(--card-bg-clr)"
      $p="var(--card-padding)"
      {...renderProps}
      {...rest}
    />
  );
}

function CardPanel(props: ViewProps) {
  const { className, style, children, ...rest } = props;

  const renderProps = useRenderProps({
    componentClassName: "aje-card-panel",
    className,
    style,
    children,
  });

  return (
    <StyledCardPanel
      $bg="var(--card-panel-bg-clr)"
      $p="var(--card-panel-padding)"
      $flexGrow="1"
      {...renderProps}
      {...rest}
    />
  );
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

function CardGrid(props: GridProps) {
  return <Grid $gap="var(--card-padding)" {...props} />;
}

/** Card Header. Wraps Card.Title and optionally some actions. Handles padding */
Card.Header = CardHeader;
CardHeader.displayName = "Card.Header";
/** Card Title */
Card.Title = CardTitle;
CardTitle.displayName = "Card.Title";
/** Card Panel. Wraps some content within a card */
Card.Panel = CardPanel;
CardPanel.displayName = "Card.Panel";
/** Card Columns. Wraps a set of Card.Panel components in a flex container */
Card.Columns = CardColumns;
CardColumns.displayName = "Card.Columns";
/** Card Stack. Wraps a set of Card.Panel components in a flex container with column direction */
Card.Stack = CardStack;
CardStack.displayName = "Card.Stack";
/** Card Grid. Wraps a set of Card.Panel components in a grid container */
Card.Grid = CardGrid;
CardGrid.displayName = "Card.Grid";
