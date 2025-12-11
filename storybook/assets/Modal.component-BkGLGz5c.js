import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./index-BCtMShv3.js";import{$ as C,a as w,b as O,O as j}from"./context-AES9ne4t.js";import{a as F,b as H,$ as I}from"./useOverlayTriggerState-e1JH9f22.js";import{b as T}from"./useObjectRef-D2RG7rRi.js";import{u as V}from"./index-CsiUWFDz.js";import{u as B}from"./useRenderProps-CP918x9p.js";import{M as P}from"./Modal.context-C8xYzeAB.js";import{l as R}from"./layout-Dd7m2B0D.js";import{d as f}from"./styled-components.browser.esm-Y4FpNNpy.js";import{F as y}from"./Flex.component-BTH7Jim3.js";import{H as q}from"./Heading.component-7pgoIKIJ.js";import"./index-BDzxygkP.js";import{V as E}from"./View.component-DPlWqmzW.js";function k(e,o,t){let{overlayProps:a,underlayProps:n}=C({...e,isOpen:o.isOpen,onClose:o.close},t);return w({isDisabled:!o.isOpen}),F(),i.useEffect(()=>{if(o.isOpen&&t.current)return O([t.current])},[o.isOpen,t]),{modalProps:T(a),underlayProps:n}}const S=f.div`
  border-radius: calc(var(--radius) * 2);
  background-color: var(--neutral50);
  box-shadow: 0 10px 40px hsla(0, 0%, 0%, 0.25);

  &[data-placement="top"] {
    margin-top: 58px;
  }

  ${R.defaults({$width:"100%",$maxWidth:"800px",$p:"5"})};
`,z=f.div`
  position: fixed;
  min-height: 300px;
  inset: 0;
  background-color: hsla(0, 0%, 100%, 0.75);
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 1000;

  &[data-placement="center"] {
    display: grid;
    place-items: center;
    justify-content: initial;
  }
`;function u(e){const{children:o,isCentered:t,...a}=e;return l.jsx(H,{children:l.jsx(z,{...a,"data-placement":t?"center":"top",children:o})})}try{u.displayName="ModalOverlay",u.__docgenInfo={description:"",displayName:"ModalOverlay",props:{isCentered:{defaultValue:null,description:"",name:"isCentered",required:!1,type:{name:"boolean"}}}}}catch{}function _(e){return l.jsx(y,{$align:"center",$gap:"2",...e})}_.displayName="Modal.Header";try{Modal.Header.displayName="Modal.Header",Modal.Header.__docgenInfo={description:"",displayName:"Modal.Header",props:{}}}catch{}function M(e){return l.jsx(q,{$size:"5",style:{flexGrow:"1"},...e})}M.displayName="Modal.Title";try{Modal.Title.displayName="Modal.Title",Modal.Title.__docgenInfo={description:"",displayName:"Modal.Title",props:{}}}catch{}function h(e){return l.jsx(E,{$pt:"4",$pb:"5",...e})}h.displayName="Modal.Body";try{Modal.Body.displayName="Modal.Body",Modal.Body.__docgenInfo={description:"",displayName:"Modal.Body",props:{}}}catch{}function g(e){return l.jsx(y,{$align:"center",$justify:"end",$gap:"2",...e})}g.displayName="Modal.Footer";try{Modal.Footer.displayName="Modal.Footer",Modal.Footer.__docgenInfo={description:"",displayName:"Modal.Footer",props:{}}}catch{}function W(e,o){const{modalRef:t,ensureVisible:a,scrollOptions:n}=e,d=i.useRef(null);i.useEffect(()=>{var s;return o.isOpen&&a&&(d.current=document.activeElement,(s=t.current)==null||s.scrollIntoView(n)),()=>{var c;(c=d.current)!=null&&c.isConnected&&d.current.focus(),d.current=null}},[o.isOpen,a])}function r(e){let o=i.useRef(null);[e,o]=V(P,e,o);const{children:t,centered:a=!1,isCentered:n=a,...d}=e,s=i.useContext(j),c=I(e),p=s??c;return p.isOpen?l.jsx(D,{state:p,isCentered:n,...d,children:t}):null}function D(e){const{children:o,className:t,style:a,state:n,isCentered:d,isOpen:s,triggerRef:c,ensureVisible:p,...b}=e,m=i.useRef(null),{modalProps:x,underlayProps:$}=k(e,n,m);W({ensureVisible:p,modalRef:m,scrollOptions:{behavior:"instant",block:"end",inline:"nearest"}},n);const N=B({componentClassName:"aje-modal",children:o,className:t,style:a});return l.jsx(u,{isCentered:d,...$,children:l.jsx(S,{onClick:v=>v.stopPropagation(),ref:m,"data-placement":d?"center":"top",...b,...x,...N,children:typeof o=="function"?o(n.close):o})})}r.Header=_;r.Title=M;r.Body=h;r.Footer=g;try{r.displayName="Modal",r.__docgenInfo={description:"Modal Component to render content overlayed on top of the page content.",displayName:"Modal",props:{centered:{defaultValue:null,description:"Centers the modal within the viewport\n@deprecated Use `isCentered` instead",name:"centered",required:!1,type:{name:"boolean"}},isCentered:{defaultValue:null,description:"Centers the modal within the viewport",name:"isCentered",required:!1,type:{name:"boolean"}},ensureVisible:{defaultValue:null,description:`Ensures the modal is visible by scrolling it into view.

This is typically unnecessary since modals are automatically
centered in the browser viewport. However, when rendering
within an iframe that exceeds the parent viewport height,
the optimal placement cannot be determined. In this case,
the modal is positioned at the top of the page and
automatically scrolled into view.`,name:"ensureVisible",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<never>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<never>"}}}}}catch{}try{r.Header.displayName="Modal.Header",r.Header.__docgenInfo={description:"",displayName:"Modal.Header",props:{}}}catch{}try{r.Title.displayName="Modal.Title",r.Title.__docgenInfo={description:"",displayName:"Modal.Title",props:{}}}catch{}try{r.Body.displayName="Modal.Body",r.Body.__docgenInfo={description:"",displayName:"Modal.Body",props:{}}}catch{}try{r.Footer.displayName="Modal.Footer",r.Footer.__docgenInfo={description:"",displayName:"Modal.Footer",props:{}}}catch{}export{r as M};
