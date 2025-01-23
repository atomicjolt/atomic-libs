import{T as q}from"./helpers-fQWfWkgV.js";import{g as V}from"./cssprops-BTVAmD30.js";import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{R as I}from"./index-DJO9vBfz.js";import{c as T}from"./index-i5X67GZP.js";import{d as A}from"./styled-components.browser.esm-BQf_XqKi.js";import{m as R}from"./mixins-D6ZuOvce.js";import{T as _}from"./TextField.component-C9IwLSWi.js";import{L as N}from"./Label.component-BZ-jUZHh.js";import{M as w}from"./Message.component-DWiHyL-P.js";import{T as F}from"./TextArea.component-bAkOGlHk.js";import{E as S}from"./ErrorMessage.component-DPAek6pW.js";import"./layout-qoR695S7.js";import"./utils-2VFVy79V.js";import"./Collection-DjPHrlSR.js";import"./CollectionBuilder-JuF9vAdV.js";import"./index-DJdX7xnk.js";import"./SSRProvider-DAMUgb6s.js";import"./useObjectRef-CjtaasUj.js";import"./index-Co2NqHf1.js";import"./useRenderProps-Bk8BH60l.js";import"./useTextField-Fhkucs1k.js";import"./focusSafely-f-NvfehK.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormReset-Bq2IuLnF.js";import"./useControlledState-CN8sBTKq.js";import"./useField-c4_Ph5j6.js";import"./useLabel-7v3RoPQd.js";import"./useLabels-DvZR7g99.js";import"./useFocusable-CRaVIClu.js";import"./useFocus-zOn8SIU-.js";import"./utils-Bz-oJdcG.js";import"./useKeyboard-A8_doyNT.js";import"./useFormValidation-CkGNgIJp.js";import"./useFormValidationState-DFldk10H.js";import"./Field.styles-CsRBBplX.js";import"./Provider-B9Eqn13H.js";import"./Label.context-BBG6Xa_C.js";import"./Message.context-DZr9m1_6.js";import"./ErrorMessage.context-Buhm2lRy.js";import"./ComboInput.context-ocWXhSuv.js";import"./Input.context-Bkm7QTcU.js";const j=A(_)`
  ${R.FieldStatus}

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
`,t=I.forwardRef(function(m,u){const{size:p="medium",resize:l="both",label:i,error:c,message:n,className:f,isDisabled:h,isInvalid:b,isRequired:y,isReadOnly:v,rows:x,cols:g,...z}=m;return e.jsxs(j,{className:T("aje-input__textarea",f),size:p,isDisabled:h,isInvalid:b,isRequired:y,isReadOnly:v,"data-resize":l==="none"?void 0:l,...z,children:[i&&e.jsx(N,{children:i}),n&&e.jsx(w,{children:n}),e.jsx(F,{ref:u,rows:x,cols:g}),e.jsx(S,{children:c})]})});try{t.displayName="TextAreaInput",t.__docgenInfo={description:"Textarea Component. Accepts a `ref`",displayName:"TextAreaInput",props:{resize:{defaultValue:null,description:"The user is given the ability to resize the input",name:"resize",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"both"'},{value:'"horizontal"'},{value:'"vertical"'}]}},rows:{defaultValue:null,description:"",name:"rows",required:!1,type:{name:"number"}},cols:{defaultValue:null,description:"",name:"cols",required:!1,type:{name:"number"}},id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",required:!1,type:{name:"Argument | Argument[]"}},size:{defaultValue:null,description:"Size of the component",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"auto"'},{value:'"full"'}]}},label:{defaultValue:null,description:`A visible label for the field. Labels are always Sentence case.
If you do not provide a label, you should provide an aria-label or aria-labelledby attribute.`,name:"label",required:!1,type:{name:"ReactNode"}},message:{defaultValue:null,description:"For additional information (ex. date format mm/dd/yy)",name:"message",required:!1,type:{name:"ReactNode"}},error:{defaultValue:null,description:"Error message for the field",name:"error",required:!1,type:{name:"ReactNode"}},isDisabled:{defaultValue:null,description:`Field cannot be interacted with, should be de-emphasized in the UI
@selector [data-disabled]`,name:"isDisabled",required:!1,type:{name:"boolean"}},isReadOnly:{defaultValue:null,description:`Field cannot be modified. Should be made to not look like a editable field
@selector [data-readonly]`,name:"isReadOnly",required:!1,type:{name:"boolean"}},isRequired:{defaultValue:null,description:`Field must be interacted with. Should be indicated in the UI
@selector [data-required]`,name:"isRequired",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Field has an error. Should be made to look like an error.\nControls whether the value of `error` is displayed\n@selector [data-invalid]",name:"isInvalid",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"Name of the Field",name:"name",required:!1,type:{name:"string"}}}}}catch{}try{TextAreaInputcomponent.displayName="TextAreaInputcomponent",TextAreaInputcomponent.__docgenInfo={description:"Textarea Component. Accepts a `ref`",displayName:"TextAreaInputcomponent",props:{resize:{defaultValue:null,description:"The user is given the ability to resize the input",name:"resize",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"both"'},{value:'"horizontal"'},{value:'"vertical"'}]}},rows:{defaultValue:null,description:"",name:"rows",required:!1,type:{name:"number"}},cols:{defaultValue:null,description:"",name:"cols",required:!1,type:{name:"number"}},id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",required:!1,type:{name:"Argument | Argument[]"}},size:{defaultValue:null,description:"Size of the component",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"auto"'},{value:'"full"'}]}},label:{defaultValue:null,description:`A visible label for the field. Labels are always Sentence case.
If you do not provide a label, you should provide an aria-label or aria-labelledby attribute.`,name:"label",required:!1,type:{name:"ReactNode"}},message:{defaultValue:null,description:"For additional information (ex. date format mm/dd/yy)",name:"message",required:!1,type:{name:"ReactNode"}},error:{defaultValue:null,description:"Error message for the field",name:"error",required:!1,type:{name:"ReactNode"}},isDisabled:{defaultValue:null,description:`Field cannot be interacted with, should be de-emphasized in the UI
@selector [data-disabled]`,name:"isDisabled",required:!1,type:{name:"boolean"}},isReadOnly:{defaultValue:null,description:`Field cannot be modified. Should be made to not look like a editable field
@selector [data-readonly]`,name:"isReadOnly",required:!1,type:{name:"boolean"}},isRequired:{defaultValue:null,description:`Field must be interacted with. Should be indicated in the UI
@selector [data-required]`,name:"isRequired",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Field has an error. Should be made to look like an error.\nControls whether the value of `error` is displayed\n@selector [data-invalid]",name:"isInvalid",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"Name of the Field",name:"name",required:!1,type:{name:"string"}}}}}catch{}const qe={title:"Inputs/User Input/TextAreaInput",component:t,parameters:{cssprops:V("Input","TextArea")},argTypes:{...q,onChange:{action:"changed",table:{category:"Events"}}}},a={args:{defaultValue:"Textarea content",resize:"both",size:"full",label:"Textarea label",message:"1000 characters"}};var o,s,d;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    defaultValue: "Textarea content",
    resize: "both",
    size: "full",
    label: "Textarea label",
    message: "1000 characters"
  }
}`,...(d=(s=a.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const Ve=["Primary"];export{a as Primary,Ve as __namedExportsOrder,qe as default};
