import{m as t}from"./mixins-CcgEHb9c.js";import{g as n}from"./styled-components.browser.esm-DC3GK9Rn.js";import{S as r}from"./SkeletonLoader.component-q75MwwfP.js";const p=n(r)`
  ${t.SizingX}
  height: var(--input-height);
  display: block;
`,d=n.div`
  ${t.Regular}
  ${t.InputLike}
  padding: 0px;
  display: flex;
  align-items: center;
  gap: var(--input-gap);
  cursor: text;

  ${({$paddingSide:i})=>{if(i==="left")return"padding-left: var(--input-padding-horiz);";if(i==="right")return"padding-right: var(--input-padding-horiz);";if(i==="both")return`
        padding-left: var(--input-padding-horiz);
        padding-right: var(--input-padding-horiz);
      `}}

  input {
    border: none;
    padding: 0px;
    width: 100%;
    min-height: 100%;
    flex: 1;

    &:focus {
      outline: none;
    }
  }
`;export{d as S,p as a};
