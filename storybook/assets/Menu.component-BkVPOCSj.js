import{j as u}from"./jsx-runtime-D_zvdyIk.js";import{r as v,R as $e}from"./index-DmM0KDA7.js";import{c as xe}from"./index-CrEZfznw.js";import{a as I,e as j,$ as ve}from"./useObjectRef-BMBYa31u.js";import{$ as E}from"./filterDOMProps-CeZl_uWj.js";import{a as ge}from"./useSelectableList-BlmLA-dr.js";import{a as Pe,$ as Ke,b as Me}from"./usePress-BejIIMCm.js";import{$ as ke}from"./getItemCount-bvAGpgdb.js";import{j as B,w as Se,l as Ce}from"./useFocusable-DDF3Tgcq.js";import{$ as we}from"./useHover-BXnVJtPw.js";import{f as Fe}from"./useSelectableItem-BlMo16Kr.js";import{$ as _e,a as De,c as je,b as Ie}from"./CollectionBuilder-C8aBQCuV.js";import{u as W}from"./useForwardedRef-CeqQ-Fh5.js";import{P as Ee}from"./Provider-op_UCnZE.js";import{$ as Ue,a as Re,b as Ne,u as L}from"./useCollectionRenderer-D0KC5ksC.js";import{u as O}from"./useRenderProps-BzxgHqRb.js";import{u as Ae}from"./useFocusRing-CMFCJy1v.js";import{c as Ve,u as Te}from"./index-9MQGFWEg.js";import{b as ze,a as He}from"./Collection-Blx8idkz.js";import{d as K}from"./styled-components.browser.esm-B0S50oBn.js";import{m as q}from"./mixins-CgZ-Dp8B.js";import{$ as Be}from"./useControlledState-sJfMLWrs.js";import{D as We}from"./Divider.component-Cp_2XO01.js";class Le{*[Symbol.iterator](){yield*this.iterable}get size(){return this.keyMap.size}getKeys(){return this.keyMap.keys()}getKeyBefore(t){let o=this.keyMap.get(t);var r;return o&&(r=o.prevKey)!==null&&r!==void 0?r:null}getKeyAfter(t){let o=this.keyMap.get(t);var r;return o&&(r=o.nextKey)!==null&&r!==void 0?r:null}getFirstKey(){return this.firstKey}getLastKey(){return this.lastKey}getItem(t){var o;return(o=this.keyMap.get(t))!==null&&o!==void 0?o:null}at(t){const o=[...this.getKeys()];return this.getItem(o[t])}constructor(t,{expandedKeys:o}={}){this.keyMap=new Map,this.firstKey=null,this.lastKey=null,this.iterable=t,o=o||new Set;let r=s=>{if(this.keyMap.set(s.key,s),s.childNodes&&(s.type==="section"||o.has(s.key)))for(let i of s.childNodes)r(i)};for(let s of t)r(s);let n=null,d=0;for(let[s,i]of this.keyMap)n?(n.nextKey=s,i.prevKey=n.key):(this.firstKey=s,i.prevKey=void 0),i.type==="item"&&(i.index=d++),n=i,n.nextKey=void 0;var l;this.lastKey=(l=n==null?void 0:n.key)!==null&&l!==void 0?l:null}}function Oe(e){let{onExpandedChange:t}=e,[o,r]=Be(e.expandedKeys?new Set(e.expandedKeys):void 0,e.defaultExpandedKeys?new Set(e.defaultExpandedKeys):new Set,t),n=Ue(e),d=v.useMemo(()=>e.disabledKeys?new Set(e.disabledKeys):new Set,[e.disabledKeys]),l=Re(e,v.useCallback(i=>new Le(i,{expandedKeys:o}),[o]),null);return v.useEffect(()=>{n.focusedKey!=null&&!l.getItem(n.focusedKey)&&n.setFocusedKey(null)},[l,n.focusedKey]),{collection:l,expandedKeys:o,disabledKeys:d,toggleKey:i=>{r(qe(o,i))},setExpandedKeys:r,selectionManager:new Ne(l,n)}}function qe(e,t){let o=new Set(e);return o.has(t)?o.delete(t):o.add(t),o}const G=new WeakMap;function Ge(e,t,o){let{shouldFocusWrap:r=!0,onKeyDown:n,onKeyUp:d,...l}=e;!e["aria-label"]&&!e["aria-labelledby"]&&console.warn("An aria-label or aria-labelledby prop is required for accessibility.");let s=E(e,{labelable:!0}),{listProps:i}=ge({...l,ref:o,selectionManager:t.selectionManager,collection:t.collection,disabledKeys:t.disabledKeys,shouldFocusWrap:r,linkBehavior:"override"});return G.set(t,{onClose:e.onClose,onAction:e.onAction,shouldUseVirtualFocus:e.shouldUseVirtualFocus}),{menuProps:I(s,{onKeyDown:n,onKeyUp:d},{role:"menu",...i,onKeyDown:b=>{var p;(b.key!=="Escape"||e.shouldUseVirtualFocus)&&((p=i.onKeyDown)===null||p===void 0||p.call(i,b))}})}}function Je(e,t,o){let{id:r,key:n,closeOnSelect:d,isVirtualized:l,"aria-haspopup":s,onPressStart:i,onPressUp:b,onPress:p,onPressChange:Z,onPressEnd:ee,onHoverStart:M,onHoverChange:oe,onHoverEnd:te,onKeyDown:k,onKeyUp:ne,onFocus:re,onFocusChange:ae,onBlur:ie,selectionManager:f=t.selectionManager}=e,m=!!s,S=m&&e["aria-expanded"]==="true";var C;let y=(C=e.isDisabled)!==null&&C!==void 0?C:f.isDisabled(n);var w;let R=(w=e.isSelected)!==null&&w!==void 0?w:f.isSelected(n),h=G.get(t),c=t.collection.getItem(n),$=e.onClose||h.onClose,se=Pe(),F=a=>{var D;if(!m){if(!(c==null||(D=c.props)===null||D===void 0)&&D.onAction?c.props.onAction():e.onAction&&e.onAction(n),h.onAction){let he=h.onAction;he(n)}a.target instanceof HTMLAnchorElement&&c&&se.open(a.target,a,c.props.href,c.props.routerOptions)}},_="menuitem";m||(f.selectionMode==="single"?_="menuitemradio":f.selectionMode==="multiple"&&(_="menuitemcheckbox"));let N=j(),A=j(),V=j(),P={id:r,"aria-disabled":y||void 0,role:_,"aria-label":e["aria-label"],"aria-labelledby":N,"aria-describedby":[A,V].filter(Boolean).join(" ")||void 0,"aria-controls":e["aria-controls"],"aria-haspopup":s,"aria-expanded":e["aria-expanded"]};f.selectionMode!=="none"&&!m&&(P["aria-checked"]=R),l&&(P["aria-posinset"]=c==null?void 0:c.index,P["aria-setsize"]=ke(t.collection));let le=a=>{a.pointerType==="keyboard"&&F(a),i==null||i(a)},T=()=>{!m&&$&&(d??(f.selectionMode!=="multiple"||f.isLink(n)))&&$()},de=a=>{a.pointerType==="mouse"&&(F(a),T()),b==null||b(a)},ce=a=>{a.pointerType!=="keyboard"&&a.pointerType!=="mouse"&&(F(a),T()),p==null||p(a)},{itemProps:x,isFocused:z}=Fe({id:r,selectionManager:f,key:n,ref:o,shouldSelectOnPressUp:!0,allowsDifferentPressOrigin:!0,linkBehavior:"none",shouldUseVirtualFocus:h.shouldUseVirtualFocus}),{pressProps:ue,isPressed:fe}=Ke({onPressStart:le,onPress:ce,onPressUp:de,onPressChange:Z,onPressEnd:ee,isDisabled:y}),{hoverProps:pe}=we({isDisabled:y,onHoverStart(a){!B()&&!(S&&s)&&(f.setFocused(!0),f.setFocusedKey(n)),M==null||M(a)},onHoverChange:oe,onHoverEnd:te}),{keyboardProps:me}=Se({onKeyDown:a=>{if(a.repeat){a.continuePropagation();return}switch(a.key){case" ":!y&&f.selectionMode==="none"&&!m&&d!==!1&&$&&$();break;case"Enter":!y&&d!==!1&&!m&&$&&$();break;default:m||a.continuePropagation(),k==null||k(a);break}},onKeyUp:ne}),{focusProps:be}=Ce({onBlur:ie,onFocus:re,onFocusChange:ae}),H=E(c==null?void 0:c.props);delete H.id;let ye=Me(c==null?void 0:c.props);return{menuItemProps:{...P,...I(H,ye,m?{onFocus:x.onFocus,"data-collection":x["data-collection"],"data-key":x["data-key"]}:x,ue,pe,me,be,h.shouldUseVirtualFocus||m?{onMouseDown:a=>a.preventDefault()}:void 0),tabIndex:x.tabIndex!=null&&S&&!h.shouldUseVirtualFocus?-1:x.tabIndex},labelProps:{id:N},descriptionProps:{id:A},keyboardShortcutProps:{id:V},isFocused:z,isFocusVisible:z&&f.isFocused&&B()&&!S,isSelected:R,isPressed:fe,isDisabled:y}}function Qe(e){let{heading:t,"aria-label":o}=e,r=ve();return{itemProps:{role:"presentation"},headingProps:t?{id:r,role:"presentation"}:{},groupProps:{role:"group","aria-label":o,"aria-labelledby":t?r:void 0}}}const Xe=Ve(),U=$e.createContext(null),Ye=K.ul`
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
  color: var(--neutral400);
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
`,g=v.forwardRef(function(t,o){return[t,o]=Te(Xe,t,o),u.jsx(_e,{content:u.jsx(De,{...t}),children:r=>r.size>0&&u.jsx(to,{...t,collection:r,menuRef:o})})});g.displayName="Menu";function to(e){const{menuRef:t,className:o}=e,r=Oe(e),n=W(t),{menuProps:d}=Ge(e,r,n),{CollectionRenderer:l}=L();return u.jsx(Ye,{ref:n,className:xe("aje-menu",o),...d,...E(e),children:u.jsx(Ee,{values:[[U.Provider,r],[ze.Provider,{render:J}],[He.Provider,{render:X}]],children:u.jsx(l,{collection:e.collection})})})}function J(e,t,o){const r=v.useContext(U),{CollectionBranchRenderer:n}=L(),{itemProps:d,headingProps:l,groupProps:s}=Qe({heading:e.title,"aria-label":o["aria-label"]}),i=O({componentClassName:"aje-menu__section",...e,children:e.title});return u.jsxs(u.Fragment,{children:[o.key!==r.collection.getFirstKey()&&u.jsx(We,{as:"li"}),u.jsxs("li",{...d,...i,ref:t,children:[i.children&&u.jsx(eo,{...l,children:i.children}),u.jsx(Ze,{...s,children:u.jsx(n,{collection:r.collection,parent:o})})]})]})}const Q=je("section",J);Q.displayName="Menu.Section";g.Section=Q;const X=(e,t,o)=>{const r=v.useContext(U),n=W(t),{menuItemProps:d,isSelected:l}=Je({key:o.key,"aria-label":e["aria-label"]},r,n),{focusProps:s,isFocused:i,isFocusVisible:b}=Ae(),p=O({componentClassName:"aje-menu__item",...e,children:o.rendered,values:{isSelected:l,isFocused:i,isFocusVisible:b}});return u.jsx(oo,{...I(d,s),...p,as:e.href?"a":"li",ref:n,children:p.children})},Y=Ie("item",X);Y.displayName="Menu.Item";g.Item=Y;try{g.displayName="Menu",g.__docgenInfo={description:`A Menu is a collection of items that the user can select.
When an item in the menu is selected, an associated action is performed`,displayName:"Menu",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<never>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<never>"}}}}}catch{}export{g as M,Xe as a};
