import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{$ as d}from"./filterDOMProps-CeZl_uWj.js";import{u}from"./useRenderProps-CP918x9p.js";import{m}from"./mixins-CcgEHb9c.js";import{g as t,E as c}from"./styled-components.browser.esm-DC3GK9Rn.js";const f=t.div`
  ${m.Sizing}
  --size-sm-x: 10px;
  --size-md-x: 20px;
  --size-lg-x: 30px;

  ${({$duration:e})=>e?`--animation-duration: ${e}ms;`:""}

  font-size: var(--size-x);
  display: flex;
  align-items: center;
  gap: 0.25em;
`,p=c`
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
  animation-name: ${p};
  animation-duration: var(--animation-duration);
  animation-timing-function: cubic-bezier(0.5, 0.05, 1, 0.5);
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-delay: calc(
    var(--animation-duration) * ${({$count:e})=>e*.5}
  );
`;function i(e){const{size:r="medium",duration:o=500,count:l=3}=e,s=u({...e,componentClassName:"aje-bouncing-dots",size:r});return n.jsx(f,{...s,...d(e),$duration:o,children:[...Array(l)].map((b,a)=>n.jsx(y,{$count:a,className:"aje-bouncing-dots__dot"},a))})}try{i.displayName="BouncingDots",i.__docgenInfo={description:"",displayName:"BouncingDots",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<never>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<never> | undefined"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},duration:{defaultValue:{value:"500"},description:"Duration of the animation in milliseconds",name:"duration",required:!1,type:{name:"number | undefined"}},count:{defaultValue:null,description:"",name:"count",required:!1,type:{name:"number | undefined"}},"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!1,type:{name:"string | undefined"}},"aria-labelledby":{defaultValue:null,description:"",name:"aria-labelledby",required:!1,type:{name:"string | undefined"}},"aria-describedby":{defaultValue:null,description:"",name:"aria-describedby",required:!1,type:{name:"string | undefined"}},"aria-details":{defaultValue:null,description:"",name:"aria-details",required:!1,type:{name:"string | undefined"}}}}}catch{}export{i as B};
