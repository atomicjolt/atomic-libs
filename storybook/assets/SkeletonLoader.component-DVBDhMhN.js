import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as f}from"./index-BCtMShv3.js";import{c as _}from"./index-EJ0-2BeM.js";import{$ as A}from"./context-z6pb9OkM.js";import{d as o}from"./styled-components.browser.esm-Y4FpNNpy.js";const S=o.svg`
  ${({$rtl:t})=>t?{transform:"scaleX(-1)"}:null}
`,p=o.stop`
  stop-color: var(--skeleton-bg-clr);
  stop-opacity: var(--skeleton-bg-opacity);
`,q=o.stop`
  stop-color: var(--skeleton-fg-clr);
  stop-opacity: var(--skeleton-fg-opacity);
`;function u(t){const{children:h,isAnimated:g=!0,gradientRatio:n=2,duration:b=1.2,title:r="",viewBox:x,width:y,height:$,className:j,...v}=t,{direction:k}=A(),s=f.useMemo(()=>{const m=document.querySelector("base");return m?m.href:""},[]),a=f.useId(),i=`${a}-diff`,l=`${a}-animated-diff`,d=`${a}-aria`,w=`${b}s`,c=`${n*-1} 0`,N=`${n} 0`;return e.jsxs(S,{"aria-labelledby":d,role:"img",$rtl:k==="rtl",viewBox:x,width:y,height:$,className:_("aje-skeleton-loader",j),...v,children:[r&&e.jsx("title",{id:d,children:r}),e.jsx("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:`url(${s}#${i})`,style:{fill:`url(${s}#${l})`}}),e.jsxs("defs",{children:[e.jsx("clipPath",{id:i,children:h}),e.jsxs("linearGradient",{id:l,gradientTransform:`translate(${c})`,children:[e.jsx(p,{offset:"0%"}),e.jsx(q,{offset:"50%"}),e.jsx(p,{offset:"100%"}),g&&e.jsx("animateTransform",{attributeName:"gradientTransform",type:"translate",values:`${c}; 0 0; ${N}`,dur:w,repeatCount:"indefinite"})]})]})]})}try{u.displayName="SkeletonLoader",u.__docgenInfo={description:`Renders a skeleton loader component. This component is used to show a loading state for a component.

You provide svg elements as children to the component and it will animate a gradient over the top of them.`,displayName:"SkeletonLoader",props:{isAnimated:{defaultValue:null,description:"Whether or not to animate the skeleton",name:"isAnimated",required:!1,type:{name:"boolean"}},gradientRatio:{defaultValue:null,description:"Width of the animated gradient with repsect to the viewbox witdth",name:"gradientRatio",required:!1,type:{name:"number"}},duration:{defaultValue:null,description:"Length in seconds that the animation should take",name:"duration",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"Used to describe the element for accessibility",name:"title",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",required:!1,type:{name:"Argument | Argument[]"}}}}}catch{}export{u as S};
