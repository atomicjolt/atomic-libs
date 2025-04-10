import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as m}from"./styled-components.browser.esm-Y4FpNNpy.js";import{L as t}from"./Label.component-SkkW6TeV.js";import{M as n}from"./Message.component-CGdHk5Gg.js";import{E as s}from"./ErrorMessage.component-CCJCuFB5.js";const c=m.div`
  position: relative;
`;function d(i){const{children:o,floating:p,label:l,error:r,message:a}=i;return p?e.jsxs(e.Fragment,{children:[e.jsxs(c,{children:[o,e.jsx(t,{children:l})]}),a&&e.jsx(n,{children:a}),r&&e.jsx(s,{children:r})]}):e.jsxs(e.Fragment,{children:[l&&e.jsx(t,{children:l}),a&&e.jsx(n,{children:a}),o,r&&e.jsx(s,{children:r})]})}try{d.displayName="FloatingFieldInputWrapper",d.__docgenInfo={description:"",displayName:"FloatingFieldInputWrapper",props:{floating:{defaultValue:null,description:"",name:"floating",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:`A visible label for the field. Labels are always Sentence case.
If you do not provide a label, you should provide an aria-label or aria-labelledby attribute.`,name:"label",required:!1,type:{name:"ReactNode"}},message:{defaultValue:null,description:"For additional information (ex. date format mm/dd/yy)",name:"message",required:!1,type:{name:"ReactNode"}},error:{defaultValue:null,description:"Error message for the field",name:"error",required:!1,type:{name:"ReactNode"}}}}}catch{}export{d as F};
