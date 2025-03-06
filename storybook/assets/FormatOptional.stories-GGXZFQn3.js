import{j as l}from"./jsx-runtime-CkxqCPlQ.js";import{u as g}from"./useRenderFormat-mv3Xq3JM.js";import"./index-DJO9vBfz.js";function n(e){return g(f=>f,e)}try{n.displayName="FormatOptional",n.__docgenInfo={description:"Optionally render a potentially null value.\nIf the value is null / undefined, the `fallback` is rendered,\notherwise the given `value` is rendered",displayName:"FormatOptional",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"T"}},fallback:{defaultValue:null,description:"",name:"fallback",required:!1,type:{name:"ReactNode"}}}}}catch{}const _={title:"Format/FormatOptional",component:n,parameters:{layout:"centered"},decorators:[e=>l.jsx("div",{style:{fontSize:"2rem",fontFamily:"Arial, sans-serif"},children:l.jsx(e,{})})]},r={args:{value:"Hello World"}},a={args:{value:null,fallback:"No value"}},o={args:{value:"Hello World",children:e=>l.jsx("strong",{children:e})},parameters:{docs:{source:{code:`
<FormatOptional value="Hello World">
  {(value) => (v) => <strong>{v}</strong>}
</FormatOptional>
`}}}};var t,s,c;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    value: "Hello World"
  }
}`,...(c=(s=r.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var i,d,u;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    value: null,
    fallback: "No value"
  }
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var m,p,v;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    value: "Hello World",
    children: (v: any) => <strong>{v}</strong>
  },
  parameters: {
    docs: {
      source: {
        code: \`
<FormatOptional value="Hello World">
  {(value) => (v) => <strong>{v}</strong>}
</FormatOptional>
\`
      }
    }
  }
}`,...(v=(p=o.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};const h=["Primary","Fallback","CustomizeRender"];export{o as CustomizeRender,a as Fallback,r as Primary,h as __namedExportsOrder,_ as default};
