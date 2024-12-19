import{j as c}from"./jsx-runtime-CkxqCPlQ.js";import{r as y,R as pe}from"./index-DJO9vBfz.js";import{c as me}from"./index-i5X67GZP.js";import{a as j,d as F,c as be}from"./useObjectRef-B0fXxeND.js";import{$ as I}from"./filterDOMProps-CeZl_uWj.js";import{a as ye}from"./useSelectableList-D3ubgvA_.js";import{a as $e,$ as ge,b as he}from"./usePress-DLdGKM_D.js";import{$ as xe}from"./getItemCount-v0kWppE5.js";import{$ as ve}from"./useFocus-CqC7M1wJ.js";import{e as Pe}from"./focusSafely-DAnwb70X.js";import{$ as Ke}from"./useHover-D34ofACQ.js";import{$ as Me}from"./useKeyboard-A8_doyNT.js";import{e as ke}from"./useSelectableItem-DvhFvnzE.js";import{b as Se,c as Ce,a as we,$ as Fe}from"./CollectionBuilder-DRj8-oKX.js";import{u as z}from"./useForwardedRef-BqZ3RrEL.js";import{P as je}from"./Provider-B9Eqn13H.js";import{$ as Ie,a as De,b as Ee,u as H}from"./useCollectionRenderer-DqbkNnVh.js";import{u as B}from"./useRenderProps-BqJZ5b79.js";import{u as _e}from"./useFocusRing-DokLxauV.js";import{c as Re,u as Ne}from"./index-B_KxbAnX.js";import{b as Ae,a as Ue}from"./Collection-_kdosoh5.js";import{d as v}from"./styled-components.browser.esm-WCay-hu9.js";import{m as T}from"./mixins-TlkgTuSN.js";import{$ as ze}from"./useControlledState-CN8sBTKq.js";import{D as He}from"./Divider.component-DwvL9aOv.js";class Be{*[Symbol.iterator](){yield*this.iterable}get size(){return this.keyMap.size}getKeys(){return this.keyMap.keys()}getKeyBefore(e){let n=this.keyMap.get(e);return n?n.prevKey:null}getKeyAfter(e){let n=this.keyMap.get(e);return n?n.nextKey:null}getFirstKey(){return this.firstKey}getLastKey(){return this.lastKey}getItem(e){return this.keyMap.get(e)}at(e){const n=[...this.getKeys()];return this.getItem(n[e])}constructor(e,{expandedKeys:n}={}){this.keyMap=new Map,this.iterable=e,n=n||new Set;let a=r=>{if(this.keyMap.set(r.key,r),r.childNodes&&(r.type==="section"||n.has(r.key)))for(let l of r.childNodes)a(l)};for(let r of e)a(r);let t,s=0;for(let[r,l]of this.keyMap)t?(t.nextKey=r,l.prevKey=t.key):(this.firstKey=r,l.prevKey=void 0),l.type==="item"&&(l.index=s++),t=l,t.nextKey=void 0;this.lastKey=t==null?void 0:t.key}}function Te(o){let{onExpandedChange:e}=o,[n,a]=ze(o.expandedKeys?new Set(o.expandedKeys):void 0,o.defaultExpandedKeys?new Set(o.defaultExpandedKeys):new Set,e),t=Ie(o),s=y.useMemo(()=>o.disabledKeys?new Set(o.disabledKeys):new Set,[o.disabledKeys]),r=De(o,y.useCallback(d=>new Be(d,{expandedKeys:n}),[n]),null);return y.useEffect(()=>{t.focusedKey!=null&&!r.getItem(t.focusedKey)&&t.setFocusedKey(null)},[r,t.focusedKey]),{collection:r,expandedKeys:n,disabledKeys:s,toggleKey:d=>{a(We(n,d))},setExpandedKeys:a,selectionManager:new Ee(r,t)}}function We(o,e){let n=new Set(o);return n.has(e)?n.delete(e):n.add(e),n}const W=new WeakMap;function Le(o,e,n){let{shouldFocusWrap:a=!0,onKeyDown:t,onKeyUp:s,...r}=o;!o["aria-label"]&&!o["aria-labelledby"]&&console.warn("An aria-label or aria-labelledby prop is required for accessibility.");let l=I(o,{labelable:!0}),{listProps:d}=ye({...r,ref:n,selectionManager:e.selectionManager,collection:e.collection,disabledKeys:e.disabledKeys,shouldFocusWrap:a,linkBehavior:"override"});return W.set(e,{onClose:o.onClose,onAction:o.onAction}),{menuProps:j(l,{onKeyDown:t,onKeyUp:s},{role:"menu",...d,onKeyDown:f=>{f.key!=="Escape"&&d.onKeyDown(f)}})}}function Oe(o,e,n){let{id:a,key:t,closeOnSelect:s,isVirtualized:r,"aria-haspopup":l,onPressStart:d,onPressUp:f,onPress:g,onPressChange:G,onPressEnd:J,onHoverStart:P,onHoverChange:Q,onHoverEnd:X,onKeyDown:K,onKeyUp:Y,onFocus:Z,onFocusChange:ee,onBlur:oe}=o,p=!!l;var M;let m=(M=o.isDisabled)!==null&&M!==void 0?M:e.selectionManager.isDisabled(t);var k;let E=(k=o.isSelected)!==null&&k!==void 0?k:e.selectionManager.isSelected(t),S=W.get(e),u=e.collection.getItem(t),b=o.onClose||S.onClose,ne=$e(),_=i=>{var w;if(!p){if(!(u==null||(w=u.props)===null||w===void 0)&&w.onAction?u.props.onAction():o.onAction&&o.onAction(t),S.onAction){let fe=S.onAction;fe(t)}i.target instanceof HTMLAnchorElement&&ne.open(i.target,i,u.props.href,u.props.routerOptions)}},C="menuitem";p||(e.selectionManager.selectionMode==="single"?C="menuitemradio":e.selectionManager.selectionMode==="multiple"&&(C="menuitemcheckbox"));let R=F(),N=F(),A=F(),h={id:a,"aria-disabled":m||void 0,role:C,"aria-label":o["aria-label"],"aria-labelledby":R,"aria-describedby":[N,A].filter(Boolean).join(" ")||void 0,"aria-controls":o["aria-controls"],"aria-haspopup":l,"aria-expanded":o["aria-expanded"]};e.selectionManager.selectionMode!=="none"&&!p&&(h["aria-checked"]=E),r&&(h["aria-posinset"]=u==null?void 0:u.index,h["aria-setsize"]=xe(e.collection));let te=i=>{i.pointerType==="keyboard"&&_(i),d==null||d(i)},re=i=>{i.pointerType!=="keyboard"&&(_(i),!p&&b&&(s??(e.selectionManager.selectionMode!=="multiple"||e.selectionManager.isLink(t)))&&b()),f==null||f(i)},{itemProps:x,isFocused:ae}=ke({selectionManager:e.selectionManager,key:t,ref:n,shouldSelectOnPressUp:!0,allowsDifferentPressOrigin:!0,linkBehavior:"none"}),{pressProps:ie,isPressed:se}=ge({onPressStart:te,onPress:g,onPressUp:re,onPressChange:G,onPressEnd:J,isDisabled:m}),{hoverProps:le}=Ke({isDisabled:m,onHoverStart(i){Pe()||(e.selectionManager.setFocused(!0),e.selectionManager.setFocusedKey(t)),P==null||P(i)},onHoverChange:Q,onHoverEnd:X}),{keyboardProps:de}=Me({onKeyDown:i=>{if(i.repeat){i.continuePropagation();return}switch(i.key){case" ":!m&&e.selectionManager.selectionMode==="none"&&!p&&s!==!1&&b&&b();break;case"Enter":!m&&s!==!1&&!p&&b&&b();break;default:p||i.continuePropagation(),K==null||K(i);break}},onKeyUp:Y}),{focusProps:ce}=ve({onBlur:oe,onFocus:Z,onFocusChange:ee}),U=I(u.props);delete U.id;let ue=he(u.props);return{menuItemProps:{...h,...j(U,ue,p?{onFocus:x.onFocus,"data-key":x["data-key"]}:x,ie,le,de,ce),tabIndex:x.tabIndex!=null?-1:void 0},labelProps:{id:R},descriptionProps:{id:N},keyboardShortcutProps:{id:A},isFocused:ae,isSelected:E,isPressed:se,isDisabled:m}}function Ve(o){let{heading:e,"aria-label":n}=o,a=be();return{itemProps:{role:"presentation"},headingProps:e?{id:a,role:"presentation"}:{},groupProps:{role:"group","aria-label":n,"aria-labelledby":e?a:void 0}}}const qe=Re(),D=pe.createContext(null),Ge=v.ul`
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
`,$=y.forwardRef(function(e,n){return[e,n]=Ne(qe,e,n),c.jsx(Se,{content:c.jsx(Ce,{...e}),children:a=>a.size>0&&c.jsx(Ye,{...e,collection:a,menuRef:n})})});$.displayName="Menu";function Ye(o){const{menuRef:e,className:n}=o,a=Te(o),t=z(e),{menuProps:s}=Le(o,a,t),{CollectionRenderer:r}=H();return c.jsx(Ge,{ref:t,className:me("aje-menu",n),...s,...I(o),children:c.jsx(je,{values:[[D.Provider,a],[Ae.Provider,{render:L}],[Ue.Provider,{render:V}]],children:c.jsx(r,{collection:o.collection})})})}function L(o,e,n){const a=y.useContext(D),{CollectionBranchRenderer:t}=H(),{itemProps:s,headingProps:r,groupProps:l}=Ve({heading:o.title,"aria-label":n["aria-label"]}),d=B({componentClassName:"aje-menu__section",...o,children:o.title});return c.jsxs(c.Fragment,{children:[n.key!==a.collection.getFirstKey()&&c.jsx(He,{as:"li"}),c.jsxs("li",{...s,...d,ref:e,children:[d.children&&c.jsx(Qe,{...r,children:d.children}),c.jsx(Je,{...l,children:c.jsx(t,{collection:a.collection,parent:n})})]})]})}const O=we("section",L);O.displayName="Menu.Section";$.Section=O;const V=(o,e,n)=>{const a=y.useContext(D),t=z(e),{menuItemProps:s,isSelected:r}=Oe({key:n.key,"aria-label":o["aria-label"]},a,t),{focusProps:l,isFocused:d,isFocusVisible:f}=_e(),g=B({componentClassName:"aje-menu__item",...o,children:n.rendered,values:{isSelected:r,isFocused:d,isFocusVisible:f}});return c.jsx(Xe,{...j(s,l),...g,as:o.href?"a":"li",ref:t,children:g.children})},q=Fe("item",V);q.displayName="Menu.Item";$.Item=q;try{$.displayName="Menu",$.__docgenInfo={description:`A Menu is a collection of items that the user can select.
When an item in the menu is selected, an associated action is performed`,displayName:"Menu",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<never>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<never>"}}}}}catch{}export{$ as M,qe as a};
