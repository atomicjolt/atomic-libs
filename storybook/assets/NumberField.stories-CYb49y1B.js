import{j as e}from"./iframe-CGPW5dgX.js";import{d as F,b as j}from"./helpers-tUmR_xN7.js";import{N as n}from"./NumberField.component-fcYsibWP.js";import{L as E}from"./Label.component-Bo8kkSzq.js";import{M as O}from"./Message.component-CIEamcUq.js";import{G as v}from"./Group.component-DBQBcqJr.js";import{I as A}from"./Input.component-dygiXatG.js";import{E as P}from"./ErrorMessage.component-DUCD1jzH.js";import"./preload-helper-Dp1pzeXC.js";import"./useFocusable-DT9_LXVA.js";import"./useObjectRef-CjsC0YUg.js";import"./SSRProvider-Dwr0Ku02.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./displayName-CEXLPPBu.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormReset-mO407CKi.js";import"./useFormValidationState-CWonILzS.js";import"./useFocusWithin-BzfIRRcZ.js";import"./usePress-BioWcz2v.js";import"./useEvent-CiV_uWQE.js";import"./useTextField-CPDUiJax.js";import"./useField-DXQ2XZid.js";import"./useLabel-BytR9cji.js";import"./useLabels-Bveo7T3X.js";import"./useFormValidation-hpNb-DuC.js";import"./useLocalizedStringFormatter-CLx94-cg.js";import"./context-CLSG1ylv.js";import"./useNumberFormatter-CgBbBkmi.js";import"./NumberFormatter-DNR9MAW-.js";import"./useSpinButton-BU1srigh.js";import"./LiveAnnouncer-CAA6IyTk.js";import"./useRenderProps-B7rIWDyP.js";import"./index-BjoBGrPA.js";import"./BaseButton-B8bVR-o6.js";import"./mixins-BJuiWlrm.js";import"./index-C0dagnaq.js";import"./useFocusRing-Dbcio0BW.js";import"./useButton-CjI92Tj6.js";import"./useLink-PwQmwW74.js";import"./Loading.context-EUscm4UA.js";import"./SpinnerLoader.component-BfUo5Fvz.js";import"./Loader.component-oLyQpXum.js";import"./Flex.component-BDldr6hG.js";import"./layout-Dd7m2B0D.js";import"./utils-DqmNl-Il.js";import"./Checkmark.component-DL9zPInj.js";import"./Spinner.component-CLncQyFJ.js";import"./ProgressCircle.component-Cc0SXoU-.js";import"./colors-PU9nFmCW.js";import"./Field.styles-CxKAGZMW.js";import"./Provider-CKCHWQEo.js";import"./Label.context-D58S6_wU.js";import"./Message.context-D_Dpg15a.js";import"./ErrorMessage.context-tIEpfdG1.js";import"./ComboInput.context-3NxJI3U3.js";import"./Input.context-DET8yoFh.js";import"./IconButton.component-CifirOzj.js";import"./MaterialIcon.component-Dhrh5rCP.js";import"./Icons.styles-tJBW4wd9.js";import"./SkeletonLoader.component-DalY9QZY.js";const Cr={title:"Fields/NumberField",component:n,parameters:{layout:"centered"},argTypes:{...j,...F,onChange:{action:"onChange",description:"Handler called when the numeric value changes",table:{category:"Events"}},step:{control:"number",description:"Amount to increment or decrement by"},formatOptions:{control:"object",description:"Options for formatting the number"},minValue:{control:"number",description:"Minimum value allowed"},maxValue:{control:"number",description:"Maximum value allowed"},defaultValue:{control:"number",description:"Initial value of the input when uncontrolled"},value:{control:"number",description:"Value of the input when controlled"}}},r={args:{size:"large",children:[e.jsx(E,{children:"Label"},"label"),e.jsx(O,{children:"Message"},"message"),e.jsxs(v,{isMerged:!0,children:[e.jsx(n.DecrementButton,{icon:"remove"}),e.jsx(A,{},"input"),e.jsx(n.IncrementButton,{icon:"add"})]},"group"),e.jsx(P,{children:"Error Message"},"error")]}},o={args:{...r.args,minValue:0,maxValue:10}},t={args:{...r.args,defaultValue:10,formatOptions:{style:"currency",currency:"USD"}}},a={args:{...r.args,defaultValue:.5,formatOptions:{style:"percent"}}},s={args:{...r.args,defaultValue:10,formatOptions:{style:"unit",unit:"mile-per-hour"}}},Dr=["Primary","WithBounds","FormatAsCurrency","FormatAsPercent","FormatAsUnit"];var i,m,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    size: "large",
    children: [<Label key="label">Label</Label>, <Message key="message">Message</Message>, <Group isMerged key="group">
        <NumberField.DecrementButton icon="remove" />
        <Input key="input" />
        <NumberField.IncrementButton icon="add" />
      </Group>, <ErrorMessage key="error">Error Message</ErrorMessage>]
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var c,u,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    minValue: 0,
    maxValue: 10
  }
}`,...(l=(u=o.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var d,g,y;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    defaultValue: 10,
    formatOptions: {
      style: "currency",
      currency: "USD"
    }
  }
}`,...(y=(g=t.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var f,b,h;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    defaultValue: 0.5,
    formatOptions: {
      style: "percent"
    }
  }
}`,...(h=(b=a.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var x,M,V;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    defaultValue: 10,
    formatOptions: {
      style: "unit",
      unit: "mile-per-hour"
    }
  }
}`,...(V=(M=s.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};export{t as FormatAsCurrency,a as FormatAsPercent,s as FormatAsUnit,r as Primary,o as WithBounds,Dr as __namedExportsOrder,Cr as default};
