import{j as u}from"./jsx-runtime-D_zvdyIk.js";import{d as p}from"./styled-components.browser.esm-CROIn_Sd.js";import{f as c,l as m}from"./layout-Dd7m2B0D.js";import{u as f}from"./useRenderProps-CP918x9p.js";const h=p.div`
  ${c}
  ${m}

  &[data-merged] {
    gap: 0;

    // Stops button from moving when you click on them
    & > [data-pressed="true"] {
      transform: none;
    }
  }

  &[data-direction="column"] {
    &[data-merged] > {
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

  &[data-direction="column-reverse"] {
    &[data-merged] > {
      :first-child,
      :first-child input {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        border-top: 0;
      }

      :not(:first-child):not(:last-child),
      :not(:first-child):not(:last-child) input {
        border-top: 0;
        border-radius: 0;
      }

      :last-child,
      :last-child input {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
    }
  }

  &[data-direction="row"] {
    &[data-merged] > {
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

  &[data-direction="row-reverse"] {
    &[data-merged] > {
      :first-child,
      :first-child input {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-left: 0;
      }

      :not(:first-child):not(:last-child),
      :not(:first-child):not(:last-child) input {
        border-left: 0;
        border-radius: 0;
      }

      :last-child,
      :last-child input {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
    }
  }
`;function o(e){const{children:d,isMerged:a,className:i,id:l,style:s,$direction:r="row",...n}=e,t=f({componentClassName:"aje-group",className:i,children:d,style:s,selectors:{"data-merged":a}});return u.jsx(h,{role:"group",id:l,"data-direction":r,$direction:r,...t,...n,children:t.children})}try{o.displayName="Group",o.__docgenInfo={description:"Component used to logically and visually group a set of components together",displayName:"Group",props:{isMerged:{defaultValue:null,description:"",name:"isMerged",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"div"'},{value:'"span"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<never>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<never>"}}}}}catch{}try{Group.displayName="Group",Group.__docgenInfo={description:"Component used to logically and visually group a set of components together",displayName:"Group",props:{isMerged:{defaultValue:null,description:"",name:"isMerged",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"div"'},{value:'"span"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<never>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<never>"}}}}}catch{}export{o as G};
