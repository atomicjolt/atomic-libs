import{g as h,r as x,j as s}from"./iframe-CGPW5dgX.js";import{e as U,$ as b,b as D,f as G}from"./useObjectRef-CjsC0YUg.js";import{$ as O}from"./filterDOMProps-CeZl_uWj.js";import{$ as J}from"./useFocusWithin-BzfIRRcZ.js";import{$ as Q}from"./useLabel-BytR9cji.js";import{a as X}from"./useSelectableList-BWSkIROv.js";import{b as Y}from"./usePress-BioWcz2v.js";import{v as Z,t as ee,j as M}from"./useFocusable-DT9_LXVA.js";import{$ as oe}from"./getItemCount-_wmYjxUG.js";import{$ as te}from"./useHover-9VTiwztB.js";import{f as ie}from"./useSelectableItem-BeBcEVva.js";import{$ as se,n as le,m as re,p as ae}from"./helpers-tUmR_xN7.js";import{u as F}from"./useRenderProps-B7rIWDyP.js";import{u as ne}from"./useFocusRing-Dbcio0BW.js";import{u as ce}from"./useForwardedRef-DFbI-FzN.js";import{u as I}from"./useCollectionRenderer-BQP_5EoS.js";import{P as de}from"./Provider-CKCHWQEo.js";import{c as ue,u as me}from"./index-C0dagnaq.js";import{m as L}from"./mixins-BJuiWlrm.js";import{L as pe}from"./Label.component-Bo8kkSzq.js";import{$ as fe}from"./useListState-BFwRYvsY.js";import{D as xe}from"./Divider.component-B1vAuf1o.js";const _=new WeakMap;function be(e){return typeof e=="string"?e.replace(/\s*/g,""):""+e}function ve(e,o){let i=_.get(e);if(!i)throw new Error("Unknown list");return`${i.id}-option-${be(o)}`}function he(e,o,i){let l=O(e,{labelable:!0}),a=e.selectionBehavior||"toggle",r=e.linkBehavior||(a==="replace"?"action":"override");a==="toggle"&&r==="action"&&(r="override");let{listProps:t}=X({...e,ref:i,selectionManager:o.selectionManager,collection:o.collection,disabledKeys:o.disabledKeys,linkBehavior:r}),{focusWithinProps:c}=J({onFocusWithin:e.onFocus,onBlurWithin:e.onBlur,onFocusWithinChange:e.onFocusChange}),d=U(e.id);_.set(o,{id:d,shouldUseVirtualFocus:e.shouldUseVirtualFocus,shouldSelectOnPressUp:e.shouldSelectOnPressUp,shouldFocusOnHover:e.shouldFocusOnHover,isVirtualized:e.isVirtualized,onAction:e.onAction,linkBehavior:r});let{labelProps:u,fieldProps:m}=Q({...e,id:d,labelElementType:"span"});return{labelProps:u,listBoxProps:b(l,c,o.selectionManager.selectionMode==="multiple"?{"aria-multiselectable":"true"}:{},{role:"listbox",...b(m,t)})}}function $e(e,o,i){var l,a;let{key:r}=e,t=_.get(o);var c;let d=(c=e.isDisabled)!==null&&c!==void 0?c:o.selectionManager.isDisabled(r);var u;let m=(u=e.isSelected)!==null&&u!==void 0?u:o.selectionManager.isSelected(r);var g;let k=(g=e.shouldSelectOnPressUp)!==null&&g!==void 0?g:t==null?void 0:t.shouldSelectOnPressUp;var P;let S=(P=e.shouldFocusOnHover)!==null&&P!==void 0?P:t==null?void 0:t.shouldFocusOnHover;var B;let A=(B=e.shouldUseVirtualFocus)!==null&&B!==void 0?B:t==null?void 0:t.shouldUseVirtualFocus;var y;let j=(y=e.isVirtualized)!==null&&y!==void 0?y:t==null?void 0:t.isVirtualized,w=D(),N=D(),p={role:"option","aria-disabled":d||void 0,"aria-selected":o.selectionManager.selectionMode!=="none"?m:void 0};Z()&&ee()||(p["aria-label"]=e["aria-label"],p["aria-labelledby"]=w,p["aria-describedby"]=N);let n=o.collection.getItem(r);if(j){let f=Number(n==null?void 0:n.index);p["aria-posinset"]=Number.isNaN(f)?void 0:f+1,p["aria-setsize"]=oe(o.collection)}let R=t!=null&&t.onAction?()=>{var f;return t==null||(f=t.onAction)===null||f===void 0?void 0:f.call(t,r)}:void 0,V=ve(o,r),{itemProps:H,isPressed:E,isFocused:C,hasAction:W,allowsSelection:q}=ie({selectionManager:o.selectionManager,key:r,ref:i,shouldSelectOnPressUp:k,allowsDifferentPressOrigin:k&&S,isVirtualized:j,shouldUseVirtualFocus:A,isDisabled:d,onAction:R||!(n==null||(l=n.props)===null||l===void 0)&&l.onAction?G(n==null||(a=n.props)===null||a===void 0?void 0:a.onAction,R):void 0,linkBehavior:t==null?void 0:t.linkBehavior,id:V}),{hoverProps:K}=te({isDisabled:d||!S,onHoverStart(){M()||(o.selectionManager.setFocused(!0),o.selectionManager.setFocusedKey(r))}}),z=O(n==null?void 0:n.props);delete z.id;let T=Y(n==null?void 0:n.props);return{optionProps:{...p,...b(z,H,K,T),id:V},labelProps:{id:w},descriptionProps:{id:N},isFocused:C,isFocusVisible:C&&o.selectionManager.isFocused&&M(),isSelected:m,isDisabled:d,isPressed:E,allowsSelection:q,hasAction:W}}function ge(e){let{heading:o,"aria-label":i}=e,l=U();return{itemProps:{role:"presentation"},headingProps:o?{id:l,role:"presentation"}:{},groupProps:{role:"group","aria-label":i,"aria-labelledby":o?l:void 0}}}const Pe=h.ul`
  list-style: none;
  background-color: var(--listbox-bg-clr);
  padding: 8px 0;
  margin: 0;
  min-width: var(--trigger-width, auto);

  &:focus {
    outline: none;
  }
`,Be=h.ul`
  list-style: none;
  padding: 0px;
`,ye=h.span`
  ${L.Regular}
  color: var(--text-clr-secondary);
  line-height: 1;
  padding: 6px 24px 6px 16px;
  font-size: 1.2rem;
  text-transform: uppercase;
`,Le=h.li`
  ${L.Regular}
  ${L.FocusVisible()}
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
    --listbox-bg-clr: var(--background-clr-hover);
    cursor: pointer;
  }

  &[data-focus-visible="true"] {
    --listbox-bg-clr: var(--background-clr-subtle);
  }

  &[aria-selected="true"] {
    --listbox-icon-clr: var(--text-clr-on-accent);
    --listbox-bg-clr: var(--accent-clr-fill);
    color: var(--text-clr-on-accent);
  }

  &[aria-selected="true"][data-focus-visible="true"],
  &:hover[aria-selected="true"] {
    --listbox-bg-clr: var(--accent-clr-fill-hover);
    color: var(--text-clr-on-accent);
  }

  &[aria-disabled] {
    color: var(--text-clr-disabled);
  }
`,$=x.createContext(null),Fe=ue(),_e=x.forwardRef(function(o,i){const l=x.useContext($);return[o,i]=me(Fe,o,i),l?s.jsx(v,{...o,state:l,listBoxRef:i}):s.jsx(se,{content:s.jsx(le,{...o}),children:a=>s.jsx(ke,{...o,collection:a,listBoxRef:i})})});_e.displayName="ListBox";function ke(e){const o=fe(e);return s.jsx(v,{...e,state:o})}function v(e){const{state:o,className:i,size:l="medium",listBoxRef:a}=e,{listBoxProps:r,labelProps:t}=he(e,o,a),{CollectionRenderer:c}=I(),d=F({componentClassName:"aje-listbox",className:i,size:l});return s.jsxs(s.Fragment,{children:[e.label&&s.jsx(pe,{...t,children:e.label}),s.jsx(Pe,{...r,...d,ref:a,children:s.jsx(de,{values:[[re.Provider,{render:je}],[ae.Provider,{render:Se}],[$.Provider,o]],children:s.jsx(c,{collection:o.collection})})})]})}function Se(e,o,i){const l=x.useContext($),{itemProps:a,headingProps:r,groupProps:t}=ge({heading:i.rendered,"aria-label":i["aria-label"]}),c=F({componentClassName:"aje-listbox__section",...e,children:e.title}),{CollectionBranchRenderer:d}=I();return s.jsxs(s.Fragment,{children:[i.key!==l.collection.getFirstKey()&&s.jsx(xe,{as:"li"}),s.jsxs("li",{...a,ref:o,children:[c.children&&s.jsx(ye,{...r,children:c.children}),s.jsx(Be,{...t,...c,children:s.jsx(d,{collection:l.collection,parent:i})})]})]})}function je(e,o,i){const l=x.useContext($),a=ce(o),{optionProps:r,isSelected:t}=$e({key:i.key},l,a),{focusProps:c,isFocused:d,isFocusVisible:u}=ne(),m=F({componentClassName:"aje-listbox__item",...e,children:i.rendered,values:{isSelected:t,isFocused:d,isFocusVisible:u},selectors:{"data-selected":t}});return s.jsx(Le,{...b(r,c),...m,as:e.href?"a":"li",ref:a,children:m.children})}try{v.displayName="ListBox",v.__docgenInfo={description:"",displayName:"ListBox",filePath:"/home/runner/work/atomic-libs/atomic-libs/packages/atomic-elements/src/components/Dropdowns/ListBox/ListBox.component.tsx",methods:[],props:{state:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Dropdowns/ListBox/ListBox.component.tsx",name:"InternalListBoxProps"}],description:"",name:"state",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Dropdowns/ListBox/ListBox.component.tsx",name:"InternalListBoxProps"},required:!0,tags:{},type:{name:"ListState<T>"}},listBoxRef:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Dropdowns/ListBox/ListBox.component.tsx",name:"InternalListBoxProps"}],description:"",name:"listBoxRef",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Dropdowns/ListBox/ListBox.component.tsx",name:"InternalListBoxProps"},required:!0,tags:{},type:{name:"RefObject<HTMLUListElement | null>"}},size:{defaultValue:{value:'"medium"'},declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Dropdowns/ListBox/ListBox.types.ts",name:"ListBoxProps"}],description:"The size of the listbox",name:"size",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Dropdowns/ListBox/ListBox.types.ts",name:"ListBoxProps"},required:!1,tags:{default:'"medium"'},type:{name:"enum",raw:"ExtendedSize",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"auto"'},{value:'"full"'}]}},className:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"}],description:"",name:"className",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"},required:!1,tags:{},type:{name:"RenderClassName<never>"}},style:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"}],description:"",name:"style",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"},required:!1,tags:{},type:{name:"RenderStyle<never>"}}},tags:{}}}catch{}export{_ as $,_e as L,Fe as a,$ as b,ve as c};
