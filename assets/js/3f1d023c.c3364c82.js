"use strict";(self.webpackChunkatomic_packages=self.webpackChunkatomic_packages||[]).push([[7299],{3982:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"Hooks/useLocalStorage","title":"useLocalStorage","description":"The useLocalStorage hook allows you to manage a localStorage value as a React state value. Setting the value will also write it to localStorage. Upon a reload, if the key exists in localStorage, the value will be loaded and used as the initial state, instead of initialState.","source":"@site/../packages/hooks/docs/Hooks/useLocalStorage.mdx","sourceDirName":"Hooks","slug":"/Hooks/useLocalStorage","permalink":"/atomic-libs/hooks/Hooks/useLocalStorage","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"mainSidebar","previous":{"title":"useDefaultState","permalink":"/atomic-libs/hooks/Hooks/useDefaultState"},"next":{"title":"useSessionStorage","permalink":"/atomic-libs/hooks/Hooks/useSessionStorage"}}');var n=o(4848),s=o(8453);const l={},i="useLocalStorage",r={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Usage",id:"usage",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"uselocalstorage",children:(0,n.jsx)(t.code,{children:"useLocalStorage"})})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"useLocalStorage"})," hook allows you to manage a ",(0,n.jsx)(t.code,{children:"localStorage"})," value as a React state value. Setting the value will also write it to ",(0,n.jsx)(t.code,{children:"localStorage"}),". Upon a reload, if the ",(0,n.jsx)(t.code,{children:"key"})," exists in ",(0,n.jsx)(t.code,{children:"localStorage"}),", the value will be loaded and used as the initial state, instead of ",(0,n.jsx)(t.code,{children:"initialState"}),"."]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["If you'd like to configure how the value is serialized and deserialized, you can use\n",(0,n.jsx)(t.a,{href:"/atomic-libs/hooks/Constructors/makeStorageHook",children:"makeStorageHook"})," to build your own hook."]})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"key"})," (string): A unique key to set and access the value with."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"initialState"})," (any): Initial state value."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.p,{children:"An array containing:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"The state value."}),"\n",(0,n.jsxs)(t.li,{children:["The state setter function (which will also set the value in ",(0,n.jsx)(t.code,{children:"localStorage"}),")."]}),"\n",(0,n.jsxs)(t.li,{children:["A function to remove the value from ",(0,n.jsx)(t.code,{children:"localStorage"}),". This does not change the value held in state."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",children:"import { useLocalStorage } from '@atomicjolt/hooks';\n\nfunction Component() {\n  const [value, setValue, removeValue] = useLocalStorage('myKey', 'defaultValue');\n\n  return (\n    <div>\n      <p>{value}</p>\n      <button onClick={() => setValue('newValue')}>Set Value</button>\n      <button onClick={removeValue}>Remove Value</button>\n    </div>\n  );\n}\n"})})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},8453:(e,t,o)=>{o.d(t,{R:()=>l,x:()=>i});var a=o(6540);const n={},s=a.createContext(n);function l(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);