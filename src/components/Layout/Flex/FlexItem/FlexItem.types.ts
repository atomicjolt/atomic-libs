import React from "react";

export interface FlexBoxItemProperties {
  /** How the flexbox item is aligned on the cross axis */
  align?: React.CSSProperties["alignSelf"];
  /** The order of the flexbox item */
  order?: React.CSSProperties["order"];
  /** How much the flexbox item can grow */
  grow?: React.CSSProperties["flexGrow"];
  /** How much the flexbox item can shrink */
  shrink?: React.CSSProperties["flexShrink"];
  /** The size of the flexbox item */
  basis?: React.CSSProperties["flexBasis"];
}
