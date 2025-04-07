import{V as A,T as O}from"./helpers-CeNUlk3Q.js";import{g as z}from"./cssprops-BO85xpNm.js";import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{R as P}from"./index-DmM0KDA7.js";import{c as U}from"./index-CrEZfznw.js";import{u as D}from"./variants-D58EA0oR.js";import{G as k}from"./index-BZb4Y1Ii.js";import{F as B}from"./FloatingFieldInputWrapper-sNfhsp6k.js";import{a as E}from"./Inputs.styles-D8qW3yD8.js";import{C as T}from"./ComboInput.component-CjIXbHRN.js";import{I as W}from"./Input.component-DnOcyOJ6.js";import{N as l}from"./NumberField.component-CQmh59iR.js";import"./styled-components.browser.esm-B0S50oBn.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./Collection-CfmUX7eJ.js";import"./CollectionBuilder-BOiBnYCj.js";import"./index-CnHy7ftH.js";import"./index-nLeaPAJ8.js";import"./useFocusable-B7cTVP20.js";import"./useObjectRef-BO7mrmvR.js";import"./SSRProvider-nIDwi1ZO.js";import"./layout-C5ppTKTq.js";import"./utils-DqmNl-Il.js";import"./useRenderProps-BzxgHqRb.js";import"./Label.component-BzbmvXGx.js";import"./mixins-CgZ-Dp8B.js";import"./index-CqJC2f1M.js";import"./Label.context-8YwVGsEO.js";import"./Message.component-CVXqUIYh.js";import"./Message.context-4_rHhebz.js";import"./ErrorMessage.component-VwqqJyxZ.js";import"./ErrorMessage.context-D-RNFvKn.js";import"./ComboInput.styles-BLZOd1-l.js";import"./TextField.component-DoXo7uet.js";import"./useTextField-B3HDaRNl.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormReset-DvzwwQm6.js";import"./useControlledState-sJfMLWrs.js";import"./useField-BhG43OVF.js";import"./useLabel-B1sX0IQZ.js";import"./useLabels-D0NjiLiF.js";import"./useFormValidation-CsrNRCZi.js";import"./useFormValidationState-CKAS44yz.js";import"./Field.styles-B11u_h4j.js";import"./Provider-op_UCnZE.js";import"./ComboInput.context-Di7U2yCG.js";import"./Input.context-BTEI3GdY.js";import"./TextArea.context-D8jqO_QU.js";import"./useFocusWithin-CrVHK3Cv.js";import"./usePress-Cxy0og0d.js";import"./useEvent-Qm4q9YOK.js";import"./useLocalizedStringFormatter-BJB32GAh.js";import"./context-BF7eBGFA.js";import"./useNumberFormatter-CH8tnwcW.js";import"./NumberFormatter-DNR9MAW-.js";import"./useSpinButton-DS2l_r0R.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./ProgressCircle.component-C7gS1D9i.js";import"./colors-x_YFGAop.js";import"./IconButton.component-Os06Lgcr.js";import"./Button.component-DnMutOi6.js";import"./useFocusRing-4PdL76fJ.js";import"./useButton-DlM8S39G.js";import"./useLink-CqmZ9M1P.js";import"./SpinnerLoader.component-ofOICTG5.js";import"./Loader.component-DWq-vdAK.js";import"./index-B1DW8wg7.js";import"./Checkmark.component-CdBGiybJ.js";import"./Spinner.component-CjtUOFd5.js";import"./MaterialIcon.component-CIaYzniN.js";import"./Icons.styles-D2L4nNgu.js";const m=P.forwardRef((a,M)=>{const{label:q,size:S="medium",error:_,message:w,className:C,variant:s="default",...R}=a,j=D("aje-input",s);return r.jsx(E,{size:S,className:U(j,C),"data-float":a.value!==void 0&&a.value!==null&&s==="floating"||void 0,...R,children:r.jsx(B,{floating:s==="floating",label:q,message:w,error:_,children:r.jsxs(T,{padding:"both",children:[r.jsx(W,{}),r.jsxs(k,{$direction:"column",isMerged:!0,children:[r.jsx(l.IncrementButton,{icon:"arrow_drop_up",variant:"content",size:"small"}),r.jsx(l.DecrementButton,{icon:"arrow_drop_down",variant:"content",size:"small"})]})]})})})});try{m.displayName="NumberInput",m.__docgenInfo={description:"Input for number values. Fowards a `ref` to the internal input element",displayName:"NumberInput",props:{id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",required:!1,type:{name:"Argument | Argument[]"}},size:{defaultValue:null,description:"Size of the component",name:"size",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"full"'}]}},label:{defaultValue:null,description:`A visible label for the field. Labels are always Sentence case.
If you do not provide a label, you should provide an aria-label or aria-labelledby attribute.`,name:"label",required:!1,type:{name:"ReactNode"}},message:{defaultValue:null,description:"For additional information (ex. date format mm/dd/yy)",name:"message",required:!1,type:{name:"ReactNode"}},error:{defaultValue:null,description:"Error message for the field",name:"error",required:!1,type:{name:"ReactNode"}},isDisabled:{defaultValue:null,description:`Field cannot be interacted with, should be de-emphasized in the UI
@selector [data-disabled]`,name:"isDisabled",required:!1,type:{name:"boolean"}},isReadOnly:{defaultValue:null,description:`Field cannot be modified. Should be made to not look like a editable field
@selector [data-readonly]`,name:"isReadOnly",required:!1,type:{name:"boolean"}},isRequired:{defaultValue:null,description:`Field must be interacted with. Should be indicated in the UI
@selector [data-required]`,name:"isRequired",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Field has an error. Should be made to look like an error.\nControls whether the value of `error` is displayed\n@selector [data-invalid]",name:"isInvalid",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"Name of the Field",name:"name",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'SuggestStrings<"default" | "floating">'}}}}}catch{}const mr={title:"Inputs/User Input/NumberInput",component:m,parameters:{layout:"centered",cssprops:z("Input")},argTypes:{...O,...A,onChange:{action:"onChange",table:{category:"Events"}},formatOptions:{control:"object",description:"Options for formatting the number"},minValue:{control:"number",description:"Minimum value allowed"},maxValue:{control:"number",description:"Maximum value allowed"},defaultValue:{control:"number",description:"Initial value of the input when uncontrolled",table:{category:"Common"}}}},e={args:{size:"medium",label:"Number input"}},t={args:{...e.args,minValue:0,maxValue:100}},o={args:{...e.args,defaultValue:10,formatOptions:{style:"currency",currency:"USD"}}},i={args:{...e.args,defaultValue:.5,formatOptions:{style:"percent"}}},n={args:{...e.args,defaultValue:10,formatOptions:{style:"unit",unit:"mile-per-hour"}}};var u,p,d;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(x=(F=n.parameters)==null?void 0:F.docs)==null?void 0:x.source}}};const lr=["Primary","WithBounds","FormatAsCurrency","FormatAsPercent","FormatAsUnit"];export{o as FormatAsCurrency,i as FormatAsPercent,n as FormatAsUnit,e as Primary,t as WithBounds,lr as __namedExportsOrder,mr as default};
