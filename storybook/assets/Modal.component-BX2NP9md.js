import{j as i}from"./jsx-runtime-CkxqCPlQ.js";import{r as s}from"./index-DJO9vBfz.js";import{$ as g,a as h,b,O as $}from"./context-C-yxdEES.js";import{a as v,$ as M,b as N}from"./useOverlayTriggerState-D-lvPMs5.js";import{a as j}from"./useObjectRef-CjtaasUj.js";import{d}from"./styled-components.browser.esm-BQf_XqKi.js";import{m as y}from"./mixins-D6ZuOvce.js";import{c as T}from"./index-i5X67GZP.js";import{u as w}from"./index-Co2NqHf1.js";import{M as q}from"./Modal.context-DYVCbjuu.js";import{u as V}from"./useRenderProps-Bk8BH60l.js";import{$ as P}from"./filterDOMProps-CeZl_uWj.js";function C(e,a,t){let{overlayProps:l,underlayProps:o}=g({...e,isOpen:a.isOpen,onClose:a.close},t);return h({isDisabled:!a.isOpen}),v(),s.useEffect(()=>{if(a.isOpen)return b([t.current])},[a.isOpen,t]),{modalProps:j(l),underlayProps:o}}const u=d.div.attrs({className:"aje-modal__top"})`
  display: flex;
  align-items: center;
  gap: 8px;
`,f=d.h2.attrs({className:"aje-modal__title"})`
  ${y.Bold}
  margin: 0;
  font-size: 2rem;
  ${({fill:e=!0})=>e&&"flex: 1;"}
  line-height: 1;
  color: var(--text-clr);
`,x=d.div.attrs({className:"aje-modal__main"})`
  ${y.Regular}
  padding: 16px 0 24px;
  font-size: 1.6rem;
  color: var(--text-clr);
  line-height: 1.5;
`,_=d.div.attrs({className:"aje-modal__bottom"})`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
`,B=d.div`
  position: fixed;
  min-height: 300px;
  inset: 0;
  background-color: hsla(0, 0%, 100%, 0.75);
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 1000;

  &.is-centered {
    display: grid;
    place-items: center;
    justify-content: initial;

    .aje-modal {
      margin: 0;
    }
  }
`,O=d.div`
  width: 90%;
  max-width: 800px;
  border-radius: 10px;
  background-color: var(--neutral50);
  padding: 24px;
  box-shadow: 0 10px 40px hsla(0, 0%, 0%, 0.25);
  margin-top: 56px;

  &.aje-modal--popup {
    max-width: 400px;
  }

  &.aje-modal--error {
    max-width: 400px;

    .aje-modal__top > i {
      color: var(--error700);
    }
  }

  &.aje-modal--developer-error {
    max-width: 1200px;
    background-color: #181818;

    ${u} {
      color: var(--error700) !important;
    }

    ${f} {
      color: var(--error700) !important;
    }
  }
`;function r(e){let a=s.useRef(null);[e,a]=w(q,e,a);const{children:t,centered:l=!1,variant:o="default",...c}=e,p=s.useContext($),m=M(e),n=p??m;return n.isOpen?i.jsx(F,{state:n,centered:l,variant:o,...c,children:t}):null}function F(e){const{children:a,state:t,centered:l}=e,o=s.useRef(null),{modalProps:c,underlayProps:p}=C(e,t,o),m=V({componentClassName:"aje-modal",...e});return i.jsx(N,{children:i.jsx(B,{...p,className:T({"is-centered":l}),children:i.jsx(O,{...m,...P(e),onClick:n=>n.stopPropagation(),ref:o,id:e.id,...c,children:typeof a=="function"?a(t.close):a})})})}u.displayName="Modal.Header";r.Header=u;f.displayName="Modal.Title";r.Title=f;x.displayName="Modal.Body";r.Body=x;_.displayName="Modal.Footer";r.Footer=_;try{r.Header.displayName="Modal.Header",r.Header.__docgenInfo={description:"Modal Component to render content overlayed on top of the page content.",displayName:"Modal.Header",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},centered:{defaultValue:null,description:"Centers the modal within the viewport",name:"centered",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<never>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<never>"}}}}}catch{}try{r.Title.displayName="Modal.Title",r.Title.__docgenInfo={description:"",displayName:"Modal.Title",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{r.Body.displayName="Modal.Body",r.Body.__docgenInfo={description:"",displayName:"Modal.Body",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{r.Footer.displayName="Modal.Footer",r.Footer.__docgenInfo={description:"",displayName:"Modal.Footer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}export{r as M};
