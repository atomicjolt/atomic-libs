import React from "react";
import { styled } from "storybook/theming";

/*
 * A collapsed-by-default section for secondary reference tables on docs
 * pages (Style props, CSS Variables). Styled with Storybook's docs theme, so
 * it matches the docs blocks in both light and dark mode.
 */

const Section = styled.details(({ theme }) => ({
  margin: "24px 0",
  border: `1px solid ${theme.appBorderColor}`,
  borderRadius: theme.appBorderRadius,
  background: theme.background.content,
  overflow: "hidden",

  "&[open] > summary": {
    borderBottom: `1px solid ${theme.appBorderColor}`,
  },
  "&[open] > summary svg": {
    transform: "rotate(90deg)",
  },
}));

const Summary = styled.summary(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 10,
  padding: "12px 16px",
  cursor: "pointer",
  listStyle: "none",
  userSelect: "none",
  color: theme.color.defaultText,
  fontSize: theme.typography.size.s2,
  fontWeight: theme.typography.weight.bold,

  "&::-webkit-details-marker": { display: "none" },
  "&:hover": { background: theme.background.hoverable },
  "&:focus-visible": {
    outline: `2px solid ${theme.color.secondary}`,
    outlineOffset: -2,
  },

  svg: {
    flexShrink: 0,
    color: theme.textMutedColor,
    transition: "transform 150ms ease-out",
  },
}));

const Count = styled.span(({ theme }) => ({
  padding: "1px 8px",
  borderRadius: 10,
  background: theme.background.app,
  border: `1px solid ${theme.appBorderColor}`,
  color: theme.textMutedColor,
  fontSize: theme.typography.size.s1,
  fontWeight: theme.typography.weight.regular,
}));

const Body = styled.div(({ theme }) => ({
  padding: "4px 16px 16px",

  // The props table brings a 40px bottom margin; the card has its own padding.
  "& table.docblock-argstable": { marginBottom: 0 },
  p: {
    margin: "12px 0",
    color: theme.textMutedColor,
    fontSize: theme.typography.size.s2,
    lineHeight: "20px",
  },
}));

function Chevron() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
      <path
        d="M4.5 2.5 8 6l-3.5 3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface CollapsibleSectionProps {
  title: string;
  /** Number of entries, shown as a badge next to the title. */
  count: number;
  /** Short explanation shown at the top of the open section. */
  description?: React.ReactNode;
  children: React.ReactNode;
}

export function CollapsibleSection({
  title,
  count,
  description,
  children,
}: CollapsibleSectionProps) {
  return (
    <Section>
      <Summary>
        <Chevron />
        {title}
        <Count>{count}</Count>
      </Summary>
      <Body>
        {description && <p>{description}</p>}
        {children}
      </Body>
    </Section>
  );
}
