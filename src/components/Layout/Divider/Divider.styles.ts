import { resolveNumber } from "@/styles/utils";
import styled from "styled-components";

function handlePrimaryMargin({ $spacing }: { $spacing?: string | number }) {
  if ($spacing) {
    return resolveNumber($spacing);
  }
  return "var(--divider-margin-main)";
}

export const StyledDivider = styled.div<{ $spacing?: string | number }>`
  background: var(--divider-bg-clr);

  &[aria-orientation="vertical"] {
    height: auto;
    width: var(--divider-width);
    margin-top: var(--divider-margin-secondary);
    margin-bottom: var(--divider-margin-secondary);

    margin-left: ${handlePrimaryMargin};
    margin-right: ${handlePrimaryMargin};
  }

  &[aria-orientation="horizontal"] {
    width: auto;
    height: var(--divider-width);
    margin-top: ${handlePrimaryMargin};
    margin-bottom: ${handlePrimaryMargin};
    margin-left: var(--divider-margin-secondary);
    margin-right: var(--divider-margin-secondary);
  }
`;
