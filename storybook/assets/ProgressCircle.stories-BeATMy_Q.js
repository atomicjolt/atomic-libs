import{f,A as L}from"./helpers-tUmR_xN7.js";import{p as P}from"./iframe-CGPW5dgX.js";import{P as k}from"./ProgressCircle.component-Cc0SXoU-.js";import"./useFocusable-DT9_LXVA.js";import"./useObjectRef-CjsC0YUg.js";import"./SSRProvider-Dwr0Ku02.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./preload-helper-Dp1pzeXC.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BytR9cji.js";import"./useLabels-Bveo7T3X.js";import"./useNumberFormatter-CgBbBkmi.js";import"./context-CLSG1ylv.js";import"./NumberFormatter-DNR9MAW-.js";import"./index-C0dagnaq.js";import"./useRenderProps-B7rIWDyP.js";import"./index-BjoBGrPA.js";import"./colors-PU9nFmCW.js";const M={title:"Feedback/ProgressCircle",component:k,parameters:{layout:"centered",cssprops:{progressCircle:P}},argTypes:{...L,...f,value:{control:"number",description:"The value of the progress circle. Must be between maxValue and minValue.",table:{defaultValue:{summary:"0"}}},maxValue:{control:"number",description:"The maximum value of the progress circle.",table:{defaultValue:{summary:"100"}}},minValue:{control:"number",description:"The minimum value of the progress circle.",table:{defaultValue:{summary:"0"}}},isIndeterminate:{control:"boolean",description:"Whether the progress circle is indeterminate."},$trackColor:{control:"color"},$indicatorColor:{control:"color"},$bg:{control:"color"},showValueLabel:{control:"boolean",description:"Whether to show the value label."},valueLabel:{control:"text",description:"Custom value label to display in the center of the circle."},formatOptions:{control:"object",description:"Options to format the value label."}}},e={args:{"aria-label":"Upload progress",value:35,$size:"100"}},r={args:{...e.args,$trackWidth:"5",showValueLabel:!0}},a={args:{...e.args,$trackWidth:"5",showValueLabel:!0,formatOptions:{style:"currency",currency:"JPY"}}},o={args:{"aria-label":"Loading",isIndeterminate:!0,$trackColor:"transparent",$linecap:"round",$size:"100",$trackWidth:"5"}},t={args:{"aria-label":"Progress",value:50,minValue:20,maxValue:80,$trackWidth:"5",$size:"100",showValueLabel:!0}},q=["Primary","ValueLabel","ValueLabelFormatOptions","Indeterminate","CustomRange"];var s,n,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    "aria-label": "Upload progress",
    value: 35,
    $size: "100"
  }
}`,...(l=(n=e.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var i,c,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    $trackWidth: "5",
    showValueLabel: true
  }
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,p,d;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    $trackWidth: "5",
    showValueLabel: true,
    formatOptions: {
      style: "currency",
      currency: "JPY"
    }
  }
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var g,b,h;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    "aria-label": "Loading",
    isIndeterminate: true,
    $trackColor: "transparent",
    $linecap: "round",
    $size: "100",
    $trackWidth: "5"
  }
}`,...(h=(b=o.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var V,$,y;t.parameters={...t.parameters,docs:{...(V=t.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    "aria-label": "Progress",
    value: 50,
    minValue: 20,
    maxValue: 80,
    $trackWidth: "5",
    $size: "100",
    showValueLabel: true
  }
}`,...(y=($=t.parameters)==null?void 0:$.docs)==null?void 0:y.source}}};export{t as CustomRange,o as Indeterminate,e as Primary,r as ValueLabel,a as ValueLabelFormatOptions,q as __namedExportsOrder,M as default};
