import{j as c}from"./jsx-runtime-CkxqCPlQ.js";import{r as y,R as pe}from"./index-DJO9vBfz.js";import{c as me}from"./index-i5X67GZP.js";import{b as F,d as _,$ as be}from"./useObjectRef-BKue9pYL.js";import{$ as j}from"./filterDOMProps-CeZl_uWj.js";import{a as ye}from"./useSelectableList-CW_SVv5R.js";import{a as $e,$ as ge,b as he}from"./usePress-Cu0aM-K5.js";import{$ as xe}from"./getItemCount-imedabe4.js";import{$ as ve}from"./useFocus-DJe2BRHe.js";import{e as Pe}from"./focusSafely-BOUv7I-8.js";import{$ as Ke}from"./useHover-D34ofACQ.js";import{$ as Me}from"./useKeyboard-A8_doyNT.js";import{e as ke}from"./useSelectableItem-CDjoIRnz.js";import{$ as Se,a as Ce,c as we,b as _e}from"./CollectionBuilder-Xbel4YvD.js";import{u as z}from"./useForwardedRef-BqZ3RrEL.js";import{P as Fe}from"./Provider-B9Eqn13H.js";import{$ as je,a as Ie,b as De,u as H}from"./useCollectionRenderer-BjBmU679.js";import{u as B}from"./useRenderProps-Bk8BH60l.js";import{u as Ee}from"./useFocusRing-CPkBIT8D.js";import{c as Re,u as Ne}from"./index-De95zDiF.js";import{b as Ae,a as Ue}from"./Collection-CnHW8amz.js";import{d as v}from"./styled-components.browser.esm-BQf_XqKi.js";import{m as T}from"./mixins-B7X2BZyR.js";import{$ as ze}from"./useControlledState-CN8sBTKq.js";import{D as He}from"./Divider.component-BK_sltmD.js";class Be{*[Symbol.iterator](){yield*this.iterable}get size(){return this.keyMap.size}getKeys(){return this.keyMap.keys()}getKeyBefore(e){let o=this.keyMap.get(e);var r;return o&&(r=o.prevKey)!==null&&r!==void 0?r:null}getKeyAfter(e){let o=this.keyMap.get(e);var r;return o&&(r=o.nextKey)!==null&&r!==void 0?r:null}getFirstKey(){return this.firstKey}getLastKey(){return this.lastKey}getItem(e){var o;return(o=this.keyMap.get(e))!==null&&o!==void 0?o:null}at(e){const o=[...this.getKeys()];return this.getItem(o[e])}constructor(e,{expandedKeys:o}={}){this.keyMap=new Map,this.firstKey=null,this.lastKey=null,this.iterable=e,o=o||new Set;let r=i=>{if(this.keyMap.set(i.key,i),i.childNodes&&(i.type==="section"||o.has(i.key)))for(let a of i.childNodes)r(a)};for(let i of e)r(i);let t=null,d=0;for(let[i,a]of this.keyMap)t?(t.nextKey=i,a.prevKey=t.key):(this.firstKey=i,a.prevKey=void 0),a.type==="item"&&(a.index=d++),t=a,t.nextKey=void 0;var l;this.lastKey=(l=t==null?void 0:t.key)!==null&&l!==void 0?l:null}}function Te(n){let{onExpandedChange:e}=n,[o,r]=ze(n.expandedKeys?new Set(n.expandedKeys):void 0,n.defaultExpandedKeys?new Set(n.defaultExpandedKeys):new Set,e),t=je(n),d=y.useMemo(()=>n.disabledKeys?new Set(n.disabledKeys):new Set,[n.disabledKeys]),l=Ie(n,y.useCallback(a=>new Be(a,{expandedKeys:o}),[o]),null);return y.useEffect(()=>{t.focusedKey!=null&&!l.getItem(t.focusedKey)&&t.setFocusedKey(null)},[l,t.focusedKey]),{collection:l,expandedKeys:o,disabledKeys:d,toggleKey:a=>{r(We(o,a))},setExpandedKeys:r,selectionManager:new De(l,t)}}function We(n,e){let o=new Set(n);return o.has(e)?o.delete(e):o.add(e),o}const W=new WeakMap;function Le(n,e,o){let{shouldFocusWrap:r=!0,onKeyDown:t,onKeyUp:d,...l}=n;!n["aria-label"]&&!n["aria-labelledby"]&&console.warn("An aria-label or aria-labelledby prop is required for accessibility.");let i=j(n,{labelable:!0}),{listProps:a}=ye({...l,ref:o,selectionManager:e.selectionManager,collection:e.collection,disabledKeys:e.disabledKeys,shouldFocusWrap:r,linkBehavior:"override"});return W.set(e,{onClose:n.onClose,onAction:n.onAction}),{menuProps:F(i,{onKeyDown:t,onKeyUp:d},{role:"menu",...a,onKeyDown:f=>{f.key!=="Escape"&&a.onKeyDown(f)}})}}function Oe(n,e,o){let{id:r,key:t,closeOnSelect:d,isVirtualized:l,"aria-haspopup":i,onPressStart:a,onPressUp:f,onPress:g,onPressChange:G,onPressEnd:J,onHoverStart:P,onHoverChange:Q,onHoverEnd:X,onKeyDown:K,onKeyUp:Y,onFocus:Z,onFocusChange:ee,onBlur:ne}=n,p=!!i;var M;let m=(M=n.isDisabled)!==null&&M!==void 0?M:e.selectionManager.isDisabled(t);var k;let D=(k=n.isSelected)!==null&&k!==void 0?k:e.selectionManager.isSelected(t),S=W.get(e),u=e.collection.getItem(t),b=n.onClose||S.onClose,oe=$e(),E=s=>{var w;if(!p){if(!(u==null||(w=u.props)===null||w===void 0)&&w.onAction?u.props.onAction():n.onAction&&n.onAction(t),S.onAction){let fe=S.onAction;fe(t)}s.target instanceof HTMLAnchorElement&&oe.open(s.target,s,u.props.href,u.props.routerOptions)}},C="menuitem";p||(e.selectionManager.selectionMode==="single"?C="menuitemradio":e.selectionManager.selectionMode==="multiple"&&(C="menuitemcheckbox"));let R=_(),N=_(),A=_(),h={id:r,"aria-disabled":m||void 0,role:C,"aria-label":n["aria-label"],"aria-labelledby":R,"aria-describedby":[N,A].filter(Boolean).join(" ")||void 0,"aria-controls":n["aria-controls"],"aria-haspopup":i,"aria-expanded":n["aria-expanded"]};e.selectionManager.selectionMode!=="none"&&!p&&(h["aria-checked"]=D),l&&(h["aria-posinset"]=u==null?void 0:u.index,h["aria-setsize"]=xe(e.collection));let te=s=>{s.pointerType==="keyboard"&&E(s),a==null||a(s)},re=s=>{s.pointerType!=="keyboard"&&(E(s),!p&&b&&(d??(e.selectionManager.selectionMode!=="multiple"||e.selectionManager.isLink(t)))&&b()),f==null||f(s)},{itemProps:x,isFocused:ae}=ke({selectionManager:e.selectionManager,key:t,ref:o,shouldSelectOnPressUp:!0,allowsDifferentPressOrigin:!0,linkBehavior:"none"}),{pressProps:ie,isPressed:se}=ge({onPressStart:te,onPress:g,onPressUp:re,onPressChange:G,onPressEnd:J,isDisabled:m}),{hoverProps:le}=Ke({isDisabled:m,onHoverStart(s){Pe()||(e.selectionManager.setFocused(!0),e.selectionManager.setFocusedKey(t)),P==null||P(s)},onHoverChange:Q,onHoverEnd:X}),{keyboardProps:de}=Me({onKeyDown:s=>{if(s.repeat){s.continuePropagation();return}switch(s.key){case" ":!m&&e.selectionManager.selectionMode==="none"&&!p&&d!==!1&&b&&b();break;case"Enter":!m&&d!==!1&&!p&&b&&b();break;default:p||s.continuePropagation(),K==null||K(s);break}},onKeyUp:Y}),{focusProps:ce}=ve({onBlur:ne,onFocus:Z,onFocusChange:ee}),U=j(u.props);delete U.id;let ue=he(u.props);return{menuItemProps:{...h,...F(U,ue,p?{onFocus:x.onFocus,"data-key":x["data-key"]}:x,ie,le,de,ce),tabIndex:x.tabIndex!=null?-1:void 0},labelProps:{id:R},descriptionProps:{id:N},keyboardShortcutProps:{id:A},isFocused:ae,isSelected:D,isPressed:se,isDisabled:m}}function Ve(n){let{heading:e,"aria-label":o}=n,r=be();return{itemProps:{role:"presentation"},headingProps:e?{id:r,role:"presentation"}:{},groupProps:{role:"group","aria-label":o,"aria-labelledby":e?r:void 0}}}const qe=Re(),I=pe.createContext(null),Ge=v.ul`
  list-style: none;
  margin: 0;
  background-color: var(--menu-bg-clr);
  padding: 8px 0;
  min-width: var(--trigger-width, auto);

  &:focus {
    outline: none;
  }
`,Je=v.ul`
  list-style: none;
  padding: 0px;
`,Qe=v.span`
  ${T.Regular}
  margin: 8px 16px;
  color: var(--neutral400);
  font-size: 1.4rem;
  line-height: 1;
`,Xe=v.li`
  ${T.Regular}
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

  --menu-item-icon-clr: var(--neutral600);
  i {
    font-size: 2rem;
    color: var(--menu-item-icon-clr);
  }

  &:hover {
    --menu-item-bg-clr: var(--neutral100);
    cursor: pointer;
  }
  &:active,
  &:focus-visible {
    --menu-item-bg-clr: var(--neutral200);
    outline: none;
  }
  &.is-focused {
    --menu-item-bg-clr: var(--primary700);
    --menu-item-text-clr: var(--text-clr-inverted);
    --menu-item-icon-clr: var(--text-clr-inverted);
    --menu-item-selected-clr: var(--text-clr-inverted);
  }

  &[aria-disabled] {
    cursor: not-allowed;
    opacity: 0.5;

    &:hover {
      background: none;
    }
  }
`,$=y.forwardRef(function(e,o){return[e,o]=Ne(qe,e,o),c.jsx(Se,{content:c.jsx(Ce,{...e}),children:r=>r.size>0&&c.jsx(Ye,{...e,collection:r,menuRef:o})})});$.displayName="Menu";function Ye(n){const{menuRef:e,className:o}=n,r=Te(n),t=z(e),{menuProps:d}=Le(n,r,t),{CollectionRenderer:l}=H();return c.jsx(Ge,{ref:t,className:me("aje-menu",o),...d,...j(n),children:c.jsx(Fe,{values:[[I.Provider,r],[Ae.Provider,{render:L}],[Ue.Provider,{render:V}]],children:c.jsx(l,{collection:n.collection})})})}function L(n,e,o){const r=y.useContext(I),{CollectionBranchRenderer:t}=H(),{itemProps:d,headingProps:l,groupProps:i}=Ve({heading:n.title,"aria-label":o["aria-label"]}),a=B({componentClassName:"aje-menu__section",...n,children:n.title});return c.jsxs(c.Fragment,{children:[o.key!==r.collection.getFirstKey()&&c.jsx(He,{as:"li"}),c.jsxs("li",{...d,...a,ref:e,children:[a.children&&c.jsx(Qe,{...l,children:a.children}),c.jsx(Je,{...i,children:c.jsx(t,{collection:r.collection,parent:o})})]})]})}const O=we("section",L);O.displayName="Menu.Section";$.Section=O;const V=(n,e,o)=>{const r=y.useContext(I),t=z(e),{menuItemProps:d,isSelected:l}=Oe({key:o.key,"aria-label":n["aria-label"]},r,t),{focusProps:i,isFocused:a,isFocusVisible:f}=Ee(),g=B({componentClassName:"aje-menu__item",...n,children:o.rendered,values:{isSelected:l,isFocused:a,isFocusVisible:f}});return c.jsx(Xe,{...F(d,i),...g,as:n.href?"a":"li",ref:t,children:g.children})},q=_e("item",V);q.displayName="Menu.Item";$.Item=q;try{$.displayName="Menu",$.__docgenInfo={description:`A Menu is a collection of items that the user can select.
When an item in the menu is selected, an associated action is performed`,displayName:"Menu",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<never>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<never>"}}}}}catch{}export{$ as M,qe as a};
