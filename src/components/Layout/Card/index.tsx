import React from "react";
import {
  CardColumns,
  StyledCardPanel,
  CardTitle,
  CardWrapper,
  CardHeader,
  CardDivider,
} from "./Card.styles";
import { BaseProps, ExtendedSize, HasChildren } from "../../../types";
import classNames from "classnames";

export interface CardProps extends HasChildren, Omit<BaseProps, "size"> {}

export function Card(props: CardProps) {
  const { children, id, className } = props;

  return (
    <CardWrapper id={id} className={classNames("aje-card", className)}>
      {children}
    </CardWrapper>
  );
}

interface CardPanelProps extends HasChildren, BaseProps {
  size?: ExtendedSize;
}

function CardPanel(props: CardPanelProps) {
  const { size = "full", children, className, ...rest } = props;

  return (
    <StyledCardPanel className={classNames(className, `is-${size}`)} {...rest}>
      {children}
    </StyledCardPanel>
  );
}

Card.Title = CardTitle;
CardTitle.displayName = "Card.Title";
Card.Panel = CardPanel;
CardPanel.displayName = "Card.Panel";
Card.Columns = CardColumns;
CardColumns.displayName = "Card.Columns";
Card.Header = CardHeader;
CardHeader.displayName = "Card.Header";
Card.Divider = CardDivider;
CardDivider.displayName = "Card.Divider";
