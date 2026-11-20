import{j as u}from"./jsx-runtime-D_zvdyIk.js";import{r as g,R as xe}from"./index-BCtMShv3.js";import{c as $e}from"./index-EJ0-2BeM.js";import{b as I,e as j,$ as ge}from"./useObjectRef-D2RG7rRi.js";import{$ as E}from"./filterDOMProps-CeZl_uWj.js";import{a as ve}from"./useSelectableList-DMpX2rIu.js";import{a as Pe,$ as Ke,b as ke}from"./usePress-CqXh5MnK.js";import{$ as Me}from"./getItemCount-BoAGj9zy.js";import{j as B,w as Se,l as Ce}from"./useFocusable-DacP9xvE.js";import{$ as we}from"./useHover-CQZXfm5n.js";import{f as Fe}from"./useSelectableItem-DFVaGUjR.js";import{$ as _e,a as De,c as je,b as Ie}from"./CollectionBuilder-D3rKkOdu.js";import{u as W}from"./useForwardedRef-Tweo1nQG.js";import{P as Ee}from"./Provider-op_UCnZE.js";import{$ as Ue,a as Re,b as Ne,u as L}from"./useCollectionRenderer-gXFztQxQ.js";import{u as O}from"./useRenderProps-CP918x9p.js";import{u as Ae}from"./useFocusRing-DIS5Kyrs.js";import{c as Ve,u as Te}from"./index-CKqsTkFX.js";import{b as ze,a as He}from"./Collection-DjjOtLT0.js";import{g as K}from"./styled-components.browser.esm-DC3GK9Rn.js";import{m as q}from"./mixins-rvS92GN5.js";import{$ as Be}from"./useControlledState-vzCMHZvt.js";import{D as We}from"./Divider.component-BOfRfkgE.js";class Le{*[Symbol.iterator](){yield*this.iterable}get size(){return this.keyMap.size}getKeys(){return this.keyMap.keys()}getKeyBefore(n){let o=this.keyMap.get(n);var r;return o&&(r=o.prevKey)!==null&&r!==void 0?r:null}getKeyAfter(n){let o=this.keyMap.get(n);var r;return o&&(r=o.nextKey)!==null&&r!==void 0?r:null}getFirstKey(){return this.firstKey}getLastKey(){return this.lastKey}getItem(n){var o;return(o=this.keyMap.get(n))!==null&&o!==void 0?o:null}at(n){const o=[...this.getKeys()];return this.getItem(o[n])}constructor(n,{expandedKeys:o}={}){this.keyMap=new Map,this.firstKey=null,this.lastKey=null,this.iterable=n,o=o||new Set;let r=s=>{if(this.keyMap.set(s.key,s),s.childNodes&&(s.type==="section"||o.has(s.key)))for(let i of s.childNodes)r(i)};for(let s of n)r(s);let t=null,d=0;for(let[s,i]of this.keyMap)t?(t.nextKey=s,i.prevKey=t.key):(this.firstKey=s,i.prevKey=void 0),i.type==="item"&&(i.index=d++),t=i,t.nextKey=void 0;var l;this.lastKey=(l=t==null?void 0:t.key)!==null&&l!==void 0?l:null}}function Oe(e){let{onExpandedChange:n}=e,[o,r]=Be(e.expandedKeys?new Set(e.expandedKeys):void 0,e.defaultExpandedKeys?new Set(e.defaultExpandedKeys):new Set,n),t=Ue(e),d=g.useMemo(()=>e.disabledKeys?new Set(e.disabledKeys):new Set,[e.disabledKeys]),l=Re(e,g.useCallback(i=>new Le(i,{expandedKeys:o}),[o]),null);return g.useEffect(()=>{t.focusedKey!=null&&!l.getItem(t.focusedKey)&&t.setFocusedKey(null)},[l,t.focusedKey]),{collection:l,expandedKeys:o,disabledKeys:d,toggleKey:i=>{r(qe(o,i))},setExpandedKeys:r,selectionManager:new Ne(l,t)}}function qe(e,n){let o=new Set(e);return o.has(n)?o.delete(n):o.add(n),o}const G=new WeakMap;function Ge(e,n,o){let{shouldFocusWrap:r=!0,onKeyDown:t,onKeyUp:d,...l}=e;!e["aria-label"]&&!e["aria-labelledby"]&&console.warn("An aria-label or aria-labelledby prop is required for accessibility.");let s=E(e,{labelable:!0}),{listProps:i}=ve({...l,ref:o,selectionManager:n.selectionManager,collection:n.collection,disabledKeys:n.disabledKeys,shouldFocusWrap:r,linkBehavior:"override"});return G.set(n,{onClose:e.onClose,onAction:e.onAction,shouldUseVirtualFocus:e.shouldUseVirtualFocus}),{menuProps:I(s,{onKeyDown:t,onKeyUp:d},{role:"menu",...i,onKeyDown:b=>{var p;(b.key!=="Escape"||e.shouldUseVirtualFocus)&&((p=i.onKeyDown)===null||p===void 0||p.call(i,b))}})}}function Je(e,n,o){let{id:r,key:t,closeOnSelect:d,isVirtualized:l,"aria-haspopup":s,onPressStart:i,onPressUp:b,onPress:p,onPressChange:Z,onPressEnd:ee,onHoverStart:k,onHoverChange:oe,onHoverEnd:ne,onKeyDown:M,onKeyUp:te,onFocus:re,onFocusChange:ae,onBlur:ie,selectionManager:f=n.selectionManager}=e,m=!!s,S=m&&e["aria-expanded"]==="true";var C;let y=(C=e.isDisabled)!==null&&C!==void 0?C:f.isDisabled(t);var w;let R=(w=e.isSelected)!==null&&w!==void 0?w:f.isSelected(t),h=G.get(n),c=n.collection.getItem(t),x=e.onClose||h.onClose,se=Pe(),F=a=>{var D;if(!m){if(!(c==null||(D=c.props)===null||D===void 0)&&D.onAction?c.props.onAction():e.onAction&&e.onAction(t),h.onAction){let he=h.onAction;he(t)}a.target instanceof HTMLAnchorElement&&c&&se.open(a.target,a,c.props.href,c.props.routerOptions)}},_="menuitem";m||(f.selectionMode==="single"?_="menuitemradio":f.selectionMode==="multiple"&&(_="menuitemcheckbox"));let N=j(),A=j(),V=j(),P={id:r,"aria-disabled":y||void 0,role:_,"aria-label":e["aria-label"],"aria-labelledby":N,"aria-describedby":[A,V].filter(Boolean).join(" ")||void 0,"aria-controls":e["aria-controls"],"aria-haspopup":s,"aria-expanded":e["aria-expanded"]};f.selectionMode!=="none"&&!m&&(P["aria-checked"]=R),l&&(P["aria-posinset"]=c==null?void 0:c.index,P["aria-setsize"]=Me(n.collection));let le=a=>{a.pointerType==="keyboard"&&F(a),i==null||i(a)},T=()=>{!m&&x&&(d??(f.selectionMode!=="multiple"||f.isLink(t)))&&x()},de=a=>{a.pointerType==="mouse"&&(F(a),T()),b==null||b(a)},ce=a=>{a.pointerType!=="keyboard"&&a.pointerType!=="mouse"&&(F(a),T()),p==null||p(a)},{itemProps:$,isFocused:z}=Fe({id:r,selectionManager:f,key:t,ref:o,shouldSelectOnPressUp:!0,allowsDifferentPressOrigin:!0,linkBehavior:"none",shouldUseVirtualFocus:h.shouldUseVirtualFocus}),{pressProps:ue,isPressed:fe}=Ke({onPressStart:le,onPress:ce,onPressUp:de,onPressChange:Z,onPressEnd:ee,isDisabled:y}),{hoverProps:pe}=we({isDisabled:y,onHoverStart(a){!B()&&!(S&&s)&&(f.setFocused(!0),f.setFocusedKey(t)),k==null||k(a)},onHoverChange:oe,onHoverEnd:ne}),{keyboardProps:me}=Se({onKeyDown:a=>{if(a.repeat){a.continuePropagation();return}switch(a.key){case" ":!y&&f.selectionMode==="none"&&!m&&d!==!1&&x&&x();break;case"Enter":!y&&d!==!1&&!m&&x&&x();break;default:m||a.continuePropagation(),M==null||M(a);break}},onKeyUp:te}),{focusProps:be}=Ce({onBlur:ie,onFocus:re,onFocusChange:ae}),H=E(c==null?void 0:c.props);delete H.id;let ye=ke(c==null?void 0:c.props);return{menuItemProps:{...P,...I(H,ye,m?{onFocus:$.onFocus,"data-collection":$["data-collection"],"data-key":$["data-key"]}:$,ue,pe,me,be,h.shouldUseVirtualFocus||m?{onMouseDown:a=>a.preventDefault()}:void 0),tabIndex:$.tabIndex!=null&&S&&!h.shouldUseVirtualFocus?-1:$.tabIndex},labelProps:{id:N},descriptionProps:{id:A},keyboardShortcutProps:{id:V},isFocused:z,isFocusVisible:z&&f.isFocused&&B()&&!S,isSelected:R,isPressed:fe,isDisabled:y}}function Qe(e){let{heading:n,"aria-label":o}=e,r=ge();return{itemProps:{role:"presentation"},headingProps:n?{id:r,role:"presentation"}:{},groupProps:{role:"group","aria-label":o,"aria-labelledby":n?r:void 0}}}const Xe=Ve(),U=xe.createContext(null),Ye=K.ul`
  list-style: none;
  margin: 0;
  background-color: var(--menu-bg-clr);
  padding: 8px 0;
  min-width: var(--trigger-width, auto);

  &:focus {
    outline: none;
  }
`,Ze=K.ul`
  list-style: none;
  padding: 0px;
`,eo=K.span`
  ${q.Regular}
  margin: 8px 16px;
  color: var(--text-clr-disabled);
  font-size: 1.4rem;
  line-height: 1;
`,oo=K.li`
  ${q.Regular}
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
    --menu-item-bg-clr: var(--accent-clr);
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
`,v=g.forwardRef(function(n,o){return[n,o]=Te(Xe,n,o),u.jsx(_e,{content:u.jsx(De,{...n}),children:r=>r.size>0&&u.jsx(no,{...n,collection:r,menuRef:o})})});v.displayName="Menu";function no(e){const{menuRef:n,className:o}=e,r=Oe(e),t=W(n),{menuProps:d}=Ge(e,r,t),{CollectionRenderer:l}=L();return u.jsx(Ye,{ref:t,className:$e("aje-menu",o),...d,...E(e),children:u.jsx(Ee,{values:[[U.Provider,r],[ze.Provider,{render:J}],[He.Provider,{render:X}]],children:u.jsx(l,{collection:e.collection})})})}function J(e,n,o){const r=g.useContext(U),{CollectionBranchRenderer:t}=L(),{itemProps:d,headingProps:l,groupProps:s}=Qe({heading:e.title,"aria-label":o["aria-label"]}),i=O({componentClassName:"aje-menu__section",...e,children:e.title});return u.jsxs(u.Fragment,{children:[o.key!==r.collection.getFirstKey()&&u.jsx(We,{as:"li"}),u.jsxs("li",{...d,...i,ref:n,children:[i.children&&u.jsx(eo,{...l,children:i.children}),u.jsx(Ze,{...s,children:u.jsx(t,{collection:r.collection,parent:o})})]})]})}const Q=je("section",J);Q.displayName="Menu.Section";v.Section=Q;const X=(e,n,o)=>{const r=g.useContext(U),t=W(n),{menuItemProps:d,isSelected:l}=Je({key:o.key,"aria-label":e["aria-label"]},r,t),{focusProps:s,isFocused:i,isFocusVisible:b}=Ae(),p=O({componentClassName:"aje-menu__item",...e,children:o.rendered,values:{isSelected:l,isFocused:i,isFocusVisible:b}});return u.jsx(oo,{...I(d,s),...p,as:e.href?"a":"li",ref:t,children:p.children})},Y=Ie("item",X);Y.displayName="Menu.Item";v.Item=Y;try{v.displayName="Menu",v.__docgenInfo={description:`A Menu is a collection of items that the user can select.
When an item in the menu is selected, an associated action is performed`,displayName:"Menu",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<never>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<never> | undefined"}}}}}catch{}export{v as M,Xe as a};
