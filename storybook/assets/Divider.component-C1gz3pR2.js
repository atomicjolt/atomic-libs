import{j as d}from"./jsx-runtime-D_zvdyIk.js";import{$ as s}from"./filterDOMProps-CeZl_uWj.js";import{u as m}from"./useRenderProps-CP918x9p.js";import{r as u}from"./utils-DqmNl-Il.js";import{d as p}from"./styled-components.browser.esm-CROIn_Sd.js";function c(e){let a=s(e,{labelable:!0}),r;return e.orientation==="vertical"&&(r="vertical"),e.elementType!=="hr"?{separatorProps:{...a,role:"separator","aria-orientation":r}}:{separatorProps:a}}function i({$spacing:e}){return e?u(e):"var(--divider-margin-main)"}const f=p.div`
  background: var(--divider-bg-clr);

  &[aria-orientation="vertical"] {
    height: auto;
    width: var(--divider-width);
    margin-top: var(--divider-margin-secondary);
    margin-bottom: var(--divider-margin-secondary);

    margin-left: ${i};
    margin-right: ${i};
  }

  &[aria-orientation="horizontal"] {
    width: auto;
    height: var(--divider-width);
    margin-top: ${i};
    margin-bottom: ${i};
    margin-left: var(--divider-margin-secondary);
    margin-right: var(--divider-margin-secondary);
  }
`;function n(e){const{orientation:a="horizontal",spacing:r,as:t}=e,{separatorProps:o}=c({...e,elementType:typeof t=="string"?t:"div"}),l=m({componentClassName:"aje-divider",...e});return d.jsx(f,{...o,...l,as:t,$spacing:r,"aria-orientation":a})}try{n.displayName="Divider",n.__docgenInfo={description:"A visual divider between two groups of content",displayName:"Divider",props:{orientation:{defaultValue:null,description:"The orientation of the divider",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},spacing:{defaultValue:null,description:`The margins along the primary axis of the divider.
When "horizontal" it's the top & bottom margin and when
"vertical" it's the left & right margin`,name:"spacing",required:!1,type:{name:"string | number"}},as:{defaultValue:null,description:"The HTML element type that will be used to render the divider.",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",required:!1,type:{name:"Argument | Argument[]"}},size:{defaultValue:null,description:"Size of the component",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"auto"'},{value:'"medium"'},{value:'"large"'},{value:'"full"'}]}},"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"",name:"aria-labelledby",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-details":{defaultValue:null,description:"",name:"aria-details",required:!1,type:{name:"string"}}}}}catch{}export{n as D};
