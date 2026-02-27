import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./index-BCtMShv3.js";import{$ as f}from"./useLink-DD4jtrk3.js";import{b as u}from"./useObjectRef-D2RG7rRi.js";import{$ as y}from"./filterDOMProps-CeZl_uWj.js";import{u as v}from"./useRenderProps-CP918x9p.js";import{d as $}from"./styled-components.browser.esm-CROIn_Sd.js";import{t as k}from"./typography-B_qJ0BtB.js";import{m as b}from"./layout-Dd7m2B0D.js";import{t as x}from"./colors-x_YFGAop.js";import{f as g}from"./utils-DqmNl-Il.js";const h=$.a`
  ${k.defaults({$decoration:"var(--link-text-decoration)"})}
  ${b}
  ${x.defaults({$color:"var(--link-text-clr)"})}

  background-color: var(--link-bg-clr);

  &:hover {
    color: var(--link-hover-text-clr);
    background-color: var(--link-hover-bg-clr);
  }
`;function o(e){const{as:n,children:s,className:l,style:i,...r}=e,a=p.useRef(null),{linkProps:d,isPressed:c}=f({...e,elementType:e.as},a),t=v({componentClassName:"aje-link",className:l,children:s,style:i,selectors:{"data-pressed":c}});return m.jsx(h,{ref:a,as:n,...u(d,t),...y(r),...g(r),children:t.children})}try{o.displayName="Link",o.__docgenInfo={description:"Link component for both native browser-navigation and client-side navigation",displayName:"Link",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"a"'},{value:'"span"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<never>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<never>"}},id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string"}}}}}catch{}export{o as L};
