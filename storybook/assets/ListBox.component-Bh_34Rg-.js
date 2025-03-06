import{j as l}from"./jsx-runtime-CkxqCPlQ.js";import{r as x}from"./index-DJO9vBfz.js";import{$ as O,a as m,d as w,e as G}from"./useObjectRef-CA0MXmrf.js";import{$ as N}from"./filterDOMProps-CeZl_uWj.js";import{$ as J}from"./useFocusWithin-Bb3mfDwa.js";import{$ as Q}from"./useLabel-CTphHQ-t.js";import{a as X}from"./useSelectableList-Cco9av5W.js";import{b as Y}from"./usePress-DBLAzBwe.js";import{j as Z,g as ee,e as M}from"./focusSafely-BOUv7I-8.js";import{$ as oe}from"./getItemCount-DVbD48h8.js";import{$ as ie}from"./useHover-D34ofACQ.js";import{e as te}from"./useSelectableItem-c4_FIivV.js";import{$ as le,a as re}from"./CollectionBuilder-Xbel4YvD.js";import{u as B}from"./useRenderProps-Bk8BH60l.js";import{u as se}from"./useFocusRing-PETNqKnG.js";import{u as ae}from"./useForwardedRef-BqZ3RrEL.js";import{u as A}from"./useCollectionRenderer-DZUEjMJ2.js";import{P as ne}from"./Provider-B9Eqn13H.js";import{a as de,b as ce}from"./Collection-CnHW8amz.js";import{c as ue,u as fe}from"./index-CHPAqjqs.js";import{d as v}from"./styled-components.browser.esm-BQf_XqKi.js";import{m as y}from"./mixins-B7X2BZyR.js";import{$ as pe}from"./useListState-CLmrS6CG.js";import{L as be}from"./Label.component-DWUg6KQj.js";import{D as xe}from"./Divider.component-BK_sltmD.js";const j=new WeakMap;function me(e){return typeof e=="string"?e.replace(/\s*/g,""):""+e}function ve(e,o){let t=j.get(e);if(!t)throw new Error("Unknown list");return`${t.id}-option-${me(o)}`}function $e(e,o,t){let r=N(e,{labelable:!0}),a=e.selectionBehavior||"toggle",s=e.linkBehavior||(a==="replace"?"action":"override");a==="toggle"&&s==="action"&&(s="override");let{listProps:i}=X({...e,ref:t,selectionManager:o.selectionManager,collection:o.collection,disabledKeys:o.disabledKeys,linkBehavior:s}),{focusWithinProps:d}=J({onFocusWithin:e.onFocus,onBlurWithin:e.onBlur,onFocusWithinChange:e.onFocusChange}),c=O(e.id);j.set(o,{id:c,shouldUseVirtualFocus:e.shouldUseVirtualFocus,shouldSelectOnPressUp:e.shouldSelectOnPressUp,shouldFocusOnHover:e.shouldFocusOnHover,isVirtualized:e.isVirtualized,onAction:e.onAction,linkBehavior:s});let{labelProps:u,fieldProps:f}=Q({...e,id:c,labelElementType:"span"});return{labelProps:u,listBoxProps:m(r,d,o.selectionManager.selectionMode==="multiple"?{"aria-multiselectable":"true"}:{},{role:"listbox",...m(f,i)})}}function he(e,o,t){var r,a;let{key:s}=e,i=j.get(o);var d;let c=(d=e.isDisabled)!==null&&d!==void 0?d:o.selectionManager.isDisabled(s);var u;let f=(u=e.isSelected)!==null&&u!==void 0?u:o.selectionManager.isSelected(s);var h;let S=(h=e.shouldSelectOnPressUp)!==null&&h!==void 0?h:i==null?void 0:i.shouldSelectOnPressUp;var g;let V=(g=e.shouldFocusOnHover)!==null&&g!==void 0?g:i==null?void 0:i.shouldFocusOnHover;var P;let I=(P=e.shouldUseVirtualFocus)!==null&&P!==void 0?P:i==null?void 0:i.shouldUseVirtualFocus;var F;let L=(F=e.isVirtualized)!==null&&F!==void 0?F:i==null?void 0:i.isVirtualized,C=w(),R=w(),p={role:"option","aria-disabled":c||void 0,"aria-selected":o.selectionManager.selectionMode!=="none"?f:void 0};Z()&&ee()||(p["aria-label"]=e["aria-label"],p["aria-labelledby"]=C,p["aria-describedby"]=R);let n=o.collection.getItem(s);if(L){let b=Number(n==null?void 0:n.index);p["aria-posinset"]=Number.isNaN(b)?void 0:b+1,p["aria-setsize"]=oe(o.collection)}let z=i!=null&&i.onAction?()=>{var b;return i==null||(b=i.onAction)===null||b===void 0?void 0:b.call(i,s)}:void 0,{itemProps:H,isPressed:W,isFocused:k,hasAction:q,allowsSelection:E}=te({selectionManager:o.selectionManager,key:s,ref:t,shouldSelectOnPressUp:S,allowsDifferentPressOrigin:S&&V,isVirtualized:L,shouldUseVirtualFocus:I,isDisabled:c,onAction:z||!(n==null||(r=n.props)===null||r===void 0)&&r.onAction?G(n==null||(a=n.props)===null||a===void 0?void 0:a.onAction,z):void 0,linkBehavior:i==null?void 0:i.linkBehavior}),{hoverProps:K}=ie({isDisabled:c||!V,onHoverStart(){M()||(o.selectionManager.setFocused(!0),o.selectionManager.setFocusedKey(s))}}),U=N(n==null?void 0:n.props);delete U.id;let T=Y(n==null?void 0:n.props);return{optionProps:{...p,...m(U,H,K,T),id:ve(o,s)},labelProps:{id:C},descriptionProps:{id:R},isFocused:k,isFocusVisible:k&&M(),isSelected:f,isDisabled:c,isPressed:W,allowsSelection:E,hasAction:q}}function ge(e){let{heading:o,"aria-label":t}=e,r=O();return{itemProps:{role:"presentation"},headingProps:o?{id:r,role:"presentation"}:{},groupProps:{role:"group","aria-label":t,"aria-labelledby":o?r:void 0}}}const Pe=v.ul`
  list-style: none;
  background-color: var(--listbox-bg-clr);
  padding: 8px 0;
  margin: 0;
  min-width: var(--trigger-width, auto);

  &:focus {
    outline: none;
  }
`,Fe=v.ul`
  list-style: none;
  padding: 0px;
`,ye=v.span`
  ${y.Regular}
  color: var(--text-clr-alt);
  line-height: 1;
  padding: 6px 24px 6px 16px;
  font-size: 1.2rem;
  text-transform: uppercase;
`,_e=v.li`
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
`,$=x.createContext(null),Be=ue(),_=x.forwardRef(function(o,t){const r=x.useContext($);return[o,t]=fe(Be,o,t),r?l.jsx(D,{...o,state:r,listBoxRef:t}):l.jsx(le,{content:l.jsx(re,{...o}),children:a=>l.jsx(je,{...o,collection:a,listBoxRef:t})})});_.displayName="ListBox";function je(e){const o=pe(e);return l.jsx(D,{...e,state:o})}function D(e){const{state:o,className:t,size:r="medium",listBoxRef:a}=e,{listBoxProps:s,labelProps:i}=$e(e,o,a),{CollectionRenderer:d}=A(),c=B({componentClassName:"aje-listbox",className:t,size:r});return l.jsxs(l.Fragment,{children:[e.label&&l.jsx(be,{...i,children:e.label}),l.jsx(Pe,{...s,...c,ref:a,children:l.jsx(ne,{values:[[de.Provider,{render:Ve}],[ce.Provider,{render:Se}],[$.Provider,o]],children:l.jsx(d,{collection:o.collection})})})]})}function Se(e,o,t){const r=x.useContext($),{itemProps:a,headingProps:s,groupProps:i}=ge({heading:t.rendered,"aria-label":t["aria-label"]}),d=B({componentClassName:"aje-listbox__section",...e,children:e.title}),{CollectionBranchRenderer:c}=A();return l.jsxs(l.Fragment,{children:[t.key!==r.collection.getFirstKey()&&l.jsx(xe,{as:"li"}),l.jsxs("li",{...a,ref:o,children:[d.children&&l.jsx(ye,{...s,children:d.children}),l.jsx(Fe,{...i,...d,children:l.jsx(c,{collection:r.collection,parent:t})})]})]})}function Ve(e,o,t){const r=x.useContext($),a=ae(o),{optionProps:s,isSelected:i}=he({key:t.key},r,a),{focusProps:d,isFocused:c,isFocusVisible:u}=se(),f=B({componentClassName:"aje-listbox__item",...e,children:t.rendered,values:{isSelected:i,isFocused:c,isFocusVisible:u},selectors:{"data-selected":i}});return l.jsx(_e,{...m(s,d),...f,as:e.href?"a":"li",ref:a,children:f.children})}try{_.displayName="ListBox",_.__docgenInfo={description:"",displayName:"ListBox",props:{state:{defaultValue:null,description:"",name:"state",required:!0,type:{name:"ListState<T>"}},listBoxRef:{defaultValue:null,description:"",name:"listBoxRef",required:!0,type:{name:"RefObject<HTMLUListElement>"}},size:{defaultValue:null,description:"The size of the listbox",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"auto"'},{value:'"full"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<never>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<never>"}}}}}catch{}export{j as $,_ as L,Be as a,$ as b,ve as c};
