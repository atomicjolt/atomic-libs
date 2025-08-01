import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{r as b}from"./index-BCtMShv3.js";import{$ as w,b as x,e as k,f as J}from"./useObjectRef-D2RG7rRi.js";import{$ as I}from"./filterDOMProps-CeZl_uWj.js";import{$ as Q}from"./useFocusWithin-AgzTPs3-.js";import{$ as X}from"./useLabel-DDcndmXW.js";import{a as Y}from"./useSelectableList-DOP2QP6A.js";import{b as Z}from"./usePress-CzUfyTu7.js";import{v as ee,m as oe,j as O}from"./useFocusable-DacP9xvE.js";import{$ as ie}from"./getItemCount-CzsFhO7O.js";import{$ as te}from"./useHover-OH12LaHi.js";import{f as le}from"./useSelectableItem-CvsJxqRU.js";import{$ as re,a as ae}from"./CollectionBuilder-D7AJqdfd.js";import{u as F}from"./useRenderProps-CP918x9p.js";import{u as se}from"./useFocusRing-88kjlAJd.js";import{u as ne}from"./useForwardedRef-Tweo1nQG.js";import{u as A}from"./useCollectionRenderer-3wNxxKkU.js";import{P as de}from"./Provider-op_UCnZE.js";import{a as ce,b as ue}from"./Collection-DqSZYP0m.js";import{c as fe,u as pe}from"./index-CsiUWFDz.js";import{d as v}from"./styled-components.browser.esm-Y4FpNNpy.js";import{m as _}from"./mixins-XviowZ_6.js";import{L as me}from"./Label.component-CkFYuFtU.js";import{$ as be}from"./useListState-DGbAgUcw.js";import{D as xe}from"./Divider.component-DNSQqAMQ.js";const L=new WeakMap;function ve(e){return typeof e=="string"?e.replace(/\s*/g,""):""+e}function $e(e,o){let t=L.get(e);if(!t)throw new Error("Unknown list");return`${t.id}-option-${ve(o)}`}function he(e,o,t){let r=I(e,{labelable:!0}),s=e.selectionBehavior||"toggle",a=e.linkBehavior||(s==="replace"?"action":"override");s==="toggle"&&a==="action"&&(a="override");let{listProps:i}=Y({...e,ref:t,selectionManager:o.selectionManager,collection:o.collection,disabledKeys:o.disabledKeys,linkBehavior:a}),{focusWithinProps:d}=Q({onFocusWithin:e.onFocus,onBlurWithin:e.onBlur,onFocusWithinChange:e.onFocusChange}),c=w(e.id);L.set(o,{id:c,shouldUseVirtualFocus:e.shouldUseVirtualFocus,shouldSelectOnPressUp:e.shouldSelectOnPressUp,shouldFocusOnHover:e.shouldFocusOnHover,isVirtualized:e.isVirtualized,onAction:e.onAction,linkBehavior:a});let{labelProps:u,fieldProps:f}=X({...e,id:c,labelElementType:"span"});return{labelProps:u,listBoxProps:x(r,d,o.selectionManager.selectionMode==="multiple"?{"aria-multiselectable":"true"}:{},{role:"listbox",...x(f,i)})}}function ge(e,o,t){var r,s;let{key:a}=e,i=L.get(o);var d;let c=(d=e.isDisabled)!==null&&d!==void 0?d:o.selectionManager.isDisabled(a);var u;let f=(u=e.isSelected)!==null&&u!==void 0?u:o.selectionManager.isSelected(a);var h;let V=(h=e.shouldSelectOnPressUp)!==null&&h!==void 0?h:i==null?void 0:i.shouldSelectOnPressUp;var g;let S=(g=e.shouldFocusOnHover)!==null&&g!==void 0?g:i==null?void 0:i.shouldFocusOnHover;var P;let D=(P=e.shouldUseVirtualFocus)!==null&&P!==void 0?P:i==null?void 0:i.shouldUseVirtualFocus;var y;let j=(y=e.isVirtualized)!==null&&y!==void 0?y:i==null?void 0:i.isVirtualized,R=k(),C=k(),p={role:"option","aria-disabled":c||void 0,"aria-selected":o.selectionManager.selectionMode!=="none"?f:void 0};ee()&&oe()||(p["aria-label"]=e["aria-label"],p["aria-labelledby"]=R,p["aria-describedby"]=C);let n=o.collection.getItem(a);if(j){let m=Number(n==null?void 0:n.index);p["aria-posinset"]=Number.isNaN(m)?void 0:m+1,p["aria-setsize"]=ie(o.collection)}let z=i!=null&&i.onAction?()=>{var m;return i==null||(m=i.onAction)===null||m===void 0?void 0:m.call(i,a)}:void 0,N=$e(o,a),{itemProps:H,isPressed:T,isFocused:M,hasAction:E,allowsSelection:W}=le({selectionManager:o.selectionManager,key:a,ref:t,shouldSelectOnPressUp:V,allowsDifferentPressOrigin:V&&S,isVirtualized:j,shouldUseVirtualFocus:D,isDisabled:c,onAction:z||!(n==null||(r=n.props)===null||r===void 0)&&r.onAction?J(n==null||(s=n.props)===null||s===void 0?void 0:s.onAction,z):void 0,linkBehavior:i==null?void 0:i.linkBehavior,id:N}),{hoverProps:K}=te({isDisabled:c||!S,onHoverStart(){O()||(o.selectionManager.setFocused(!0),o.selectionManager.setFocusedKey(a))}}),U=I(n==null?void 0:n.props);delete U.id;let G=Z(n==null?void 0:n.props);return{optionProps:{...p,...x(U,H,K,G),id:N},labelProps:{id:R},descriptionProps:{id:C},isFocused:M,isFocusVisible:M&&o.selectionManager.isFocused&&O(),isSelected:f,isDisabled:c,isPressed:T,allowsSelection:W,hasAction:E}}function Pe(e){let{heading:o,"aria-label":t}=e,r=w();return{itemProps:{role:"presentation"},headingProps:o?{id:r,role:"presentation"}:{},groupProps:{role:"group","aria-label":t,"aria-labelledby":o?r:void 0}}}const ye=v.ul`
  list-style: none;
  background-color: var(--listbox-bg-clr);
  padding: 8px 0;
  margin: 0;
  min-width: var(--trigger-width, auto);

  &:focus {
    outline: none;
  }
`,_e=v.ul`
  list-style: none;
  padding: 0px;
`,Be=v.span`
  ${_.Regular}
  color: var(--text-clr-alt);
  line-height: 1;
  padding: 6px 24px 6px 16px;
  font-size: 1.2rem;
  text-transform: uppercase;
`,Fe=v.li`
  ${_.Regular}
  ${_.FocusVisible()}
  text-decoration: none;
  position: relative;
  display: flex;
  align-items: center;
  border: none;
  width: 100%;
  gap: 12px;
  padding: 6px 24px 6px 16px;
  min-height: var(--listbox-item-height);
  line-height: 1;
  font-size: var(--listbox-font-size);
  white-space: nowrap;
  margin: 2px 0px;
  background-color: var(--listbox-bg-clr);
  color: var(--listbox-text-clr, inherit);

  --listbox-icon-clr: var(--text-clr);
  --outline: 1px solid var(--listbox-text-clr);

  i {
    font-size: 2rem;
    color: var(--listbox-icon-clr);
  }

  &:hover {
    --listbox-bg-clr: var(--neutral100);
    cursor: pointer;
  }

  &[data-focus-visible="true"] {
    --listbox-bg-clr: var(--background-clr-alt);
  }

  &[aria-selected="true"] {
    --listbox-icon-clr: var(--text-clr-inverted);
    --listbox-bg-clr: var(--accent-clr);
    color: var(--text-clr-inverted);
  }

  &[aria-selected="true"][data-focus-visible="true"],
  &:hover[aria-selected="true"] {
    --listbox-bg-clr: var(--accent-clr-alt);
    color: var(--text-clr-inverted);
  }

  &[aria-disabled] {
    color: var(--neutral400);
  }
`,$=b.createContext(null),Le=fe(),B=b.forwardRef(function(o,t){const r=b.useContext($);return[o,t]=pe(Le,o,t),r?l.jsx(q,{...o,state:r,listBoxRef:t}):l.jsx(re,{content:l.jsx(ae,{...o}),children:s=>l.jsx(Ve,{...o,collection:s,listBoxRef:t})})});B.displayName="ListBox";function Ve(e){const o=be(e);return l.jsx(q,{...e,state:o})}function q(e){const{state:o,className:t,size:r="medium",listBoxRef:s}=e,{listBoxProps:a,labelProps:i}=he(e,o,s),{CollectionRenderer:d}=A(),c=F({componentClassName:"aje-listbox",className:t,size:r});return l.jsxs(l.Fragment,{children:[e.label&&l.jsx(me,{...i,children:e.label}),l.jsx(ye,{...a,...c,ref:s,children:l.jsx(de,{values:[[ce.Provider,{render:je}],[ue.Provider,{render:Se}],[$.Provider,o]],children:l.jsx(d,{collection:o.collection})})})]})}function Se(e,o,t){const r=b.useContext($),{itemProps:s,headingProps:a,groupProps:i}=Pe({heading:t.rendered,"aria-label":t["aria-label"]}),d=F({componentClassName:"aje-listbox__section",...e,children:e.title}),{CollectionBranchRenderer:c}=A();return l.jsxs(l.Fragment,{children:[t.key!==r.collection.getFirstKey()&&l.jsx(xe,{as:"li"}),l.jsxs("li",{...s,ref:o,children:[d.children&&l.jsx(Be,{...a,children:d.children}),l.jsx(_e,{...i,...d,children:l.jsx(c,{collection:r.collection,parent:t})})]})]})}function je(e,o,t){const r=b.useContext($),s=ne(o),{optionProps:a,isSelected:i}=ge({key:t.key},r,s),{focusProps:d,isFocused:c,isFocusVisible:u}=se(),f=F({componentClassName:"aje-listbox__item",...e,children:t.rendered,values:{isSelected:i,isFocused:c,isFocusVisible:u},selectors:{"data-selected":i}});return l.jsx(Fe,{...x(a,d),...f,as:e.href?"a":"li",ref:s,children:f.children})}try{B.displayName="ListBox",B.__docgenInfo={description:"",displayName:"ListBox",props:{state:{defaultValue:null,description:"",name:"state",required:!0,type:{name:"ListState<T>"}},listBoxRef:{defaultValue:null,description:"",name:"listBoxRef",required:!0,type:{name:"RefObject<HTMLUListElement>"}},size:{defaultValue:null,description:"The size of the listbox",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"auto"'},{value:'"full"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<never>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<never>"}}}}}catch{}try{InternalListBox.displayName="InternalListBox",InternalListBox.__docgenInfo={description:"",displayName:"InternalListBox",props:{state:{defaultValue:null,description:"",name:"state",required:!0,type:{name:"ListState<T>"}},listBoxRef:{defaultValue:null,description:"",name:"listBoxRef",required:!0,type:{name:"RefObject<HTMLUListElement>"}},size:{defaultValue:null,description:"The size of the listbox",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"auto"'},{value:'"full"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<never>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<never>"}}}}}catch{}export{L as $,B as L,Le as a,$ as b,$e as c};
