import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./index-BCtMShv3.js";import{$ as f}from"./useLink-DD4jtrk3.js";import{b as u}from"./useObjectRef-D2RG7rRi.js";import{$ as v}from"./filterDOMProps-CeZl_uWj.js";import{u as y}from"./useRenderProps-CP918x9p.js";import{g as $}from"./styled-components.browser.esm-DC3GK9Rn.js";import{t as k}from"./typography-B_qJ0BtB.js";import{m as g}from"./layout-Dd7m2B0D.js";import{t as b}from"./colors-x_YFGAop.js";import{f as x}from"./utils-DqmNl-Il.js";const h=$.a`
  ${k.defaults({$decoration:"var(--link-text-decoration)"})}
  ${g}
  ${b.defaults({$color:"var(--link-text-clr)"})}

  background-color: var(--link-bg-clr);

  &:hover {
    color: var(--link-hover-text-clr);
    background-color: var(--link-hover-bg-clr);
  }
`;function n(e){const{as:o,children:s,className:i,style:l,...r}=e,a=p.useRef(null),{linkProps:d,isPressed:c}=f({...e,elementType:e.as},a),t=y({componentClassName:"aje-link",className:i,children:s,style:l,selectors:{"data-pressed":c}});return m.jsx(h,{ref:a,as:o,...u(d,t),...v(r),...x(r),children:t.children})}try{n.displayName="Link",n.__docgenInfo={description:"Link component for both native browser-navigation and client-side navigation",displayName:"Link",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"span"'},{value:'"a"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<never>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<never> | undefined"}},id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string | undefined"}}}}}catch{}export{n as L};
