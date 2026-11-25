import{g as o,O as r,j as n}from"./iframe-CGPW5dgX.js";import{$ as l}from"./filterDOMProps-CeZl_uWj.js";import{u}from"./useRenderProps-B7rIWDyP.js";import{m as p}from"./mixins-BJuiWlrm.js";const d=o.div`
  ${p.Sizing}
  --size-sm-x: 10px;
  --size-md-x: 20px;
  --size-lg-x: 30px;

  ${({$duration:e})=>e?`--animation-duration: ${e}ms;`:""}

  font-size: var(--size-x);
  display: flex;
  align-items: center;
  gap: 0.25em;
`,g=r`
  from {
    transform: translateY(-25%);
  }
  to {
    transform: translateY(25%);
  }
`,b=o.span`
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: var(--animation-clr);
  transform: translateY(-25%);
  animation-name: ${g};
  animation-duration: var(--animation-duration);
  animation-timing-function: cubic-bezier(0.5, 0.05, 1, 0.5);
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-delay: calc(
    var(--animation-duration) * ${({$count:e})=>e*.5}
  );
`;function t(e){const{size:i="medium",duration:s=500,count:m=3}=e,c=u({...e,componentClassName:"aje-bouncing-dots",size:i});return n.jsx(d,{...c,...l(e,{labelable:!0}),role:e["aria-label"]||e["aria-labelledby"]?"img":void 0,$duration:s,children:[...Array(m)].map((f,a)=>n.jsx(b,{$count:a,className:"aje-bouncing-dots__dot"},a))})}try{t.displayName="BouncingDots",t.__docgenInfo={description:"A row of dots that bounce in turn. Decorative unless given an\n`aria-label` or `aria-labelledby`, in which case it is exposed as an image.",displayName:"BouncingDots",filePath:"/home/runner/work/atomic-libs/atomic-libs/packages/atomic-elements/src/components/Animations/BouncingDots/BouncingDots.component.tsx",methods:[],props:{className:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Animations/BouncingDots/BouncingDots.component.tsx",name:"BouncingDotsProps"}],description:"",name:"className",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Animations/BouncingDots/BouncingDots.component.tsx",name:"BouncingDotsProps"},required:!1,tags:{},type:{name:"RenderClassName<never>"}},style:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Animations/BouncingDots/BouncingDots.component.tsx",name:"BouncingDotsProps"}],description:"",name:"style",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Animations/BouncingDots/BouncingDots.component.tsx",name:"BouncingDotsProps"},required:!1,tags:{},type:{name:"RenderStyle<never>"}},size:{defaultValue:{value:'"medium"'},declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Animations/BouncingDots/BouncingDots.component.tsx",name:"BouncingDotsProps"}],description:"Size of the dots",name:"size",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Animations/BouncingDots/BouncingDots.component.tsx",name:"BouncingDotsProps"},required:!1,tags:{default:'"medium"'},type:{name:"enum",raw:"Size",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},duration:{defaultValue:{value:"500"},declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Animations/BouncingDots/BouncingDots.component.tsx",name:"BouncingDotsProps"}],description:"Duration of the animation in milliseconds",name:"duration",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Animations/BouncingDots/BouncingDots.component.tsx",name:"BouncingDotsProps"},required:!1,tags:{default:"500"},type:{name:"number"}},count:{defaultValue:{value:"3"},declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Animations/BouncingDots/BouncingDots.component.tsx",name:"BouncingDotsProps"}],description:"Number of dots to render",name:"count",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Animations/BouncingDots/BouncingDots.component.tsx",name:"BouncingDotsProps"},required:!1,tags:{default:"3"},type:{name:"number"}},"aria-label":{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"AriaLabelProps"}],description:"",name:"aria-label",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"AriaLabelProps"},required:!1,tags:{},type:{name:"string"}},"aria-labelledby":{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"AriaLabelProps"}],description:"",name:"aria-labelledby",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"AriaLabelProps"},required:!1,tags:{},type:{name:"string"}},"aria-describedby":{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"AriaLabelProps"}],description:"",name:"aria-describedby",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"AriaLabelProps"},required:!1,tags:{},type:{name:"string"}},"aria-details":{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"AriaLabelProps"}],description:"",name:"aria-details",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"AriaLabelProps"},required:!1,tags:{},type:{name:"string"}}},tags:{}}}catch{}export{t as B};
