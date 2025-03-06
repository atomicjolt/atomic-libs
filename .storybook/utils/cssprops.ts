import { cssprops } from "../__generated__/cssprops.generated";

type CssPropGroups = keyof typeof cssprops;

export function getCssProps(...groups: CssPropGroups[]) {
  return Object.entries(cssprops)
    .filter(([key, value]) => groups.includes(key as CssPropGroups))
    .reduce((acc, [key, value]) => {
      return Object.assign(acc, value);
    }, {});
}
