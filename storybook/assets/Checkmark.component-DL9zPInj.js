import{g as r,O as m,j as i}from"./iframe-CGPW5dgX.js";import{u as n}from"./useRenderProps-B7rIWDyP.js";import{m as o}from"./mixins-BJuiWlrm.js";const c=m`
  0% {
    opacity: 0;
    transform: rotate(90deg) scale(0);
  }
  100% {
    opacity: 1;
    transform: rotate(45deg) scale(1);
  }
`,l=r.span`
  ${o.Sizing}
  --size-sm-x: 10px;
  --size-md-x: 20px;
  --size-lg-x: 30px;

  font-size: var(--size-x);

  display: inline-block;
  position: relative;
  top: -0.125em;
  width: 0.5em;
  height: 1em;
  border-bottom: 0.2em solid var(--animation-clr);
  border-right: 0.2em solid var(--animation-clr);
  transform: rotate(45deg) scale(0);
  animation: ${c} 300ms cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
`;function a(e){const{size:t="medium"}=e,s=n({...e,componentClassName:"aje-checkmark",size:t});return i.jsx(l,{...s,"data-testid":"checkmark"})}try{a.displayName="Checkmark",a.__docgenInfo={description:"A checkmark that pops in with a short animation when it first renders.",displayName:"Checkmark",filePath:"/home/runner/work/atomic-libs/atomic-libs/packages/atomic-elements/src/components/Animations/Checkmark/Checkmark.component.tsx",methods:[],props:{size:{defaultValue:{value:'"medium"'},declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Animations/Checkmark/Checkmark.component.tsx",name:"CheckmarkProps"}],description:"Size of the checkmark",name:"size",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Animations/Checkmark/Checkmark.component.tsx",name:"CheckmarkProps"},required:!1,tags:{default:'"medium"'},type:{name:"enum",raw:"Size",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},className:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"}],description:"",name:"className",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"},required:!1,tags:{},type:{name:"RenderClassName<never>"}},style:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"}],description:"",name:"style",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"},required:!1,tags:{},type:{name:"RenderStyle<never>"}}},tags:{}}}catch{}export{a as C};
