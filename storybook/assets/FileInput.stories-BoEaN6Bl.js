import{I as E}from"./helpers-B5Ajgn2E.js";import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as M,r as U}from"./index-BCtMShv3.js";import{$ as W}from"./useButton-nVeIkIqk.js";import{$ as f,b as B}from"./useObjectRef-D2RG7rRi.js";import{u as L}from"./useRenderProps-CP918x9p.js";import{d as l}from"./styled-components.browser.esm-Y4FpNNpy.js";import{m as b}from"./mixins-XviowZ_6.js";import{u as H}from"./useFocusRing-CLjBjOxD.js";import{D as J}from"./index-C9m8dSmq.js";import{F as O}from"./FileTrigger.component-BadQm_BE.js";import{M as Z}from"./Message.component-CGdHk5Gg.js";import{E as G}from"./ErrorMessage.component-CCJCuFB5.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./Collection-DqSZYP0m.js";import"./CollectionBuilder-D7AJqdfd.js";import"./index-BqCLlfdy.js";import"./index-D-fs5e6L.js";import"./useFocusable-DacP9xvE.js";import"./SSRProvider-DyiXDq2k.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-B9aiz4Kw.js";import"./index-EJ0-2BeM.js";import"./useFocusWithin-BshFo8_g.js";import"./useDescription-CqPnuqnT.js";import"./useLocalizedStringFormatter-BmC8c4z2.js";import"./context-z6pb9OkM.js";import"./useHover-Cc-utFbH.js";import"./VisuallyHidden-XQ8XJ7MR.js";import"./useForwardedRef-Tweo1nQG.js";import"./PressResponder-DMBUHunT.js";import"./index-CsiUWFDz.js";import"./Message.context-D8t47jMD.js";import"./ErrorMessage.context-PYwFF-7o.js";const K=l.span`
  width: 200px;
  min-height: 38px;
  display: inline-block;
  padding: 11px 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`,S=l.strong`
  ${b.Bold}
  background-color: var(--neutral100);
  color: var(--text-clr-alt);
  min-height: 38px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  border-left: 1px solid var(--border-clr);
`,_=l.button`
  ${b.Regular}
  ${b.FocusVisible(2)}
  text-align: left;
  background-color: white;
  padding: 0;
  font-size: 1.6rem;
  line-height: 1;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  overflow: hidden;
  border: 1px solid var(--border-clr);
  border-radius: 5px;
  overflow: hidden;
  background-color: none;
  padding: 0;
  color: var(--text-clr);

  &:hover {
    ${S} {
      color: var(--text-clr);
      background-color: var(--neutral200);
    }
  }
`,Q=l.div`
  --border-clr: var(--input-border-clr);

  &[data-disabled] {
    ${_} {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
`,h=M.forwardRef(function(a,g){const n=f(a.id),s=f(),d=f(),{file:p,onChange:r,label:u,error:y,message:x,isDisabled:v=!1,isRequired:F=!1,isInvalid:q=!1,className:k,placeholder:D="No file selected",size:z="medium",id:Y=n,acceptedFileTypes:P,name:T,...A}=a,C=L({componentClassName:"aje-input__file",className:k,size:z,selectors:{"data-invalid":q,"data-disabled":v,"data-required":F}});return e.jsx(Q,{...C,...A,children:e.jsx(J,{onDrop:c=>{const I=c.items.filter(m=>m.kind==="file");I.length>0&&I[0].getFile().then(m=>r==null?void 0:r(m))},children:e.jsxs(O,{acceptedFileTypes:P,onSelect:c=>r==null?void 0:r(c[0]||null),name:T,children:[e.jsx(X,{file:p,label:u,placeholder:D,isRequired:F,isDisabled:v}),x&&e.jsx(Z,{id:d,children:x}),q&&y&&e.jsx(G,{id:s,children:y})]})})})});function X(o){const{file:a,label:g,placeholder:n,isRequired:s,isDisabled:d}=o,p=U.useRef(null),{buttonProps:r}=W({isDisabled:d},p),{focusProps:u}=H();return e.jsxs(_,{...B(r,u),children:[e.jsx(K,{children:a?a.name:n}),e.jsxs(S,{children:[g,s&&e.jsx("span",{"aria-hidden":"true",children:" *"})]})]})}try{h.displayName="FileInput",h.__docgenInfo={description:`FileInput component. Used to select singular files

Checkout [FileTrigger](?path=/docs/buttons-filetrigger--overview) For a more general file selection component`,displayName:"FileInput",props:{file:{defaultValue:null,description:"",name:"file",required:!1,type:{name:"File"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(f: File) => void"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},acceptedFileTypes:{defaultValue:null,description:`Array of accepted file types

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept)`,name:"acceptedFileTypes",required:!1,type:{name:"string[]"}},className:{defaultValue:null,description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",required:!1,type:{name:"Argument | Argument[]"}},id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string"}},label:{defaultValue:null,description:`A visible label for the field. Labels are always Sentence case.
If you do not provide a label, you should provide an aria-label or aria-labelledby attribute.`,name:"label",required:!1,type:{name:"ReactNode"}},size:{defaultValue:null,description:"Size of the component",name:"size",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"medium"'},{value:'"small"'},{value:'"large"'},{value:'"full"'}]}},message:{defaultValue:null,description:"For additional information (ex. date format mm/dd/yy)",name:"message",required:!1,type:{name:"ReactNode"}},error:{defaultValue:null,description:"Error message for the field",name:"error",required:!1,type:{name:"ReactNode"}},isDisabled:{defaultValue:null,description:`Field cannot be interacted with, should be de-emphasized in the UI
@selector [data-disabled]`,name:"isDisabled",required:!1,type:{name:"boolean"}},isRequired:{defaultValue:null,description:`Field must be interacted with. Should be indicated in the UI
@selector [data-required]`,name:"isRequired",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Field has an error. Should be made to look like an error.\nControls whether the value of `error` is displayed\n@selector [data-invalid]",name:"isInvalid",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"Name of the Field",name:"name",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"",name:"aria-labelledby",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-details":{defaultValue:null,description:"",name:"aria-details",required:!1,type:{name:"string"}}}}}catch{}const Pe={title:"Inputs/Choose State/FileInput",component:h,parameters:{layout:"centered"},argTypes:{...E,file:{control:!1}}},t={args:{label:"Choose a file..."}},i={args:{...t.args,file:new File(["test"],"test.txt")}};var w,V,R;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: "Choose a file..."
  }
}`,...(R=(V=t.parameters)==null?void 0:V.docs)==null?void 0:R.source}}};var $,j,N;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    file: new File(["test"], "test.txt")
  }
}`,...(N=(j=i.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};const Te=["Primary","WithFile"];export{t as Primary,i as WithFile,Te as __namedExportsOrder,Pe as default};
