import { Property } from "csstype";

export interface FlexBoxItemProperties {
  /** How the flexbox item is aligned on the cross axis */
  align?: Property.AlignSelf;
  /** The order of the flexbox item */
  order?: Property.Order;
  /** How much the flexbox item can grow */
  grow?: Property.FlexGrow;
  /** How much the flexbox item can shrink */
  shrink?: Property.FlexShrink;
  /** The size of the flexbox item */
  basis?: Property.FlexBasis | number;
}
