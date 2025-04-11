import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{$ as d}from"./filterDOMProps-CeZl_uWj.js";import{u as m}from"./useRenderProps-CP918x9p.js";import{m as u}from"./mixins-XviowZ_6.js";import{d as t,m as c}from"./styled-components.browser.esm-Y4FpNNpy.js";const p=t.div`
  ${u.Sizing}
  --size-sm-x: 10px;
  --size-md-x: 20px;
  --size-lg-x: 30px;

  ${({$duration:e})=>e?`--animation-duration: ${e}ms;`:""}

  font-size: var(--size-x);
  display: flex;
  align-items: center;
  gap: 0.25em;
`,f=c`
  from {
    transform: translateY(-25%);
  }
  to {
    transform: translateY(25%);
  }
`,y=t.span`
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: var(--animation-clr);
  transform: translateY(-25%);
  animation-name: ${f};
  animation-duration: var(--animation-duration);
  animation-timing-function: cubic-bezier(0.5, 0.05, 1, 0.5);
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-delay: calc(
    var(--animation-duration) * ${({$count:e})=>e*.5}
  );
`;function i(e){const{size:r="medium",duration:o=500,count:s=3}=e,l=m({...e,componentClassName:"aje-bouncing-dots",size:r});return n.jsx(p,{...l,...d(e),$duration:o,children:[...Array(s)].map((b,a)=>n.jsx(y,{$count:a,className:"aje-bouncing-dots__dot"},a))})}try{i.displayName="BouncingDots",i.__docgenInfo={description:"",displayName:"BouncingDots",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<never>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<never>"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},duration:{defaultValue:{value:"500"},description:"Duration of the animation in milliseconds",name:"duration",required:!1,type:{name:"number"}},count:{defaultValue:null,description:"",name:"count",required:!1,type:{name:"number"}},"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"",name:"aria-labelledby",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-details":{defaultValue:null,description:"",name:"aria-details",required:!1,type:{name:"string"}}}}}catch{}export{i as B};
