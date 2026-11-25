import{j as t,d as me}from"./helpers-tUmR_xN7.js";import{g as r,R as pe,j as e,r as de}from"./iframe-CGPW5dgX.js";import{$ as ue}from"./useButton-CjI92Tj6.js";import{e as k,$ as fe}from"./useObjectRef-CjsC0YUg.js";import{u as ge}from"./useRenderProps-B7rIWDyP.js";import{m as P}from"./mixins-BJuiWlrm.js";import{S as be}from"./SkeletonLoader.component-DalY9QZY.js";import{u as ye}from"./useFocusRing-Dbcio0BW.js";import{D as he}from"./DropZone.component-C_mdnCKH.js";import{u as Fe}from"./Loading.context-EUscm4UA.js";import{F as Ie}from"./FileTrigger.component-BT0NXOEu.js";import{M as xe}from"./Message.component-CIEamcUq.js";import{E as ke}from"./ErrorMessage.component-DUCD1jzH.js";import"./useFocusable-DT9_LXVA.js";import"./SSRProvider-Dwr0Ku02.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./preload-helper-Dp1pzeXC.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-BioWcz2v.js";import"./index-BjoBGrPA.js";import"./context-CLSG1ylv.js";import"./useFocusWithin-BzfIRRcZ.js";import"./useDescription-DvoUWjyy.js";import"./useLocalizedStringFormatter-CLx94-cg.js";import"./useHover-9VTiwztB.js";import"./VisuallyHidden-BPd2hceK.js";import"./useForwardedRef-DFbI-FzN.js";import"./PressResponder-xHF_wXhX.js";import"./index-C0dagnaq.js";import"./Message.context-D_Dpg15a.js";import"./ErrorMessage.context-tIEpfdG1.js";const Pe=r(be)`
  width: 287px;
  height: 38px;
  display: inline-block;
`,Ne=r.span`
  width: 200px;
  min-height: 38px;
  display: inline-block;
  padding: 11px 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`,Z=r.strong`
  ${P.Bold}
  background-color: var(--background-clr-subtle);
  color: var(--text-clr-secondary);
  min-height: 38px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  border-left: 1px solid var(--file-input-border-clr);
`,G=r.button`
  ${P.Regular}
  ${P.FocusVisible(2)}
  text-align: left;
  background-color: var(--background-clr);
  padding: 0;
  font-size: 1.6rem;
  line-height: 1;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  overflow: hidden;
  border: 1px solid var(--file-input-border-clr);
  border-radius: 5px;
  overflow: hidden;
  background-color: none;
  padding: 0;
  color: var(--text-clr);

  &:hover {
    ${Z} {
      color: var(--text-clr);
      background-color: var(--background-clr-subtle-hover);
    }
  }
`,S=r.div`
  --file-input-border-clr: var(--input-border-clr);

  &[data-disabled] {
    ${G} {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
`,N=pe.forwardRef(function(i,f){const g=k(i.id),o=k(),n=k(),{file:b,onChange:a,label:y,error:l,message:h,isDisabled:v=!1,isRequired:L=!1,isInvalid:F=!1,className:K,placeholder:Q="No file selected",size:X="medium",id:Y=g,acceptedFileTypes:ee,name:ae,isLoading:we,loadingLabel:qe,"aria-label":se,"aria-labelledby":te,"aria-describedby":ie,"aria-details":le,...re}=i,oe=[ie,h?n:void 0,F&&l?o:void 0].filter(Boolean).join(" ")||void 0,{isLoading:ne,loadingLabel:ce}=Fe(i),w=ge({componentClassName:"aje-input__file",className:K,size:X,selectors:{"data-invalid":F,"data-disabled":v,"data-required":L}});return ne?e.jsx(S,{...w,children:e.jsx(Pe,{title:ce,children:e.jsx("rect",{x:"0",y:"0",width:"100%",height:"100%",rx:"5",ry:"5"})})}):e.jsx(S,{...w,...re,children:e.jsx(he,{onDrop:I=>{const q=I.items.filter(x=>x.kind==="file");q.length>0&&q[0].getFile().then(x=>a==null?void 0:a(x))},children:e.jsxs(Ie,{ref:f,id:Y,acceptedFileTypes:ee,onSelect:I=>a==null?void 0:a(I[0]||null),name:ae,children:[e.jsx(ve,{file:b,label:y,placeholder:Q,isRequired:L,isDisabled:v,"aria-label":se,"aria-labelledby":te,"aria-describedby":oe,"aria-details":le}),h&&e.jsx(xe,{id:n,children:h}),F&&l&&e.jsx(ke,{id:o,isInvalid:!0,children:l})]})})})});function ve(u){const{file:i,label:f,placeholder:g,isRequired:o,isDisabled:n,...b}=u,a=de.useRef(null),{buttonProps:y}=ue({isDisabled:n,...b},a),{focusProps:l}=ye();return e.jsxs(G,{...fe(y,l),children:[e.jsx(Ne,{children:i?i.name:g}),e.jsxs(Z,{children:[f,o&&e.jsx("span",{"aria-hidden":"true",children:" *"})]})]})}try{N.displayName="FileInput",N.__docgenInfo={description:`FileInput component. Used to select singular files

Check out [FileTrigger](?path=/docs/buttons-filetrigger--overview) for a more general file selection component`,displayName:"FileInput",filePath:"/home/runner/work/atomic-libs/atomic-libs/packages/atomic-elements/src/components/Inputs/FileInput/FileInput.component.tsx",methods:[],props:{file:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Inputs/FileInput/FileInput.component.tsx",name:"FileInputProps"}],description:"The currently selected file (controlled)",name:"file",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Inputs/FileInput/FileInput.component.tsx",name:"FileInputProps"},required:!1,tags:{},type:{name:"File | null"}},onChange:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Inputs/FileInput/FileInput.component.tsx",name:"FileInputProps"}],description:"Called with the selected or dropped file, or null",name:"onChange",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Inputs/FileInput/FileInput.component.tsx",name:"FileInputProps"},required:!1,tags:{},type:{name:"((f: File | null) => void)"}},placeholder:{defaultValue:{value:'"No file selected"'},declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Inputs/FileInput/FileInput.component.tsx",name:"FileInputProps"}],description:"Text shown when no file is selected",name:"placeholder",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Inputs/FileInput/FileInput.component.tsx",name:"FileInputProps"},required:!1,tags:{default:'"No file selected"'},type:{name:"string"}},acceptedFileTypes:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Inputs/FileInput/FileInput.component.tsx",name:"FileInputProps"}],description:`Array of accepted file types

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept)`,name:"acceptedFileTypes",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Inputs/FileInput/FileInput.component.tsx",name:"FileInputProps"},required:!1,tags:{},type:{name:"string[]"}},isDisabled:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"FieldStatusProps"}],description:"Field cannot be interacted with, should be de-emphasized in the UI",name:"isDisabled",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"FieldStatusProps"},required:!1,tags:{selector:"[data-disabled]"},type:{name:"boolean"}},id:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"DomProps"}],description:"Unique id for the component",name:"id",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"DomProps"},required:!1,tags:{},type:{name:"string"}},error:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"HelpMessageProps"}],description:"Error message for the field",name:"error",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"HelpMessageProps"},required:!1,tags:{},type:{name:"ReactNode"}},size:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"PresentationProps"}],description:"Size of the component",name:"size",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"PresentationProps"},required:!1,tags:{},type:{name:"enum",raw:"ExtendedSize",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"auto"'},{value:'"full"'}]}},isLoading:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"TypeLiteral"}],description:`When loading is true, the content will be replaced with a spinner.
When it is false, the content will be shown normally`,name:"isLoading",required:!1,tags:{},type:{name:"boolean"}},loadingLabel:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"TypeLiteral"}],description:"aria accessibility label to inform screen-readers that it is loading",name:"loadingLabel",required:!1,tags:{},type:{name:"string"}},className:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"PresentationProps"}],description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"PresentationProps"},required:!1,tags:{},type:{name:"Argument | Argument[]"}},isRequired:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"FieldStatusProps"}],description:"Field must be interacted with. Should be indicated in the UI",name:"isRequired",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"FieldStatusProps"},required:!1,tags:{selector:"[data-required]"},type:{name:"boolean"}},isInvalid:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"FieldStatusProps"}],description:"Field has an error. Should be made to look like an error.\nControls whether the value of `error` is displayed",name:"isInvalid",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"FieldStatusProps"},required:!1,tags:{selector:"[data-invalid]"},type:{name:"boolean"}},label:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"HelpTextProps"}],description:`A visible label for the field. Labels are always Sentence case.
If you do not provide a label, you should provide an aria-label or aria-labelledby attribute.`,name:"label",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"HelpTextProps"},required:!1,tags:{},type:{name:"ReactNode"}},name:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"FieldDomProps"}],description:"Name of the Field",name:"name",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"FieldDomProps"},required:!1,tags:{},type:{name:"string"}},message:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"HelpMessageProps"}],description:"For additional information (ex. date format mm/dd/yy)",name:"message",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"HelpMessageProps"},required:!1,tags:{},type:{name:"ReactNode"}},"aria-label":{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"AriaLabelProps"}],description:"",name:"aria-label",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"AriaLabelProps"},required:!1,tags:{},type:{name:"string"}},"aria-labelledby":{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"AriaLabelProps"}],description:"",name:"aria-labelledby",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"AriaLabelProps"},required:!1,tags:{},type:{name:"string"}},"aria-describedby":{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"AriaLabelProps"}],description:"",name:"aria-describedby",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"AriaLabelProps"},required:!1,tags:{},type:{name:"string"}},"aria-details":{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"AriaLabelProps"}],description:"",name:"aria-details",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"AriaLabelProps"},required:!1,tags:{},type:{name:"string"}}},tags:{}}}catch{}const{isReadOnly:oa,...Le}=t;var V,D,R;const na={title:"Inputs/Choose State/FileInput",component:N,parameters:{layout:"centered"},argTypes:{...Le,...me,size:{table:{defaultValue:{summary:'"medium"'}}},isDisabled:{...t.isDisabled,table:{...(V=t.isDisabled)==null?void 0:V.table,defaultValue:{summary:"false"}}},isRequired:{...t.isRequired,table:{...(D=t.isRequired)==null?void 0:D.table,defaultValue:{summary:"false"}}},isInvalid:{...t.isInvalid,table:{...(R=t.isInvalid)==null?void 0:R.table,defaultValue:{summary:"false"}}},file:{control:!1},onChange:{action:"onChange",table:{category:"Events"}}}},s={args:{label:"Choose a file..."}},c={args:{...s.args,file:new File(["test"],"test.txt")},parameters:{docs:{source:{code:`<FileInput
  label="Choose a file..."
  file={new File(["test"], "test.txt")}
/>`}}}},m={args:{...s.args,isInvalid:!0,error:"Please choose a file"}},p={args:{...s.args,isDisabled:!0}},d={args:{...s.args,isLoading:!0,loadingLabel:"Loading"}},ca=["Primary","WithFile","WithError","Disabled","Loading"];var j,$,A;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: "Choose a file..."
  }
}`,...(A=($=s.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};var _,T,C;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    file: new File(["test"], "test.txt")
  },
  parameters: {
    docs: {
      source: {
        code: \`<FileInput
  label="Choose a file..."
  file={new File(["test"], "test.txt")}
/>\`
      }
    }
  }
}`,...(C=(T=c.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var E,z,M;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isInvalid: true,
    error: "Please choose a file"
  }
}`,...(M=(z=m.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var W,H,B;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isDisabled: true
  }
}`,...(B=(H=p.parameters)==null?void 0:H.docs)==null?void 0:B.source}}};var U,O,J;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isLoading: true,
    loadingLabel: "Loading"
  }
}`,...(J=(O=d.parameters)==null?void 0:O.docs)==null?void 0:J.source}}};export{p as Disabled,d as Loading,s as Primary,m as WithError,c as WithFile,ca as __namedExportsOrder,na as default};
