import{j as m}from"./jsx-runtime-CkxqCPlQ.js";import{r as p}from"./index-DJO9vBfz.js";import{$ as u}from"./useLink-Bis7wRJn.js";import{a as f}from"./useObjectRef-CjtaasUj.js";import{u as v}from"./useRenderProps-Bk8BH60l.js";import{d as y}from"./styled-components.browser.esm-BQf_XqKi.js";import{m as k}from"./mixins-D6ZuOvce.js";import{t as $,c as g}from"./colors-DeERLtzJ.js";import{m as x}from"./layout-qoR695S7.js";const h=y.a`
  ${k.Regular}
  background-color: var(--link-bg-clr);

  ${$.defaults({$decoration:"var(--link-text-decoration)"})}
  ${x}
  ${g.defaults({$color:"var(--link-text-clr)"})}

  &:hover {
    color: var(--link-hover-text-clr);
    background-color: var(--link-hover-bg-clr);
  }
`;function n(e){const{as:o,children:t,className:s,style:l,...i}=e,r=p.useRef(null),{linkProps:c,isPressed:d}=u({...e,elementType:e.as},r),a=v({componentClassName:"aje-link",className:s,children:t,style:l,selectors:{"data-pressed":d}});return m.jsx(h,{ref:r,as:o,...f(c,a),...i,children:a.children})}try{n.displayName="Link",n.__docgenInfo={description:"Link component for both native browser-navigation and client-side navigation",displayName:"Link",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"a"'},{value:'"span"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<never>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<never>"}},id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string"}}}}}catch{}export{n as L};
