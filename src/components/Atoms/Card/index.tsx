import React from 'react'
import { CardColumns, StyledCardPanel, CardTitle, CardWrapper } from './Card.styles'
import { BaseProps, ExtendedSize, HasChildren } from '../../../types';
import classNames from 'classnames';

interface CardProps extends HasChildren, Omit<BaseProps, "size"> {}

export function Card(props: CardProps) {
  const { children, id, className } = props;


  return (
    <CardWrapper id={id} className={classNames("aje-card", className)}>
      {children}
    </CardWrapper>
  )
}

interface CardPanelProps extends HasChildren {
  size?: ExtendedSize;
}

function CardPanel(props: CardPanelProps) {
  const { size = 'full', children } = props;

  return (
    <StyledCardPanel className={classNames(`is-${size}`)}>
      {children}
    </StyledCardPanel>
  )
}


Card.Title = CardTitle;
CardTitle.displayName = "Card.Title";
Card.Panel = CardPanel;
CardPanel.displayName = "Card.Panel";
Card.Columns = CardColumns;
CardColumns.displayName = "Card.Columns";
