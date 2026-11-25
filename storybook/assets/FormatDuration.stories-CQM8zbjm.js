import{j as u}from"./iframe-CGPW5dgX.js";import{u as P}from"./useRenderFormat-mv3Xq3JM.js";import"./preload-helper-Dp1pzeXC.js";const y=["second","minute","hour","day","week","month","year"],f={long:{year:"year",month:"month",week:"week",day:"day",hour:"hour",minute:"minute",second:"second"},short:{year:"yr",month:"mo",week:"wk",day:"day",hour:"hr",minute:"min",second:"sec"},narrow:{year:"y",month:"mo",week:"w",day:"d",hour:"h",minute:"m",second:"s"}},U={year:31536e3,month:2592e3,week:604800,day:86400,hour:3600,minute:60,second:1};function O(a,S={}){const{minUnit:d="second",maxUnit:_="year",style:o="long"}=S;let i=a,e="",m=y.indexOf(_);for(;m>=0;){const t=y[m],l=U[t];if(l<=i){const p=Math.floor(i/l);i%=l;let h=f[o][t];p!==1&&o==="long"&&(h+="s"),e+=p.toLocaleString(),o==="long"&&(e+=" "),e+=`${h} `}if(m--,t===d)break}if(e=e.trim(),e===""){e="0";let t=f[o][d];o==="long"&&(t+="s"),e+=` ${t}`}return e}function c(a){return P(O,a)}try{c.displayName="FormatDuration",c.__docgenInfo={description:"Formats a given duration in seconds into a human-readable string.",displayName:"FormatDuration",filePath:"/home/runner/work/atomic-libs/atomic-libs/packages/atomic-elements/src/components/Format/FormatDuration/FormatDuration.component.tsx",methods:[],props:{value:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Format/FormatDuration/FormatDuration.component.tsx",name:"FormatDurationProps"}],description:"The duration to format, in seconds. When `null` or `undefined`, `fallback` is rendered instead.",name:"value",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Format/FormatDuration/FormatDuration.component.tsx",name:"FormatDurationProps"},required:!1,tags:{},type:{name:"number | null"}},children:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Format/Format.types.ts",name:"FormatterProps"}],description:"Render function that receives the formatted value. By default the formatted value is rendered as text.",name:"children",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Format/Format.types.ts",name:"FormatterProps"},required:!1,tags:{},type:{name:"FormatterChildren<string>"}},fallback:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Format/Format.types.ts",name:"FormatterProps"}],description:"Rendered when `value` is `null` or `undefined`.",name:"fallback",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Format/Format.types.ts",name:"FormatterProps"},required:!1,tags:{},type:{name:"ReactNode"}},minUnit:{defaultValue:{value:'"second"'},declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/hooks/useDurationFormatter.ts",name:"FormatDurationOptions"}],description:`The smallest unit to display
If the duration is smaller than this unit, it will output "0 \\<unit\\>"`,name:"minUnit",parent:{fileName:"atomic-libs/packages/atomic-elements/src/hooks/useDurationFormatter.ts",name:"FormatDurationOptions"},required:!1,tags:{default:'"second"'},type:{name:"enum",raw:"DurationUnit",value:[{value:'"day"'},{value:'"hour"'},{value:'"minute"'},{value:'"second"'},{value:'"month"'},{value:'"week"'},{value:'"year"'}]}},maxUnit:{defaultValue:{value:'"year"'},declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/hooks/useDurationFormatter.ts",name:"FormatDurationOptions"}],description:"The largest unit to display",name:"maxUnit",parent:{fileName:"atomic-libs/packages/atomic-elements/src/hooks/useDurationFormatter.ts",name:"FormatDurationOptions"},required:!1,tags:{default:'"year"'},type:{name:"enum",raw:"DurationUnit",value:[{value:'"day"'},{value:'"hour"'},{value:'"minute"'},{value:'"second"'},{value:'"month"'},{value:'"week"'},{value:'"year"'}]}},style:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/hooks/useDurationFormatter.ts",name:"FormatDurationOptions"}],description:`The style of the duration
- long: "1 year 2 months 3 weeks 4 days 5 hours 6 minutes 7 seconds"
- short: "1 yr 2 mo 3 wk 4 days 5 hr 6 min 7 sec"
- narrow: "1y 2mo 3w 4d 5h 6m 7s"`,name:"style",parent:{fileName:"atomic-libs/packages/atomic-elements/src/hooks/useDurationFormatter.ts",name:"FormatDurationOptions"},required:!1,tags:{},type:{name:"enum",raw:"DurationStyle",value:[{value:'"long"'},{value:'"short"'},{value:'"narrow"'}]}}},tags:{}}}catch{}const T={title:"Format/FormatDuration",component:c,parameters:{layout:"centered"},decorators:[a=>u.jsx("div",{style:{fontSize:"2rem",fontFamily:"Arial, sans-serif"},children:u.jsx(a,{})})],argTypes:{value:{control:"number"},minUnit:{control:"select",options:["second","minute","hour","day","week","month","year"]},maxUnit:{control:"select",options:["second","minute","hour","day","week","month","year"]},fallback:{control:"text"},style:{control:"select",options:["long","short","narrow"],table:{defaultValue:{summary:'"long"'}}}}},r={args:{value:3892}},n={args:{value:null,fallback:"No duration"}},s={args:{...r.args,children:a=>u.jsxs("strong",{children:["Duration: ",a]})},parameters:{docs:{source:{code:`
<FormatDuration value={3892}>
  {(value) => <strong>Duration: {value}</strong>}
</FormatDuration>
`}}}},j=["Primary","NoDuration","CustomizeRender"];var g,F,v;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    value: 3892
  }
}`,...(v=(F=r.parameters)==null?void 0:F.docs)==null?void 0:v.source}}};var k,D,w;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    value: null,
    fallback: "No duration"
  }
}`,...(w=(D=n.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var b,N,x;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    children: value => <strong>Duration: {value}</strong>
  },
  parameters: {
    docs: {
      source: {
        code: \`
<FormatDuration value={3892}>
  {(value) => <strong>Duration: {value}</strong>}
</FormatDuration>
\`
      }
    }
  }
}`,...(x=(N=s.parameters)==null?void 0:N.docs)==null?void 0:x.source}}};export{s as CustomizeRender,n as NoDuration,r as Primary,j as __namedExportsOrder,T as default};
