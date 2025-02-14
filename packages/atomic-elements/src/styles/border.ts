import { SuggestStrings } from '../types';
import { Sizing } from './sizing';
import { Color } from './variables';


export interface BorderProps {
  $b?: string;
  $bt?: string;
  $br?: string;
  $bl?: string;
  $bb?: string;
  $bx?: string;
  $by?: string;
  $bc?: SuggestStrings<Color>;
  $bw?: SuggestStrings<Sizing>;
  $bs?: "solid" | "dashed" | "dotted" | "double" | "groove" | "ridge" | "inset" | "outset";
  $radius?: SuggestStrings<Sizing>;
}

export function border(props: BorderProps) {
  const { $b, $bt, $br, $bl, $bb, $bx, $by, $bc, $bw, $radius } = props;

  return {
    border: $b,
    borderTop: $bt || $by,
    borderRight: $br || $bx,
    borderBottom: $bb || $by,
    borderLeft: $bl || $bx,
    borderColor: $bc,
    borderWidth: $bw,
    borderRadius: $radius,
  }
}
