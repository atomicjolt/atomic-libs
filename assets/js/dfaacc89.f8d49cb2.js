"use strict";(self.webpackChunkatomic_packages=self.webpackChunkatomic_packages||[]).push([[4220],{8453:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>r});var i=t(6540);const a={},s=i.createContext(a);function o(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:o(n.components),i.createElement(s.Provider,{value:e},n.children)}},9864:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"OIDCLaunch","title":"LTI Launch with Platform Storage","description":"This package implements support for the LTI 1.3 OIDC launch flow using client-side storage for state management","source":"@site/../packages/lti-client/docs/OIDCLaunch.mdx","sourceDirName":".","slug":"/OIDCLaunch","permalink":"/atomic-libs/lti-client/OIDCLaunch","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"mainSidebar","previous":{"title":"Introduction","permalink":"/atomic-libs/lti-client/"},"next":{"title":"PostMessageClient","permalink":"/atomic-libs/lti-client/PostMessage/PostMessageClient"}}');var a=t(4848),s=t(8453);const o={sidebar_position:3},r="LTI Launch with Platform Storage",c={},l=[{value:"On Initialization",id:"on-initialization",level:2},{value:"On Launch",id:"on-launch",level:2}];function h(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.header,{children:(0,a.jsx)(e.h1,{id:"lti-launch-with-platform-storage",children:"LTI Launch with Platform Storage"})}),"\n",(0,a.jsxs)(e.p,{children:["This package implements support for the ",(0,a.jsx)(e.a,{href:"https://www.imsglobal.org/spec/lti-cs-oidc/v0p1",children:"LTI 1.3 OIDC launch flow using client-side storage for state management"})]}),"\n",(0,a.jsx)(e.h2,{id:"on-initialization",children:"On Initialization"}),"\n",(0,a.jsxs)(e.p,{children:["During the initialization phase, you can call the ",(0,a.jsx)(e.code,{children:"initOIDCLaunch"})," function to set up the necessary parameters for the OIDC launch:"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-typescript",children:'import { initOIDCLaunch } from "@atomicjolt/lti-client";\n\nconst initSettings = {\n  state: "unique-state-string",\n  responseUrl: "https://your-app.com/launch",\n  ltiStorageParams: {\n    platformOIDCUrl: "https://platform.com/auth",\n  },\n  relaunchInitUrl: "https://your-app.com/init",\n  openIdCookiePrefix: "lti-launch",\n};\n\nawait initOIDCLaunch(initSettings);\n'})}),"\n",(0,a.jsx)(e.p,{children:"This function will"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"Check if it needs to write to platform storage"}),"\n",(0,a.jsx)(e.li,{children:"Writing the state to platform storage if it is supported"}),"\n",(0,a.jsx)(e.li,{children:"Sending the user agent back to the platform for next steps in the OIDC flow"}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"on-launch",children:"On Launch"}),"\n",(0,a.jsxs)(e.p,{children:["Once the LTI launch is completed, you can verify the state and handle the launch using the ",(0,a.jsx)(e.code,{children:"ltiLaunch"})," function:"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-typescript",children:'import { ltiLaunch } from "@atomicjolt/lti-client";\n\nconst handleLaunch = async () => {\n  const verified = await ltiLaunch({\n    state: "your-state",\n    ltiStorageParams: {\n      platformOIDCUrl: "https://platform.com/auth",\n    },\n  });\n\n  if (verified) {\n    // Let the user access the application\n    console.log("Launch verified and processed.");\n  } else {\n    // Show the user an error message\n    console.error("Launch verification failed.");\n  }\n};\n'})})]})}function u(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(h,{...n})}):h(n)}}}]);