import{T as A,V as O}from"./helpers-D-Gur9Js.js";import{g as z}from"./cssprops-BO85xpNm.js";import{j as r}from"./jsx-runtime-CkxqCPlQ.js";import{R as P}from"./index-DJO9vBfz.js";import{c as U}from"./index-i5X67GZP.js";import{u as D}from"./variants-Dln-jX-v.js";import"./index-C0DXmw5d.js";import{F as k}from"./FloatingFieldInputWrapper-ClPwAkE1.js";import{a as B}from"./Inputs.styles-CyClw_H7.js";import{C as E}from"./ComboInput.component-D4sIyXOw.js";import{I as T}from"./Input.component-Bg4qoZRQ.js";import{G as W}from"./Group.component-CIkbtIFW.js";import{N as l}from"./NumberField.component-CldRs-JV.js";import"./styled-components.browser.esm-BQf_XqKi.js";import"./index-DLW06VQL.js";import"./index-BDzxygkP.js";import"./index-CyCRagT9.js";import"./Collection-CnHW8amz.js";import"./CollectionBuilder-Xbel4YvD.js";import"./index-DJdX7xnk.js";import"./SSRProvider-DAMUgb6s.js";import"./useLayoutEffect-Bj1hLagI.js";import"./index-SU87TpAq.js";import"./scale-CqCDTNu0.js";import"./Label.component-CeN98k3i.js";import"./mixins-B7X2BZyR.js";import"./index-De95zDiF.js";import"./useObjectRef-BKue9pYL.js";import"./Label.context-ChhuUauO.js";import"./useRenderProps-Bk8BH60l.js";import"./Message.component-nkasZM07.js";import"./Message.context-BObz3Mtj.js";import"./ErrorMessage.component-CfKzjo8L.js";import"./ErrorMessage.context-D3SbpLIU.js";import"./ComboInput.styles-x3aI4rV_.js";import"./TextField.component-Brod2y3c.js";import"./useTextField-DSYflh9X.js";import"./focusSafely-BOUv7I-8.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormReset-C11SSN19.js";import"./useControlledState-CN8sBTKq.js";import"./useField-mSuDlNxJ.js";import"./useLabel-CSTUXoQW.js";import"./useLabels-B24R2YQq.js";import"./useFocusable-o0N_IkwX.js";import"./useFocus-DJe2BRHe.js";import"./utils-Df1WEgxG.js";import"./useKeyboard-A8_doyNT.js";import"./useFormValidation-D05SS9o7.js";import"./useFormValidationState-DFldk10H.js";import"./Field.styles-wtg9rJuP.js";import"./Provider-B9Eqn13H.js";import"./ComboInput.context-Dk1bHly0.js";import"./Input.context-KI5tKbdp.js";import"./TextArea.context-BmdJtbM9.js";import"./layout-B6NAx4l9.js";import"./utils-2VFVy79V.js";import"./useFocusWithin-DSbUfD8x.js";import"./useEvent-CXpXU_b4.js";import"./useLocalizedStringFormatter-DBaQHtvd.js";import"./context-BQ3_Es2z.js";import"./useNumberFormatter-D5qg7lg6.js";import"./NumberFormatter-DNR9MAW-.js";import"./useSpinButton-D0G3eTCL.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Cu0aM-K5.js";import"./ProgressCircle.component-DZo3rxOV.js";import"./colors-x_YFGAop.js";import"./IconButton.component-Cg2HWRAW.js";import"./Button.component-Bfqq8odl.js";import"./useFocusRing-CPkBIT8D.js";import"./useButton-AoKYWM9F.js";import"./useLink-ByNL9j8X.js";import"./SpinnerLoader.component-qW2PqPLJ.js";import"./Loader.component-l5wuRCiG.js";import"./Flex.component-DqBL6Xjb.js";import"./Checkmark.component-uYKMesek.js";import"./Spinner.component-D3qB71XV.js";import"./MaterialIcon.component-Bqs5W7S4.js";import"./Icons.styles-BaNpbbIh.js";const m=P.forwardRef((t,M)=>{const{label:q,size:S="medium",error:_,message:w,className:C,variant:s="default",...R}=t,j=D("aje-input",s);return r.jsx(B,{size:S,className:U(j,C),"data-float":t.value!==void 0&&t.value!==null&&s==="floating"||void 0,...R,children:r.jsx(k,{floating:s==="floating",label:q,message:w,error:_,children:r.jsxs(E,{padding:"both",children:[r.jsx(T,{}),r.jsxs(W,{$direction:"column",isMerged:!0,children:[r.jsx(l.IncrementButton,{icon:"arrow_drop_up",variant:"content",size:"small"}),r.jsx(l.DecrementButton,{icon:"arrow_drop_down",variant:"content",size:"small"})]})]})})})});try{m.displayName="NumberInput",m.__docgenInfo={description:"Input for number values. Fowards a `ref` to the internal input element",displayName:"NumberInput",props:{id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",required:!1,type:{name:"Argument | Argument[]"}},size:{defaultValue:null,description:"Size of the component",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"auto"'},{value:'"full"'}]}},label:{defaultValue:null,description:`A visible label for the field. Labels are always Sentence case.
If you do not provide a label, you should provide an aria-label or aria-labelledby attribute.`,name:"label",required:!1,type:{name:"ReactNode"}},message:{defaultValue:null,description:"For additional information (ex. date format mm/dd/yy)",name:"message",required:!1,type:{name:"ReactNode"}},error:{defaultValue:null,description:"Error message for the field",name:"error",required:!1,type:{name:"ReactNode"}},isDisabled:{defaultValue:null,description:`Field cannot be interacted with, should be de-emphasized in the UI
@selector [data-disabled]`,name:"isDisabled",required:!1,type:{name:"boolean"}},isReadOnly:{defaultValue:null,description:`Field cannot be modified. Should be made to not look like a editable field
@selector [data-readonly]`,name:"isReadOnly",required:!1,type:{name:"boolean"}},isRequired:{defaultValue:null,description:`Field must be interacted with. Should be indicated in the UI
@selector [data-required]`,name:"isRequired",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Field has an error. Should be made to look like an error.\nControls whether the value of `error` is displayed\n@selector [data-invalid]",name:"isInvalid",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"Name of the Field",name:"name",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'SuggestStrings<"default" | "floating">'}}}}}catch{}const yr={title:"Inputs/User Input/NumberInput",component:m,parameters:{layout:"centered",cssprops:z("Input")},argTypes:{...A,...O,onChange:{action:"onChange",table:{category:"Events"}},formatOptions:{control:"object",description:"Options for formatting the number"},minValue:{control:"number",description:"Minimum value allowed"},maxValue:{control:"number",description:"Maximum value allowed"},defaultValue:{control:"number",description:"Initial value of the input when uncontrolled",table:{category:"Common"}}}},e={args:{size:"medium",label:"Number input"}},a={args:{...e.args,minValue:0,maxValue:100}},o={args:{...e.args,defaultValue:10,formatOptions:{style:"currency",currency:"USD"}}},i={args:{...e.args,defaultValue:.5,formatOptions:{style:"percent"}}},n={args:{...e.args,defaultValue:10,formatOptions:{style:"unit",unit:"mile-per-hour"}}};var p,u,d;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: "medium",
    label: "Number input"
  }
}`,...(d=(u=e.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var c,f,g;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(x=(F=n.parameters)==null?void 0:F.docs)==null?void 0:x.source}}};const br=["Primary","WithBounds","FormatAsCurrency","FormatAsPercent","FormatAsUnit"];export{o as FormatAsCurrency,i as FormatAsPercent,n as FormatAsUnit,e as Primary,a as WithBounds,br as __namedExportsOrder,yr as default};
