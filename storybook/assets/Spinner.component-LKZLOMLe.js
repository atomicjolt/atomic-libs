import{j as a}from"./jsx-runtime-CkxqCPlQ.js";import{$ as m}from"./filterDOMProps-CeZl_uWj.js";import{u}from"./useRenderProps-Bk8BH60l.js";import{m as c}from"./mixins-D6ZuOvce.js";import{m as s,d as n}from"./styled-components.browser.esm-BQf_XqKi.js";const p=s`
  100% {
    transform: rotate(360deg);
  }
`,f=s`
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
    stroke-dashoffset: -124;
  }
`,y=n.div`
  ${c.Sizing}
  --size-sm-x: .5em;
  --size-md-x: 1em;
  --size-lg-x: 2em;

  font-size: var(--size-x);
`,h=n.svg`
  width: 1.25em;
  vertical-align: middle;
  animation: ${p} ${({$duration:e})=>`${e}ms`} linear infinite;
`,g=n.circle`
  fill: none;
  stroke: var(--animation-clr);
  stroke-linecap: round;
  animation: ${f} ${({$duration:e})=>`${e}ms`} ease-in-out
    infinite;
`,v={small:1,medium:.5,large:.1};function t(e){const{size:r="medium",duration:i=2e3}=e,l=v[r],o=u({...e,componentClassName:"aje-spinner",size:r}),d=i*.75;return a.jsx(y,{...o,...m(e),children:a.jsx(h,{viewBox:"25 25 50 50",$duration:i,"data-testid":"spinner-svg",children:a.jsx(g,{cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:`${l}em`,$duration:d})})})}try{t.displayName="Spinner",t.__docgenInfo={description:"Spinner Component",displayName:"Spinner",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<never>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<never>"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},duration:{defaultValue:{value:"2000"},description:"Duration of the animation in milliseconds",name:"duration",required:!1,type:{name:"number"}},"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"",name:"aria-labelledby",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-details":{defaultValue:null,description:"",name:"aria-details",required:!1,type:{name:"string"}}}}}catch{}export{t as S};
