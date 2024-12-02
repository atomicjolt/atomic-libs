import{j as t}from"./jsx-runtime-CkxqCPlQ.js";import{g}from"./cssprops-BGfeK0jo.js";import{r as v}from"./index-DJO9vBfz.js";import{$ as k}from"./useLink-ytCU544I.js";import{$ as h}from"./useObjectRef-C4RVQRRU.js";import{m as x}from"./mixins-TlkgTuSN.js";import{d as b}from"./styled-components.browser.esm-WCay-hu9.js";import{u as _}from"./useRenderProps-BqJZ5b79.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-DG8LklVH.js";import"./focusSafely-GXGk_mpd.js";import"./useLayoutEffect-Bj1hLagI.js";import"./SSRProvider-DAMUgb6s.js";import"./useFocusable-DyKXFx56.js";import"./useFocus-C-we61At.js";import"./utils-DHlq6CLd.js";import"./useKeyboard-A8_doyNT.js";import"./index-i5X67GZP.js";const y=b.a`
  ${x.Regular}

  color: var(--link-text-clr);
  background-color: var(--link-bg-clr);
  text-decoration: var(--link-text-decoration);

  &:hover {
    color: var(--link-hover-text-clr);
    background-color: var(--link-hover-bg-clr);
  }
`;function o(e){const{as:l,children:m,className:c,id:d}=e,a=v.useRef(null),{linkProps:p,isPressed:u}=k({...e,elementType:e.as},a),f=_({componentClassName:"aje-link",className:c,selectors:{"data-pressed":u}});return t.jsx(y,{...h(p,f),id:d,ref:a,as:l,children:m})}try{o.displayName="Link",o.__docgenInfo={description:"Link component for both native browser-navigation and client-side navigation",displayName:"Link",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"a"'},{value:'"span"'}]}},id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",required:!1,type:{name:"Argument | Argument[]"}},size:{defaultValue:null,description:"Size of the component",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"auto"'},{value:'"full"'}]}}}}}catch{}const T={title:"Routing/Link",component:o,parameters:{layout:"centered",cssProps:g("Link")},decorators:[e=>t.jsx("div",{style:{fontSize:"2rem"},children:t.jsx(e,{})})]},r={args:{children:"Link",href:"https://atomicjolt.com",target:"_blank"}};var n,s,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    children: "Link",
    href: "https://atomicjolt.com",
    target: "_blank"
  }
}`,...(i=(s=r.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const U=["Default"];export{r as Default,U as __namedExportsOrder,T as default};
