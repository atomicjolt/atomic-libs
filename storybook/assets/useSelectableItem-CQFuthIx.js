import{r as v}from"./index-DmM0KDA7.js";import{c as ne,b as N,$ as de,d as le}from"./useObjectRef-BO7mrmvR.js";import{v as me,b as pe,y as ee,c as Ke,z as he,q as te,t as ie}from"./useFocusable-B7cTVP20.js";import{d as Pe,$ as be,a as ye,f as ge}from"./usePress-Cxy0og0d.js";import{$ as H}from"./useEvent-Qm4q9YOK.js";import{$ as xe,a as se}from"./scrollIntoView-DuDju04b.js";import{r as Te}from"./index-CnHy7ftH.js";import{$ as Se}from"./FocusScope-CLRP0VYY.js";import{$ as Fe}from"./context-BF7eBGFA.js";import{$ as De}from"./useDescription-CP-qk7_s.js";function ce(l,e){const t=v.useRef(!0),o=v.useRef(null);ne(()=>(t.current=!0,()=>{t.current=!1}),[]),ne(()=>{t.current?t.current=!1:(!o.current||e.some((s,b)=>!Object.is(s,o[b])))&&l(),o.current=e},e)}const we="react-aria-clear-focus",Ee="react-aria-focus";function C(l){return me()?l.metaKey:l.ctrlKey}const ke=500;function Ae(l){let{isDisabled:e,onLongPressStart:t,onLongPressEnd:o,onLongPress:s,threshold:b=ke,accessibilityDescription:a}=l;const $=v.useRef(void 0);let{addGlobalListener:f,removeGlobalListener:E}=Pe(),{pressProps:g}=be({isDisabled:e,onPressStart(d){if(d.continuePropagation(),(d.pointerType==="mouse"||d.pointerType==="touch")&&(t&&t({...d,type:"longpressstart"}),$.current=setTimeout(()=>{d.target.dispatchEvent(new PointerEvent("pointercancel",{bubbles:!0})),pe(d.target).activeElement!==d.target&&ee(d.target),s&&s({...d,type:"longpress"}),$.current=void 0},b),d.pointerType==="touch")){let p=T=>{T.preventDefault()};f(d.target,"contextmenu",p,{once:!0}),f(window,"pointerup",()=>{setTimeout(()=>{E(d.target,"contextmenu",p)},30)},{once:!0})}},onPressEnd(d){$.current&&clearTimeout($.current),o&&(d.pointerType==="mouse"||d.pointerType==="touch")&&o({...d,type:"longpressend"})}}),x=De(s&&!e?a:void 0);return{longPressProps:N(g,x)}}function $e(l){let e=Me(pe(l));e!==l&&(e&&Re(e,l),l&&Le(l,e))}function Re(l,e){l.dispatchEvent(new FocusEvent("blur",{relatedTarget:e})),l.dispatchEvent(new FocusEvent("focusout",{bubbles:!0,relatedTarget:e}))}function Le(l,e){l.dispatchEvent(new FocusEvent("focus",{relatedTarget:e})),l.dispatchEvent(new FocusEvent("focusin",{bubbles:!0,relatedTarget:e}))}function Me(l){let e=Ke(l),t=e==null?void 0:e.getAttribute("aria-activedescendant");return t&&l.getElementById(t)||e}function Qe(l,e){return typeof e.getChildren=="function"?e.getChildren(l.key):l.childNodes}function Xe(l){return Oe(l,0)}function Oe(l,e){if(e<0)return;let t=0;for(let o of l){if(t===e)return o;t++}}function _e(l){let e;for(let t of l)e=t;return e}function et(l,e,t){if(e.parentKey===t.parentKey)return e.index-t.index;let o=[...ae(l,e),e],s=[...ae(l,t),t],b=o.slice(0,s.length).findIndex((a,$)=>a!==s[$]);return b!==-1?(e=o[b],t=s[b],e.index-t.index):o.findIndex(a=>a===t)>=0?1:(s.findIndex(a=>a===e)>=0,-1)}function ae(l,e){let t=[],o=e;for(;(o==null?void 0:o.parentKey)!=null;)o=l.getItem(o.parentKey),o&&t.unshift(o);return t}function re(l){return he()?l.altKey:l.ctrlKey}function _(l,e){var t,o;let s=`[data-key="${CSS.escape(String(e))}"]`,b=(t=l.current)===null||t===void 0?void 0:t.dataset.collection;return b&&(s=`[data-collection="${CSS.escape(b)}"]${s}`),(o=l.current)===null||o===void 0?void 0:o.querySelector(s)}const ve=new WeakMap;function Ie(l){let e=de();return ve.set(l,e),e}function Be(l){return ve.get(l)}const Ce=1e3;function Ue(l){let{keyboardDelegate:e,selectionManager:t,onTypeSelect:o}=l,s=v.useRef({search:"",timeout:void 0}).current,b=a=>{let $=Ne(a.key);if(!(!$||a.ctrlKey||a.metaKey||!a.currentTarget.contains(a.target))){if($===" "&&s.search.trim().length>0&&(a.preventDefault(),"continuePropagation"in a||a.stopPropagation()),s.search+=$,e.getKeyForSearch!=null){let f=e.getKeyForSearch(s.search,t.focusedKey);f==null&&(f=e.getKeyForSearch(s.search)),f!=null&&(t.setFocusedKey(f),o&&o(f))}clearTimeout(s.timeout),s.timeout=setTimeout(()=>{s.search=""},Ce)}};return{typeSelectProps:{onKeyDownCapture:e.getKeyForSearch?b:void 0}}}function Ne(l){return l.length===1||!/^[A-Z]/i.test(l)?l:""}function tt(l){let{selectionManager:e,keyboardDelegate:t,ref:o,autoFocus:s=!1,shouldFocusWrap:b=!1,disallowEmptySelection:a=!1,disallowSelectAll:$=!1,selectOnFocus:f=e.selectionBehavior==="replace",disallowTypeAhead:E=!1,shouldUseVirtualFocus:g,allowsTabNavigation:x=!1,isVirtualized:d,scrollRef:p=o,linkBehavior:T="action"}=l,{direction:I}=Fe(),z=ye(),h=n=>{var c;if(n.altKey&&n.key==="Tab"&&n.preventDefault(),!(!((c=o.current)===null||c===void 0)&&c.contains(n.target)))return;const u=(i,M)=>{if(i!=null){if(e.isLink(i)&&T==="selection"&&f&&!re(n)){Te.flushSync(()=>{e.setFocusedKey(i,M)});let O=_(o,i),oe=e.getItemProps(i);O&&z.open(O,n,oe.href,oe.routerOptions);return}if(e.setFocusedKey(i,M),e.isLink(i)&&T==="override")return;n.shiftKey&&e.selectionMode==="multiple"?e.extendSelection(i):f&&!re(n)&&e.replaceSelection(i)}};switch(n.key){case"ArrowDown":if(t.getKeyBelow){var r,y,K;let i=e.focusedKey!=null?(r=t.getKeyBelow)===null||r===void 0?void 0:r.call(t,e.focusedKey):(y=t.getFirstKey)===null||y===void 0?void 0:y.call(t);i==null&&b&&(i=(K=t.getFirstKey)===null||K===void 0?void 0:K.call(t,e.focusedKey)),i!=null&&(n.preventDefault(),u(i))}break;case"ArrowUp":if(t.getKeyAbove){var S,w,j;let i=e.focusedKey!=null?(S=t.getKeyAbove)===null||S===void 0?void 0:S.call(t,e.focusedKey):(w=t.getLastKey)===null||w===void 0?void 0:w.call(t);i==null&&b&&(i=(j=t.getLastKey)===null||j===void 0?void 0:j.call(t,e.focusedKey)),i!=null&&(n.preventDefault(),u(i))}break;case"ArrowLeft":if(t.getKeyLeftOf){var q,Y,Z;let i=e.focusedKey!=null?(q=t.getKeyLeftOf)===null||q===void 0?void 0:q.call(t,e.focusedKey):null;i==null&&b&&(i=I==="rtl"?(Y=t.getFirstKey)===null||Y===void 0?void 0:Y.call(t,e.focusedKey):(Z=t.getLastKey)===null||Z===void 0?void 0:Z.call(t,e.focusedKey)),i!=null&&(n.preventDefault(),u(i,I==="rtl"?"first":"last"))}break;case"ArrowRight":if(t.getKeyRightOf){var J,Q,X;let i=e.focusedKey!=null?(J=t.getKeyRightOf)===null||J===void 0?void 0:J.call(t,e.focusedKey):null;i==null&&b&&(i=I==="rtl"?(Q=t.getLastKey)===null||Q===void 0?void 0:Q.call(t,e.focusedKey):(X=t.getFirstKey)===null||X===void 0?void 0:X.call(t,e.focusedKey)),i!=null&&(n.preventDefault(),u(i,I==="rtl"?"last":"first"))}break;case"Home":if(t.getFirstKey){if(e.focusedKey===null&&n.shiftKey)return;n.preventDefault();let i=t.getFirstKey(e.focusedKey,C(n));e.setFocusedKey(i),i!=null&&(C(n)&&n.shiftKey&&e.selectionMode==="multiple"?e.extendSelection(i):f&&e.replaceSelection(i))}break;case"End":if(t.getLastKey){if(e.focusedKey===null&&n.shiftKey)return;n.preventDefault();let i=t.getLastKey(e.focusedKey,C(n));e.setFocusedKey(i),i!=null&&(C(n)&&n.shiftKey&&e.selectionMode==="multiple"?e.extendSelection(i):f&&e.replaceSelection(i))}break;case"PageDown":if(t.getKeyPageBelow&&e.focusedKey!=null){let i=t.getKeyPageBelow(e.focusedKey);i!=null&&(n.preventDefault(),u(i))}break;case"PageUp":if(t.getKeyPageAbove&&e.focusedKey!=null){let i=t.getKeyPageAbove(e.focusedKey);i!=null&&(n.preventDefault(),u(i))}break;case"a":C(n)&&e.selectionMode==="multiple"&&$!==!0&&(n.preventDefault(),e.selectAll());break;case"Escape":!a&&e.selectedKeys.size!==0&&(n.stopPropagation(),n.preventDefault(),e.clearSelection());break;case"Tab":if(!x){if(n.shiftKey)o.current.focus();else{let i=Se(o.current,{tabbable:!0}),M,O;do O=i.lastChild(),O&&(M=O);while(O);M&&!M.contains(document.activeElement)&&ee(M)}break}}},k=v.useRef({top:0,left:0});H(p,"scroll",d?void 0:()=>{var n,c,u,r;k.current={top:(u=(n=p.current)===null||n===void 0?void 0:n.scrollTop)!==null&&u!==void 0?u:0,left:(r=(c=p.current)===null||c===void 0?void 0:c.scrollLeft)!==null&&r!==void 0?r:0}});let F=n=>{if(e.isFocused){n.currentTarget.contains(n.target)||e.setFocused(!1);return}if(n.currentTarget.contains(n.target)){if(e.setFocused(!0),e.focusedKey==null){var c,u;let K=w=>{w!=null&&(e.setFocusedKey(w),f&&!e.isSelected(w)&&e.replaceSelection(w))},S=n.relatedTarget;var r,y;S&&n.currentTarget.compareDocumentPosition(S)&Node.DOCUMENT_POSITION_FOLLOWING?K((r=e.lastSelectedKey)!==null&&r!==void 0?r:(c=t.getLastKey)===null||c===void 0?void 0:c.call(t)):K((y=e.firstSelectedKey)!==null&&y!==void 0?y:(u=t.getFirstKey)===null||u===void 0?void 0:u.call(t))}else!d&&p.current&&(p.current.scrollTop=k.current.top,p.current.scrollLeft=k.current.left);if(e.focusedKey!=null&&p.current){let K=_(o,e.focusedKey);K instanceof HTMLElement&&(!K.contains(document.activeElement)&&!g&&ee(K),ie()==="keyboard"&&se(K,{containingElement:o.current}))}}},U=n=>{n.currentTarget.contains(n.relatedTarget)||e.setFocused(!1)},P=v.useRef(!1);H(o,Ee,g?n=>{let{detail:c}=n;n.stopPropagation(),e.setFocused(!0),(c==null?void 0:c.focusStrategy)==="first"&&(P.current=!0)}:void 0);let A=le(()=>{var n,c;let u=(c=(n=t.getFirstKey)===null||n===void 0?void 0:n.call(t))!==null&&c!==void 0?c:null;u==null?($e(o.current),e.collection.size>0&&(P.current=!1)):(e.setFocusedKey(u),P.current=!1)});ce(()=>{P.current&&A()},[e.collection,A]);let R=le(()=>{e.collection.size>0&&(P.current=!1)});ce(()=>{R()},[e.focusedKey,R]),H(o,we,g?n=>{var c;n.stopPropagation(),e.setFocused(!1),!((c=n.detail)===null||c===void 0)&&c.clearFocusKey&&e.setFocusedKey(null)}:void 0);const B=v.useRef(s),L=v.useRef(!1);v.useEffect(()=>{if(B.current){var n,c;let y=null;var u;s==="first"&&(y=(u=(n=t.getFirstKey)===null||n===void 0?void 0:n.call(t))!==null&&u!==void 0?u:null);var r;s==="last"&&(y=(r=(c=t.getLastKey)===null||c===void 0?void 0:c.call(t))!==null&&r!==void 0?r:null);let K=e.selectedKeys;if(K.size){for(let S of K)if(e.canSelectItem(S)){y=S;break}}e.setFocused(!0),e.setFocusedKey(y),y==null&&!g&&o.current&&te(o.current),e.collection.size>0&&(B.current=!1,L.current=!0)}});let D=v.useRef(e.focusedKey);v.useEffect(()=>{if(e.isFocused&&e.focusedKey!=null&&(e.focusedKey!==D.current||L.current)&&p.current&&o.current){let n=ie(),c=_(o,e.focusedKey);if(!(c instanceof HTMLElement))return;(n==="keyboard"||L.current)&&(xe(p.current,c),n!=="virtual"&&se(c,{containingElement:o.current}))}!g&&e.isFocused&&e.focusedKey==null&&D.current!=null&&o.current&&te(o.current),D.current=e.focusedKey,L.current=!1}),H(o,"react-aria-focus-scope-restore",n=>{n.preventDefault(),e.setFocused(!0)});let m={onKeyDown:h,onFocus:F,onBlur:U,onMouseDown(n){p.current===n.target&&n.preventDefault()}},{typeSelectProps:G}=Ue({keyboardDelegate:t,selectionManager:e});E||(m=N(G,m));let V;g||(V=e.focusedKey==null?0:-1);let W=Ie(e.collection);return{collectionProps:N(m,{tabIndex:V,"data-collection":W})}}function rt(l){let{id:e,selectionManager:t,key:o,ref:s,shouldSelectOnPressUp:b,shouldUseVirtualFocus:a,focus:$,isDisabled:f,onAction:E,allowsDifferentPressOrigin:g,linkBehavior:x="action"}=l,d=ye();e=de(e);let p=r=>{if(r.pointerType==="keyboard"&&re(r))t.toggleSelection(o);else{if(t.selectionMode==="none")return;if(t.isLink(o)){if(x==="selection"&&s.current){let y=t.getItemProps(o);d.open(s.current,r,y.href,y.routerOptions),t.setSelectedKeys(t.selectedKeys);return}else if(x==="override"||x==="none")return}t.selectionMode==="single"?t.isSelected(o)&&!t.disallowEmptySelection?t.toggleSelection(o):t.replaceSelection(o):r&&r.shiftKey?t.extendSelection(o):t.selectionBehavior==="toggle"||r&&(C(r)||r.pointerType==="touch"||r.pointerType==="virtual")?t.toggleSelection(o):t.replaceSelection(o)}};v.useEffect(()=>{o===t.focusedKey&&t.isFocused&&(a?$e(s.current):$?$():document.activeElement!==s.current&&s.current&&te(s.current))},[s,o,t.focusedKey,t.childFocusStrategy,t.isFocused,a]),f=f||t.isDisabled(o);let T={};!a&&!f?T={tabIndex:o===t.focusedKey?0:-1,onFocus(r){r.target===s.current&&t.setFocusedKey(o)}}:f&&(T.onMouseDown=r=>{r.preventDefault()});let I=t.isLink(o)&&x==="override",z=t.isLink(o)&&x!=="selection"&&x!=="none",h=!f&&t.canSelectItem(o)&&!I,k=(E||z)&&!f,F=k&&(t.selectionBehavior==="replace"?!h:!h||t.isEmpty),U=k&&h&&t.selectionBehavior==="replace",P=F||U,A=v.useRef(null),R=P&&h,B=v.useRef(!1),L=v.useRef(!1),D=r=>{if(E&&E(),z&&s.current){let y=t.getItemProps(o);d.open(s.current,r,y.href,y.routerOptions)}},m={};b?(m.onPressStart=r=>{A.current=r.pointerType,B.current=R,r.pointerType==="keyboard"&&(!P||fe())&&p(r)},g?(m.onPressUp=F?void 0:r=>{r.pointerType==="mouse"&&h&&p(r)},m.onPress=F?D:r=>{r.pointerType!=="keyboard"&&r.pointerType!=="mouse"&&h&&p(r)}):m.onPress=r=>{if(F||U&&r.pointerType!=="mouse"){if(r.pointerType==="keyboard"&&!ue())return;D(r)}else r.pointerType!=="keyboard"&&h&&p(r)}):(m.onPressStart=r=>{A.current=r.pointerType,B.current=R,L.current=F,h&&(r.pointerType==="mouse"&&!F||r.pointerType==="keyboard"&&(!k||fe()))&&p(r)},m.onPress=r=>{(r.pointerType==="touch"||r.pointerType==="pen"||r.pointerType==="virtual"||r.pointerType==="keyboard"&&P&&ue()||r.pointerType==="mouse"&&L.current)&&(P?D(r):h&&p(r))}),T["data-collection"]=Be(t.collection),T["data-key"]=o,m.preventFocusOnPress=a,a&&(m=N(m,{onPressStart(r){r.pointerType!=="touch"&&(t.setFocused(!0),t.setFocusedKey(o))},onPress(r){r.pointerType==="touch"&&(t.setFocused(!0),t.setFocusedKey(o))}}));let{pressProps:G,isPressed:V}=be(m),W=U?r=>{A.current==="mouse"&&(r.stopPropagation(),r.preventDefault(),D(r))}:void 0,{longPressProps:n}=Ae({isDisabled:!R,onLongPress(r){r.pointerType==="touch"&&(p(r),t.setSelectionBehavior("toggle"))}}),c=r=>{A.current==="touch"&&B.current&&r.preventDefault()},u=t.isLink(o)?r=>{ge.isOpening||r.preventDefault()}:void 0;return{itemProps:N(T,h||F||a?G:{},R?n:{},{onDoubleClick:W,onDragStartCapture:c,onClick:u,id:e},a?{onMouseDown:r=>r.preventDefault()}:void 0),isPressed:V,isSelected:t.isSelected(o),isFocused:t.isFocused&&t.focusedKey===o,isDisabled:f,allowsSelection:h,hasAction:P}}function ue(){let l=window.event;return(l==null?void 0:l.key)==="Enter"}function fe(){let l=window.event;return(l==null?void 0:l.key)===" "||(l==null?void 0:l.code)==="Space"}export{Qe as $,_ as a,tt as b,Ue as c,et as d,Xe as e,rt as f,Ae as g,Le as h,_e as i,Oe as j};
