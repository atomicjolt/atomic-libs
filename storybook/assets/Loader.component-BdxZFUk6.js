import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{$ as f}from"./filterDOMProps-CeZl_uWj.js";import{u as y}from"./useRenderProps-CP918x9p.js";import{d}from"./styled-components.browser.esm-Y4FpNNpy.js";import{m as c}from"./mixins-XviowZ_6.js";import{F as h}from"./Flex.component-BTH7Jim3.js";import{C as g}from"./Checkmark.component-Bisr1A6O.js";const b=d.div`
  ${c.Sizing}
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
`,x=d.p`
  ${c.Regular}
  font-size: inherit;
  color: var(--text-clr);
`;function o(e){const{isLoading:l=!0,placement:i="center",orientation:m="vertical",size:t="medium",message:r}=e,u=["inline","block"].includes(i)?"inline":"center",n=y({componentClassName:"aje-loader",...e,size:t,values:{isLoading:l}}),s=m==="horizontal"?"row":"column",p=f(e);return a.jsx(b,{...n,...p,"data-placement":i,children:l?a.jsxs(h,{$display:u==="inline"?"inline-flex":"flex",$direction:s,$gap:s==="row"?"1rem":"0",$justify:"center",$align:"center",children:[n.children,r&&a.jsx(x,{children:r})]}):typeof e.children=="function"?n.children:a.jsx(g,{size:t})})}try{o.displayName="Loader",o.__docgenInfo={description:`Loader component. Manages the placement
of a loading animation and an optional message.`,displayName:"Loader",props:{isLoading:{defaultValue:null,description:`Whether the loader is in a loading state, when true,
children is rendered, when false, a checkmark animation
is displayed`,name:"isLoading",required:!1,type:{name:"boolean"}},message:{defaultValue:null,description:"An optional message to display with the loader",name:"message",required:!1,type:{name:"ReactNode"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},placement:{defaultValue:{value:'"center"'},description:"Placement of the loader\n- `inline` - Loader is displayed inline with the content\n- `block` - Loader is displayed as a block element\n- `center` - Loader spans the full width of the parent container.\n  If the parent is a flex conatiner, the loader will take up available space on the main axis\n- `absolute center` - Loader is absolutely positioned of it's nearest relative parent",name:"placement",required:!1,type:{name:"enum",value:[{value:'"inline"'},{value:'"block"'},{value:'"center"'},{value:'"absolute center"'}]}},orientation:{defaultValue:null,description:"The orientation of the loader and the message relative to each other",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<{ isLoading: boolean; }>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<{ isLoading: boolean; }>"}},"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"",name:"aria-labelledby",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-details":{defaultValue:null,description:"",name:"aria-details",required:!1,type:{name:"string"}}}}}catch{}export{o as L};
