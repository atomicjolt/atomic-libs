import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{G as j}from"./index-C5FB09Y9.js";import{F as E}from"./helpers-KKeMmUAi.js";import{I as s}from"./index-DAiKQP8B.js";import{N as V}from"./NumberField.component-BL-NgYzA.js";import{L as O}from"./Label.component-BWEgwSKL.js";import{M as I}from"./Message.component-CZ4-z7fs.js";import{I as P}from"./Input.component-BV7OW4Aw.js";import{E as S}from"./ErrorMessage.component-DBytMZ-8.js";import"./styled-components.browser.esm-DC3GK9Rn.js";import"./index-BCtMShv3.js";import"./layout-Dd7m2B0D.js";import"./spacing-Bd-CIscW.js";import"./utils-DqmNl-Il.js";import"./useRenderProps-CP918x9p.js";import"./index-EJ0-2BeM.js";import"./scale-CqCDTNu0.js";import"./Collection-DjjOtLT0.js";import"./CollectionBuilder-D3rKkOdu.js";import"./index-q6RvvsFA.js";import"./index-D-fs5e6L.js";import"./useFocusable-DacP9xvE.js";import"./useObjectRef-D2RG7rRi.js";import"./SSRProvider-DyiXDq2k.js";import"./BaseButton-hqyUXOtf.js";import"./mixins-CcgEHb9c.js";import"./useFocusRing-DIS5Kyrs.js";import"./useFocusWithin-BJ0-_hiU.js";import"./usePress-CqXh5MnK.js";import"./useButton-9RZc7-Gk.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLink-DD4jtrk3.js";import"./Loading.context-C7II2W1n.js";import"./SpinnerLoader.component-KlnkCnHe.js";import"./Loader.component-CrjS-2nc.js";import"./index-CB5SOmuf.js";import"./index-CKqsTkFX.js";import"./Checkmark.component-BsvhAJlZ.js";import"./Spinner.component-CbEi-nNZ.js";import"./ProgressCircle.component-Cto4SYF5.js";import"./number-nHrFdSb-.js";import"./useLabel-DDcndmXW.js";import"./useLabels-B8dXFA8d.js";import"./useNumberFormatter-BHOsbS6G.js";import"./context-z6pb9OkM.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-x_YFGAop.js";import"./Button.context-CorcCtTC.js";import"./MaterialIcon.component-wzFBvnrE.js";import"./Icons.styles-qcj_pyb3.js";import"./useFormReset-BY6BQbOl.js";import"./useFormValidationState-CONlS5Wo.js";import"./useEvent-CeKNPFU-.js";import"./useTextField-CQoa95kJ.js";import"./useControlledState-vzCMHZvt.js";import"./useField-BY78xfaL.js";import"./useFormValidation-BfT1egZx.js";import"./useLocalizedStringFormatter-BmC8c4z2.js";import"./useSpinButton-CEXF7CxP.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Field.styles-DjdYEYvF.js";import"./Provider-op_UCnZE.js";import"./Label.context-CCD9MV1z.js";import"./Message.context-Dd4cT4rL.js";import"./ErrorMessage.context-AYC8UfzI.js";import"./ComboInput.context-_UpYbRGR.js";import"./Input.context-Cyaw3phX.js";import"./SkeletonLoader.component-q75MwwfP.js";V.displayName="NumberField";const Rr={title:"Fields/NumberField",component:V,parameters:{layout:"centered"},argTypes:{...E,onChange:{action:"onChange",table:{category:"Events"}},formatOptions:{control:"object",description:"Options for formatting the number"},minValue:{control:"number",description:"Minimum value allowed"},maxValue:{control:"number",description:"Maximum value allowed"},defaultValue:{control:"number",description:"Initial value of the input when uncontrolled"},value:{control:"number",description:"Value of the input when controlled"},"data-float":{table:{disable:!0}},"data-resize":{table:{disable:!0}}}},r={args:{size:"large",children:[e.jsx(O,{children:"Label"},"label"),e.jsx(I,{children:"Message"},"message"),e.jsxs(j,{isMerged:!0,children:[e.jsx(s,{slot:"decrement",icon:"remove"}),e.jsx(P,{},"input"),e.jsx(s,{slot:"increment",icon:"add"})]},"group"),e.jsx(S,{children:"Error Message"},"error")]}},o={args:{...r.args,minValue:0,maxValue:10}},t={args:{...r.args,defaultValue:10,formatOptions:{style:"currency",currency:"USD"}}},a={args:{...r.args,defaultValue:.5,formatOptions:{style:"percent"}}},i={args:{...r.args,defaultValue:10,formatOptions:{style:"unit",unit:"mile-per-hour"}}};var m,n,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    size: "large",
    children: [<FieldLabel key="label">Label</FieldLabel>, <FieldMessage key="message">Message</FieldMessage>, <Group isMerged key="group">
        <IconButton slot="decrement" icon="remove" />
        <FieldInput key="input" />
        <IconButton slot="increment" icon="add" />
      </Group>, <FieldErrorMessage key="error">Error Message</FieldErrorMessage>]
  }
}`,...(p=(n=r.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var l,u,c;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    minValue: 0,
    maxValue: 10
  }
}`,...(c=(u=o.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var d,g,f;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    defaultValue: 10,
    formatOptions: {
      style: "currency",
      currency: "USD"
    }
  }
}`,...(f=(g=t.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var y,b,F;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    defaultValue: 0.5,
    formatOptions: {
      style: "percent"
    }
  }
}`,...(F=(b=a.parameters)==null?void 0:b.docs)==null?void 0:F.source}}};var h,x,M;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    defaultValue: 10,
    formatOptions: {
      style: "unit",
      unit: "mile-per-hour"
    }
  }
}`,...(M=(x=i.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};const Tr=["Primary","WithBounds","FormatAsCurrency","FormatAsPercent","FormatAsUnit"];export{t as FormatAsCurrency,a as FormatAsPercent,i as FormatAsUnit,r as Primary,o as WithBounds,Tr as __namedExportsOrder,Rr as default};
