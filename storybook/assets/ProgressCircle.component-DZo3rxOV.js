import{j as i}from"./jsx-runtime-CkxqCPlQ.js";import{r as x}from"./index-DJO9vBfz.js";import{b as j}from"./useObjectRef-BKue9pYL.js";import{$ as I}from"./filterDOMProps-CeZl_uWj.js";import{$ as _}from"./useLabel-CSTUXoQW.js";import{$ as L}from"./useNumberFormatter-D5qg7lg6.js";import{c as S,u as W}from"./index-De95zDiF.js";import{u as z}from"./useRenderProps-Bk8BH60l.js";import{s as C,f as B}from"./colors-x_YFGAop.js";import{m as V,d}from"./styled-components.browser.esm-BQf_XqKi.js";function R(o,e=-1/0,r=1/0){return Math.min(Math.max(o,e),r)}function c(o,e){let r=o,a=e.toString(),l=a.indexOf("."),t=l>=0?a.length-l:0;if(t>0){let s=Math.pow(10,t);r=Math.round(r*s)/s}return r}function te(o,e,r,a){e=Number(e),r=Number(r);let l=(o-(isNaN(e)?0:e))%a,t=c(Math.abs(l)*2>=a?o+Math.sign(l)*(a-Math.abs(l)):o-l,a);return isNaN(e)?!isNaN(r)&&t>r&&(t=Math.floor(c(r/a,a))*a):t<e?t=e:!isNaN(r)&&t>r&&(t=e+Math.floor(c((r-e)/a,a))*a),t=c(t,a),t}function E(o){let{value:e=0,minValue:r=0,maxValue:a=100,valueLabel:l,isIndeterminate:t,formatOptions:s={style:"percent"}}=o,u=I(o,{labelable:!0}),{labelProps:f,fieldProps:p}=_({...o,labelElementType:"span"});e=R(e,r,a);let m=(e-r)/(a-r),$=L(s);if(!t&&!l){let h=s.style==="percent"?m:e;l=$.format(h)}return{progressBarProps:j(u,{...p,"aria-valuenow":t?void 0:e,"aria-valuemin":r,"aria-valuemax":a,"aria-valuetext":t?void 0:l,role:"progressbar"}),labelProps:f}}const O=S(),D=V`
  100% {
    transform: rotate(360deg);
  }
`,F=V`
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
`,P=d.circle`
  transition: stroke-dasharray 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  fill: transparent;
  ${C.defaults({$stroke:"var(--progress-circle-indicator-clr)"})}
`,A=d.circle`
  fill: transparent;
  ${C.defaults({$stroke:"var(--progress-circle-track-clr)"})}
`,G=d.circle`
  ${B.defaults({$fill:"var(--progress-circle-bg-clr)"})}
`,H=d.svg`
  &[data-indeterminate] {
    animation: ${D} 2s linear infinite;

    ${P} {
      transition: unset;
      animation: ${F} 1.5s ease-in-out infinite;
    }
  }
`,y=x.forwardRef(function(e,r){[e,r]=W(O,e,r);const{value:a=0,$size:l="60",$trackWidth:t="10",$indicatorColor:s="var(--progress-circle-indicator-clr)",$trackColor:u="var(--progress-circle-track-clr)",$bg:f="var(--progress-circle-bg-clr)",$linecap:p,className:m,style:$,isIndeterminate:h,minValue:g=0,maxValue:v=100,showValueLabel:N,...w}=e,{progressBarProps:k}=E(e),b=16,[M,q]=x.useMemo(()=>{const n=(a-g)/(v-g)*100;return n>100?[100,0]:n<0?[0,100]:[n,100-n]},[a,g,v]),T=z({componentClassName:"aje-progresscircle",className:m,style:$,selectors:{"data-indeterminate":h}});return i.jsxs(H,{width:l,height:l,viewBox:"0 0 44 44",...k,...T,...w,children:[i.jsx(G,{cx:"22",cy:"22",r:b,$fill:f}),i.jsx(A,{cx:"22",cy:"22",r:b,$stroke:u,strokeWidth:t}),i.jsx(P,{cx:"22",cy:"22",r:b,$stroke:s,strokeWidth:t,strokeDasharray:`${M} ${q}`,strokeDashoffset:"25",strokeLinecap:p}),N&&i.jsx("text",{x:"22",y:"22",textAnchor:"middle",dominantBaseline:"middle",fill:s,fontSize:"10",children:k["aria-valuetext"]})]})});y.displayName="ProgressCircle";try{y.displayName="ProgressCircle",y.__docgenInfo={description:"",displayName:"ProgressCircle",props:{showValueLabel:{defaultValue:null,description:"Whether or not to display a label in the center of the circle representing the value",name:"showValueLabel",required:!1,type:{name:"boolean"}},$size:{defaultValue:null,description:"The width and height of the progress circle",name:"$size",required:!1,type:{name:"string"}},$trackWidth:{defaultValue:null,description:"The width of the track",name:"$trackWidth",required:!1,type:{name:"enum",value:[{value:'"2"'},{value:'"1"'},{value:'"3"'},{value:'"4"'},{value:'"5"'},{value:'"6"'},{value:'"7"'},{value:'"8"'},{value:'"9"'},{value:'"10"'}]}},$bg:{defaultValue:null,description:"The color of the background",name:"$bg",required:!1,type:{name:"any"}},$trackColor:{defaultValue:null,description:"The color of the track",name:"$trackColor",required:!1,type:{name:"any"}},$indicatorColor:{defaultValue:null,description:"The color indicating the amount of progress",name:"$indicatorColor",required:!1,type:{name:"any"}},$linecap:{defaultValue:null,description:"The linecap of the progress indicator",name:"$linecap",required:!1,type:{name:"enum",value:[{value:'"round"'},{value:'"butt"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<never>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<never>"}}}}}catch{}export{R as $,y as P,te as a};
