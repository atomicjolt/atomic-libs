import{a as y}from"./helpers-DnLJB5bk.js";import{g as L}from"./cssprops-BO85xpNm.js";import{P}from"./ProgressCircle.component-D57_vbeK.js";import"./jsx-runtime-D_zvdyIk.js";import"./styled-components.browser.esm-S-CusIP4.js";import"./index-DmM0KDA7.js";import"./index-CmTRtbgT.js";import"./index-DLW06VQL.js";import"./index-BDzxygkP.js";import"./index-CyCRagT9.js";import"./Collection-cZH6f0Bi.js";import"./CollectionBuilder-DglRgqo3.js";import"./index-D_Kw7eWP.js";import"./index-nLeaPAJ8.js";import"./useFocusable-B7cTVP20.js";import"./useObjectRef-BO7mrmvR.js";import"./SSRProvider-nIDwi1ZO.js";import"./index-SU87TpAq.js";import"./scale-CqCDTNu0.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-B1sX0IQZ.js";import"./useLabels-D0NjiLiF.js";import"./useNumberFormatter-CH8tnwcW.js";import"./context-BF7eBGFA.js";import"./NumberFormatter-DNR9MAW-.js";import"./index-CqJC2f1M.js";import"./useRenderProps-BzxgHqRb.js";import"./index-CrEZfznw.js";import"./colors-x_YFGAop.js";const X={title:"Feedback/ProgressCircle",component:P,parameters:{layout:"centered",cssprops:L("ProgressCircle")},argTypes:{...y,value:{control:"number",description:"The value of the progress circle. Must be between maxValue and minValue."},maxValue:{control:"number",description:"The maximum value of the progress circle."},minValue:{control:"number",description:"The minimum value of the progress circle."},isIndeterminate:{control:"boolean",description:"Whether the progress circle is indeterminate."},$trackColor:{control:"color"},$indicatorColor:{control:"color"},$bg:{control:"color"},showValueLabel:{control:"boolean",description:"Whether to show the value label."},valueLabel:{control:"text",description:"Custom value label to display in the center of the circle."},formatOptions:{control:"object",description:"Options to format the value label."}}},e={args:{value:35,isIndeterminate:!1,$size:"100",showValueLabel:!1}},r={args:{...e.args,isIndeterminate:!1,$trackWidth:"5",showValueLabel:!0}},a={args:{...e.args,isIndeterminate:!1,$trackWidth:"5",showValueLabel:!0,formatOptions:{style:"currency",currency:"JPY"}}},t={args:{isIndeterminate:!0,$trackColor:"transparent",$linecap:"round",$size:"100",$trackWidth:"5"}},o={args:{value:50,minValue:20,maxValue:80,$trackWidth:"5",$size:"100",showValueLabel:!0}};var s,n,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    value: 35,
    isIndeterminate: false,
    $size: "100",
    showValueLabel: false
  }
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var l,c,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isIndeterminate: false,
    $trackWidth: "5",
    showValueLabel: true
  }
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,u,d;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(f=($=o.parameters)==null?void 0:$.docs)==null?void 0:f.source}}};const Z=["Primary","ValueLabel","ValueLabelFormatOptions","Indeterminate","CustomRange"];export{o as CustomRange,t as Indeterminate,e as Primary,r as ValueLabel,a as ValueLabelFormatOptions,Z as __namedExportsOrder,X as default};
