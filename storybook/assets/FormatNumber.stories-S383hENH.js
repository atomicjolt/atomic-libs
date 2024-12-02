import{j as t}from"./jsx-runtime-CkxqCPlQ.js";import{F as b}from"./index-BUj-5bQY.js";import"./index-DJO9vBfz.js";import"./useNumberFormatter-DWLeCNi8.js";import"./context-CKyfYUWk.js";import"./SSRProvider-DAMUgb6s.js";import"./NumberFormatter-DNR9MAW-.js";import"./useRenderFormat-mv3Xq3JM.js";const T={title:"Format/FormatNumber",component:b,parameters:{layout:"centered"},decorators:[S=>t.jsx("div",{style:{fontSize:"2rem",fontFamily:"Arial, sans-serif"},children:t.jsx(S,{})})],argTypes:{value:{control:"number"},style:{control:"select",options:["decimal","currency","percent","unit"]},minimumIntegerDigits:{control:"number"},minimumFractionDigits:{control:"number"},maximumFractionDigits:{control:"number"},minimumSignificantDigits:{control:"number"},maximumSignificantDigits:{control:"number"},useGrouping:{control:"boolean"},notation:{control:"select",options:["standard","scientific","engineering","compact"]},compactDisplay:{control:"select",options:["short","long"]}}},r={args:{value:123456.789}},n={args:{...r.args,value:.1234,style:"percent"}},e={args:{...r.args,style:"unit",unit:"meter",unitDisplay:"long"},argTypes:{unit:{control:"text"},unitDisplay:{control:"select",options:["long","short","narrow"]}}},o={args:{...r.args,style:"currency",currency:"USD",currencyDisplay:"symbol",currencySign:"standard"},argTypes:{currency:{control:"select",options:["USD","EUR","JPY","CNY"]},currencyDisplay:{control:"select",options:["symbol","narrowSymbol","code","name"]},currencySign:{control:"select",options:["standard","accounting"]}}};var s,a,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    value: 123456.789
  }
}`,...(c=(a=r.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var i,m,l;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    value: 0.1234,
    style: "percent"
  }
}`,...(l=(m=n.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var u,p,y;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    style: "unit",
    unit: "meter",
    unitDisplay: "long"
  },
  argTypes: {
    unit: {
      control: "text"
    },
    unitDisplay: {
      control: "select",
      options: ["long", "short", "narrow"]
    }
  }
}`,...(y=(p=e.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};var g,d,D;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    style: "currency",
    currency: "USD",
    currencyDisplay: "symbol",
    currencySign: "standard"
  },
  argTypes: {
    currency: {
      control: "select",
      options: ["USD", "EUR", "JPY", "CNY"]
    },
    currencyDisplay: {
      control: "select",
      options: ["symbol", "narrowSymbol", "code", "name"]
    },
    currencySign: {
      control: "select",
      options: ["standard", "accounting"]
    }
  }
}`,...(D=(d=o.parameters)==null?void 0:d.docs)==null?void 0:D.source}}};const h=["Primary","AsPercent","AsUnit","AsCurrency"];export{o as AsCurrency,n as AsPercent,e as AsUnit,r as Primary,h as __namedExportsOrder,T as default};
