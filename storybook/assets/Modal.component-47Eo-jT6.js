import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./index-BCtMShv3.js";import{$ as C,a as v,b as j,O as F}from"./context-XEak4h-o.js";import{a as H,b as B,$ as O}from"./useOverlayTriggerState-RNOws59S.js";import{a as P}from"./useObjectRef-B4hnndUj.js";import{u as T}from"./index-C_lK3xe_.js";import{u as I}from"./useRenderProps-CP918x9p.js";import{M as w}from"./Modal.context-DeNpn0p-.js";import{l as R}from"./layout-C5ppTKTq.js";import{d as _}from"./styled-components.browser.esm-Y4FpNNpy.js";import{F as f}from"./Flex.component-JgdrVooY.js";import{H as V}from"./Heading.component-KWSE8gU8.js";import{V as q}from"./index-Da1sTSEb.js";function k(e,o,a){let{overlayProps:d,underlayProps:n}=C({...e,isOpen:o.isOpen,onClose:o.close},a);return v({isDisabled:!o.isOpen}),H(),i.useEffect(()=>{if(o.isOpen&&a.current)return j([a.current])},[o.isOpen,a]),{modalProps:P(d),underlayProps:n}}const S=_.div`
  ${({$isCentered:e})=>!e&&"margin-top: 58px;"}
  ${R.defaults({$width:"100%",$maxWidth:"800px",$p:"5"})};

  border-radius: calc(var(--radius) * 2);
  background-color: var(--neutral50);
  box-shadow: 0 10px 40px hsla(0, 0%, 0%, 0.25);
`,E=_.div`
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
`;function c(e){const{children:o,isCentered:a,...d}=e;return t.jsx(B,{children:t.jsx(E,{...d,"data-placement":a?"center":"top",children:o})})}try{c.displayName="ModalOverlay",c.__docgenInfo={description:"",displayName:"ModalOverlay",props:{isCentered:{defaultValue:null,description:"",name:"isCentered",required:!1,type:{name:"boolean"}}}}}catch{}function u(e){return t.jsx(f,{$align:"center",$gap:"2",...e})}u.displayName="Modal.Header";try{Modal.Header.displayName="Modal.Header",Modal.Header.__docgenInfo={description:"",displayName:"Modal.Header",props:{}}}catch{}function M(e){return t.jsx(V,{$size:"5",style:{flexGrow:"1"},...e})}M.displayName="Modal.Title";try{Modal.Title.displayName="Modal.Title",Modal.Title.__docgenInfo={description:"",displayName:"Modal.Title",props:{}}}catch{}function $(e){return t.jsx(q,{$pt:"4",$pb:"5",...e})}$.displayName="Modal.Body";try{Modal.Body.displayName="Modal.Body",Modal.Body.__docgenInfo={description:"",displayName:"Modal.Body",props:{}}}catch{}function x(e){return t.jsx(f,{$align:"center",$justify:"end",$gap:"2",...e})}x.displayName="Modal.Footer";try{Modal.Footer.displayName="Modal.Footer",Modal.Footer.__docgenInfo={description:"",displayName:"Modal.Footer",props:{}}}catch{}function r(e){let o=i.useRef(null);[e,o]=T(w,e,o);const{children:a,centered:d=!1,isCentered:n=d,...l}=e,p=i.useContext(F),y=O(e),s=p??y;return s.isOpen?t.jsx(z,{state:s,isCentered:n,...l,children:a}):null}function z(e){const{children:o,className:a,style:d,state:n,isCentered:l,isOpen:p,triggerRef:y,...s}=e,m=i.useRef(null),{modalProps:g,underlayProps:h}=k(e,n,m),N=I({componentClassName:"aje-modal",children:o,className:a,style:d});return t.jsx(c,{isCentered:l,...h,children:t.jsx(S,{onClick:b=>b.stopPropagation(),ref:m,$isCentered:l,...s,...g,...N,children:typeof o=="function"?o(n.close):o})})}r.Header=u;r.Title=M;r.Body=$;r.Footer=x;try{r.displayName="Modal",r.__docgenInfo={description:"Modal Component to render content overlayed on top of the page content.",displayName:"Modal",props:{centered:{defaultValue:null,description:"Centers the modal within the viewport\n@deprecated Use `isCentered` instead",name:"centered",required:!1,type:{name:"boolean"}},isCentered:{defaultValue:null,description:"Centers the modal within the viewport",name:"isCentered",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<never>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<never>"}}}}}catch{}try{r.Header.displayName="Modal.Header",r.Header.__docgenInfo={description:"",displayName:"Modal.Header",props:{}}}catch{}try{r.Title.displayName="Modal.Title",r.Title.__docgenInfo={description:"",displayName:"Modal.Title",props:{}}}catch{}try{r.Body.displayName="Modal.Body",r.Body.__docgenInfo={description:"",displayName:"Modal.Body",props:{}}}catch{}try{r.Footer.displayName="Modal.Footer",r.Footer.__docgenInfo={description:"",displayName:"Modal.Footer",props:{}}}catch{}export{r as M};
