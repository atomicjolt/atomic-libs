"use strict";(self.webpackChunkatomic_packages=self.webpackChunkatomic_packages||[]).push([[5103],{5616:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"Constructors/makeStorageHook","title":"makeStorageHook","description":"makeStorageHook is a factory function that creates custom hooks for managing state with web storage (localStorage or sessionStorage). The created hooks synchronize the state with the specified storage, allowing the state to persist across page reloads.","source":"@site/../packages/hooks/docs/Constructors/makeStorageHook.mdx","sourceDirName":"Constructors","slug":"/Constructors/makeStorageHook","permalink":"/atomic-libs/hooks/Constructors/makeStorageHook","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"mainSidebar","previous":{"title":"makeContext","permalink":"/atomic-libs/hooks/Constructors/makeContext"},"next":{"title":"useForceRender","permalink":"/atomic-libs/hooks/Hooks/Lifecycle/useForceRerender"}}');var s=o(4848),a=o(8453);const r={},i="makeStorageHook",c={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:3}];function d(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"makestoragehook",children:(0,s.jsx)(t.code,{children:"makeStorageHook"})})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"makeStorageHook"})," is a factory function that creates custom hooks for managing state with web storage (",(0,s.jsx)(t.code,{children:"localStorage"})," or ",(0,s.jsx)(t.code,{children:"sessionStorage"}),"). The created hooks synchronize the state with the specified storage, allowing the state to persist across page reloads."]}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"storage"}),": An object implementing the ",(0,s.jsx)(t.code,{children:"StorageInterface"})," with methods ",(0,s.jsx)(t.code,{children:"getItem"}),", ",(0,s.jsx)(t.code,{children:"setItem"}),", and ",(0,s.jsx)(t.code,{children:"removeItem"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"options"})," (optional): An object with optional parameters:","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"prepare"}),": A function to encode the data as a string to store. Defaults to ",(0,s.jsx)(t.code,{children:"JSON.stringify"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"parse"}),": A function to decode a value retrieved from storage. Defaults to ",(0,s.jsx)(t.code,{children:"JSON.parse"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"prefix"})," (optional): A string to prefix all the keys with."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(t.p,{children:"An array containing:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"The state value."}),"\n",(0,s.jsx)(t.li,{children:"The state setter function (which will also set the value in the specified storage)."}),"\n",(0,s.jsx)(t.li,{children:"A function to remove the value from the specified storage. This does not change the value held in state."}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"import { makeStorageHook } from '@atomicjolt/hooks';\n\nconst useCustomStorage = makeStorageHook(localStorage);\n\nfunction MyComponent() {\n  const [value, setValue, removeValue] = useCustomStorage('myKey', 'value');\n\n  return (\n    <div>\n      <p>{value.default}</p>\n      <button onClick={() => setValue('value')}>Set Value</button>\n      <button onClick={removeValue}>Remove Value</button>\n    </div>\n  );\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"And you can customize the serialization and deserialization of the data:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"import { makeStorageHook } from '@atomicjolt/hooks';\n\nconst useNumberStorage= makeStorageHook(localStorage, {\n  // Convert your data into a string to store\n  prepare: (data) => data.toString(),\n  // Convert the stored string back into your data\n  parse: (data) => parseInt(data, 10),\n});\n"})})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,t,o)=>{o.d(t,{R:()=>r,x:()=>i});var n=o(6540);const s={},a=n.createContext(s);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);