import{j as u}from"./jsx-runtime-D_zvdyIk.js";import{d as c}from"./styled-components.browser.esm-S-CusIP4.js";import{f as p,l as m}from"./layout-ez2uQdt_.js";import{u as h}from"./useRenderProps-BzxgHqRb.js";const f=c.div`
  ${p}
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
`;function o(r){const{children:d,isMerged:i,className:a,id:s,style:l,$direction:t="row",...n}=r,e=h({componentClassName:"aje-group",className:a,children:d,style:l,selectors:{"data-merged":i}});return u.jsx(f,{role:"group",id:s,"data-direction":t,$direction:t,...e,...n,children:e.children})}try{o.displayName="Group",o.__docgenInfo={description:"Component used to logically and visually group a set of components together",displayName:"Group",props:{isMerged:{defaultValue:null,description:"",name:"isMerged",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"div"'},{value:'"span"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<never>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<never>"}}}}}catch{}export{o as G};
