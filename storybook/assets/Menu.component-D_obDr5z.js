import{$ as xe,r as $,R as $e,g as K,j as u}from"./iframe-CGPW5dgX.js";import{s as I}from"./displayName-CEXLPPBu.js";import{c as ve}from"./index-BjoBGrPA.js";import{$ as R,b as j,e as Pe}from"./useObjectRef-CjsC0YUg.js";import{$ as E}from"./filterDOMProps-CeZl_uWj.js";import{a as Ke}from"./useSelectableList-BWSkIROv.js";import{a as ke,$ as Me,b as Se}from"./usePress-BioWcz2v.js";import{$ as we}from"./getItemCount-_wmYjxUG.js";import{j as W,w as Ce,l as Fe}from"./useFocusable-DT9_LXVA.js";import{$ as _e}from"./useHover-9VTiwztB.js";import{f as De}from"./useSelectableItem-BeBcEVva.js";import{$ as je,n as Ie,p as Re,m as Ee,q as Ue,r as Ne}from"./helpers-tUmR_xN7.js";import{u as L}from"./useForwardedRef-DFbI-FzN.js";import{P as Ae}from"./Provider-CKCHWQEo.js";import{$ as Ve,a as Te,b as ze,u as O}from"./useCollectionRenderer-BQP_5EoS.js";import{u as q}from"./useRenderProps-B7rIWDyP.js";import{u as Be}from"./useFocusRing-Dbcio0BW.js";import{c as He,u as We}from"./index-C0dagnaq.js";import{m as G}from"./mixins-BJuiWlrm.js";import{D as Le}from"./Divider.component-B1vAuf1o.js";class Oe{*[Symbol.iterator](){yield*this.iterable}get size(){return this.keyMap.size}getKeys(){return this.keyMap.keys()}getKeyBefore(t){let o=this.keyMap.get(t);var r;return o&&(r=o.prevKey)!==null&&r!==void 0?r:null}getKeyAfter(t){let o=this.keyMap.get(t);var r;return o&&(r=o.nextKey)!==null&&r!==void 0?r:null}getFirstKey(){return this.firstKey}getLastKey(){return this.lastKey}getItem(t){var o;return(o=this.keyMap.get(t))!==null&&o!==void 0?o:null}at(t){const o=[...this.getKeys()];return this.getItem(o[t])}constructor(t,{expandedKeys:o}={}){this.keyMap=new Map,this.firstKey=null,this.lastKey=null,this.iterable=t,o=o||new Set;let r=i=>{if(this.keyMap.set(i.key,i),i.childNodes&&(i.type==="section"||o.has(i.key)))for(let s of i.childNodes)r(s)};for(let i of t)r(i);let n=null,d=0;for(let[i,s]of this.keyMap)n?(n.nextKey=i,s.prevKey=n.key):(this.firstKey=i,s.prevKey=void 0),s.type==="item"&&(s.index=d++),n=s,n.nextKey=void 0;var l;this.lastKey=(l=n==null?void 0:n.key)!==null&&l!==void 0?l:null}}function qe(e){let{onExpandedChange:t}=e,[o,r]=xe(e.expandedKeys?new Set(e.expandedKeys):void 0,e.defaultExpandedKeys?new Set(e.defaultExpandedKeys):new Set,t),n=Ve(e),d=$.useMemo(()=>e.disabledKeys?new Set(e.disabledKeys):new Set,[e.disabledKeys]),l=Te(e,$.useCallback(s=>new Oe(s,{expandedKeys:o}),[o]),null);return $.useEffect(()=>{n.focusedKey!=null&&!l.getItem(n.focusedKey)&&n.setFocusedKey(null)},[l,n.focusedKey]),{collection:l,expandedKeys:o,disabledKeys:d,toggleKey:s=>{r(Ge(o,s))},setExpandedKeys:r,selectionManager:new ze(l,n)}}function Ge(e,t){let o=new Set(e);return o.has(t)?o.delete(t):o.add(t),o}const J=new WeakMap;function Je(e,t,o){let{shouldFocusWrap:r=!0,onKeyDown:n,onKeyUp:d,...l}=e;!e["aria-label"]&&!e["aria-labelledby"]&&console.warn("An aria-label or aria-labelledby prop is required for accessibility.");let i=E(e,{labelable:!0}),{listProps:s}=Ke({...l,ref:o,selectionManager:t.selectionManager,collection:t.collection,disabledKeys:t.disabledKeys,shouldFocusWrap:r,linkBehavior:"override"});return J.set(t,{onClose:e.onClose,onAction:e.onAction,shouldUseVirtualFocus:e.shouldUseVirtualFocus}),{menuProps:R(i,{onKeyDown:n,onKeyUp:d},{role:"menu",...s,onKeyDown:b=>{var f;(b.key!=="Escape"||e.shouldUseVirtualFocus)&&((f=s.onKeyDown)===null||f===void 0||f.call(s,b))}})}}function Qe(e,t,o){let{id:r,key:n,closeOnSelect:d,isVirtualized:l,"aria-haspopup":i,onPressStart:s,onPressUp:b,onPress:f,onPressChange:ee,onPressEnd:oe,onHoverStart:k,onHoverChange:te,onHoverEnd:ne,onKeyDown:M,onKeyUp:re,onFocus:ae,onFocusChange:se,onBlur:ie,selectionManager:p=t.selectionManager}=e,m=!!i,S=m&&e["aria-expanded"]==="true";var w;let y=(w=e.isDisabled)!==null&&w!==void 0?w:p.isDisabled(n);var C;let N=(C=e.isSelected)!==null&&C!==void 0?C:p.isSelected(n),h=J.get(t),c=t.collection.getItem(n),g=e.onClose||h.onClose,le=ke(),F=a=>{var D;if(!m){if(!(c==null||(D=c.props)===null||D===void 0)&&D.onAction?c.props.onAction():e.onAction&&e.onAction(n),h.onAction){let ge=h.onAction;ge(n)}a.target instanceof HTMLAnchorElement&&c&&le.open(a.target,a,c.props.href,c.props.routerOptions)}},_="menuitem";m||(p.selectionMode==="single"?_="menuitemradio":p.selectionMode==="multiple"&&(_="menuitemcheckbox"));let A=j(),V=j(),T=j(),P={id:r,"aria-disabled":y||void 0,role:_,"aria-label":e["aria-label"],"aria-labelledby":A,"aria-describedby":[V,T].filter(Boolean).join(" ")||void 0,"aria-controls":e["aria-controls"],"aria-haspopup":i,"aria-expanded":e["aria-expanded"]};p.selectionMode!=="none"&&!m&&(P["aria-checked"]=N),l&&(P["aria-posinset"]=c==null?void 0:c.index,P["aria-setsize"]=we(t.collection));let de=a=>{a.pointerType==="keyboard"&&F(a),s==null||s(a)},z=()=>{!m&&g&&(d??(p.selectionMode!=="multiple"||p.isLink(n)))&&g()},ce=a=>{a.pointerType==="mouse"&&(F(a),z()),b==null||b(a)},ue=a=>{a.pointerType!=="keyboard"&&a.pointerType!=="mouse"&&(F(a),z()),f==null||f(a)},{itemProps:x,isFocused:B}=De({id:r,selectionManager:p,key:n,ref:o,shouldSelectOnPressUp:!0,allowsDifferentPressOrigin:!0,linkBehavior:"none",shouldUseVirtualFocus:h.shouldUseVirtualFocus}),{pressProps:pe,isPressed:fe}=Me({onPressStart:de,onPress:ue,onPressUp:ce,onPressChange:ee,onPressEnd:oe,isDisabled:y}),{hoverProps:me}=_e({isDisabled:y,onHoverStart(a){!W()&&!(S&&i)&&(p.setFocused(!0),p.setFocusedKey(n)),k==null||k(a)},onHoverChange:te,onHoverEnd:ne}),{keyboardProps:be}=Ce({onKeyDown:a=>{if(a.repeat){a.continuePropagation();return}switch(a.key){case" ":!y&&p.selectionMode==="none"&&!m&&d!==!1&&g&&g();break;case"Enter":!y&&d!==!1&&!m&&g&&g();break;default:m||a.continuePropagation(),M==null||M(a);break}},onKeyUp:re}),{focusProps:ye}=Fe({onBlur:ie,onFocus:ae,onFocusChange:se}),H=E(c==null?void 0:c.props);delete H.id;let he=Se(c==null?void 0:c.props);return{menuItemProps:{...P,...R(H,he,m?{onFocus:x.onFocus,"data-collection":x["data-collection"],"data-key":x["data-key"]}:x,pe,me,be,ye,h.shouldUseVirtualFocus||m?{onMouseDown:a=>a.preventDefault()}:void 0),tabIndex:x.tabIndex!=null&&S&&!h.shouldUseVirtualFocus?-1:x.tabIndex},labelProps:{id:A},descriptionProps:{id:V},keyboardShortcutProps:{id:T},isFocused:B,isFocusVisible:B&&p.isFocused&&W()&&!S,isSelected:N,isPressed:fe,isDisabled:y}}function Xe(e){let{heading:t,"aria-label":o}=e,r=Pe();return{itemProps:{role:"presentation"},headingProps:t?{id:r,role:"presentation"}:{},groupProps:{role:"group","aria-label":o,"aria-labelledby":t?r:void 0}}}const Ye=He(),U=$e.createContext(null),Ze=K.ul`
  list-style: none;
  margin: 0;
  background-color: var(--menu-bg-clr);
  padding: 8px 0;
  min-width: var(--trigger-width, auto);

  &:focus {
    outline: none;
  }
`,eo=K.ul`
  list-style: none;
  padding: 0px;
`,oo=K.span`
  ${G.Bold}
  display: block;
  padding: 8px 24px 4px 16px;
  color: var(--text-clr-secondary);
  font-size: 1.2rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  line-height: 1;
`,to=K.li`
  ${G.Regular}
  position: relative;
  display: flex;
  align-items: center;
  border: none;
  width: 100%;
  gap: 12px;
  padding: 6px 24px 6px 16px;
  min-height: var(--menu-item-height);
  line-height: 1;
  color: var(--menu-item-text-clr, inherit);
  font-size: 1.6rem;
  white-space: nowrap;
  background-color: var(--menu-item-bg-clr);
  text-decoration: none;

  --menu-item-icon-clr: var(--icon-clr-secondary);
  i {
    font-size: 2rem;
    color: var(--menu-item-icon-clr);
  }

  &:hover {
    --menu-item-bg-clr: var(--background-clr-hover);
    cursor: pointer;
  }
  &:active,
  &:focus-visible {
    --menu-item-bg-clr: var(--background-clr-subtle-hover);
    outline: none;
  }
  &.is-focused {
    --menu-item-bg-clr: var(--accent-clr-fill);
    --menu-item-text-clr: var(--text-clr-on-accent);
    --menu-item-icon-clr: var(--text-clr-on-accent);
    --menu-item-selected-clr: var(--text-clr-on-accent);
  }

  &[aria-disabled] {
    cursor: not-allowed;
    opacity: 0.5;

    &:hover {
      background: none;
    }
  }
`,v=$.forwardRef(function(t,o){return[t,o]=We(Ye,t,o),u.jsx(je,{content:u.jsx(Ie,{...t}),children:r=>r.size>0&&u.jsx(no,{...t,collection:r,menuRef:o})})});I(v,"Menu");function no(e){const{menuRef:t,className:o}=e,r=qe(e),n=L(t),{menuProps:d}=Je(e,r,n),{CollectionRenderer:l}=O();return u.jsx(Ze,{ref:n,className:ve("aje-menu",o),...d,...E(e),children:u.jsx(Ae,{values:[[U.Provider,r],[Re.Provider,{render:Q}],[Ee.Provider,{render:Y}]],children:u.jsx(l,{collection:e.collection})})})}function Q(e,t,o){const r=$.useContext(U),{CollectionBranchRenderer:n}=O(),{itemProps:d,headingProps:l,groupProps:i}=Xe({heading:e.title,"aria-label":o["aria-label"]}),s=q({componentClassName:"aje-menu__section",...e,children:e.title});return u.jsxs(u.Fragment,{children:[o.key!==r.collection.getFirstKey()&&u.jsx(Le,{as:"li"}),u.jsxs("li",{...d,...s,ref:t,children:[s.children&&u.jsx(oo,{...l,children:s.children}),u.jsx(eo,{...i,children:u.jsx(n,{collection:r.collection,parent:o})})]})]})}const X=Ue("section",Q);I(X,"Menu.Section");v.Section=X;const Y=(e,t,o)=>{const r=$.useContext(U),n=L(t),{menuItemProps:d,isSelected:l}=Qe({key:o.key,"aria-label":e["aria-label"]},r,n),{focusProps:i,isFocused:s,isFocusVisible:b}=Be(),f=q({componentClassName:"aje-menu__item",...e,children:o.rendered,values:{isSelected:l,isFocused:s,isFocusVisible:b}});return u.jsx(to,{...R(d,i),...f,as:e.href?"a":"li",ref:n,children:f.children})},Z=Ne("item",Y);I(Z,"Menu.Item");v.Item=Z;try{v.displayName="Menu",v.__docgenInfo={description:`A Menu is a collection of items that the user can select.
When an item in the menu is selected, an associated action is performed`,displayName:"Menu",filePath:"/home/runner/work/atomic-libs/atomic-libs/packages/atomic-elements/src/components/Dropdowns/Menu/Menu.component.tsx",methods:[],props:{className:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"}],description:"",name:"className",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"},required:!1,tags:{},type:{name:"RenderClassName<never>"}},style:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"}],description:"",name:"style",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"},required:!1,tags:{},type:{name:"RenderStyle<never>"}}},tags:{}}}catch{}export{v as M,Ye as a};
