import{j as a}from"./jsx-runtime-CkxqCPlQ.js";import{$ as f}from"./useNumberFormatter-D5qg7lg6.js";import{u as x}from"./useRenderFormat-mv3Xq3JM.js";import"./index-DJO9vBfz.js";import"./context-BQ3_Es2z.js";import"./SSRProvider-DAMUgb6s.js";import"./NumberFormatter-DNR9MAW-.js";function P(n){const s=f(n);return x(s.format.bind(s),n)}const j={title:"Format/FormatNumber",component:P,parameters:{layout:"centered"},decorators:[n=>a.jsx("div",{style:{fontSize:"2rem",fontFamily:"Arial, sans-serif"},children:a.jsx(n,{})})],argTypes:{value:{control:"number"},style:{control:"select",options:["decimal","currency","percent","unit"]},minimumIntegerDigits:{control:"number"},minimumFractionDigits:{control:"number"},maximumFractionDigits:{control:"number"},minimumSignificantDigits:{control:"number"},maximumSignificantDigits:{control:"number"},useGrouping:{control:"boolean"},notation:{control:"select",options:["standard","scientific","engineering","compact"]},compactDisplay:{control:"select",options:["short","long"]}}},r={args:{value:123456.789}},e={args:{...r.args,value:.1234,style:"percent"}},o={args:{...r.args,style:"unit",unit:"meter",unitDisplay:"long"},argTypes:{unit:{control:"text"},unitDisplay:{control:"select",options:["long","short","narrow"]}}},t={args:{...r.args,style:"currency",currency:"USD",currencyDisplay:"symbol",currencySign:"standard"},argTypes:{currency:{control:"select",options:["USD","EUR","JPY","CNY"]},currencyDisplay:{control:"select",options:["symbol","narrowSymbol","code","name"]},currencySign:{control:"select",options:["standard","accounting"]}}};var c,i,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    value: 123456.789
  }
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var l,u,p;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    value: 0.1234,
    style: "percent"
  }
}`,...(p=(u=e.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var y,g,d;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(d=(g=o.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var b,D,S;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(S=(D=t.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};const w=["Primary","AsPercent","AsUnit","AsCurrency"];export{t as AsCurrency,e as AsPercent,o as AsUnit,r as Primary,w as __namedExportsOrder,j as default};
