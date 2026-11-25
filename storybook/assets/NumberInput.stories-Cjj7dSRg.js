import{d as E,e as T}from"./helpers-tUmR_xN7.js";import{i as U}from"./iframe-CGPW5dgX.js";import{N}from"./NumberInput.component-adRNrRrE.js";import"./useFocusable-DT9_LXVA.js";import"./useObjectRef-CjsC0YUg.js";import"./SSRProvider-Dwr0Ku02.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BjoBGrPA.js";import"./FloatingFieldInputWrapper-Y4NWaWCQ.js";import"./Label.component-Bo8kkSzq.js";import"./mixins-BJuiWlrm.js";import"./index-C0dagnaq.js";import"./Label.context-D58S6_wU.js";import"./useRenderProps-B7rIWDyP.js";import"./filterDOMProps-CeZl_uWj.js";import"./Message.component-CIEamcUq.js";import"./Message.context-D_Dpg15a.js";import"./ErrorMessage.component-DUCD1jzH.js";import"./ErrorMessage.context-tIEpfdG1.js";import"./Inputs.styles-C-Gxmll0.js";import"./ComboInput.styles-CPtnBAXP.js";import"./SkeletonLoader.component-DalY9QZY.js";import"./context-CLSG1ylv.js";import"./TextField.component-DJemlHOu.js";import"./useTextField-CPDUiJax.js";import"./useFormReset-mO407CKi.js";import"./useField-DXQ2XZid.js";import"./useLabel-BytR9cji.js";import"./useLabels-Bveo7T3X.js";import"./useFormValidation-hpNb-DuC.js";import"./useFormValidationState-CWonILzS.js";import"./Field.styles-CxKAGZMW.js";import"./Provider-CKCHWQEo.js";import"./ComboInput.context-3NxJI3U3.js";import"./Input.context-DET8yoFh.js";import"./TextArea.context-C9KYZsFH.js";import"./NumberField.component-fcYsibWP.js";import"./displayName-CEXLPPBu.js";import"./useFocusWithin-BzfIRRcZ.js";import"./usePress-BioWcz2v.js";import"./useEvent-CiV_uWQE.js";import"./useLocalizedStringFormatter-CLx94-cg.js";import"./useNumberFormatter-CgBbBkmi.js";import"./NumberFormatter-DNR9MAW-.js";import"./useSpinButton-BU1srigh.js";import"./LiveAnnouncer-CAA6IyTk.js";import"./BaseButton-B8bVR-o6.js";import"./useFocusRing-Dbcio0BW.js";import"./useButton-CjI92Tj6.js";import"./useLink-PwQmwW74.js";import"./Loading.context-EUscm4UA.js";import"./SpinnerLoader.component-BfUo5Fvz.js";import"./Loader.component-oLyQpXum.js";import"./Flex.component-BDldr6hG.js";import"./layout-Dd7m2B0D.js";import"./utils-DqmNl-Il.js";import"./Checkmark.component-DL9zPInj.js";import"./Spinner.component-CLncQyFJ.js";import"./ProgressCircle.component-Cc0SXoU-.js";import"./colors-PU9nFmCW.js";import"./IconButton.component-CifirOzj.js";import"./MaterialIcon.component-Dhrh5rCP.js";import"./Icons.styles-tJBW4wd9.js";import"./ComboInput.component-CE8IM2YS.js";import"./Input.component-dygiXatG.js";import"./Group.component-DBQBcqJr.js";const{fn:W}=__STORYBOOK_MODULE_TEST__,Xr={title:"Inputs/User Input/NumberInput",component:N,parameters:{layout:"centered",cssprops:{input:U}},argTypes:{...T,...E,variant:{options:["default","floating"],description:"Variant of the input",table:{defaultValue:{summary:'"default"'}}},size:{table:{defaultValue:{summary:'"medium"'}}},formatOptions:{control:"object",description:"Options for formatting the number"},minValue:{control:"number",description:"Minimum value allowed"},maxValue:{control:"number",description:"Maximum value allowed"},defaultValue:{control:"number",description:"Initial value of the input when uncontrolled"},step:{control:"number",description:"Amount the value changes by when using the increment and decrement buttons or arrow keys"},onChange:{description:"Called with the new number when the value changes",table:{category:"Events"}}}},r={args:{onChange:W(),label:"Number input"}},t={args:{...r.args,minValue:0,maxValue:100}},e={args:{...r.args,defaultValue:10,formatOptions:{style:"currency",currency:"USD"}}},o={args:{...r.args,defaultValue:.5,formatOptions:{style:"percent"}}},a={args:{...r.args,defaultValue:10,formatOptions:{style:"unit",unit:"mile-per-hour"}}},n={args:{...r.args,variant:"floating"}},i={args:{...r.args,isInvalid:!0,error:"Please enter a valid number"}},s={args:{...r.args,isLoading:!0,loadingLabel:"Loading"}},Zr=["Primary","WithBounds","FormatAsCurrency","FormatAsPercent","FormatAsUnit","Floating","WithError","Loading"];var m,p,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    onChange: fn(),
    label: "Number input"
  }
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var c,l,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    minValue: 0,
    maxValue: 100
  }
}`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var g,f,y;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    defaultValue: 10,
    formatOptions: {
      style: "currency",
      currency: "USD"
    }
  }
}`,...(y=(f=e.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var b,h,V;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    defaultValue: 0.5,
    formatOptions: {
      style: "percent"
    }
  }
}`,...(V=(h=o.parameters)==null?void 0:h.docs)==null?void 0:V.source}}};var v,O,P;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    defaultValue: 10,
    formatOptions: {
      style: "unit",
      unit: "mile-per-hour"
    }
  }
}`,...(P=(O=a.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var S,L,w;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: "floating"
  }
}`,...(w=(L=n.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};var A,F,I;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isInvalid: true,
    error: "Please enter a valid number"
  }
}`,...(I=(F=i.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var _,x,C;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isLoading: true,
    loadingLabel: "Loading"
  }
}`,...(C=(x=s.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};export{n as Floating,e as FormatAsCurrency,o as FormatAsPercent,a as FormatAsUnit,s as Loading,r as Primary,t as WithBounds,i as WithError,Zr as __namedExportsOrder,Xr as default};
