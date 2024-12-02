import{j as s}from"./jsx-runtime-CkxqCPlQ.js";import{d as u}from"./styled-components.browser.esm-WCay-hu9.js";import{c as d}from"./index-i5X67GZP.js";const m=u.div`
  display: flex;
  gap: ${({gap:e})=>e===void 0?8:e}px;

  &.is-merged {
    gap: 0;

    // Stops button from moving when you click on them
    & > *.is-active {
      transform: none;
    }
  }

  &.is-column {
    flex-direction: column;

    &.is-merged > {
      :first-child,
      :first-child input {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border-bottom: 0;
      }

      :not(:first-child):not(:last-child),
      :not(:first-child):not(:last-child) input {
        border-bottom: 0;
        border-radius: 0;
      }

      :last-child,
      :last-child input {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
    }
  }

  &.is-row {
    flex-direction: row;

    &.is-merged > {
      :first-child,
      :first-child input {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-right: 0;
      }

      :not(:first-child):not(:last-child),
      :not(:first-child):not(:last-child) input {
        border-right: 0;
        border-radius: 0;
      }

      :last-child,
      :last-child input {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }
  }
`;function r(e){const{children:o,isMerged:l,className:a,id:i,gap:n,direction:t="row"}=e;return s.jsx(m,{role:"group",id:i,className:d("aje-group",a,{"is-merged":l,"is-column":t==="column","is-row":t==="row"}),gap:n,children:o})}try{r.displayName="Group",r.__docgenInfo={description:"Component used to logically and visually group a set of components together",displayName:"Group",props:{gap:{defaultValue:null,description:"Configure the gap between each child",name:"gap",required:!1,type:{name:"number"}},isMerged:{defaultValue:null,description:`When true, the gap will be completly removed and
children will be grouped into a single visual element.`,name:"isMerged",required:!1,type:{name:"boolean"}},direction:{defaultValue:null,description:"Configure the flex axis of the group",name:"direction",required:!1,type:{name:"enum",value:[{value:'"column"'},{value:'"row"'}]}},id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",required:!1,type:{name:"Argument | Argument[]"}},size:{defaultValue:null,description:"Size of the component",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"auto"'},{value:'"full"'}]}}}}}catch{}try{Group.displayName="Group",Group.__docgenInfo={description:"Component used to logically and visually group a set of components together",displayName:"Group",props:{gap:{defaultValue:null,description:"Configure the gap between each child",name:"gap",required:!1,type:{name:"number"}},isMerged:{defaultValue:null,description:`When true, the gap will be completly removed and
children will be grouped into a single visual element.`,name:"isMerged",required:!1,type:{name:"boolean"}},direction:{defaultValue:null,description:"Configure the flex axis of the group",name:"direction",required:!1,type:{name:"enum",value:[{value:'"column"'},{value:'"row"'}]}},id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",required:!1,type:{name:"Argument | Argument[]"}},size:{defaultValue:null,description:"Size of the component",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"auto"'},{value:'"full"'}]}}}}}catch{}export{r as G};
