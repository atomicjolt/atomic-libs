import{j as e}from"./iframe-CGPW5dgX.js";import{R as t,A as x}from"./helpers-tUmR_xN7.js";import{L as y}from"./Loader.component-oLyQpXum.js";import{S as f}from"./Spinner.component-CLncQyFJ.js";import"./preload-helper-Dp1pzeXC.js";import"./useFocusable-DT9_LXVA.js";import"./useObjectRef-CjsC0YUg.js";import"./SSRProvider-Dwr0Ku02.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./filterDOMProps-CeZl_uWj.js";import"./useRenderProps-B7rIWDyP.js";import"./index-BjoBGrPA.js";import"./mixins-BJuiWlrm.js";import"./Flex.component-BDldr6hG.js";import"./index-C0dagnaq.js";import"./layout-Dd7m2B0D.js";import"./utils-DqmNl-Il.js";import"./Checkmark.component-DL9zPInj.js";import"./ProgressCircle.component-Cc0SXoU-.js";import"./useLabel-BytR9cji.js";import"./useLabels-Bveo7T3X.js";import"./useNumberFormatter-CgBbBkmi.js";import"./context-CLSG1ylv.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-PU9nFmCW.js";const I={title:"Feedback/Loader",component:y,argTypes:{...x,...t,isLoading:{control:"boolean",table:{category:"State"}},children:{...t.children,description:"The loading animation, shown while `isLoading` is true. When loading finishes a `Checkmark` replaces it, unless `children` is a function: it's called with `{ isLoading }` and its result is rendered in both states."}}},r={args:{message:"Loading...",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 200 200",height:"200px",width:"200px",children:e.jsxs("rect",{fill:"#3298FF",stroke:"#3298FF",strokeWidth:"30",strokeLinejoin:"round",width:"30",height:"30",x:"85",y:"85",rx:"0",ry:"0",children:[e.jsx("animate",{attributeName:"rx",calcMode:"spline",dur:"2",values:"15;15;5;15;15",keySplines:".5 0 .5 1;.8 0 1 .2;0 .8 .2 1;.5 0 .5 1",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"ry",calcMode:"spline",dur:"2",values:"15;15;10;15;15",keySplines:".5 0 .5 1;.8 0 1 .2;0 .8 .2 1;.5 0 .5 1",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"height",calcMode:"spline",dur:"2",values:"30;30;1;30;30",keySplines:".5 0 .5 1;.8 0 1 .2;0 .8 .2 1;.5 0 .5 1",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"y",calcMode:"spline",dur:"2",values:"40;170;40;",keySplines:".6 0 1 .4;0 .8 .2 1",repeatCount:"indefinite"})]})})}},a={args:{...r.args,orientation:"horizontal",children:e.jsx(f,{$size:"2em","aria-label":"Loading"})}},i={args:{isLoading:!1}},J=["Primary","SpinnerLoaderExample","Complete"];var n,s,o;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    message: "Loading...",
    children: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" height="200px" width="200px">
        <rect fill="#3298FF" stroke="#3298FF" strokeWidth="30" strokeLinejoin="round" width="30" height="30" x="85" y="85" rx="0" ry="0">
          <animate attributeName="rx" calcMode="spline" dur="2" values="15;15;5;15;15" keySplines=".5 0 .5 1;.8 0 1 .2;0 .8 .2 1;.5 0 .5 1" repeatCount="indefinite"></animate>
          <animate attributeName="ry" calcMode="spline" dur="2" values="15;15;10;15;15" keySplines=".5 0 .5 1;.8 0 1 .2;0 .8 .2 1;.5 0 .5 1" repeatCount="indefinite"></animate>
          <animate attributeName="height" calcMode="spline" dur="2" values="30;30;1;30;30" keySplines=".5 0 .5 1;.8 0 1 .2;0 .8 .2 1;.5 0 .5 1" repeatCount="indefinite"></animate>
          <animate attributeName="y" calcMode="spline" dur="2" values="40;170;40;" keySplines=".6 0 1 .4;0 .8 .2 1" repeatCount="indefinite"></animate>
        </rect>
      </svg>
  }
}`,...(o=(s=r.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var p,m,d;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    orientation: "horizontal",
    children: <Spinner $size="2em" aria-label="Loading" />
  }
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var l,c,u,g,h;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    isLoading: false
  }
}`,...(u=(c=i.parameters)==null?void 0:c.docs)==null?void 0:u.source},description:{story:"When `isLoading` is false, the loading animation is replaced with a checkmark.",...(h=(g=i.parameters)==null?void 0:g.docs)==null?void 0:h.description}}};export{i as Complete,r as Primary,a as SpinnerLoaderExample,J as __namedExportsOrder,I as default};
