import{j as o}from"./iframe-CGPW5dgX.js";import{u as g}from"./useRenderFormat-mv3Xq3JM.js";import"./preload-helper-Dp1pzeXC.js";function n(e){return g(F=>F,e)}try{n.displayName="FormatOptional",n.__docgenInfo={description:"Optionally render a potentially null value.\nIf the value is null / undefined, the `fallback` is rendered,\notherwise the given `value` is rendered",displayName:"FormatOptional",filePath:"/home/runner/work/atomic-libs/atomic-libs/packages/atomic-elements/src/components/Format/FormatOptional/FormatOptional.component.tsx",methods:[],props:{value:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Format/Format.types.ts",name:"FormatterProps"}],description:"The value to format. When `null` or `undefined`, `fallback` is rendered instead.",name:"value",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Format/Format.types.ts",name:"FormatterProps"},required:!1,tags:{},type:{name:"T | null"}},children:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Format/Format.types.ts",name:"FormatterProps"}],description:"Render function that receives the formatted value. By default the formatted value is rendered as text.",name:"children",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Format/Format.types.ts",name:"FormatterProps"},required:!1,tags:{},type:{name:"FormatterChildren<T>"}},fallback:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Format/Format.types.ts",name:"FormatterProps"}],description:"Rendered when `value` is `null` or `undefined`.",name:"fallback",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Format/Format.types.ts",name:"FormatterProps"},required:!1,tags:{},type:{name:"ReactNode"}}},tags:{}}}catch{}const b={title:"Format/FormatOptional",component:n,parameters:{layout:"centered"},decorators:[e=>o.jsx("div",{style:{fontSize:"2rem",fontFamily:"Arial, sans-serif"},children:o.jsx(e,{})})],argTypes:{fallback:{control:"text"}}},a={args:{value:"Hello World"}},r={args:{value:null,fallback:"No value"}},t={args:{value:"Hello World",children:e=>o.jsx("strong",{children:e})},parameters:{docs:{source:{code:`
<FormatOptional value="Hello World">
  {(value) => <strong>{value}</strong>}
</FormatOptional>
`}}}},k=["Primary","Fallback","CustomizeRender"];var s,l,m;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    value: "Hello World"
  }
}`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var i,c,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    value: null,
    fallback: "No value"
  }
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,u,f;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    value: "Hello World",
    children: (v: any) => <strong>{v}</strong>
  },
  parameters: {
    docs: {
      source: {
        code: \`
<FormatOptional value="Hello World">
  {(value) => <strong>{value}</strong>}
</FormatOptional>
\`
      }
    }
  }
}`,...(f=(u=t.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};export{t as CustomizeRender,r as Fallback,a as Primary,k as __namedExportsOrder,b as default};
