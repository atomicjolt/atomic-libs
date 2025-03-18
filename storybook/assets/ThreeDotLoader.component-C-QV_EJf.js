import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{L as r}from"./Loader.component-C9UWSKIc.js";import{B as o}from"./BouncingDots.component-BCu2V11f.js";function l(e){const{className:n,size:i,duration:t}=e;return a.jsx(r,{...e,className:["aje-loader--bouncing-dots",n],children:a.jsx(o,{size:i,duration:t})})}try{l.displayName="ThreeDotLoader",l.__docgenInfo={description:"ThreeDotLoader Component",displayName:"ThreeDotLoader",props:{duration:{defaultValue:{value:"500"},description:"Duration of the animation in milliseconds",name:"duration",required:!1,type:{name:"number"}},"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"",name:"aria-labelledby",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-details":{defaultValue:null,description:"",name:"aria-details",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<{ isLoading: boolean; }>"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<{ isLoading: boolean; }>"}},orientation:{defaultValue:null,description:"The orientation of the loader and the message relative to each other",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},placement:{defaultValue:{value:'"center"'},description:"Placement of the loader\n- `inline` - Loader is displayed inline with the content\n- `block` - Loader is displayed as a block element\n- `center` - Loader spans the full width of the parent container.\n  If the parent is a flex conatiner, the loader will take up available space on the main axis\n- `absolute center` - Loader is absolutely positioned of it's nearest relative parent",name:"placement",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"inline"'},{value:'"block"'},{value:'"absolute center"'}]}},isLoading:{defaultValue:null,description:`Whether the loader is in a loading state, when true,
children is rendered, when false, a checkmark animation
is displayed`,name:"isLoading",required:!1,type:{name:"boolean"}},message:{defaultValue:null,description:"An optional message to display with the loader",name:"message",required:!1,type:{name:"ReactNode"}}}}}catch{}export{l as T};
