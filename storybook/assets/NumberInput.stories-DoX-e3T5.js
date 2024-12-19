import{T as A,V as O}from"./helpers-vNBwIeRc.js";import{g as z}from"./cssprops-CrN9keDZ.js";import{j as r}from"./jsx-runtime-CkxqCPlQ.js";import{R as P}from"./index-DJO9vBfz.js";import{c as U}from"./index-i5X67GZP.js";import{u as D}from"./variants-Dln-jX-v.js";import{G as k}from"./index-fj-GeAki.js";import{F as B}from"./FloatingFieldInputWrapper-BXp7WKGQ.js";import{a as E}from"./Inputs.styles-DlKaJ57v.js";import{C as T}from"./ComboInput.component-1XYuvlap.js";import{I as W}from"./Input.component-D9e4fV7X.js";import{N as l}from"./NumberField.component-tuRmaVk4.js";import"./styled-components.browser.esm-WCay-hu9.js";import"./CollectionBuilder-DRj8-oKX.js";import"./index-DJdX7xnk.js";import"./SSRProvider-DAMUgb6s.js";import"./useLayoutEffect-Bj1hLagI.js";import"./Section-BBepoPM4.js";import"./Label.component-O0nDRyru.js";import"./mixins-TlkgTuSN.js";import"./index-B_KxbAnX.js";import"./useObjectRef-B0fXxeND.js";import"./Label.context-BAKeKK5_.js";import"./useRenderProps-BqJZ5b79.js";import"./Message.component-Ccl3wjCe.js";import"./Message.context-CRQ8oljB.js";import"./ErrorMessage.component-CV4lQ-GN.js";import"./ErrorMessage.context-aoPfhCA3.js";import"./FieldWrapper-CecreuUM.js";import"./ComboInput.styles-BWDkoKPy.js";import"./TextField.component-DWH1wPrl.js";import"./useTextField-Cjd9wVl0.js";import"./focusSafely-DAnwb70X.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormReset-CiimGfOH.js";import"./useControlledState-CN8sBTKq.js";import"./useField-DF4uEtB8.js";import"./useLabel-Dumhvd6m.js";import"./useLabels-DVGDEngn.js";import"./useFocusable-CsZREXhx.js";import"./useFocus-CqC7M1wJ.js";import"./utils-BwOaQS7j.js";import"./useKeyboard-A8_doyNT.js";import"./useFormValidation-D6UvTinM.js";import"./useFormValidationState-Cu8bp2uX.js";import"./Field.styles-DrMU21uN.js";import"./Provider-B9Eqn13H.js";import"./ComboInput.context-D8kfzKmb.js";import"./Input.context-DH9IDn3r.js";import"./useFocusWithin-Dppy9HPm.js";import"./useEvent-DE_dT4RF.js";import"./useLocalizedStringFormatter-CIL7QaWo.js";import"./context-CKyfYUWk.js";import"./useNumberFormatter-DWLeCNi8.js";import"./NumberFormatter-DNR9MAW-.js";import"./useSpinButton-EKwDCFlL.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DLdGKM_D.js";import"./number-nHrFdSb-.js";import"./IconButton.component-Bk3DfWc9.js";import"./Button.component-CvwjrRb6.js";import"./useFocusRing-DokLxauV.js";import"./useButton-CctGfIuY.js";import"./useLink-BfspLt2l.js";import"./SpinnerLoader.component-Bg5XyiJ8.js";import"./Loader.component-D2-tScza.js";import"./index-CiylWqPi.js";import"./utils-CWBnbg5w.js";import"./Checkmark.component-CAhyXLZS.js";import"./Spinner.component-DpjfBBgU.js";import"./MaterialIcon.component-DppQdNZ1.js";import"./Icons.styles-Doaby5xe.js";const m=P.forwardRef((a,M)=>{const{label:q,size:S="medium",error:_,message:w,className:C,variant:s="default",...R}=a,j=D("aje-input",s);return r.jsx(E,{size:S,className:U(j,C),"data-float":a.value!==void 0&&a.value!==null&&s==="floating"||void 0,...R,children:r.jsx(B,{floating:s==="floating",label:q,message:w,error:_,children:r.jsxs(T,{children:[r.jsx(W,{}),r.jsxs(k,{direction:"column",isMerged:!0,children:[r.jsx(l.IncrementButton,{icon:"arrow_drop_up",variant:"content",size:"small"}),r.jsx(l.DecrementButton,{icon:"arrow_drop_down",variant:"content",size:"small"})]})]})})})});try{m.displayName="NumberInput",m.__docgenInfo={description:"Input for number values. Fowards a `ref` to the internal input element",displayName:"NumberInput",props:{id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",required:!1,type:{name:"Argument | Argument[]"}},size:{defaultValue:null,description:"Size of the component",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"auto"'},{value:'"full"'}]}},label:{defaultValue:null,description:`A visible label for the field. Labels are always Sentence case.
If you do not provide a label, you should provide an aria-label or aria-labelledby attribute.`,name:"label",required:!1,type:{name:"ReactNode"}},message:{defaultValue:null,description:"For additional information (ex. date format mm/dd/yy)",name:"message",required:!1,type:{name:"ReactNode"}},error:{defaultValue:null,description:"Error message for the field",name:"error",required:!1,type:{name:"ReactNode"}},isDisabled:{defaultValue:null,description:`Field cannot be interacted with, should be de-emphasized in the UI
@selector [data-disabled]`,name:"isDisabled",required:!1,type:{name:"boolean"}},isReadOnly:{defaultValue:null,description:`Field cannot be modified. Should be made to not look like a editable field
@selector [data-readonly]`,name:"isReadOnly",required:!1,type:{name:"boolean"}},isRequired:{defaultValue:null,description:`Field must be interacted with. Should be indicated in the UI
@selector [data-required]`,name:"isRequired",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Field has an error. Should be made to look like an error.\nControls whether the value of `error` is displayed\n@selector [data-invalid]",name:"isInvalid",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"Name of the Field",name:"name",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'SuggestStrings<"default" | "floating">'}}}}}catch{}const mr={title:"Inputs/User Input/NumberInput",component:m,parameters:{layout:"centered",cssprops:z("Input")},argTypes:{...A,...O,onChange:{action:"onChange",table:{category:"Events"}},formatOptions:{control:"object",description:"Options for formatting the number"},minValue:{control:"number",description:"Minimum value allowed"},maxValue:{control:"number",description:"Maximum value allowed"},defaultValue:{control:"number",description:"Initial value of the input when uncontrolled",table:{category:"Common"}}}},e={args:{size:"medium",label:"Number input"}},t={args:{...e.args,minValue:0,maxValue:100}},o={args:{...e.args,defaultValue:10,formatOptions:{style:"currency",currency:"USD"}}},i={args:{...e.args,defaultValue:.5,formatOptions:{style:"percent"}}},n={args:{...e.args,defaultValue:10,formatOptions:{style:"unit",unit:"mile-per-hour"}}};var u,p,d;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
