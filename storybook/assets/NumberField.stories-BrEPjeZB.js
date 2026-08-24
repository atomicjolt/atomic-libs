import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{G as j}from"./index-C5FB09Y9.js";import{F as E}from"./helpers-B3wxvxjs.js";import{N as V}from"./NumberField.component-BqutidFx.js";import{L as O}from"./Label.component-PV5tL6Vm.js";import{M as I}from"./Message.component-BkeRZygz.js";import{I as i}from"./IconButton.component-BNkclI4L.js";import{I as P}from"./Input.component-BxVMOp1U.js";import{E as S}from"./ErrorMessage.component-B_60Itgy.js";import"./styled-components.browser.esm-DC3GK9Rn.js";import"./index-BCtMShv3.js";import"./layout-Dd7m2B0D.js";import"./spacing-Bd-CIscW.js";import"./utils-DqmNl-Il.js";import"./useRenderProps-CP918x9p.js";import"./index-EJ0-2BeM.js";import"./scale-CqCDTNu0.js";import"./Collection-DwMxgycI.js";import"./CollectionBuilder-L_wKxqRd.js";import"./index-q6RvvsFA.js";import"./index-D-fs5e6L.js";import"./useFocusable-B7HbK8LX.js";import"./useObjectRef-B4hnndUj.js";import"./SSRProvider-DyiXDq2k.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormReset-GcAVnfXr.js";import"./useFormValidationState-CONlS5Wo.js";import"./useFocusWithin-dfJl9rAf.js";import"./usePress-BJ4Xpz5E.js";import"./useEvent-CI_xZcmG.js";import"./useTextField-D4_p2q36.js";import"./useControlledState-vzCMHZvt.js";import"./useField-D8gfBVj0.js";import"./useLabel-Bew-gTxt.js";import"./useLabels-BQTM_NWA.js";import"./useFormValidation-CnIG3AAh.js";import"./useLocalizedStringFormatter-BmC8c4z2.js";import"./context-z6pb9OkM.js";import"./useNumberFormatter-BHOsbS6G.js";import"./NumberFormatter-DNR9MAW-.js";import"./useSpinButton-B52iW2OY.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button.context-e0zTg6D5.js";import"./index-C_lK3xe_.js";import"./Field.styles-DjdYEYvF.js";import"./mixins-CcgEHb9c.js";import"./Provider-op_UCnZE.js";import"./number-nHrFdSb-.js";import"./Label.context-Bxyvy4yx.js";import"./Message.context-CzffOAUK.js";import"./ErrorMessage.context-B4seO6gR.js";import"./ComboInput.context-Dhqk-dVH.js";import"./Input.context-kYvBQ720.js";import"./index-BgPCn92x.js";import"./Icons.styles-qcj_pyb3.js";import"./BaseButton-BDQAI67e.js";import"./useFocusRing-zxvArQTZ.js";import"./useButton-B6TSBwA2.js";import"./useLink-C7Cuty20.js";import"./SpinnerLoader.component-Bxwb61tI.js";import"./Loader.component-Bropnax8.js";import"./index-BKev5x84.js";import"./Checkmark.component-BsvhAJlZ.js";import"./Spinner.component-CUPFcyys.js";import"./ProgressCircle.component-B-u6Y9UX.js";import"./colors-x_YFGAop.js";V.displayName="NumberField";const Dr={title:"Fields/NumberField",component:V,parameters:{layout:"centered"},argTypes:{...E,onChange:{action:"onChange",table:{category:"Events"}},formatOptions:{control:"object",description:"Options for formatting the number"},minValue:{control:"number",description:"Minimum value allowed"},maxValue:{control:"number",description:"Maximum value allowed"},defaultValue:{control:"number",description:"Initial value of the input when uncontrolled"},value:{control:"number",description:"Value of the input when controlled"},"data-float":{table:{disable:!0}},"data-resize":{table:{disable:!0}}}},r={args:{size:"large",children:[e.jsx(O,{children:"Label"},"label"),e.jsx(I,{children:"Message"},"message"),e.jsxs(j,{isMerged:!0,children:[e.jsx(i,{slot:"decrement",icon:"remove"}),e.jsx(P,{},"input"),e.jsx(i,{slot:"increment",icon:"add"})]},"group"),e.jsx(S,{children:"Error Message"},"error")]}},o={args:{...r.args,minValue:0,maxValue:10}},t={args:{...r.args,defaultValue:10,formatOptions:{style:"currency",currency:"USD"}}},a={args:{...r.args,defaultValue:.5,formatOptions:{style:"percent"}}},s={args:{...r.args,defaultValue:10,formatOptions:{style:"unit",unit:"mile-per-hour"}}};var m,n,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(F=(b=a.parameters)==null?void 0:b.docs)==null?void 0:F.source}}};var h,x,M;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    defaultValue: 10,
    formatOptions: {
      style: "unit",
      unit: "mile-per-hour"
    }
  }
}`,...(M=(x=s.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};const Wr=["Primary","WithBounds","FormatAsCurrency","FormatAsPercent","FormatAsUnit"];export{t as FormatAsCurrency,a as FormatAsPercent,s as FormatAsUnit,r as Primary,o as WithBounds,Wr as __namedExportsOrder,Dr as default};
