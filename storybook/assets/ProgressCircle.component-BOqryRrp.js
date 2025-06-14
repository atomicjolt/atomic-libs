import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{r as k}from"./index-BCtMShv3.js";import{a as N}from"./useObjectRef-B4hnndUj.js";import{$ as _}from"./filterDOMProps-CeZl_uWj.js";import{$ as L}from"./number-nHrFdSb-.js";import{$ as W}from"./useLabel-Bew-gTxt.js";import{$ as z}from"./useNumberFormatter-BHOsbS6G.js";import{c as B,u as I}from"./index-C_lK3xe_.js";import{u as R}from"./useRenderProps-CP918x9p.js";import{f as S,s as x}from"./colors-x_YFGAop.js";import{d as c,m as C}from"./styled-components.browser.esm-Y4FpNNpy.js";function E(l){let{value:e=0,minValue:r=0,maxValue:a=100,valueLabel:t,isIndeterminate:s,formatOptions:o={style:"percent"}}=l,d=_(l,{labelable:!0}),{labelProps:u,fieldProps:f}=W({...l,labelElementType:"span"});e=L(e,r,a);let m=(e-r)/(a-r),p=z(o);if(!s&&!t){let $=o.style==="percent"?m:e;t=p.format($)}return{progressBarProps:N(d,{...f,"aria-valuenow":s?void 0:e,"aria-valuemin":r,"aria-valuemax":a,"aria-valuetext":s?void 0:t,role:"progressbar"}),labelProps:u}}const D=B(),F=C`
  100% {
    transform: rotate(360deg);
  }
`,O=C`
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -98;
  }
`,P=c.circle`
  transition: stroke-dasharray 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  fill: transparent;
  ${x.defaults({$stroke:"var(--progress-circle-indicator-clr)"})}
`,A=c.circle`
  fill: transparent;
  ${x.defaults({$stroke:"var(--progress-circle-track-clr)"})}
`,M=c.circle`
  ${S.defaults({$fill:"var(--progress-circle-bg-clr)"})}
`,G=c.svg`
  &[data-indeterminate] {
    animation: ${F} 2s linear infinite;

    ${P} {
      transition: unset;
      animation: ${O} 1.5s ease-in-out infinite;
    }
  }
`,v=k.forwardRef(function(e,r){[e,r]=I(D,e,r);const{value:a=0,$size:t="60",$trackWidth:s="10",$indicatorColor:o="var(--progress-circle-indicator-clr)",$trackColor:d="var(--progress-circle-track-clr)",$bg:u="var(--progress-circle-bg-clr)",$linecap:f,className:m,style:p,isIndeterminate:$,minValue:h=0,maxValue:b=100,showValueLabel:V,...q}=e,{progressBarProps:y}=E(e),g=16,[w,T]=k.useMemo(()=>{const n=(a-h)/(b-h)*100;return n>100?[100,0]:n<0?[0,100]:[n,100-n]},[a,h,b]),j=R({componentClassName:"aje-progresscircle",className:m,style:p,selectors:{"data-indeterminate":$}});return i.jsxs(G,{width:t,height:t,viewBox:"0 0 44 44",...y,...j,...q,children:[i.jsx(M,{cx:"22",cy:"22",r:g,$fill:u}),i.jsx(A,{cx:"22",cy:"22",r:g,$stroke:d,strokeWidth:s}),i.jsx(P,{cx:"22",cy:"22",r:g,$stroke:o,strokeWidth:s,strokeDasharray:`${w} ${T}`,strokeDashoffset:"25",strokeLinecap:f}),V&&i.jsx("text",{x:"22",y:"22",textAnchor:"middle",dominantBaseline:"middle",fill:o,fontSize:"10",children:y["aria-valuetext"]})]})});v.displayName="ProgressCircle";try{v.displayName="ProgressCircle",v.__docgenInfo={description:"",displayName:"ProgressCircle",props:{showValueLabel:{defaultValue:null,description:"Whether or not to display a label in the center of the circle representing the value",name:"showValueLabel",required:!1,type:{name:"boolean"}},$size:{defaultValue:null,description:"The width and height of the progress circle",name:"$size",required:!1,type:{name:"string"}},$trackWidth:{defaultValue:null,description:"The width of the track",name:"$trackWidth",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'},{value:'"4"'},{value:'"5"'},{value:'"6"'},{value:'"7"'},{value:'"8"'},{value:'"9"'},{value:'"10"'}]}},$bg:{defaultValue:null,description:"The color of the background",name:"$bg",required:!1,type:{name:"any"}},$trackColor:{defaultValue:null,description:"The color of the track",name:"$trackColor",required:!1,type:{name:"any"}},$indicatorColor:{defaultValue:null,description:"The color indicating the amount of progress",name:"$indicatorColor",required:!1,type:{name:"any"}},$linecap:{defaultValue:null,description:"The linecap of the progress indicator",name:"$linecap",required:!1,type:{name:"enum",value:[{value:'"round"'},{value:'"butt"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<never>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<never>"}}}}}catch{}export{v as P};
