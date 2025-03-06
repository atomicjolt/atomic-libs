import{j as m}from"./jsx-runtime-CkxqCPlQ.js";import{u as j}from"./useRenderFormat-mv3Xq3JM.js";import"./index-DJO9vBfz.js";const y=["second","minute","hour","day","week","month","year"],p={long:{year:"year",month:"month",week:"week",day:"day",hour:"hour",minute:"minute",second:"second"},short:{year:"yr",month:"mo",week:"wk",day:"day",hour:"hr",minute:"min",second:"sec"},narrow:{year:"y",month:"mo",week:"w",day:"d",hour:"h",minute:"m",second:"s"}},R={year:31536e3,month:2592e3,week:604800,day:86400,hour:3600,minute:60,second:1};function U(o,b={}){const{minUnit:l="second",maxUnit:N="year",style:n="long"}=b;let i=o,e="",u=y.indexOf(N);for(;u>=0;){const r=y[u],c=R[r];if(c<=i){const d=Math.floor(i/c);i%=c;let h=p[n][r];d!==1&&n==="long"&&(h+="s"),e+=d.toLocaleString(),n==="long"&&(e+=" "),e+=`${h} `}if(u--,r===l)break}if(e=e.trim(),e===""){e="0";let r=p[n][l];n==="long"&&(r+="s"),e+=` ${r}`}return e}function z(o){return j(U,o)}const E={title:"Format/FormatDuration",component:z,parameters:{layout:"centered"},decorators:[o=>m.jsx("div",{style:{fontSize:"2rem",fontFamily:"Arial, sans-serif"},children:m.jsx(o,{})})],argTypes:{value:{control:"number"},minUnit:{control:"select",options:["second","minute","hour","day","week","month","year"]},maxUnit:{control:"select",options:["second","minute","hour","day","week","month","year"]},fallback:{control:"text"},style:{control:"select",options:["long","short","narrow"]}}},t={args:{value:3892}},a={args:{value:null,fallback:"No duration"}},s={args:{...t.args,children:o=>m.jsxs("h1",{children:["Duration: ",o]})},parameters:{docs:{source:{code:`
<FormatDuration value={3600} fallback="No duration">
  {(value) => <h1>Duration: {value}</h1>}
</FormatDuration>
`}}}};var g,f,k;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    value: 3892
  }
}`,...(k=(f=t.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var v,D,w;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    value: null,
    fallback: "No duration"
  }
}`,...(w=(D=a.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var x,F,S;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    children: value => <h1>Duration: {value}</h1>
  },
  parameters: {
    docs: {
      source: {
        code: \`
<FormatDuration value={3600} fallback="No duration">
  {(value) => <h1>Duration: {value}</h1>}
</FormatDuration>
\`
      }
    }
  }
}`,...(S=(F=s.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};const O=["Primary","NoDuration","CustomizeRender"];export{s as CustomizeRender,a as NoDuration,t as Primary,O as __namedExportsOrder,E as default};
