import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./index-DmM0KDA7.js";import{$ as f}from"./useLink-CqmZ9M1P.js";import{b as u}from"./useObjectRef-BO7mrmvR.js";import{$}from"./filterDOMProps-CeZl_uWj.js";import{u as v}from"./useRenderProps-BzxgHqRb.js";import{d as y}from"./styled-components.browser.esm-B0S50oBn.js";import{m as k}from"./mixins-CgZ-Dp8B.js";import{t as x}from"./typography-B_qJ0BtB.js";import{m as b}from"./layout-UyCWIQlE.js";import{t as g}from"./colors-x_YFGAop.js";const h=y.a`
  ${k.Regular}
  background-color: var(--link-bg-clr);

  ${x.defaults({$decoration:"var(--link-text-decoration)"})}
  ${b}
  ${g.defaults({$color:"var(--link-text-clr)"})}

  &:hover {
    color: var(--link-hover-text-clr);
    background-color: var(--link-hover-bg-clr);
  }
`;function o(e){const{as:t,children:n,className:s,style:i,...l}=e,r=p.useRef(null),{linkProps:d,isPressed:c}=f({...e,elementType:e.as},r),a=v({componentClassName:"aje-link",className:s,children:n,style:i,selectors:{"data-pressed":c}});return m.jsx(h,{ref:r,as:t,...u(d,a),...$(l),children:a.children})}try{o.displayName="Link",o.__docgenInfo={description:"Link component for both native browser-navigation and client-side navigation",displayName:"Link",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"a"'},{value:'"span"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<never>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<never>"}},id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string"}}}}}catch{}export{o as L};
