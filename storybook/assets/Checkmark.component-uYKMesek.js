import{j as t}from"./jsx-runtime-CkxqCPlQ.js";import{u as i}from"./useRenderProps-Bk8BH60l.js";import{m}from"./mixins-B7X2BZyR.js";import{m as o,d as n}from"./styled-components.browser.esm-BQf_XqKi.js";const l=o`
  0% {
    opacity: 0;
    transform: rotate(90deg) scale(0);
  }
  100% {
    opacity: 1;
    transform: rotate(45deg) scale(1);
  }
`,c=n.span`
  ${m.Sizing}
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
  animation: ${l} 300ms cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
`;function a(e){const{size:r="medium"}=e,s=i({...e,componentClassName:"aje-checkmark",size:r});return t.jsx(c,{...s,"data-testid":"checkmark"})}try{a.displayName="Checkmark",a.__docgenInfo={description:"",displayName:"Checkmark",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<never>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<never>"}}}}}catch{}export{a as C};
