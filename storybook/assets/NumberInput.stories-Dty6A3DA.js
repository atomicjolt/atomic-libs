import{T as A,V as O}from"./helpers-CB0EgwPk.js";import{g as z}from"./cssprops-BO85xpNm.js";import{j as r}from"./jsx-runtime-CkxqCPlQ.js";import{R as P}from"./index-DJO9vBfz.js";import{c as U}from"./index-i5X67GZP.js";import{u as D}from"./variants-Dln-jX-v.js";import{F as k}from"./FloatingFieldInputWrapper-BnU18c0l.js";import{a as B}from"./Inputs.styles-X1GDHMEw.js";import{C as E}from"./ComboInput.component-2ZX8DCSM.js";import{I as T}from"./Input.component-aD7FwtmD.js";import{G as W}from"./Group.component-DEZBPtlu.js";import{N as l}from"./NumberField.component-BNJO-Ai-.js";import"./styled-components.browser.esm-BQf_XqKi.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./Collection-CnHW8amz.js";import"./CollectionBuilder-Xbel4YvD.js";import"./index-DJdX7xnk.js";import"./SSRProvider-DAMUgb6s.js";import"./useLayoutEffect-Bj1hLagI.js";import"./Label.component-DWUg6KQj.js";import"./mixins-B7X2BZyR.js";import"./index-CHPAqjqs.js";import"./useObjectRef-CA0MXmrf.js";import"./Label.context-BY30H9b8.js";import"./useRenderProps-Bk8BH60l.js";import"./Message.component-DuLpH4ma.js";import"./Message.context-BF8cnA0i.js";import"./ErrorMessage.component-NUTqPfNd.js";import"./ErrorMessage.context-Cr_J9O6j.js";import"./ComboInput.styles-x3aI4rV_.js";import"./TextField.component-CdIc8mBt.js";import"./useTextField-Bu86_h4p.js";import"./focusSafely-BOUv7I-8.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormReset-D24hgWtm.js";import"./useControlledState-CN8sBTKq.js";import"./useField-DAe_M2wp.js";import"./useLabel-CTphHQ-t.js";import"./useLabels-6dTMP4oW.js";import"./useFocusable-DHL4UX94.js";import"./useFocus-DXSPV_um.js";import"./utils-CrQpPYo7.js";import"./useKeyboard-A8_doyNT.js";import"./useFormValidation-CdG9-Yzp.js";import"./useFormValidationState-DFldk10H.js";import"./Field.styles-wtg9rJuP.js";import"./Provider-B9Eqn13H.js";import"./ComboInput.context-yOfG-dCd.js";import"./Input.context-Cu61juEz.js";import"./TextArea.context-DyHQEaSC.js";import"./layout-UyCWIQlE.js";import"./utils-2VFVy79V.js";import"./useFocusWithin-Bb3mfDwa.js";import"./useEvent-D91OnqQ2.js";import"./useLocalizedStringFormatter-DBaQHtvd.js";import"./context-BQ3_Es2z.js";import"./useNumberFormatter-D5qg7lg6.js";import"./NumberFormatter-DNR9MAW-.js";import"./useSpinButton-CkfgV2Fh.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DBLAzBwe.js";import"./ProgressCircle.component-BbXhAaqf.js";import"./colors-x_YFGAop.js";import"./IconButton.component-CFNeuELj.js";import"./index-jGwUeqkW.js";import"./Icons.styles-BaNpbbIh.js";import"./Button.component-7ZEnE2xC.js";import"./useFocusRing-PETNqKnG.js";import"./useButton-Bk3lNUMb.js";import"./useLink-XD5ax7xG.js";import"./SpinnerLoader.component-BvhIBz4v.js";import"./Loader.component-BDvxQSI3.js";import"./index-5u02HfcA.js";import"./Checkmark.component-uYKMesek.js";import"./Spinner.component-CK7MNkmm.js";const m=P.forwardRef((t,M)=>{const{label:q,size:S="medium",error:_,message:w,className:C,variant:s="default",...R}=t,j=D("aje-input",s);return r.jsx(B,{size:S,className:U(j,C),"data-float":t.value!==void 0&&t.value!==null&&s==="floating"||void 0,...R,children:r.jsx(k,{floating:s==="floating",label:q,message:w,error:_,children:r.jsxs(E,{padding:"both",children:[r.jsx(T,{}),r.jsxs(W,{$direction:"column",isMerged:!0,children:[r.jsx(l.IncrementButton,{icon:"arrow_drop_up",variant:"content",size:"small"}),r.jsx(l.DecrementButton,{icon:"arrow_drop_down",variant:"content",size:"small"})]})]})})})});try{m.displayName="NumberInput",m.__docgenInfo={description:"Input for number values. Fowards a `ref` to the internal input element",displayName:"NumberInput",props:{id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",required:!1,type:{name:"Argument | Argument[]"}},size:{defaultValue:null,description:"Size of the component",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"auto"'},{value:'"full"'}]}},label:{defaultValue:null,description:`A visible label for the field. Labels are always Sentence case.
If you do not provide a label, you should provide an aria-label or aria-labelledby attribute.`,name:"label",required:!1,type:{name:"ReactNode"}},message:{defaultValue:null,description:"For additional information (ex. date format mm/dd/yy)",name:"message",required:!1,type:{name:"ReactNode"}},error:{defaultValue:null,description:"Error message for the field",name:"error",required:!1,type:{name:"ReactNode"}},isDisabled:{defaultValue:null,description:`Field cannot be interacted with, should be de-emphasized in the UI
@selector [data-disabled]`,name:"isDisabled",required:!1,type:{name:"boolean"}},isReadOnly:{defaultValue:null,description:`Field cannot be modified. Should be made to not look like a editable field
@selector [data-readonly]`,name:"isReadOnly",required:!1,type:{name:"boolean"}},isRequired:{defaultValue:null,description:`Field must be interacted with. Should be indicated in the UI
@selector [data-required]`,name:"isRequired",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Field has an error. Should be made to look like an error.\nControls whether the value of `error` is displayed\n@selector [data-invalid]",name:"isInvalid",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"Name of the Field",name:"name",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'SuggestStrings<"default" | "floating">'}}}}}catch{}const dr={title:"Inputs/User Input/NumberInput",component:m,parameters:{layout:"centered",cssprops:z("Input")},argTypes:{...A,...O,onChange:{action:"onChange",table:{category:"Events"}},formatOptions:{control:"object",description:"Options for formatting the number"},minValue:{control:"number",description:"Minimum value allowed"},maxValue:{control:"number",description:"Maximum value allowed"},defaultValue:{control:"number",description:"Initial value of the input when uncontrolled",table:{category:"Common"}}}},e={args:{size:"medium",label:"Number input"}},a={args:{...e.args,minValue:0,maxValue:100}},o={args:{...e.args,defaultValue:10,formatOptions:{style:"currency",currency:"USD"}}},i={args:{...e.args,defaultValue:.5,formatOptions:{style:"percent"}}},n={args:{...e.args,defaultValue:10,formatOptions:{style:"unit",unit:"mile-per-hour"}}};var u,p,d;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: "medium",
    label: "Number input"
  }
}`,...(d=(p=e.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var c,f,g;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    minValue: 0,
    maxValue: 100
  }
}`,...(g=(f=a.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var y,b,h;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(x=(F=n.parameters)==null?void 0:F.docs)==null?void 0:x.source}}};const cr=["Primary","WithBounds","FormatAsCurrency","FormatAsPercent","FormatAsUnit"];export{o as FormatAsCurrency,i as FormatAsPercent,n as FormatAsUnit,e as Primary,a as WithBounds,cr as __namedExportsOrder,dr as default};
