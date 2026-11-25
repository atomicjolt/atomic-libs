import{g as c,j as a}from"./iframe-CGPW5dgX.js";import{$ as b}from"./filterDOMProps-CeZl_uWj.js";import{u as g}from"./useRenderProps-B7rIWDyP.js";import{m}from"./mixins-BJuiWlrm.js";import{F as L}from"./Flex.component-BDldr6hG.js";import{C as y}from"./Checkmark.component-DL9zPInj.js";const k=c.div`
  ${m.Sizing}
  --size-sm-x: 12px;
  --size-md-x: 16px;
  --size-lg-x: 30px;
  --animation-clr: var(--loader-clr);

  font-size: var(--size-x);

  &[data-placement="inline"] {
    display: inline-block;
  }

  &[data-placement="block"] {
    display: block;
  }

  &[data-placement="center"] {
    flex-grow: 1;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  &[data-placement="absolute center"] {
    position: absolute;
    display: grid;
    inset: 0;
    place-items: center;
  }
`,h=c.p`
  ${m.Regular}
  font-size: inherit;
  color: var(--text-clr);
`;function r(e){const{isLoading:n=!0,placement:s="center",orientation:d="vertical",size:o="medium",message:i}=e,p=["inline","block"].includes(s)?"inline":"center",t=g({componentClassName:"aje-loader",...e,size:o,values:{isLoading:n}}),l=d==="horizontal"?"row":"column",u=b(e,{labelable:!0}),f=e["aria-label"]||e["aria-labelledby"]?"status":void 0;return a.jsx(k,{...t,...u,role:f,"data-placement":s,children:n?a.jsxs(L,{$display:p==="inline"?"inline-flex":"flex",$direction:l,$gap:l==="row"?"1rem":"0",$justify:"center",$align:"center",children:[t.children,i&&a.jsx(h,{children:i})]}):typeof e.children=="function"?t.children:a.jsx(y,{size:o})})}try{r.displayName="Loader",r.__docgenInfo={description:`Loader component. Manages the placement
of a loading animation and an optional message.`,displayName:"Loader",filePath:"/home/runner/work/atomic-libs/atomic-libs/packages/atomic-elements/src/components/Feedback/Loader/Loader.component.tsx",methods:[],props:{isLoading:{defaultValue:{value:"true"},declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Feedback/Loader/Loader.component.tsx",name:"LoaderProps"}],description:`Whether the loader is in a loading state, when true,
children is rendered, when false, a checkmark animation
is displayed`,name:"isLoading",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Feedback/Loader/Loader.component.tsx",name:"LoaderProps"},required:!1,tags:{default:"true"},type:{name:"boolean"}},message:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Feedback/Loader/Loader.component.tsx",name:"LoaderProps"}],description:"An optional message to display with the loader",name:"message",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Feedback/Loader/Loader.component.tsx",name:"LoaderProps"},required:!1,tags:{},type:{name:"ReactNode"}},size:{defaultValue:{value:'"medium"'},declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Feedback/Loader/Loader.component.tsx",name:"LoaderProps"}],description:`Size of the loader. Also sets the size of the checkmark shown when
loading finishes`,name:"size",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Feedback/Loader/Loader.component.tsx",name:"LoaderProps"},required:!1,tags:{default:'"medium"'},type:{name:"enum",raw:"Size",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},placement:{defaultValue:{value:'"center"'},declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Feedback/Loader/Loader.component.tsx",name:"LoaderProps"}],description:"Placement of the loader\n- `inline` - Loader is displayed inline with the content\n- `block` - Loader is displayed as a block element\n- `center` - Loader spans the full width of the parent container.\n  If the parent is a flex container, the loader will take up available space on the main axis\n- `absolute center` - Loader is absolutely positioned of its nearest relative parent",name:"placement",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Feedback/Loader/Loader.component.tsx",name:"LoaderProps"},required:!1,tags:{default:'"center"'},type:{name:"enum",raw:"LoaderPlacement",value:[{value:'"center"'},{value:'"inline"'},{value:'"block"'},{value:'"absolute center"'}]}},orientation:{defaultValue:{value:'"vertical"'},declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Feedback/Loader/Loader.component.tsx",name:"LoaderProps"}],description:"The orientation of the loader and the message relative to each other",name:"orientation",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Feedback/Loader/Loader.component.tsx",name:"LoaderProps"},required:!1,tags:{default:'"vertical"'},type:{name:"enum",raw:'"horizontal" | "vertical"',value:[{value:'"horizontal"'},{value:'"vertical"'}]}},className:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"}],description:"",name:"className",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"},required:!1,tags:{},type:{name:"RenderClassName<{ isLoading: boolean; }>"}},style:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"}],description:"",name:"style",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"},required:!1,tags:{},type:{name:"RenderStyle<{ isLoading: boolean; }>"}},"aria-label":{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"AriaLabelProps"}],description:"",name:"aria-label",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"AriaLabelProps"},required:!1,tags:{},type:{name:"string"}},"aria-labelledby":{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"AriaLabelProps"}],description:"",name:"aria-labelledby",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"AriaLabelProps"},required:!1,tags:{},type:{name:"string"}},"aria-describedby":{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"AriaLabelProps"}],description:"",name:"aria-describedby",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"AriaLabelProps"},required:!1,tags:{},type:{name:"string"}},"aria-details":{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"AriaLabelProps"}],description:"",name:"aria-details",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"AriaLabelProps"},required:!1,tags:{},type:{name:"string"}}},tags:{}}}catch{}export{r as L};
