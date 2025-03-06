import{T as q}from"./helpers-D-Gur9Js.js";import{g as V}from"./cssprops-BO85xpNm.js";import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{R as I}from"./index-DJO9vBfz.js";import{c as T}from"./index-i5X67GZP.js";import{d as R}from"./styled-components.browser.esm-BQf_XqKi.js";import{m as A}from"./mixins-B7X2BZyR.js";import{T as _}from"./TextField.component-Brod2y3c.js";import{L as N}from"./Label.component-CeN98k3i.js";import{M as w}from"./Message.component-nkasZM07.js";import{T as F}from"./TextArea.component-BWVNPlf_.js";import{E as S}from"./ErrorMessage.component-CfKzjo8L.js";import"./index-DLW06VQL.js";import"./index-BDzxygkP.js";import"./index-C0DXmw5d.js";import"./index-CyCRagT9.js";import"./Collection-CnHW8amz.js";import"./CollectionBuilder-Xbel4YvD.js";import"./index-DJdX7xnk.js";import"./SSRProvider-DAMUgb6s.js";import"./useLayoutEffect-Bj1hLagI.js";import"./index-SU87TpAq.js";import"./scale-CqCDTNu0.js";import"./useTextField-DSYflh9X.js";import"./focusSafely-BOUv7I-8.js";import"./useObjectRef-BKue9pYL.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormReset-C11SSN19.js";import"./useControlledState-CN8sBTKq.js";import"./useField-mSuDlNxJ.js";import"./useLabel-CSTUXoQW.js";import"./useLabels-B24R2YQq.js";import"./useFocusable-o0N_IkwX.js";import"./useFocus-DJe2BRHe.js";import"./utils-Df1WEgxG.js";import"./useKeyboard-A8_doyNT.js";import"./useFormValidation-D05SS9o7.js";import"./useFormValidationState-DFldk10H.js";import"./Field.styles-wtg9rJuP.js";import"./Provider-B9Eqn13H.js";import"./useRenderProps-Bk8BH60l.js";import"./Label.context-ChhuUauO.js";import"./index-De95zDiF.js";import"./Message.context-BObz3Mtj.js";import"./ErrorMessage.context-D3SbpLIU.js";import"./ComboInput.context-Dk1bHly0.js";import"./Input.context-KI5tKbdp.js";import"./TextArea.context-BmdJtbM9.js";const j=R(_)`
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
`,t=I.forwardRef(function(m,u){const{size:p="medium",resize:i="both",label:l,error:c,message:o,className:f,isDisabled:h,isInvalid:b,isRequired:y,isReadOnly:v,rows:x,cols:g,...z}=m;return e.jsxs(j,{className:T("aje-input__textarea",f),size:p,isDisabled:h,isInvalid:b,isRequired:y,isReadOnly:v,"data-resize":i==="none"?void 0:i,...z,children:[l&&e.jsx(N,{children:l}),o&&e.jsx(w,{children:o}),e.jsx(F,{ref:u,rows:x,cols:g}),e.jsx(S,{children:c})]})});try{t.displayName="TextAreaInput",t.__docgenInfo={description:"Textarea Component. Accepts a `ref`",displayName:"TextAreaInput",props:{resize:{defaultValue:null,description:"The user is given the ability to resize the input",name:"resize",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"both"'},{value:'"horizontal"'},{value:'"vertical"'}]}},rows:{defaultValue:null,description:"",name:"rows",required:!1,type:{name:"number"}},cols:{defaultValue:null,description:"",name:"cols",required:!1,type:{name:"number"}},id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",required:!1,type:{name:"Argument | Argument[]"}},size:{defaultValue:null,description:"Size of the component",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"auto"'},{value:'"full"'}]}},label:{defaultValue:null,description:`A visible label for the field. Labels are always Sentence case.
If you do not provide a label, you should provide an aria-label or aria-labelledby attribute.`,name:"label",required:!1,type:{name:"ReactNode"}},message:{defaultValue:null,description:"For additional information (ex. date format mm/dd/yy)",name:"message",required:!1,type:{name:"ReactNode"}},error:{defaultValue:null,description:"Error message for the field",name:"error",required:!1,type:{name:"ReactNode"}},isDisabled:{defaultValue:null,description:`Field cannot be interacted with, should be de-emphasized in the UI
@selector [data-disabled]`,name:"isDisabled",required:!1,type:{name:"boolean"}},isReadOnly:{defaultValue:null,description:`Field cannot be modified. Should be made to not look like a editable field
@selector [data-readonly]`,name:"isReadOnly",required:!1,type:{name:"boolean"}},isRequired:{defaultValue:null,description:`Field must be interacted with. Should be indicated in the UI
@selector [data-required]`,name:"isRequired",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Field has an error. Should be made to look like an error.\nControls whether the value of `error` is displayed\n@selector [data-invalid]",name:"isInvalid",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"Name of the Field",name:"name",required:!1,type:{name:"string"}}}}}catch{}try{TextAreaInputcomponent.displayName="TextAreaInputcomponent",TextAreaInputcomponent.__docgenInfo={description:"Textarea Component. Accepts a `ref`",displayName:"TextAreaInputcomponent",props:{resize:{defaultValue:null,description:"The user is given the ability to resize the input",name:"resize",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"both"'},{value:'"horizontal"'},{value:'"vertical"'}]}},rows:{defaultValue:null,description:"",name:"rows",required:!1,type:{name:"number"}},cols:{defaultValue:null,description:"",name:"cols",required:!1,type:{name:"number"}},id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",required:!1,type:{name:"Argument | Argument[]"}},size:{defaultValue:null,description:"Size of the component",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"auto"'},{value:'"full"'}]}},label:{defaultValue:null,description:`A visible label for the field. Labels are always Sentence case.
If you do not provide a label, you should provide an aria-label or aria-labelledby attribute.`,name:"label",required:!1,type:{name:"ReactNode"}},message:{defaultValue:null,description:"For additional information (ex. date format mm/dd/yy)",name:"message",required:!1,type:{name:"ReactNode"}},error:{defaultValue:null,description:"Error message for the field",name:"error",required:!1,type:{name:"ReactNode"}},isDisabled:{defaultValue:null,description:`Field cannot be interacted with, should be de-emphasized in the UI
@selector [data-disabled]`,name:"isDisabled",required:!1,type:{name:"boolean"}},isReadOnly:{defaultValue:null,description:`Field cannot be modified. Should be made to not look like a editable field
@selector [data-readonly]`,name:"isReadOnly",required:!1,type:{name:"boolean"}},isRequired:{defaultValue:null,description:`Field must be interacted with. Should be indicated in the UI
@selector [data-required]`,name:"isRequired",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Field has an error. Should be made to look like an error.\nControls whether the value of `error` is displayed\n@selector [data-invalid]",name:"isInvalid",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"Name of the Field",name:"name",required:!1,type:{name:"string"}}}}}catch{}const _e={title:"Inputs/User Input/TextAreaInput",component:t,parameters:{cssprops:V("Input","Textarea")},argTypes:{...q,onChange:{action:"changed",table:{category:"Events"}}}},a={args:{defaultValue:"Textarea content",resize:"both",size:"full",label:"Textarea label",message:"1000 characters"}};var n,s,d;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    defaultValue: "Textarea content",
    resize: "both",
    size: "full",
    label: "Textarea label",
    message: "1000 characters"
  }
}`,...(d=(s=a.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const Ne=["Primary"];export{a as Primary,Ne as __namedExportsOrder,_e as default};
