import{m as t}from"./mixins-BOHXBJW9.js";import{d as n}from"./styled-components.browser.esm-S-CusIP4.js";const e=n.div`
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
`;export{e as S};
