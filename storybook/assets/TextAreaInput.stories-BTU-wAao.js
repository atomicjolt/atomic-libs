import{T as q}from"./helpers-DOVaRqs_.js";import{g as V}from"./cssprops-DECR0Nbg.js";import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as I}from"./index-BCtMShv3.js";import{c as T}from"./index-EJ0-2BeM.js";import{d as R}from"./styled-components.browser.esm-Y4FpNNpy.js";import{m as A}from"./mixins-XviowZ_6.js";import{T as _}from"./TextField.component-yvFsMedy.js";import{L as N}from"./Label.component-Mdsn2Vg-.js";import{M as w}from"./Message.component-LTtkPuHW.js";import{T as F}from"./TextArea.component-B6FaWOPR.js";import{E as S}from"./ErrorMessage.component-DXRHu5W2.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./Collection-C2kgHJSW.js";import"./CollectionBuilder-4ZFsDDvv.js";import"./index-BqCLlfdy.js";import"./index-D-fs5e6L.js";import"./useFocusable-B7HbK8LX.js";import"./useObjectRef-B4hnndUj.js";import"./SSRProvider-DyiXDq2k.js";import"./useTextField-D4_p2q36.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormReset-GcAVnfXr.js";import"./useControlledState-vzCMHZvt.js";import"./useField-D8gfBVj0.js";import"./useLabel-Bew-gTxt.js";import"./useLabels-BQTM_NWA.js";import"./useFormValidation-CnIG3AAh.js";import"./useFormValidationState-CONlS5Wo.js";import"./Field.styles-D_hvWyI3.js";import"./Provider-op_UCnZE.js";import"./useRenderProps-CP918x9p.js";import"./Label.context-Bxyvy4yx.js";import"./index-C_lK3xe_.js";import"./Message.context-CzffOAUK.js";import"./ErrorMessage.context-B4seO6gR.js";import"./ComboInput.context-Dhqk-dVH.js";import"./Input.context-kYvBQ720.js";import"./TextArea.context-C8nZtAtq.js";const j=R(_)`
  ${A.FieldStatus}

  --size-sm-x: 200px;
  --size-md-x: 300px;
  --size-lg-x: 600px;

  --size-sm-y: 100px;
  --size-md-y: 200px;
  --size-lg-y: 300px;

  &.is-small {
    width: var(--size-sm-x);
    min-height: var(--size-sm-y);
    --textara-height: calc(var(--size-sm-y) - 21px);
  }

  &.is-medium {
    width: var(--size-md-x);
    min-height: var(--size-md-y);
    --textarea-height: calc(var(--size-md-y) - 21px);
  }

  &.is-large {
    width: var(--size-lg-x);
    min-height: var(--size-lg-y);
    --textarea-height: calc(var(--size-lg-y) - 21px);
  }

  &.is-full {
    width: var(--size-full-x);
    min-height: var(--size-full-y);
    --textarea-height: calc(var(--size-full-y) - 21px);
  }

  &[data-resize="horizontal"] textarea {
    resize: horizontal;
  }

  &[data-resize="vertical"] textarea {
    resize: vertical;
  }

  &[data-resize="both"] textarea {
    resize: both;
  }
`,t=I.forwardRef(function(u,m){const{size:p="medium",resize:l="both",label:i,error:c,message:n,className:f,isDisabled:h,isInvalid:b,isRequired:y,isReadOnly:v,rows:x,cols:g,...z}=u;return e.jsxs(j,{className:T("aje-input__textarea",f),size:p,isDisabled:h,isInvalid:b,isRequired:y,isReadOnly:v,"data-resize":l==="none"?void 0:l,...z,children:[i&&e.jsx(N,{children:i}),n&&e.jsx(w,{children:n}),e.jsx(F,{ref:m,rows:x,cols:g}),e.jsx(S,{children:c})]})});try{t.displayName="TextAreaInput",t.__docgenInfo={description:"Textarea Component. Accepts a `ref`",displayName:"TextAreaInput",props:{resize:{defaultValue:null,description:"The user is given the ability to resize the input",name:"resize",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"both"'},{value:'"horizontal"'},{value:'"vertical"'}]}},rows:{defaultValue:null,description:"",name:"rows",required:!1,type:{name:"number"}},cols:{defaultValue:null,description:"",name:"cols",required:!1,type:{name:"number"}},id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",required:!1,type:{name:"Argument | Argument[]"}},size:{defaultValue:null,description:"Size of the component",name:"size",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"full"'}]}},label:{defaultValue:null,description:`A visible label for the field. Labels are always Sentence case.
If you do not provide a label, you should provide an aria-label or aria-labelledby attribute.`,name:"label",required:!1,type:{name:"ReactNode"}},message:{defaultValue:null,description:"For additional information (ex. date format mm/dd/yy)",name:"message",required:!1,type:{name:"ReactNode"}},error:{defaultValue:null,description:"Error message for the field",name:"error",required:!1,type:{name:"ReactNode"}},isDisabled:{defaultValue:null,description:`Field cannot be interacted with, should be de-emphasized in the UI
@selector [data-disabled]`,name:"isDisabled",required:!1,type:{name:"boolean"}},isReadOnly:{defaultValue:null,description:`Field cannot be modified. Should be made to not look like a editable field
@selector [data-readonly]`,name:"isReadOnly",required:!1,type:{name:"boolean"}},isRequired:{defaultValue:null,description:`Field must be interacted with. Should be indicated in the UI
@selector [data-required]`,name:"isRequired",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Field has an error. Should be made to look like an error.\nControls whether the value of `error` is displayed\n@selector [data-invalid]",name:"isInvalid",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"Name of the Field",name:"name",required:!1,type:{name:"string"}}}}}catch{}try{TextAreaInputcomponent.displayName="TextAreaInputcomponent",TextAreaInputcomponent.__docgenInfo={description:"Textarea Component. Accepts a `ref`",displayName:"TextAreaInputcomponent",props:{resize:{defaultValue:null,description:"The user is given the ability to resize the input",name:"resize",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"both"'},{value:'"horizontal"'},{value:'"vertical"'}]}},rows:{defaultValue:null,description:"",name:"rows",required:!1,type:{name:"number"}},cols:{defaultValue:null,description:"",name:"cols",required:!1,type:{name:"number"}},id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",required:!1,type:{name:"Argument | Argument[]"}},size:{defaultValue:null,description:"Size of the component",name:"size",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"full"'}]}},label:{defaultValue:null,description:`A visible label for the field. Labels are always Sentence case.
If you do not provide a label, you should provide an aria-label or aria-labelledby attribute.`,name:"label",required:!1,type:{name:"ReactNode"}},message:{defaultValue:null,description:"For additional information (ex. date format mm/dd/yy)",name:"message",required:!1,type:{name:"ReactNode"}},error:{defaultValue:null,description:"Error message for the field",name:"error",required:!1,type:{name:"ReactNode"}},isDisabled:{defaultValue:null,description:`Field cannot be interacted with, should be de-emphasized in the UI
@selector [data-disabled]`,name:"isDisabled",required:!1,type:{name:"boolean"}},isReadOnly:{defaultValue:null,description:`Field cannot be modified. Should be made to not look like a editable field
@selector [data-readonly]`,name:"isReadOnly",required:!1,type:{name:"boolean"}},isRequired:{defaultValue:null,description:`Field must be interacted with. Should be indicated in the UI
@selector [data-required]`,name:"isRequired",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Field has an error. Should be made to look like an error.\nControls whether the value of `error` is displayed\n@selector [data-invalid]",name:"isInvalid",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"Name of the Field",name:"name",required:!1,type:{name:"string"}}}}}catch{}const ge={title:"Inputs/User Input/TextAreaInput",component:t,parameters:{cssprops:V("Input","Textarea")},argTypes:{...q,onChange:{action:"changed",table:{category:"Events"}}}},a={args:{defaultValue:"Textarea content",resize:"both",size:"full",label:"Textarea label",message:"1000 characters"}};var s,o,d;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    defaultValue: "Textarea content",
    resize: "both",
    size: "full",
    label: "Textarea label",
    message: "1000 characters"
  }
}`,...(d=(o=a.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};const ze=["Primary"];export{a as Primary,ze as __namedExportsOrder,ge as default};
