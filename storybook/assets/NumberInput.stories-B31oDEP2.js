import"./index-CU-NnRvR.js";import{T as x}from"./helpers-eqtGz5yy.js";import{g as C}from"./cssprops-GRhaVv-e.js";import{fn as I}from"./index-BgLytPr-.js";import{N as A}from"./NumberInput.component-aXI6nFFY.js";import"./jsx-runtime-D_zvdyIk.js";import"./styled-components.browser.esm-DC3GK9Rn.js";import"./index-BCtMShv3.js";import"./index-D6p6eVJg.js";import"./index-DK2N7Sdf.js";import"./index-DDEbtPEF.js";import"./index-B-ANkEne.js";import"./index-CBCMMQRA.js";import"./Collection-DjjOtLT0.js";import"./CollectionBuilder-D3rKkOdu.js";import"./index-q6RvvsFA.js";import"./index-D-fs5e6L.js";import"./useFocusable-DacP9xvE.js";import"./useObjectRef-D2RG7rRi.js";import"./SSRProvider-DyiXDq2k.js";import"./index-Km3Ox9s4.js";import"./scale-CqCDTNu0.js";import"./index-EJ0-2BeM.js";import"./FloatingFieldInputWrapper-B_EuP4P6.js";import"./Label.component-DBUhUCKK.js";import"./mixins-rvS92GN5.js";import"./index-CKqsTkFX.js";import"./Label.context-CCD9MV1z.js";import"./useRenderProps-CP918x9p.js";import"./filterDOMProps-CeZl_uWj.js";import"./Message.component-DFztKYb4.js";import"./Message.context-Dd4cT4rL.js";import"./ErrorMessage.component-qu0ZRxE-.js";import"./ErrorMessage.context-AYC8UfzI.js";import"./Inputs.styles-DIkjRjRj.js";import"./ComboInput.styles-DTCg5MK4.js";import"./SkeletonLoader.component-q75MwwfP.js";import"./context-z6pb9OkM.js";import"./TextField.component-IFkzhdGD.js";import"./useTextField-CQoa95kJ.js";import"./useFormReset-BY6BQbOl.js";import"./useControlledState-vzCMHZvt.js";import"./useField-BY78xfaL.js";import"./useLabel-DDcndmXW.js";import"./useLabels-B8dXFA8d.js";import"./useFormValidation-BfT1egZx.js";import"./useFormValidationState-CONlS5Wo.js";import"./Field.styles-Dw3HlfUC.js";import"./Provider-op_UCnZE.js";import"./ComboInput.context-_UpYbRGR.js";import"./Input.context-Cyaw3phX.js";import"./TextArea.context-AnZs5gnW.js";import"./NumberField.component-BB_Gvrr7.js";import"./useFocusWithin-BJ0-_hiU.js";import"./usePress-CqXh5MnK.js";import"./useEvent-CeKNPFU-.js";import"./useLocalizedStringFormatter-BmC8c4z2.js";import"./useNumberFormatter-BHOsbS6G.js";import"./NumberFormatter-DNR9MAW-.js";import"./useSpinButton-CEXF7CxP.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button.context-CorcCtTC.js";import"./number-nHrFdSb-.js";import"./IconButton.component-qh7VggwH.js";import"./BaseButton-D55FwPxe.js";import"./useFocusRing-DIS5Kyrs.js";import"./useButton-9RZc7-Gk.js";import"./useLink-DD4jtrk3.js";import"./Loading.context-C7II2W1n.js";import"./SpinnerLoader.component-CY6uCJIr.js";import"./Loader.component-BF7keoeP.js";import"./Flex.component-DuR-zQbX.js";import"./layout-SmZ-geAZ.js";import"./utils-DqmNl-Il.js";import"./Checkmark.component-B0IuBF_d.js";import"./Spinner.component-DhurfhG1.js";import"./ProgressCircle.component-CdiYhWSj.js";import"./colors-x_YFGAop.js";import"./MaterialIcon.component-P2nG7RwB.js";import"./Icons.styles-BM2rI1Ad.js";import"./ComboInput.component-BEfD9iW0.js";import"./Input.component-B-EtUmlu.js";import"./Group.component-BfM5iwh3.js";const et={title:"Inputs/User Input/NumberInput",component:A,parameters:{layout:"centered",cssprops:C("Input")},argTypes:{...x,variant:{options:["default","floating"],description:"Variant of the input"},formatOptions:{control:"object",description:"Options for formatting the number"},minValue:{control:"number",description:"Minimum value allowed"},maxValue:{control:"number",description:"Maximum value allowed"},defaultValue:{control:"number",description:"Initial value of the input when uncontrolled",table:{category:"Common"}}}},r={args:{onChange:I(),size:"medium",label:"Number input"}},t={args:{...r.args,minValue:0,maxValue:100}},o={args:{...r.args,defaultValue:10,formatOptions:{style:"currency",currency:"USD"}}},e={args:{...r.args,defaultValue:.5,formatOptions:{style:"percent"}}},i={args:{...r.args,defaultValue:10,formatOptions:{style:"unit",unit:"mile-per-hour"}}},m={args:{...r.args,isLoading:!0,loadingLabel:"Loading"}};var a,p,n;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    onChange: fn(),
    size: "medium",
    label: "Number input"
  }
}`,...(n=(p=r.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};var s,u,c;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(b=(y=e.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var V,h,P;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    defaultValue: 10,
    formatOptions: {
      style: "unit",
      unit: "mile-per-hour"
    }
  }
}`,...(P=(h=i.parameters)==null?void 0:h.docs)==null?void 0:P.source}}};var O,L,S;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isLoading: true,
    loadingLabel: "Loading"
  }
}`,...(S=(L=m.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};const it=["Primary","WithBounds","FormatAsCurrency","FormatAsPercent","FormatAsUnit","Loading"];export{o as FormatAsCurrency,e as FormatAsPercent,i as FormatAsUnit,m as Loading,r as Primary,t as WithBounds,it as __namedExportsOrder,et as default};
