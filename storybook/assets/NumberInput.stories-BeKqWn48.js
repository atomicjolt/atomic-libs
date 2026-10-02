import{N as x}from"./index-Ct4bGe2k.js";import{T as C}from"./helpers-KKeMmUAi.js";import{g as I}from"./cssprops-DECR0Nbg.js";import{fn as A}from"./index-BgLytPr-.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-BCtMShv3.js";import"./index-EJ0-2BeM.js";import"./index-C5FB09Y9.js";import"./styled-components.browser.esm-DC3GK9Rn.js";import"./layout-Dd7m2B0D.js";import"./spacing-Bd-CIscW.js";import"./utils-DqmNl-Il.js";import"./useRenderProps-CP918x9p.js";import"./FloatingFieldInputWrapper-DHHM-5zK.js";import"./Label.component-BWEgwSKL.js";import"./mixins-CcgEHb9c.js";import"./index-CKqsTkFX.js";import"./useObjectRef-D2RG7rRi.js";import"./SSRProvider-DyiXDq2k.js";import"./Label.context-CCD9MV1z.js";import"./filterDOMProps-CeZl_uWj.js";import"./Message.component-CZ4-z7fs.js";import"./Message.context-Dd4cT4rL.js";import"./ErrorMessage.component-DBytMZ-8.js";import"./ErrorMessage.context-AYC8UfzI.js";import"./Inputs.styles-Ct1TRuRE.js";import"./ComboInput.styles-kOaziVwv.js";import"./SkeletonLoader.component-q75MwwfP.js";import"./context-z6pb9OkM.js";import"./TextField.component-N2s51dq8.js";import"./useTextField-CQoa95kJ.js";import"./useFocusable-DacP9xvE.js";import"./useFormReset-BY6BQbOl.js";import"./useControlledState-vzCMHZvt.js";import"./useField-BY78xfaL.js";import"./useLabel-DDcndmXW.js";import"./useLabels-B8dXFA8d.js";import"./useFormValidation-BfT1egZx.js";import"./useFormValidationState-CONlS5Wo.js";import"./Field.styles-DjdYEYvF.js";import"./Provider-op_UCnZE.js";import"./ComboInput.context-_UpYbRGR.js";import"./Input.context-Cyaw3phX.js";import"./TextArea.context-AnZs5gnW.js";import"./NumberField.component-CoWZrm97.js";import"./useFocusWithin-BJ0-_hiU.js";import"./usePress-CqXh5MnK.js";import"./index-q6RvvsFA.js";import"./index-D-fs5e6L.js";import"./useEvent-CeKNPFU-.js";import"./useLocalizedStringFormatter-BmC8c4z2.js";import"./useNumberFormatter-BHOsbS6G.js";import"./NumberFormatter-DNR9MAW-.js";import"./useSpinButton-CEXF7CxP.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button.context-CorcCtTC.js";import"./number-nHrFdSb-.js";import"./IconButton.component-CgWNtqWH.js";import"./BaseButton-vMGD2aCH.js";import"./useFocusRing-DIS5Kyrs.js";import"./useButton-9RZc7-Gk.js";import"./useLink-DD4jtrk3.js";import"./Loading.context-C7II2W1n.js";import"./SpinnerLoader.component-DSWkxcW2.js";import"./Loader.component-OwwaJ-iM.js";import"./Flex.component-CDWV5CIf.js";import"./Checkmark.component-BsvhAJlZ.js";import"./Spinner.component-CbEi-nNZ.js";import"./ProgressCircle.component-Cto4SYF5.js";import"./colors-x_YFGAop.js";import"./MaterialIcon.component-CrbLbUZZ.js";import"./Icons.styles-qcj_pyb3.js";import"./ComboInput.component-AZYKBBz8.js";import"./Input.component-BV7OW4Aw.js";import"./scale-CqCDTNu0.js";import"./Collection-DjjOtLT0.js";import"./CollectionBuilder-D3rKkOdu.js";const Yr={title:"Inputs/User Input/NumberInput",component:x,parameters:{layout:"centered",cssprops:I("Input")},argTypes:{...C,variant:{options:["default","floating"],description:"Variant of the input"},formatOptions:{control:"object",description:"Options for formatting the number"},minValue:{control:"number",description:"Minimum value allowed"},maxValue:{control:"number",description:"Maximum value allowed"},defaultValue:{control:"number",description:"Initial value of the input when uncontrolled",table:{category:"Common"}}}},r={args:{onChange:A(),size:"medium",label:"Number input"}},t={args:{...r.args,minValue:0,maxValue:100}},o={args:{...r.args,defaultValue:10,formatOptions:{style:"currency",currency:"USD"}}},e={args:{...r.args,defaultValue:.5,formatOptions:{style:"percent"}}},a={args:{...r.args,defaultValue:10,formatOptions:{style:"unit",unit:"mile-per-hour"}}},i={args:{...r.args,isLoading:!0,loadingLabel:"Loading"}};var m,n,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
