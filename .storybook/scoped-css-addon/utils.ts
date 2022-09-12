export function getCSSRules(
  elem: HTMLElement,
  stylesheets = elem.ownerDocument.styleSheets
) {
  const cssRules: CSSStyleRule[] = [...stylesheets]
    .map((sheet) => [...(sheet.cssRules || [])])
    .flat() as CSSStyleRule[];

  return cssRules.filter(
    (rule) => elem.matches(rule.selectorText) && rule.selectorText !== "*"
  );
}
