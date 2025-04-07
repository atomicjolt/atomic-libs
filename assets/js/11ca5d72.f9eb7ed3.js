"use strict";(self.webpackChunkatomic_packages=self.webpackChunkatomic_packages||[]).push([[9881],{550:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"PostMessage/PlatformStorage","title":"Platform Storage","description":"A utility for interacting with the Platform Storage as specififed by the LTI spec","source":"@site/../packages/lti-client/docs/PostMessage/PlatformStorage.mdx","sourceDirName":"PostMessage","slug":"/PostMessage/PlatformStorage","permalink":"/atomic-libs/lti-client/PostMessage/PlatformStorage","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"mainSidebar","previous":{"title":"PostMessageClient","permalink":"/atomic-libs/lti-client/PostMessage/PostMessageClient"},"next":{"title":"Resizing LTI Frames","permalink":"/atomic-libs/lti-client/PostMessage/ResizeIframe"}}');var a=n(4848),s=n(8453);const i={},o="Platform Storage",l={},c=[{value:"Getting Started",id:"getting-started",level:2},{value:"Basic Operations",id:"basic-operations",level:2},{value:"Storing Data",id:"storing-data",level:3},{value:"Retrieving Data",id:"retrieving-data",level:3},{value:"Removing Data",id:"removing-data",level:3},{value:"Error Handling",id:"error-handling",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"platform-storage",children:"Platform Storage"})}),"\n",(0,a.jsxs)(t.p,{children:["A utility for interacting with the ",(0,a.jsx)(t.a,{href:"https://www.imsglobal.org/spec/lti-pm-s/v0p1",children:"Platform Storage as specififed by the LTI spec"})]}),"\n",(0,a.jsx)(t.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,a.jsx)(t.p,{children:"Create a new storage handler:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:'const client = new PostMessageClient({\n  origin: "https://platform.example.com",\n});\nconst storage = new PlatformStorage(client);\n'})}),"\n",(0,a.jsx)(t.h2,{id:"basic-operations",children:"Basic Operations"}),"\n",(0,a.jsx)(t.p,{children:"First, check if the platform supports storage:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:'const supported = await storage.isSupported();\nif (!supported) {\n  console.warn("Platform storage not available");\n  return;\n}\n'})}),"\n",(0,a.jsx)(t.h3,{id:"storing-data",children:"Storing Data"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:'await storage.set("user-preference", "dark-mode");\n'})}),"\n",(0,a.jsx)(t.h3,{id:"retrieving-data",children:"Retrieving Data"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:'// Get a value (returns null if not found)\nconst preference = await storage.get("user-preference");\n\n// Handle missing data\nconst settings = await storage.get("user-settings");\nif (settings === null) {\n  console.log("No settings found");\n} else {\n  const parsed = JSON.parse(settings);\n  console.log("User settings:", parsed);\n}\n'})}),"\n",(0,a.jsx)(t.h3,{id:"removing-data",children:"Removing Data"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:'// Remove a stored value\nawait storage.remove("user-preference");\n'})}),"\n",(0,a.jsx)(t.h2,{id:"error-handling",children:"Error Handling"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:'try {\n  await storage.set("my-key", "my-value");\n} catch (error) {\n  if (error.response?.error?.code === "storage_full") {\n    console.error("Storage quota exceeded");\n  } else {\n    console.error("Storage operation failed:", error);\n  }\n}\n'})})]})}function g(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var r=n(6540);const a={},s=r.createContext(a);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);