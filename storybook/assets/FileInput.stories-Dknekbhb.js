import{I as E}from"./helpers-D-Gur9Js.js";import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{R as M,r as U}from"./index-DJO9vBfz.js";import{$ as W}from"./useButton-AoKYWM9F.js";import{$ as f,b as B}from"./useObjectRef-BKue9pYL.js";import{u as L}from"./useRenderProps-Bk8BH60l.js";import{d as l}from"./styled-components.browser.esm-BQf_XqKi.js";import{m as b}from"./mixins-B7X2BZyR.js";import{u as H}from"./useFocusRing-CPkBIT8D.js";import"./index-SU87TpAq.js";import{D as J}from"./DropZone.component-2TJQ2lYa.js";import{F as O}from"./FileTrigger.component-DTvTmrJF.js";import{M as Z}from"./Message.component-nkasZM07.js";import{E as G}from"./ErrorMessage.component-CfKzjo8L.js";import"./index-DLW06VQL.js";import"./index-BDzxygkP.js";import"./index-C0DXmw5d.js";import"./index-CyCRagT9.js";import"./Collection-CnHW8amz.js";import"./CollectionBuilder-Xbel4YvD.js";import"./index-DJdX7xnk.js";import"./SSRProvider-DAMUgb6s.js";import"./useLayoutEffect-Bj1hLagI.js";import"./scale-CqCDTNu0.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-o0N_IkwX.js";import"./focusSafely-BOUv7I-8.js";import"./useFocus-DJe2BRHe.js";import"./utils-Df1WEgxG.js";import"./useKeyboard-A8_doyNT.js";import"./usePress-Cu0aM-K5.js";import"./index-i5X67GZP.js";import"./useFocusWithin-DSbUfD8x.js";import"./useDescription-DnVXAhCi.js";import"./useLocalizedStringFormatter-DBaQHtvd.js";import"./context-BQ3_Es2z.js";import"./useHover-D34ofACQ.js";import"./VisuallyHidden-C_KI20v8.js";import"./FocusScope-BnAoeAyt.js";import"./useForwardedRef-BqZ3RrEL.js";import"./PressResponder-Dqe7WJHR.js";import"./index-De95zDiF.js";import"./Message.context-BObz3Mtj.js";import"./ErrorMessage.context-D3SbpLIU.js";const K=l.span`
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
`,h=M.forwardRef(function(a,g){const n=f(a.id),s=f(),d=f(),{file:p,onChange:r,label:u,error:y,message:x,isDisabled:v=!1,isRequired:F=!1,isInvalid:q=!1,className:k,placeholder:D="No file selected",size:z="medium",id:Y=n,acceptedFileTypes:P,name:T,...A}=a,C=L({componentClassName:"aje-input__file",className:k,size:z,selectors:{"data-invalid":q,"data-disabled":v,"data-required":F}});return e.jsx(Q,{...C,...A,children:e.jsx(J,{onDrop:m=>{const I=m.items.filter(c=>c.kind==="file");I.length>0&&I[0].getFile().then(c=>r==null?void 0:r(c))},children:e.jsxs(O,{acceptedFileTypes:P,onSelect:m=>r==null?void 0:r(m[0]||null),name:T,children:[e.jsx(X,{file:p,label:u,placeholder:D,isRequired:F,isDisabled:v}),x&&e.jsx(Z,{id:d,children:x}),q&&y&&e.jsx(G,{id:s,children:y})]})})})});function X(o){const{file:a,label:g,placeholder:n,isRequired:s,isDisabled:d}=o,p=U.useRef(null),{buttonProps:r}=W({isDisabled:d},p),{focusProps:u}=H();return e.jsxs(_,{...B(r,u),children:[e.jsx(K,{children:a?a.name:n}),e.jsxs(S,{children:[g,s&&e.jsx("span",{"aria-hidden":"true",children:" *"})]})]})}try{h.displayName="FileInput",h.__docgenInfo={description:`FileInput component. Used to select singular files

Checkout [FileTrigger](?path=/docs/buttons-filetrigger--overview) For a more general file selection component`,displayName:"FileInput",props:{file:{defaultValue:null,description:"",name:"file",required:!1,type:{name:"File"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(f: File) => void"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},acceptedFileTypes:{defaultValue:null,description:`Array of accepted file types

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept)`,name:"acceptedFileTypes",required:!1,type:{name:"string[]"}},isDisabled:{defaultValue:null,description:`Field cannot be interacted with, should be de-emphasized in the UI
@selector [data-disabled]`,name:"isDisabled",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"Error message for the field",name:"error",required:!1,type:{name:"ReactNode"}},size:{defaultValue:null,description:"Size of the component",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"auto"'},{value:'"full"'}]}},className:{defaultValue:null,description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",required:!1,type:{name:"Argument | Argument[]"}},label:{defaultValue:null,description:`A visible label for the field. Labels are always Sentence case.
If you do not provide a label, you should provide an aria-label or aria-labelledby attribute.`,name:"label",required:!1,type:{name:"ReactNode"}},name:{defaultValue:null,description:"Name of the Field",name:"name",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"For additional information (ex. date format mm/dd/yy)",name:"message",required:!1,type:{name:"ReactNode"}},isRequired:{defaultValue:null,description:`Field must be interacted with. Should be indicated in the UI
@selector [data-required]`,name:"isRequired",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Field has an error. Should be made to look like an error.\nControls whether the value of `error` is displayed\n@selector [data-invalid]",name:"isInvalid",required:!1,type:{name:"boolean"}},"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"",name:"aria-labelledby",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-details":{defaultValue:null,description:"",name:"aria-details",required:!1,type:{name:"string"}}}}}catch{}const Le={title:"Inputs/Choose State/FileInput",component:h,parameters:{layout:"centered"},argTypes:{...E,file:{control:!1}}},t={args:{label:"Choose a file..."}},i={args:{...t.args,file:new File(["test"],"test.txt")}};var w,V,R;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: "Choose a file..."
  }
}`,...(R=(V=t.parameters)==null?void 0:V.docs)==null?void 0:R.source}}};var $,j,N;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    file: new File(["test"], "test.txt")
  }
}`,...(N=(j=i.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};const He=["Primary","WithFile"];export{t as Primary,i as WithFile,He as __namedExportsOrder,Le as default};
