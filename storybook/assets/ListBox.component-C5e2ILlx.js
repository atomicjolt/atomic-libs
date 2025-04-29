import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{r as x}from"./index-BCtMShv3.js";import{$ as N,b as m,e as w,f as J}from"./useObjectRef-D2RG7rRi.js";import{$ as A}from"./filterDOMProps-CeZl_uWj.js";import{$ as Q}from"./useFocusWithin-BshFo8_g.js";import{$ as X}from"./useLabel-DDcndmXW.js";import{a as Y}from"./useSelectableList-Ds66KyIO.js";import{b as Z}from"./usePress-B9aiz4Kw.js";import{v as ee,m as oe,j as O}from"./useFocusable-DacP9xvE.js";import{$ as ie}from"./getItemCount-Cm3pwbxO.js";import{$ as te}from"./useHover-Cc-utFbH.js";import{f as le}from"./useSelectableItem-Kg4f-Zia.js";import{$ as re,a as se}from"./CollectionBuilder-D7AJqdfd.js";import{u as B}from"./useRenderProps-CP918x9p.js";import{u as ae}from"./useFocusRing-CLjBjOxD.js";import{u as ne}from"./useForwardedRef-Tweo1nQG.js";import{u as D}from"./useCollectionRenderer-qIlVmK1t.js";import{P as de}from"./Provider-op_UCnZE.js";import{a as ce,b as ue}from"./Collection-DqSZYP0m.js";import{c as fe,u as pe}from"./index-CsiUWFDz.js";import{d as v}from"./styled-components.browser.esm-Y4FpNNpy.js";import{m as y}from"./mixins-XviowZ_6.js";import{L as be}from"./Label.component-CkFYuFtU.js";import{$ as xe}from"./useListState-CznNPLiL.js";import{D as me}from"./Divider.component-DNSQqAMQ.js";const j=new WeakMap;function ve(e){return typeof e=="string"?e.replace(/\s*/g,""):""+e}function $e(e,o){let t=j.get(e);if(!t)throw new Error("Unknown list");return`${t.id}-option-${ve(o)}`}function he(e,o,t){let r=A(e,{labelable:!0}),a=e.selectionBehavior||"toggle",s=e.linkBehavior||(a==="replace"?"action":"override");a==="toggle"&&s==="action"&&(s="override");let{listProps:i}=Y({...e,ref:t,selectionManager:o.selectionManager,collection:o.collection,disabledKeys:o.disabledKeys,linkBehavior:s}),{focusWithinProps:d}=Q({onFocusWithin:e.onFocus,onBlurWithin:e.onBlur,onFocusWithinChange:e.onFocusChange}),c=N(e.id);j.set(o,{id:c,shouldUseVirtualFocus:e.shouldUseVirtualFocus,shouldSelectOnPressUp:e.shouldSelectOnPressUp,shouldFocusOnHover:e.shouldFocusOnHover,isVirtualized:e.isVirtualized,onAction:e.onAction,linkBehavior:s});let{labelProps:u,fieldProps:f}=X({...e,id:c,labelElementType:"span"});return{labelProps:u,listBoxProps:m(r,d,o.selectionManager.selectionMode==="multiple"?{"aria-multiselectable":"true"}:{},{role:"listbox",...m(f,i)})}}function ge(e,o,t){var r,a;let{key:s}=e,i=j.get(o);var d;let c=(d=e.isDisabled)!==null&&d!==void 0?d:o.selectionManager.isDisabled(s);var u;let f=(u=e.isSelected)!==null&&u!==void 0?u:o.selectionManager.isSelected(s);var h;let S=(h=e.shouldSelectOnPressUp)!==null&&h!==void 0?h:i==null?void 0:i.shouldSelectOnPressUp;var g;let V=(g=e.shouldFocusOnHover)!==null&&g!==void 0?g:i==null?void 0:i.shouldFocusOnHover;var P;let H=(P=e.shouldUseVirtualFocus)!==null&&P!==void 0?P:i==null?void 0:i.shouldUseVirtualFocus;var F;let L=(F=e.isVirtualized)!==null&&F!==void 0?F:i==null?void 0:i.isVirtualized,C=w(),R=w(),p={role:"option","aria-disabled":c||void 0,"aria-selected":o.selectionManager.selectionMode!=="none"?f:void 0};ee()&&oe()||(p["aria-label"]=e["aria-label"],p["aria-labelledby"]=C,p["aria-describedby"]=R);let n=o.collection.getItem(s);if(L){let b=Number(n==null?void 0:n.index);p["aria-posinset"]=Number.isNaN(b)?void 0:b+1,p["aria-setsize"]=ie(o.collection)}let z=i!=null&&i.onAction?()=>{var b;return i==null||(b=i.onAction)===null||b===void 0?void 0:b.call(i,s)}:void 0,k=$e(o,s),{itemProps:W,isPressed:q,isFocused:M,hasAction:E,allowsSelection:K}=le({selectionManager:o.selectionManager,key:s,ref:t,shouldSelectOnPressUp:S,allowsDifferentPressOrigin:S&&V,isVirtualized:L,shouldUseVirtualFocus:H,isDisabled:c,onAction:z||!(n==null||(r=n.props)===null||r===void 0)&&r.onAction?J(n==null||(a=n.props)===null||a===void 0?void 0:a.onAction,z):void 0,linkBehavior:i==null?void 0:i.linkBehavior,id:k}),{hoverProps:T}=te({isDisabled:c||!V,onHoverStart(){O()||(o.selectionManager.setFocused(!0),o.selectionManager.setFocusedKey(s))}}),U=A(n==null?void 0:n.props);delete U.id;let G=Z(n==null?void 0:n.props);return{optionProps:{...p,...m(U,W,T,G),id:k},labelProps:{id:C},descriptionProps:{id:R},isFocused:M,isFocusVisible:M&&o.selectionManager.isFocused&&O(),isSelected:f,isDisabled:c,isPressed:q,allowsSelection:K,hasAction:E}}function Pe(e){let{heading:o,"aria-label":t}=e,r=N();return{itemProps:{role:"presentation"},headingProps:o?{id:r,role:"presentation"}:{},groupProps:{role:"group","aria-label":t,"aria-labelledby":o?r:void 0}}}const Fe=v.ul`
  list-style: none;
  background-color: var(--listbox-bg-clr);
  padding: 8px 0;
  margin: 0;
  min-width: var(--trigger-width, auto);

  &:focus {
    outline: none;
  }
`,ye=v.ul`
  list-style: none;
  padding: 0px;
`,_e=v.span`
  ${y.Regular}
  color: var(--text-clr-alt);
  line-height: 1;
  padding: 6px 24px 6px 16px;
  font-size: 1.2rem;
  text-transform: uppercase;
`,Be=v.li`
  ${y.Regular}
  ${y.FocusVisible()}
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
`,$=x.createContext(null),je=fe(),_=x.forwardRef(function(o,t){const r=x.useContext($);return[o,t]=pe(je,o,t),r?l.jsx(I,{...o,state:r,listBoxRef:t}):l.jsx(re,{content:l.jsx(se,{...o}),children:a=>l.jsx(Se,{...o,collection:a,listBoxRef:t})})});_.displayName="ListBox";function Se(e){const o=xe(e);return l.jsx(I,{...e,state:o})}function I(e){const{state:o,className:t,size:r="medium",listBoxRef:a}=e,{listBoxProps:s,labelProps:i}=he(e,o,a),{CollectionRenderer:d}=D(),c=B({componentClassName:"aje-listbox",className:t,size:r});return l.jsxs(l.Fragment,{children:[e.label&&l.jsx(be,{...i,children:e.label}),l.jsx(Fe,{...s,...c,ref:a,children:l.jsx(de,{values:[[ce.Provider,{render:Le}],[ue.Provider,{render:Ve}],[$.Provider,o]],children:l.jsx(d,{collection:o.collection})})})]})}function Ve(e,o,t){const r=x.useContext($),{itemProps:a,headingProps:s,groupProps:i}=Pe({heading:t.rendered,"aria-label":t["aria-label"]}),d=B({componentClassName:"aje-listbox__section",...e,children:e.title}),{CollectionBranchRenderer:c}=D();return l.jsxs(l.Fragment,{children:[t.key!==r.collection.getFirstKey()&&l.jsx(me,{as:"li"}),l.jsxs("li",{...a,ref:o,children:[d.children&&l.jsx(_e,{...s,children:d.children}),l.jsx(ye,{...i,...d,children:l.jsx(c,{collection:r.collection,parent:t})})]})]})}function Le(e,o,t){const r=x.useContext($),a=ne(o),{optionProps:s,isSelected:i}=ge({key:t.key},r,a),{focusProps:d,isFocused:c,isFocusVisible:u}=ae(),f=B({componentClassName:"aje-listbox__item",...e,children:t.rendered,values:{isSelected:i,isFocused:c,isFocusVisible:u},selectors:{"data-selected":i}});return l.jsx(Be,{...m(s,d),...f,as:e.href?"a":"li",ref:a,children:f.children})}try{_.displayName="ListBox",_.__docgenInfo={description:"",displayName:"ListBox",props:{state:{defaultValue:null,description:"",name:"state",required:!0,type:{name:"ListState<T>"}},listBoxRef:{defaultValue:null,description:"",name:"listBoxRef",required:!0,type:{name:"RefObject<HTMLUListElement>"}},size:{defaultValue:null,description:"The size of the listbox",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"auto"'},{value:'"full"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<never>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<never>"}}}}}catch{}export{j as $,_ as L,je as a,$ as b,$e as c};
