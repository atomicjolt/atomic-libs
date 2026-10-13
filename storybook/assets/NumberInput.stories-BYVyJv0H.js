import{T as x}from"./helpers-DpMr3oGb.js";import{g as C}from"./cssprops-DECR0Nbg.js";import{fn as I}from"./index-BgLytPr-.js";import{N as A}from"./NumberInput.component-B1RDOeuE.js";import"./jsx-runtime-D_zvdyIk.js";import"./styled-components.browser.esm-DC3GK9Rn.js";import"./index-BCtMShv3.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./Collection-DwMxgycI.js";import"./CollectionBuilder-L_wKxqRd.js";import"./index-q6RvvsFA.js";import"./index-D-fs5e6L.js";import"./useFocusable-B7HbK8LX.js";import"./useObjectRef-B4hnndUj.js";import"./SSRProvider-DyiXDq2k.js";import"./index-EJ0-2BeM.js";import"./FloatingFieldInputWrapper-BnMlLlUS.js";import"./Label.component-DuxPov30.js";import"./mixins-CcgEHb9c.js";import"./index-BIzvBz7y.js";import"./Label.context-CXmZcjY3.js";import"./useRenderProps-CP918x9p.js";import"./filterDOMProps-CeZl_uWj.js";import"./Message.component-C9hzP7Az.js";import"./Message.context-BSLt3c3C.js";import"./ErrorMessage.component-2tMSRF0K.js";import"./ErrorMessage.context-C6OyzACS.js";import"./Inputs.styles-nDLoxjUU.js";import"./ComboInput.styles-kOaziVwv.js";import"./SkeletonLoader.component-q75MwwfP.js";import"./context-z6pb9OkM.js";import"./TextField.component-BYvG7f2y.js";import"./useTextField-D4_p2q36.js";import"./useFormReset-GcAVnfXr.js";import"./useControlledState-vzCMHZvt.js";import"./useField-D8gfBVj0.js";import"./useLabel-Bew-gTxt.js";import"./useLabels-BQTM_NWA.js";import"./useFormValidation-CnIG3AAh.js";import"./useFormValidationState-CONlS5Wo.js";import"./Field.styles-DjdYEYvF.js";import"./Provider-op_UCnZE.js";import"./ComboInput.context-D__g77G8.js";import"./Input.context-WAk7TvcM.js";import"./TextArea.context-5ld-J3NK.js";import"./NumberField.component-CrCEMCoL.js";import"./useFocusWithin-dfJl9rAf.js";import"./usePress-BJ4Xpz5E.js";import"./useEvent-CI_xZcmG.js";import"./useLocalizedStringFormatter-BmC8c4z2.js";import"./useNumberFormatter-BHOsbS6G.js";import"./NumberFormatter-DNR9MAW-.js";import"./useSpinButton-B52iW2OY.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button.context-DHqbpAmX.js";import"./index-DnOMPDxK.js";import"./index-D0UYfcsL.js";import"./Icons.styles-qcj_pyb3.js";import"./BaseButton-DBbmnCO8.js";import"./useFocusRing-zxvArQTZ.js";import"./useButton-B6TSBwA2.js";import"./useLink-C7Cuty20.js";import"./Loading.context-C7II2W1n.js";import"./SpinnerLoader.component-D4g-QhUe.js";import"./Loader.component-C9qA52Gf.js";import"./Flex.component-CMKfz10l.js";import"./layout-Dd7m2B0D.js";import"./utils-DqmNl-Il.js";import"./Checkmark.component-DPw8o_SY.js";import"./Spinner.component-4On_l0hw.js";import"./ProgressCircle.component-D1QqNNgO.js";import"./number-nHrFdSb-.js";import"./colors-x_YFGAop.js";import"./ComboInput.component-DKd_jgPF.js";import"./Input.component-zI-G4JAx.js";import"./Group.component-DjERy5u8.js";const Yr={title:"Inputs/User Input/NumberInput",component:A,parameters:{layout:"centered",cssprops:C("Input")},argTypes:{...x,variant:{options:["default","floating"],description:"Variant of the input"},formatOptions:{control:"object",description:"Options for formatting the number"},minValue:{control:"number",description:"Minimum value allowed"},maxValue:{control:"number",description:"Maximum value allowed"},defaultValue:{control:"number",description:"Initial value of the input when uncontrolled",table:{category:"Common"}}}},r={args:{onChange:I(),size:"medium",label:"Number input"}},t={args:{...r.args,minValue:0,maxValue:100}},o={args:{...r.args,defaultValue:10,formatOptions:{style:"currency",currency:"USD"}}},e={args:{...r.args,defaultValue:.5,formatOptions:{style:"percent"}}},a={args:{...r.args,defaultValue:10,formatOptions:{style:"unit",unit:"mile-per-hour"}}},i={args:{...r.args,isLoading:!0,loadingLabel:"Loading"}};var m,n,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    onChange: fn(),
    size: "medium",
    label: "Number input"
  }
}`,...(p=(n=r.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var s,u,c;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    minValue: 0,
    maxValue: 100
  }
}`,...(c=(u=t.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var l,d,g;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    defaultValue: 10,
    formatOptions: {
      style: "currency",
      currency: "USD"
    }
  }
}`,...(g=(d=o.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var f,y,b;e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    defaultValue: 0.5,
    formatOptions: {
      style: "percent"
    }
  }
}`,...(b=(y=e.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var V,h,P;a.parameters={...a.parameters,docs:{...(V=a.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    defaultValue: 10,
    formatOptions: {
      style: "unit",
      unit: "mile-per-hour"
    }
  }
}`,...(P=(h=a.parameters)==null?void 0:h.docs)==null?void 0:P.source}}};var O,L,S;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isLoading: true,
    loadingLabel: "Loading"
  }
}`,...(S=(L=i.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};const Zr=["Primary","WithBounds","FormatAsCurrency","FormatAsPercent","FormatAsUnit","Loading"];export{o as FormatAsCurrency,e as FormatAsPercent,a as FormatAsUnit,i as Loading,r as Primary,t as WithBounds,Zr as __namedExportsOrder,Yr as default};
