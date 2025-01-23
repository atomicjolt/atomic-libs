import{T as A,g as O}from"./helpers-fQWfWkgV.js";import{g as z}from"./cssprops-BTVAmD30.js";import{j as r}from"./jsx-runtime-CkxqCPlQ.js";import{R as P}from"./index-DJO9vBfz.js";import{c as U}from"./index-i5X67GZP.js";import{u as D}from"./variants-Dln-jX-v.js";import{G as k}from"./index-D6eVVUl-.js";import{F as B}from"./FloatingFieldInputWrapper-COAUq1MS.js";import{a as E}from"./Inputs.styles-OWeL2ZqS.js";import{C as T}from"./ComboInput.component-BfExnJkY.js";import{I as W}from"./Input.component-Bl1fklny.js";import{N as m}from"./NumberField.component-D2hNFcer.js";import"./styled-components.browser.esm-BQf_XqKi.js";import"./layout-qoR695S7.js";import"./utils-2VFVy79V.js";import"./Collection-DjPHrlSR.js";import"./CollectionBuilder-JuF9vAdV.js";import"./index-DJdX7xnk.js";import"./SSRProvider-DAMUgb6s.js";import"./useObjectRef-CjtaasUj.js";import"./index-Co2NqHf1.js";import"./useRenderProps-Bk8BH60l.js";import"./Label.component-BZ-jUZHh.js";import"./mixins-D6ZuOvce.js";import"./Label.context-BBG6Xa_C.js";import"./Message.component-DWiHyL-P.js";import"./Message.context-DZr9m1_6.js";import"./ErrorMessage.component-DPAek6pW.js";import"./ErrorMessage.context-Buhm2lRy.js";import"./ComboInput.styles-BpY8b9Fd.js";import"./TextField.component-C9IwLSWi.js";import"./useTextField-Fhkucs1k.js";import"./focusSafely-f-NvfehK.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormReset-Bq2IuLnF.js";import"./useControlledState-CN8sBTKq.js";import"./useField-c4_Ph5j6.js";import"./useLabel-7v3RoPQd.js";import"./useLabels-DvZR7g99.js";import"./useFocusable-CRaVIClu.js";import"./useFocus-zOn8SIU-.js";import"./utils-Bz-oJdcG.js";import"./useKeyboard-A8_doyNT.js";import"./useFormValidation-CkGNgIJp.js";import"./useFormValidationState-DFldk10H.js";import"./Field.styles-CsRBBplX.js";import"./Provider-B9Eqn13H.js";import"./ComboInput.context-ocWXhSuv.js";import"./Input.context-Bkm7QTcU.js";import"./useFocusWithin-BwiFBvMF.js";import"./useEvent-CWl__ymk.js";import"./useLocalizedStringFormatter-DBaQHtvd.js";import"./context-BQ3_Es2z.js";import"./useNumberFormatter-D5qg7lg6.js";import"./NumberFormatter-DNR9MAW-.js";import"./useSpinButton-DOEyhSS3.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DOH0gK78.js";import"./number-nHrFdSb-.js";import"./IconButton.component-Dg_s0u7A.js";import"./Button.component-DtbpFVXN.js";import"./useFocusRing-CkPe2VLa.js";import"./useButton-CK1XMKNi.js";import"./useLink-Bis7wRJn.js";import"./SpinnerLoader.component-CZS0l4HJ.js";import"./Loader.component-DTNPwaWm.js";import"./Flex.component-BqyhhyXT.js";import"./Checkmark.component-DV3x2bJU.js";import"./Spinner.component-LKZLOMLe.js";import"./MaterialIcon.component-Bb94pzqW.js";import"./Icons.styles-BaNpbbIh.js";const l=P.forwardRef((a,M)=>{const{label:q,size:S="medium",error:_,message:w,className:C,variant:s="default",...R}=a,j=D("aje-input",s);return r.jsx(E,{size:S,className:U(j,C),"data-float":a.value!==void 0&&a.value!==null&&s==="floating"||void 0,...R,children:r.jsx(B,{floating:s==="floating",label:q,message:w,error:_,children:r.jsxs(T,{padding:"both",children:[r.jsx(W,{}),r.jsxs(k,{$direction:"column",isMerged:!0,children:[r.jsx(m.IncrementButton,{icon:"arrow_drop_up",variant:"content",size:"small"}),r.jsx(m.DecrementButton,{icon:"arrow_drop_down",variant:"content",size:"small"})]})]})})})});try{l.displayName="NumberInput",l.__docgenInfo={description:"Input for number values. Fowards a `ref` to the internal input element",displayName:"NumberInput",props:{id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",required:!1,type:{name:"Argument | Argument[]"}},size:{defaultValue:null,description:"Size of the component",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"auto"'},{value:'"full"'}]}},label:{defaultValue:null,description:`A visible label for the field. Labels are always Sentence case.
If you do not provide a label, you should provide an aria-label or aria-labelledby attribute.`,name:"label",required:!1,type:{name:"ReactNode"}},message:{defaultValue:null,description:"For additional information (ex. date format mm/dd/yy)",name:"message",required:!1,type:{name:"ReactNode"}},error:{defaultValue:null,description:"Error message for the field",name:"error",required:!1,type:{name:"ReactNode"}},isDisabled:{defaultValue:null,description:`Field cannot be interacted with, should be de-emphasized in the UI
@selector [data-disabled]`,name:"isDisabled",required:!1,type:{name:"boolean"}},isReadOnly:{defaultValue:null,description:`Field cannot be modified. Should be made to not look like a editable field
@selector [data-readonly]`,name:"isReadOnly",required:!1,type:{name:"boolean"}},isRequired:{defaultValue:null,description:`Field must be interacted with. Should be indicated in the UI
@selector [data-required]`,name:"isRequired",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Field has an error. Should be made to look like an error.\nControls whether the value of `error` is displayed\n@selector [data-invalid]",name:"isInvalid",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"Name of the Field",name:"name",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'SuggestStrings<"default" | "floating">'}}}}}catch{}const sr={title:"Inputs/User Input/NumberInput",component:l,parameters:{layout:"centered",cssprops:z("Input")},argTypes:{...A,...O,onChange:{action:"onChange",table:{category:"Events"}},formatOptions:{control:"object",description:"Options for formatting the number"},minValue:{control:"number",description:"Minimum value allowed"},maxValue:{control:"number",description:"Maximum value allowed"},defaultValue:{control:"number",description:"Initial value of the input when uncontrolled",table:{category:"Common"}}}},e={args:{size:"medium",label:"Number input"}},t={args:{...e.args,minValue:0,maxValue:100}},o={args:{...e.args,defaultValue:10,formatOptions:{style:"currency",currency:"USD"}}},i={args:{...e.args,defaultValue:.5,formatOptions:{style:"percent"}}},n={args:{...e.args,defaultValue:10,formatOptions:{style:"unit",unit:"mile-per-hour"}}};var u,p,d;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: "medium",
    label: "Number input"
  }
}`,...(d=(p=e.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var c,f,g;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    minValue: 0,
    maxValue: 100
  }
}`,...(g=(f=t.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var y,b,h;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    defaultValue: 10,
    formatOptions: {
      style: "currency",
      currency: "USD"
    }
  }
}`,...(h=(b=o.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var v,V,I;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    defaultValue: 0.5,
    formatOptions: {
      style: "percent"
    }
  }
}`,...(I=(V=i.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var N,F,x;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    defaultValue: 10,
    formatOptions: {
      style: "unit",
      unit: "mile-per-hour"
    }
  }
}`,...(x=(F=n.parameters)==null?void 0:F.docs)==null?void 0:x.source}}};const lr=["Primary","WithBounds","FormatAsCurrency","FormatAsPercent","FormatAsUnit"];export{o as FormatAsCurrency,i as FormatAsPercent,n as FormatAsUnit,e as Primary,t as WithBounds,lr as __namedExportsOrder,sr as default};
