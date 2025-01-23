import{j as a}from"./jsx-runtime-CkxqCPlQ.js";import{$ as u}from"./context-BQ3_Es2z.js";import{r as p}from"./index-DJO9vBfz.js";import{u as f}from"./useRenderFormat-mv3Xq3JM.js";import"./SSRProvider-DAMUgb6s.js";function d(o={}){let{locale:r}=u();return p.useMemo(()=>new Intl.ListFormat(r,o),[r,o])}function b(o){const r=d(o);return f(r.format.bind(r),o)}const $={title:"Format/FormatList",component:b,parameters:{layout:"centered"},decorators:[o=>a.jsx("div",{style:{fontSize:"2rem",fontFamily:"Arial, sans-serif"},children:a.jsx(o,{})})],argTypes:{value:{control:"object"},type:{control:"select",options:["conjunction","disjunction","unit"]},localeMatcher:{control:"select",options:["lookup","best fit"]},style:{control:"select",options:["long","short","narrow"]},fallback:{control:"text"}}},t={args:{value:["Motorcycle","Bus","Car"],type:"conjunction"}},e={args:{value:null,fallback:"No items"}};var s,n,c;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    value: ["Motorcycle", "Bus", "Car"],
    type: "conjunction"
  }
}`,...(c=(n=t.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var l,i,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    value: null,
    fallback: "No items"
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const k=["Primary","Fallback"];export{e as Fallback,t as Primary,k as __namedExportsOrder,$ as default};
