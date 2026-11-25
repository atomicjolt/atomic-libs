import{j as c}from"./iframe-CGPW5dgX.js";import{$ as h}from"./useNumberFormatter-CgBbBkmi.js";import{u as D}from"./useRenderFormat-mv3Xq3JM.js";import"./preload-helper-Dp1pzeXC.js";import"./context-CLSG1ylv.js";import"./SSRProvider-Dwr0Ku02.js";import"./NumberFormatter-DNR9MAW-.js";function o(r){const s=h(r);return D(s.format.bind(s),r)}try{o.displayName="FormatNumber",o.__docgenInfo={description:`Language-sensitive number formatting, using the current locale.
Accepts the \`Intl.NumberFormat\` options as props.

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)`,displayName:"FormatNumber",filePath:"/home/runner/work/atomic-libs/atomic-libs/packages/atomic-elements/src/components/Format/FormatNumber/FormatNumber.component.tsx",methods:[],props:{value:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Format/Format.types.ts",name:"FormatterProps"}],description:"The value to format. When `null` or `undefined`, `fallback` is rendered instead.",name:"value",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Format/Format.types.ts",name:"FormatterProps"},required:!1,tags:{},type:{name:"number | bigint | null"}},children:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Format/Format.types.ts",name:"FormatterProps"}],description:"Render function that receives the formatted value. By default the formatted value is rendered as text.",name:"children",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Format/Format.types.ts",name:"FormatterProps"},required:!1,tags:{},type:{name:"FormatterChildren<string>"}},fallback:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Format/Format.types.ts",name:"FormatterProps"}],description:"Rendered when `value` is `null` or `undefined`.",name:"fallback",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Format/Format.types.ts",name:"FormatterProps"},required:!1,tags:{},type:{name:"ReactNode"}}},tags:{}}}catch{}const A={title:"Format/FormatNumber",component:o,parameters:{layout:"centered"},decorators:[r=>c.jsx("div",{style:{fontSize:"2rem",fontFamily:"Arial, sans-serif"},children:c.jsx(r,{})})],argTypes:{value:{control:"number"},style:{control:"select",options:["decimal","currency","percent","unit"]},minimumIntegerDigits:{control:"number"},minimumFractionDigits:{control:"number"},maximumFractionDigits:{control:"number"},minimumSignificantDigits:{control:"number"},maximumSignificantDigits:{control:"number"},useGrouping:{control:"boolean"},notation:{control:"select",options:["standard","scientific","engineering","compact"]},compactDisplay:{control:"select",options:["short","long"]}}},e={args:{value:123456.789}},t={args:{...e.args,value:.1234,style:"percent"}},n={args:{...e.args,style:"unit",unit:"meter",unitDisplay:"long"},argTypes:{unit:{control:"text"},unitDisplay:{control:"select",options:["long","short","narrow"]}}},a={args:{...e.args,style:"currency",currency:"USD",currencyDisplay:"symbol",currencySign:"standard"},argTypes:{currency:{control:"select",options:["USD","EUR","JPY","CNY"]},currencyDisplay:{control:"select",options:["symbol","narrowSymbol","code","name"]},currencySign:{control:"select",options:["standard","accounting"]}}},R=["Primary","AsPercent","AsUnit","AsCurrency"];var i,m,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    value: 123456.789
  }
}`,...(l=(m=e.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var p,u,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    value: 0.1234,
    style: "percent"
  }
}`,...(d=(u=t.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var y,g,b;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(b=(g=n.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var f,F,N;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(N=(F=a.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};export{a as AsCurrency,t as AsPercent,n as AsUnit,e as Primary,R as __namedExportsOrder,A as default};
