import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./index-BCtMShv3.js";import{$ as C,a as w,b as O,O as j}from"./context-BGWN95Kf.js";import{a as F,b as H,$ as I}from"./useOverlayTriggerState-B3l5rho6.js";import{a as T}from"./useObjectRef-B4hnndUj.js";import{u as V}from"./index-BIzvBz7y.js";import{u as B}from"./useRenderProps-CP918x9p.js";import{M as P}from"./Modal.context-C4bKqInT.js";import{l as R}from"./layout-Dd7m2B0D.js";import{g as f}from"./styled-components.browser.esm-DC3GK9Rn.js";import{F as y}from"./Flex.component-CMKfz10l.js";import{H as k}from"./Heading.component-CiqYplH7.js";import{V as q}from"./index-C6TbfuW_.js";function E(e,o,a){let{overlayProps:t,underlayProps:n}=C({...e,isOpen:o.isOpen,onClose:o.close},a);return w({isDisabled:!o.isOpen}),F(),i.useEffect(()=>{if(o.isOpen&&a.current)return O([a.current])},[o.isOpen,a]),{modalProps:T(t),underlayProps:n}}const S=f.div`
  border-radius: calc(var(--radius) * 2);
  background-color: var(--background-clr-raised);
  box-shadow: var(--shadow-lg);

  &[data-placement="top"] {
    margin-top: 58px;
  }

  ${R.defaults({$width:"100%",$maxWidth:"800px",$p:"5"})};
`,z=f.div`
  position: fixed;
  min-height: 300px;
  inset: 0;
  background-color: var(--backdrop-clr);
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
`;function m(e){const{children:o,isCentered:a,...t}=e;return l.jsx(H,{children:l.jsx(z,{...t,"data-placement":a?"center":"top",children:o})})}try{m.displayName="ModalOverlay",m.__docgenInfo={description:"",displayName:"ModalOverlay",props:{isCentered:{defaultValue:null,description:"",name:"isCentered",required:!1,type:{name:"boolean | undefined"}}}}}catch{}function _(e){return l.jsx(y,{$align:"center",$gap:"2",...e})}_.displayName="Modal.Header";try{Modal.Header.displayName="Modal.Header",Modal.Header.__docgenInfo={description:"",displayName:"Modal.Header",props:{}}}catch{}function g(e){return l.jsx(k,{$size:"5",style:{flexGrow:"1"},...e})}g.displayName="Modal.Title";try{Modal.Title.displayName="Modal.Title",Modal.Title.__docgenInfo={description:"",displayName:"Modal.Title",props:{}}}catch{}function M(e){return l.jsx(q,{$pt:"4",$pb:"5",...e})}M.displayName="Modal.Body";try{Modal.Body.displayName="Modal.Body",Modal.Body.__docgenInfo={description:"",displayName:"Modal.Body",props:{}}}catch{}function h(e){return l.jsx(y,{$align:"center",$justify:"end",$gap:"2",...e})}h.displayName="Modal.Footer";try{Modal.Footer.displayName="Modal.Footer",Modal.Footer.__docgenInfo={description:"",displayName:"Modal.Footer",props:{}}}catch{}function W(e,o){const{modalRef:a,ensureVisible:t,scrollOptions:n}=e,d=i.useRef(null);i.useEffect(()=>{var s;return o.isOpen&&t&&(d.current=document.activeElement,(s=a.current)==null||s.scrollIntoView(n)),()=>{var c;(c=d.current)!=null&&c.isConnected&&d.current.focus(),d.current=null}},[o.isOpen,t])}function r(e){let o=i.useRef(null);[e,o]=V(P,e,o);const{children:a,centered:t=!1,isCentered:n=t,...d}=e,s=i.useContext(j),c=I(e),p=s??c;return p.isOpen?l.jsx(D,{state:p,isCentered:n,...d,children:a}):null}function D(e){const{children:o,className:a,style:t,state:n,isCentered:d,isOpen:s,triggerRef:c,ensureVisible:p,...b}=e,u=i.useRef(null),{modalProps:$,underlayProps:x}=E(e,n,u);W({ensureVisible:p,modalRef:u,scrollOptions:{behavior:"instant",block:"end",inline:"nearest"}},n);const N=B({componentClassName:"aje-modal",children:o,className:a,style:t});return l.jsx(m,{isCentered:d,...x,children:l.jsx(S,{onClick:v=>v.stopPropagation(),ref:u,"data-placement":d?"center":"top",...b,...$,...N,children:typeof o=="function"?o(n.close):o})})}r.Header=_;r.Title=g;r.Body=M;r.Footer=h;try{r.displayName="Modal",r.__docgenInfo={description:"Modal Component to render content overlayed on top of the page content.",displayName:"Modal",props:{centered:{defaultValue:null,description:"Centers the modal within the viewport\n@deprecated Use `isCentered` instead",name:"centered",required:!1,type:{name:"boolean | undefined"}},isCentered:{defaultValue:null,description:"Centers the modal within the viewport",name:"isCentered",required:!1,type:{name:"boolean | undefined"}},ensureVisible:{defaultValue:null,description:`Ensures the modal is visible by scrolling it into view.

This is typically unnecessary since modals are automatically
centered in the browser viewport. However, when rendering
within an iframe that exceeds the parent viewport height,
the optimal placement cannot be determined. In this case,
the modal is positioned at the top of the page and
automatically scrolled into view.`,name:"ensureVisible",required:!1,type:{name:"boolean | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<never>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<never> | undefined"}}}}}catch{}try{r.Header.displayName="Modal.Header",r.Header.__docgenInfo={description:"",displayName:"Modal.Header",props:{}}}catch{}try{r.Title.displayName="Modal.Title",r.Title.__docgenInfo={description:"",displayName:"Modal.Title",props:{}}}catch{}try{r.Body.displayName="Modal.Body",r.Body.__docgenInfo={description:"",displayName:"Modal.Body",props:{}}}catch{}try{r.Footer.displayName="Modal.Footer",r.Footer.__docgenInfo={description:"",displayName:"Modal.Footer",props:{}}}catch{}export{r as M};
