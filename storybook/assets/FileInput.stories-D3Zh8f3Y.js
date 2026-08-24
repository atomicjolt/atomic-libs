import{I as E}from"./helpers-B3wxvxjs.js";import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as M,r as U}from"./index-BCtMShv3.js";import{$ as W}from"./useButton-B6TSBwA2.js";import{$ as f,a as B}from"./useObjectRef-B4hnndUj.js";import{u as L}from"./useRenderProps-CP918x9p.js";import{g as l}from"./styled-components.browser.esm-DC3GK9Rn.js";import{m as b}from"./mixins-CcgEHb9c.js";import{u as H}from"./useFocusRing-zxvArQTZ.js";import{D as J}from"./index-BjikwYpF.js";import{F as O}from"./FileTrigger.component-CjufrinE.js";import{M as Z}from"./Message.component-BkeRZygz.js";import{E as G}from"./ErrorMessage.component-B_60Itgy.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./Collection-DwMxgycI.js";import"./CollectionBuilder-L_wKxqRd.js";import"./index-q6RvvsFA.js";import"./index-D-fs5e6L.js";import"./useFocusable-B7HbK8LX.js";import"./SSRProvider-DyiXDq2k.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-BJ4Xpz5E.js";import"./index-EJ0-2BeM.js";import"./useFocusWithin-dfJl9rAf.js";import"./useDescription-BfD2gYva.js";import"./useLocalizedStringFormatter-BmC8c4z2.js";import"./context-z6pb9OkM.js";import"./useHover-Cvy3Ip4i.js";import"./VisuallyHidden-DMkWAsdD.js";import"./useForwardedRef-DuXBQIpF.js";import"./PressResponder-BmlOUkeL.js";import"./index-C_lK3xe_.js";import"./Message.context-CzffOAUK.js";import"./ErrorMessage.context-B4seO6gR.js";const K=l.span`
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
`,h=M.forwardRef(function(a,g){const o=f(a.id),s=f(),d=f(),{file:u,onChange:r,label:p,error:y,message:x,isDisabled:v=!1,isRequired:F=!1,isInvalid:q=!1,className:k,placeholder:D="No file selected",size:z="medium",id:Y=o,acceptedFileTypes:P,name:T,...A}=a,C=L({componentClassName:"aje-input__file",className:k,size:z,selectors:{"data-invalid":q,"data-disabled":v,"data-required":F}});return e.jsx(Q,{...C,...A,children:e.jsx(J,{onDrop:c=>{const I=c.items.filter(m=>m.kind==="file");I.length>0&&I[0].getFile().then(m=>r==null?void 0:r(m))},children:e.jsxs(O,{acceptedFileTypes:P,onSelect:c=>r==null?void 0:r(c[0]||null),name:T,children:[e.jsx(X,{file:u,label:p,placeholder:D,isRequired:F,isDisabled:v}),x&&e.jsx(Z,{id:d,children:x}),q&&y&&e.jsx(G,{id:s,children:y})]})})})});function X(n){const{file:a,label:g,placeholder:o,isRequired:s,isDisabled:d}=n,u=U.useRef(null),{buttonProps:r}=W({isDisabled:d},u),{focusProps:p}=H();return e.jsxs(_,{...B(r,p),children:[e.jsx(K,{children:a?a.name:o}),e.jsxs(S,{children:[g,s&&e.jsx("span",{"aria-hidden":"true",children:" *"})]})]})}try{h.displayName="FileInput",h.__docgenInfo={description:`FileInput component. Used to select singular files

Checkout [FileTrigger](?path=/docs/buttons-filetrigger--overview) For a more general file selection component`,displayName:"FileInput",props:{file:{defaultValue:null,description:"",name:"file",required:!1,type:{name:"File | null | undefined"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((f: File | null) => void) | undefined"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string | undefined"}},acceptedFileTypes:{defaultValue:null,description:`Array of accepted file types

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept)`,name:"acceptedFileTypes",required:!1,type:{name:"string[] | undefined"}},className:{defaultValue:null,description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",required:!1,type:{name:"Argument | Argument[]"}},label:{defaultValue:null,description:`A visible label for the field. Labels are always Sentence case.
If you do not provide a label, you should provide an aria-label or aria-labelledby attribute.`,name:"label",required:!1,type:{name:"ReactNode"}},id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string | undefined"}},size:{defaultValue:null,description:"Size of the component",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"auto"'},{value:'"full"'}]}},isDisabled:{defaultValue:null,description:`Field cannot be interacted with, should be de-emphasized in the UI
@selector [data-disabled]`,name:"isDisabled",required:!1,type:{name:"boolean | undefined"}},error:{defaultValue:null,description:"Error message for the field",name:"error",required:!1,type:{name:"ReactNode"}},name:{defaultValue:null,description:"Name of the Field",name:"name",required:!1,type:{name:"string | undefined"}},message:{defaultValue:null,description:"For additional information (ex. date format mm/dd/yy)",name:"message",required:!1,type:{name:"ReactNode"}},isRequired:{defaultValue:null,description:`Field must be interacted with. Should be indicated in the UI
@selector [data-required]`,name:"isRequired",required:!1,type:{name:"boolean | undefined"}},isInvalid:{defaultValue:null,description:"Field has an error. Should be made to look like an error.\nControls whether the value of `error` is displayed\n@selector [data-invalid]",name:"isInvalid",required:!1,type:{name:"boolean | undefined"}},"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!1,type:{name:"string | undefined"}},"aria-labelledby":{defaultValue:null,description:"",name:"aria-labelledby",required:!1,type:{name:"string | undefined"}},"aria-describedby":{defaultValue:null,description:"",name:"aria-describedby",required:!1,type:{name:"string | undefined"}},"aria-details":{defaultValue:null,description:"",name:"aria-details",required:!1,type:{name:"string | undefined"}}}}}catch{}const Pe={title:"Inputs/Choose State/FileInput",component:h,parameters:{layout:"centered"},argTypes:{...E,file:{control:!1}}},i={args:{label:"Choose a file..."}},t={args:{...i.args,file:new File(["test"],"test.txt")}};var w,V,R;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: "Choose a file..."
  }
}`,...(R=(V=i.parameters)==null?void 0:V.docs)==null?void 0:R.source}}};var $,j,N;t.parameters={...t.parameters,docs:{...($=t.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    file: new File(["test"], "test.txt")
  }
}`,...(N=(j=t.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};const Te=["Primary","WithFile"];export{i as Primary,t as WithFile,Te as __namedExportsOrder,Pe as default};
