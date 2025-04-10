import{V as A,T as O}from"./helpers-B5Ajgn2E.js";import{g as z}from"./cssprops-BO85xpNm.js";import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{R as P}from"./index-BCtMShv3.js";import{c as U}from"./index-EJ0-2BeM.js";import{u as D}from"./variants-C1aGAeX6.js";import{F as k}from"./FloatingFieldInputWrapper-DFdArAwE.js";import{a as B}from"./Inputs.styles-BFXtEWBx.js";import{C as E}from"./ComboInput.component-DCulYmJh.js";import{I as T}from"./Input.component-D1kzSUZq.js";import{G as W}from"./Group.component-CCh4AWKN.js";import{N as l}from"./NumberField.component-DQr3LT16.js";import"./styled-components.browser.esm-Y4FpNNpy.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./Collection-DqSZYP0m.js";import"./CollectionBuilder-D7AJqdfd.js";import"./index-BqCLlfdy.js";import"./index-D-fs5e6L.js";import"./useFocusable-DacP9xvE.js";import"./useObjectRef-D2RG7rRi.js";import"./SSRProvider-DyiXDq2k.js";import"./Label.component-SkkW6TeV.js";import"./mixins-XviowZ_6.js";import"./index-CsiUWFDz.js";import"./Label.context-BbpE5KUK.js";import"./useRenderProps-CP918x9p.js";import"./Message.component-CGdHk5Gg.js";import"./Message.context-D8t47jMD.js";import"./ErrorMessage.component-CCJCuFB5.js";import"./ErrorMessage.context-PYwFF-7o.js";import"./ComboInput.styles-GNwh4bFc.js";import"./TextField.component-BJAutoIh.js";import"./useTextField-CQoa95kJ.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormReset-BY6BQbOl.js";import"./useControlledState-vzCMHZvt.js";import"./useField-BY78xfaL.js";import"./useLabel-DDcndmXW.js";import"./useLabels-B8dXFA8d.js";import"./useFormValidation-BfT1egZx.js";import"./useFormValidationState-CONlS5Wo.js";import"./Field.styles-D_hvWyI3.js";import"./Provider-op_UCnZE.js";import"./ComboInput.context-BgrINUmq.js";import"./Input.context-CDXu9Ele.js";import"./TextArea.context-C6JAP7JO.js";import"./layout-C5ppTKTq.js";import"./utils-DqmNl-Il.js";import"./useFocusWithin-BshFo8_g.js";import"./usePress-B9aiz4Kw.js";import"./useEvent-CeKNPFU-.js";import"./useLocalizedStringFormatter-BmC8c4z2.js";import"./context-z6pb9OkM.js";import"./useNumberFormatter-BHOsbS6G.js";import"./NumberFormatter-DNR9MAW-.js";import"./useSpinButton-LE97PPA9.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./ProgressCircle.component-OpnlU6y-.js";import"./colors-x_YFGAop.js";import"./IconButton.component-BLxKwVs3.js";import"./Button.component-B1VuTqO-.js";import"./useFocusRing-CLjBjOxD.js";import"./useButton-nVeIkIqk.js";import"./useLink-FIfyncSu.js";import"./SpinnerLoader.component-m7qmEdMF.js";import"./Loader.component-CAkSYpHw.js";import"./index-CgV6Zd7Q.js";import"./Checkmark.component-ByE1AGU6.js";import"./Spinner.component-Bslo7_jG.js";import"./MaterialIcon.component-DVFNi2Fq.js";import"./Icons.styles-D-JqKhr6.js";const m=P.forwardRef((a,M)=>{const{label:q,size:S="medium",error:_,message:w,className:C,variant:s="default",...R}=a,j=D("aje-input",s);return r.jsx(B,{size:S,className:U(j,C),"data-float":a.value!==void 0&&a.value!==null&&s==="floating"||void 0,...R,children:r.jsx(k,{floating:s==="floating",label:q,message:w,error:_,children:r.jsxs(E,{padding:"both",children:[r.jsx(T,{}),r.jsxs(W,{$direction:"column",isMerged:!0,children:[r.jsx(l.IncrementButton,{icon:"arrow_drop_up",variant:"content",size:"small"}),r.jsx(l.DecrementButton,{icon:"arrow_drop_down",variant:"content",size:"small"})]})]})})})});try{m.displayName="NumberInput",m.__docgenInfo={description:"Input for number values. Fowards a `ref` to the internal input element",displayName:"NumberInput",props:{id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",required:!1,type:{name:"Argument | Argument[]"}},size:{defaultValue:null,description:"Size of the component",name:"size",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"medium"'},{value:'"small"'},{value:'"large"'},{value:'"full"'}]}},label:{defaultValue:null,description:`A visible label for the field. Labels are always Sentence case.
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
