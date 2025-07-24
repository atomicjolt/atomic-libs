import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{F as j}from"./helpers-DOVaRqs_.js";import{N as V}from"./NumberField.component-CvvgmO5d.js";import{L as E}from"./Label.component-B9Ls_jeT.js";import{M as O}from"./Message.component-C2RnBMtT.js";import{G as I}from"./Group.component-CCh4AWKN.js";import{I as i}from"./IconButton.component-C57JyDaI.js";import{I as P}from"./Input.component-KkyRTz8W.js";import{E as S}from"./ErrorMessage.component-C4MrFAT_.js";import"./styled-components.browser.esm-Y4FpNNpy.js";import"./index-BCtMShv3.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./Collection-C2kgHJSW.js";import"./CollectionBuilder-4ZFsDDvv.js";import"./index-BqCLlfdy.js";import"./index-D-fs5e6L.js";import"./useFocusable-B7HbK8LX.js";import"./useObjectRef-B4hnndUj.js";import"./SSRProvider-DyiXDq2k.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormReset-GcAVnfXr.js";import"./useFormValidationState-CONlS5Wo.js";import"./useFocusWithin-J-xELNez.js";import"./usePress-CzPFgv00.js";import"./useEvent-CI_xZcmG.js";import"./useTextField-D4_p2q36.js";import"./useControlledState-vzCMHZvt.js";import"./useField-D8gfBVj0.js";import"./useLabel-Bew-gTxt.js";import"./useLabels-BQTM_NWA.js";import"./useFormValidation-CnIG3AAh.js";import"./useLocalizedStringFormatter-BmC8c4z2.js";import"./context-z6pb9OkM.js";import"./useNumberFormatter-BHOsbS6G.js";import"./NumberFormatter-DNR9MAW-.js";import"./useSpinButton-CUfglx5M.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useRenderProps-CP918x9p.js";import"./index-EJ0-2BeM.js";import"./Button.context-e0zTg6D5.js";import"./index-C_lK3xe_.js";import"./Field.styles-D_hvWyI3.js";import"./mixins-XviowZ_6.js";import"./Provider-op_UCnZE.js";import"./number-nHrFdSb-.js";import"./Label.context-Bxyvy4yx.js";import"./Message.context-CzffOAUK.js";import"./ErrorMessage.context-B4seO6gR.js";import"./ComboInput.context-Dhqk-dVH.js";import"./Input.context-kYvBQ720.js";import"./layout-C5ppTKTq.js";import"./utils-DqmNl-Il.js";import"./index-SPKsbD02.js";import"./Icons.styles-D-JqKhr6.js";import"./Button.component-I4DbnubE.js";import"./useFocusRing-BT9oCgfs.js";import"./useButton-CIXIyXj7.js";import"./useLink-C_TmUO2i.js";import"./SpinnerLoader.component-CZyqbQAt.js";import"./Loader.component-Bbv54XPB.js";import"./index-BqqCK9sT.js";import"./Checkmark.component-Bisr1A6O.js";import"./Spinner.component-CKgxLGDu.js";import"./ProgressCircle.component-BOqryRrp.js";import"./colors-x_YFGAop.js";V.displayName="NumberField";const Dr={title:"Fields/NumberField",component:V,parameters:{layout:"centered"},argTypes:{...j,onChange:{action:"onChange",table:{category:"Events"}},formatOptions:{control:"object",description:"Options for formatting the number"},minValue:{control:"number",description:"Minimum value allowed"},maxValue:{control:"number",description:"Maximum value allowed"},defaultValue:{control:"number",description:"Initial value of the input when uncontrolled"},value:{control:"number",description:"Value of the input when controlled"},"data-float":{table:{disable:!0}},"data-resize":{table:{disable:!0}}}},r={args:{size:"large",children:[e.jsx(E,{children:"Label"},"label"),e.jsx(O,{children:"Message"},"message"),e.jsxs(I,{isMerged:!0,children:[e.jsx(i,{slot:"decrement",icon:"remove"}),e.jsx(P,{},"input"),e.jsx(i,{slot:"increment",icon:"add"})]},"group"),e.jsx(S,{children:"Error Message"},"error")]}},o={args:{...r.args,minValue:0,maxValue:10}},t={args:{...r.args,defaultValue:10,formatOptions:{style:"currency",currency:"USD"}}},a={args:{...r.args,defaultValue:.5,formatOptions:{style:"percent"}}},s={args:{...r.args,defaultValue:10,formatOptions:{style:"unit",unit:"mile-per-hour"}}};var m,n,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
