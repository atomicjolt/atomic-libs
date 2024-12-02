import{j as i}from"./jsx-runtime-CkxqCPlQ.js";import{r as f}from"./index-DJO9vBfz.js";import{$ as b,a as $,b as v,O as N}from"./context-C5Zmhtj1.js";import{a as M,$ as j,b as T}from"./useOverlayTriggerState-DMR8aBHV.js";import{$ as w}from"./useObjectRef-C4RVQRRU.js";import{u as V}from"./variants-Dln-jX-v.js";import{d as o}from"./styled-components.browser.esm-WCay-hu9.js";import{m as x}from"./mixins-TlkgTuSN.js";import{C as q}from"./Inputs.styles-D8K_qOL9.js";import{c as m}from"./index-i5X67GZP.js";import{a as C}from"./index-CXdyvu6V.js";import{M as P}from"./Modal.context-CgaJxV6U.js";function A(e,r,t){let{overlayProps:l,underlayProps:d}=b({...e,isOpen:r.isOpen,onClose:r.close},t);return $({isDisabled:!r.isOpen}),M(),f.useEffect(()=>{if(r.isOpen)return v([t.current])},[r.isOpen,t]),{modalProps:w(l),underlayProps:d}}const u=o.div.attrs({className:"aje-modal__top"})`
  display: flex;
  align-items: center;
  gap: 8px;
`,y=o.h2.attrs({className:"aje-modal__title"})`
  ${x.Bold}
  margin: 0;
  font-size: 2rem;
  ${({fill:e=!0})=>e&&"flex: 1;"}
  line-height: 1;
  color: var(--text-clr);
`,h=o.div.attrs({className:"aje-modal__main"})`
  ${x.Regular}
  padding: 16px 0 24px;
  font-size: 1.6rem;
  color: var(--text-clr);
  line-height: 1.5;
`,g=o.div.attrs({className:"aje-modal__bottom"})`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
`,B=o.div`
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
`,O=o.div`
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

    ${q} {
      color: var(--text-clr-inverted);
    }

    ${u} {
      color: var(--error700) !important;
    }

    ${y} {
      color: var(--error700) !important;
    }
  }
`;function a(e){const{children:r,centered:t=!1,variant:l="default",className:d,...s}=C(P,e),c=f.useContext(N),p=j(e),n=c??p,_=V("aje-modal",l);return n.isOpen?i.jsx(W,{...s,state:n,className:m(d,_),centered:t,children:r}):null}function W(e){const{children:r,state:t,centered:l,className:d}=e,s=f.useRef(null),{modalProps:c,underlayProps:p}=A(e,t,s);return i.jsx(T,{children:i.jsx(B,{...p,className:m({"is-centered":l}),children:i.jsx(O,{className:m("aje-modal",d),onClick:n=>n.stopPropagation(),ref:s,id:e.id,...c,children:typeof r=="function"?r(t.close):r})})})}u.displayName="Modal.Header";a.Header=u;y.displayName="Modal.Title";a.Title=y;h.displayName="Modal.Body";a.Body=h;g.displayName="Modal.Footer";a.Footer=g;try{a.Header.displayName="Modal.Header",a.Header.__docgenInfo={description:"Modal Component to render content overlayed on top of the page content.",displayName:"Modal.Header",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},centered:{defaultValue:null,description:"Centers the modal within the viewport",name:"centered",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",required:!1,type:{name:"Argument | Argument[]"}}}}}catch{}try{a.Title.displayName="Modal.Title",a.Title.__docgenInfo={description:"",displayName:"Modal.Title",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{a.Body.displayName="Modal.Body",a.Body.__docgenInfo={description:"",displayName:"Modal.Body",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{a.Footer.displayName="Modal.Footer",a.Footer.__docgenInfo={description:"",displayName:"Modal.Footer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}export{a as M};
