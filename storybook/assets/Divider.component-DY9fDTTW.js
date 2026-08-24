import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{$ as s}from"./filterDOMProps-CeZl_uWj.js";import{u}from"./useRenderProps-CP918x9p.js";import{r as m}from"./utils-DqmNl-Il.js";import{g as f}from"./styled-components.browser.esm-DC3GK9Rn.js";function p(e){let a=s(e,{labelable:!0}),i;return e.orientation==="vertical"&&(i="vertical"),e.elementType!=="hr"?{separatorProps:{...a,role:"separator","aria-orientation":i}}:{separatorProps:a}}function r({$spacing:e}){return e?m(e):"var(--divider-margin-main)"}const c=f.div`
  background: var(--divider-bg-clr);

  &[aria-orientation="vertical"] {
    height: auto;
    width: var(--divider-width);
    margin-top: var(--divider-margin-secondary);
    margin-bottom: var(--divider-margin-secondary);

    margin-left: ${r};
    margin-right: ${r};
  }

  &[aria-orientation="horizontal"] {
    width: auto;
    height: var(--divider-width);
    margin-top: ${r};
    margin-bottom: ${r};
    margin-left: var(--divider-margin-secondary);
    margin-right: var(--divider-margin-secondary);
  }
`;function t(e){const{orientation:a="horizontal",spacing:i,as:n}=e,{separatorProps:d}=p({...e,elementType:typeof n=="string"?n:"div"}),l=u({componentClassName:"aje-divider",...e});return o.jsx(c,{...d,...l,as:n,$spacing:i,"aria-orientation":a})}try{t.displayName="Divider",t.__docgenInfo={description:"A visual divider between two groups of content",displayName:"Divider",props:{orientation:{defaultValue:null,description:"The orientation of the divider",name:"orientation",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"horizontal"'},{value:'"vertical"'}]}},spacing:{defaultValue:null,description:`The margins along the primary axis of the divider.
When "horizontal" it's the top & bottom margin and when
"vertical" it's the left & right margin`,name:"spacing",required:!1,type:{name:"string | number | undefined"}},as:{defaultValue:null,description:"The HTML element type that will be used to render the divider.",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements> | undefined"}},id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",required:!1,type:{name:"Argument | Argument[]"}},size:{defaultValue:null,description:"Size of the component",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"small"'},{value:'"auto"'},{value:'"medium"'},{value:'"large"'},{value:'"full"'}]}},"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!1,type:{name:"string | undefined"}},"aria-labelledby":{defaultValue:null,description:"",name:"aria-labelledby",required:!1,type:{name:"string | undefined"}},"aria-describedby":{defaultValue:null,description:"",name:"aria-describedby",required:!1,type:{name:"string | undefined"}},"aria-details":{defaultValue:null,description:"",name:"aria-details",required:!1,type:{name:"string | undefined"}}}}}catch{}export{t as D};
