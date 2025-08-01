import{a as y}from"./helpers-qskHnvo2.js";import{g as L}from"./cssprops-Cpr9BM6w.js";import{P}from"./ProgressCircle.component-gsiCSqhQ.js";import"./jsx-runtime-D_zvdyIk.js";import"./styled-components.browser.esm-Y4FpNNpy.js";import"./index-BCtMShv3.js";import"./index-DBiEhC6_.js";import"./index-C1ylzjdf.js";import"./index-DLW06VQL.js";import"./index-BDzxygkP.js";import"./index-pwxEVVKW.js";import"./Collection-DqSZYP0m.js";import"./CollectionBuilder-D7AJqdfd.js";import"./index-BqCLlfdy.js";import"./index-D-fs5e6L.js";import"./useFocusable-DacP9xvE.js";import"./useObjectRef-D2RG7rRi.js";import"./SSRProvider-DyiXDq2k.js";import"./index-CMwQe1I_.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./filterDOMProps-CeZl_uWj.js";import"./number-nHrFdSb-.js";import"./useLabel-DDcndmXW.js";import"./useLabels-B8dXFA8d.js";import"./useNumberFormatter-BHOsbS6G.js";import"./context-z6pb9OkM.js";import"./NumberFormatter-DNR9MAW-.js";import"./index-CsiUWFDz.js";import"./useRenderProps-CP918x9p.js";import"./index-EJ0-2BeM.js";import"./colors-x_YFGAop.js";const re={title:"Feedback/ProgressCircle",component:P,parameters:{layout:"centered",cssprops:L("ProgressCircle")},argTypes:{...y,value:{control:"number",description:"The value of the progress circle. Must be between maxValue and minValue."},maxValue:{control:"number",description:"The maximum value of the progress circle."},minValue:{control:"number",description:"The minimum value of the progress circle."},isIndeterminate:{control:"boolean",description:"Whether the progress circle is indeterminate."},$trackColor:{control:"color"},$indicatorColor:{control:"color"},$bg:{control:"color"},showValueLabel:{control:"boolean",description:"Whether to show the value label."},valueLabel:{control:"text",description:"Custom value label to display in the center of the circle."},formatOptions:{control:"object",description:"Options to format the value label."}}},e={args:{value:35,isIndeterminate:!1,$size:"100",showValueLabel:!1}},r={args:{...e.args,isIndeterminate:!1,$trackWidth:"5",showValueLabel:!0}},a={args:{...e.args,isIndeterminate:!1,$trackWidth:"5",showValueLabel:!0,formatOptions:{style:"currency",currency:"JPY"}}},t={args:{isIndeterminate:!0,$trackColor:"transparent",$linecap:"round",$size:"100",$trackWidth:"5"}},o={args:{value:50,minValue:20,maxValue:80,$trackWidth:"5",$size:"100",showValueLabel:!0}};var s,n,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    value: 35,
    isIndeterminate: false,
    $size: "100",
    showValueLabel: false
  }
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var l,m,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isIndeterminate: false,
    $trackWidth: "5",
    showValueLabel: true
  }
}`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var p,u,d;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isIndeterminate: false,
    $trackWidth: "5",
    showValueLabel: true,
    formatOptions: {
      style: "currency",
      currency: "JPY"
    }
  }
}`,...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var g,h,b;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    isIndeterminate: true,
    $trackColor: "transparent",
    $linecap: "round",
    $size: "100",
    $trackWidth: "5"
  }
}`,...(b=(h=t.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var V,$,f;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    value: 50,
    minValue: 20,
    maxValue: 80,
    $trackWidth: "5",
    $size: "100",
    showValueLabel: true
  }
}`,...(f=($=o.parameters)==null?void 0:$.docs)==null?void 0:f.source}}};const ae=["Primary","ValueLabel","ValueLabelFormatOptions","Indeterminate","CustomRange"];export{o as CustomRange,t as Indeterminate,e as Primary,r as ValueLabel,a as ValueLabelFormatOptions,ae as __namedExportsOrder,re as default};
