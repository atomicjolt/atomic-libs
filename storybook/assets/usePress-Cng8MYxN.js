import{A as de,m as pe,v as F,B as ve,y as re,u as ne,b as M,C as ge,e as g,d,D as ye,E as j,F as z,i as B,g as be}from"./useFocusable-B7cTVP20.js";import{r as T,R as $e}from"./index-DmM0KDA7.js";import{d as A,b as ae,f as Te}from"./useObjectRef-BO7mrmvR.js";import{r as he}from"./index-D_Kw7eWP.js";const Pe=T.createContext({isNative:!0,open:me,useHref:e=>e});function ie(){return T.useContext(Pe)}function He(e,n){let a=e.getAttribute("target");return(!a||a==="_self")&&e.origin===location.origin&&!e.hasAttribute("download")&&!n.metaKey&&!n.ctrlKey&&!n.altKey&&!n.shiftKey}function C(e,n,a=!0){var s,u;let{metaKey:v,ctrlKey:p,altKey:y,shiftKey:b}=n;de()&&(!((u=window.event)===null||u===void 0||(s=u.type)===null||s===void 0)&&s.startsWith("key"))&&e.target==="_blank"&&(F()?v=!0:p=!0);let h=pe()&&F()&&!ve()?new KeyboardEvent("keydown",{keyIdentifier:"Enter",metaKey:v,ctrlKey:p,altKey:y,shiftKey:b}):new MouseEvent("click",{metaKey:v,ctrlKey:p,altKey:y,shiftKey:b,bubbles:!0,cancelable:!0});C.isOpening=a,re(e),e.dispatchEvent(h),C.isOpening=!1}C.isOpening=!1;function Ee(e,n){if(e instanceof HTMLAnchorElement)n(e);else if(e.hasAttribute("data-href")){let a=document.createElement("a");a.href=e.getAttribute("data-href"),e.hasAttribute("data-target")&&(a.target=e.getAttribute("data-target")),e.hasAttribute("data-rel")&&(a.rel=e.getAttribute("data-rel")),e.hasAttribute("data-download")&&(a.download=e.getAttribute("data-download")),e.hasAttribute("data-ping")&&(a.ping=e.getAttribute("data-ping")),e.hasAttribute("data-referrer-policy")&&(a.referrerPolicy=e.getAttribute("data-referrer-policy")),e.appendChild(a),n(a),e.removeChild(a)}}function me(e,n){Ee(e,a=>C(a,n))}function Ge(e){let n=ie();var a;const s=n.useHref((a=e.href)!==null&&a!==void 0?a:"");return{"data-href":e.href?s:void 0,"data-target":e.target,"data-rel":e.rel,"data-download":e.download,"data-ping":e.ping,"data-referrer-policy":e.referrerPolicy}}function Re(e){let n=ie();var a;const s=n.useHref((a=e==null?void 0:e.href)!==null&&a!==void 0?a:"");return{href:e!=null&&e.href?s:void 0,target:e==null?void 0:e.target,rel:e==null?void 0:e.rel,download:e==null?void 0:e.download,ping:e==null?void 0:e.ping,referrerPolicy:e==null?void 0:e.referrerPolicy}}function Ke(){let e=T.useRef(new Map),n=T.useCallback((u,v,p,y)=>{let b=y!=null&&y.once?(...h)=>{e.current.delete(p),p(...h)}:p;e.current.set(p,{type:v,eventTarget:u,fn:b,options:y}),u.addEventListener(v,b,y)},[]),a=T.useCallback((u,v,p,y)=>{var b;let h=((b=e.current.get(p))===null||b===void 0?void 0:b.fn)||p;u.removeEventListener(v,h,y),e.current.delete(p)},[]),s=T.useCallback(()=>{e.current.forEach((u,v)=>{a(u.eventTarget,u.type,v,u.options)})},[a]);return T.useEffect(()=>s,[s]),{addGlobalListener:n,removeGlobalListener:a,removeAllGlobalListeners:s}}function Se(e,n){if(n.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function xe(e,n,a){Se(e,n),n.set(e,a)}let L="default",N="",H=new WeakMap;function q(e){if(ne()){if(L==="default"){const n=M(e);N=n.documentElement.style.webkitUserSelect,n.documentElement.style.webkitUserSelect="none"}L="disabled"}else if(e instanceof HTMLElement||e instanceof SVGElement){let n="userSelect"in e.style?"userSelect":"webkitUserSelect";H.set(e,e.style[n]),e.style[n]="none"}}function G(e){if(ne()){if(L!=="disabled")return;L="restoring",setTimeout(()=>{ge(()=>{if(L==="restoring"){const n=M(e);n.documentElement.style.webkitUserSelect==="none"&&(n.documentElement.style.webkitUserSelect=N||""),N="",L="default"}})},300)}else if((e instanceof HTMLElement||e instanceof SVGElement)&&e&&H.has(e)){let n=H.get(e),a="userSelect"in e.style?"userSelect":"webkitUserSelect";e.style[a]==="none"&&(e.style[a]=n),e.getAttribute("style")===""&&e.removeAttribute("style"),H.delete(e)}}const se=$e.createContext({register:()=>{}});se.displayName="PressResponderContext";function we(e,n){return n.get?n.get.call(e):n.value}function oe(e,n,a){if(!n.has(e))throw new TypeError("attempted to "+a+" private field on non-instance");return n.get(e)}function ke(e,n){var a=oe(e,n,"get");return we(e,a)}function _e(e,n,a){if(n.set)n.set.call(e,a);else{if(!n.writable)throw new TypeError("attempted to set read only private field");n.value=a}}function J(e,n,a){var s=oe(e,n,"set");return _e(e,s,a),a}function Oe(e){let n=T.useContext(se);if(n){let{register:a,...s}=n;e=ae(s,e),a()}return be(n,e.ref),e}var X=new WeakMap;class Y{continuePropagation(){J(this,X,!1)}get shouldStopPropagation(){return ke(this,X)}constructor(n,a,s,u){xe(this,X,{writable:!0,value:void 0}),J(this,X,!0);var v;let p=(v=u==null?void 0:u.target)!==null&&v!==void 0?v:s.currentTarget;const y=p==null?void 0:p.getBoundingClientRect();let b,h=0,P,I=null;s.clientX!=null&&s.clientY!=null&&(P=s.clientX,I=s.clientY),y&&(P!=null&&I!=null?(b=P-y.left,h=I-y.top):(b=y.width/2,h=y.height/2)),this.type=n,this.pointerType=a,this.target=s.currentTarget,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.x=b,this.y=h}}const Q=Symbol("linkClicked");function Fe(e){let{onPress:n,onPressChange:a,onPressStart:s,onPressEnd:u,onPressUp:v,isDisabled:p,isPressed:y,preventFocusOnPress:b,shouldCancelOnPointerExit:h,allowTextSelectionOnPress:P,ref:I,...ue}=Oe(e),[fe,W]=T.useState(!1),w=T.useRef({isPressed:!1,ignoreEmulatedMouseEvents:!1,didFirePressStart:!1,isTriggeringEvent:!1,activePointerId:null,target:null,isOverTarget:!1,pointerType:null,disposables:[]}),{addGlobalListener:x,removeAllGlobalListeners:U}=Ke(),K=A((t,o)=>{let $=w.current;if(p||$.didFirePressStart)return!1;let i=!0;if($.isTriggeringEvent=!0,s){let c=new Y("pressstart",o,t);s(c),i=c.shouldStopPropagation}return a&&a(!0),$.isTriggeringEvent=!1,$.didFirePressStart=!0,W(!0),i}),m=A((t,o,$=!0)=>{let i=w.current;if(!i.didFirePressStart)return!1;i.didFirePressStart=!1,i.isTriggeringEvent=!0;let c=!0;if(u){let r=new Y("pressend",o,t);u(r),c=r.shouldStopPropagation}if(a&&a(!1),W(!1),n&&$&&!p){let r=new Y("press",o,t);n(r),c&&(c=r.shouldStopPropagation)}return i.isTriggeringEvent=!1,c}),k=A((t,o)=>{let $=w.current;if(p)return!1;if(v){$.isTriggeringEvent=!0;let i=new Y("pressup",o,t);return v(i),$.isTriggeringEvent=!1,i.shouldStopPropagation}return!0}),E=A(t=>{let o=w.current;if(o.isPressed&&o.target){o.didFirePressStart&&o.pointerType!=null&&m(O(o.target,t),o.pointerType,!1),o.isPressed=!1,o.isOverTarget=!1,o.activePointerId=null,o.pointerType=null,U(),P||G(o.target);for(let $ of o.disposables)$();o.disposables=[]}}),D=A(t=>{h&&E(t)}),ce=T.useMemo(()=>{let t=w.current,o={onKeyDown(i){if(R(i.nativeEvent,i.currentTarget)&&g(i.currentTarget,d(i.nativeEvent))){var c;te(d(i.nativeEvent),i.key)&&i.preventDefault();let r=!0;if(!t.isPressed&&!i.repeat){t.target=i.currentTarget,t.isPressed=!0,t.pointerType="keyboard",r=K(i,"keyboard");let l=i.currentTarget,f=_=>{R(_,l)&&!_.repeat&&g(l,d(_))&&t.target&&k(O(t.target,_),"keyboard")};x(M(i.currentTarget),"keyup",Te(f,$),!0)}r&&i.stopPropagation(),i.metaKey&&F()&&((c=t.metaKeyEvents)===null||c===void 0||c.set(i.key,i.nativeEvent))}else i.key==="Meta"&&(t.metaKeyEvents=new Map)},onClick(i){if(!(i&&!g(i.currentTarget,d(i.nativeEvent)))&&i&&i.button===0&&!t.isTriggeringEvent&&!C.isOpening){let c=!0;if(p&&i.preventDefault(),!t.ignoreEmulatedMouseEvents&&!t.isPressed&&(t.pointerType==="virtual"||z(i.nativeEvent))){let r=K(i,"virtual"),l=k(i,"virtual"),f=m(i,"virtual");c=r&&l&&f}else if(t.isPressed&&t.pointerType!=="keyboard"){let r=t.pointerType||i.nativeEvent.pointerType||"virtual";c=m(O(i.currentTarget,i),r,!0),t.isOverTarget=!1,E(i)}t.ignoreEmulatedMouseEvents=!1,c&&i.stopPropagation()}}},$=i=>{var c;if(t.isPressed&&t.target&&R(i,t.target)){var r;te(d(i),i.key)&&i.preventDefault();let f=d(i);m(O(t.target,i),"keyboard",g(t.target,d(i))),U(),i.key!=="Enter"&&V(t.target)&&g(t.target,f)&&!i[Q]&&(i[Q]=!0,C(t.target,i,!1)),t.isPressed=!1,(r=t.metaKeyEvents)===null||r===void 0||r.delete(i.key)}else if(i.key==="Meta"&&(!((c=t.metaKeyEvents)===null||c===void 0)&&c.size)){var l;let f=t.metaKeyEvents;t.metaKeyEvents=void 0;for(let _ of f.values())(l=t.target)===null||l===void 0||l.dispatchEvent(new KeyboardEvent("keyup",_))}};if(typeof PointerEvent<"u"){o.onPointerDown=r=>{if(r.button!==0||!g(r.currentTarget,d(r.nativeEvent)))return;if(ye(r.nativeEvent)){t.pointerType="virtual";return}t.pointerType=r.pointerType;let l=!0;if(!t.isPressed){t.isPressed=!0,t.isOverTarget=!0,t.activePointerId=r.pointerId,t.target=r.currentTarget,P||q(t.target),l=K(r,t.pointerType);let f=d(r.nativeEvent);"releasePointerCapture"in f&&f.releasePointerCapture(r.pointerId),x(M(r.currentTarget),"pointerup",i,!1),x(M(r.currentTarget),"pointercancel",c,!1)}l&&r.stopPropagation()},o.onMouseDown=r=>{if(g(r.currentTarget,d(r.nativeEvent))&&r.button===0){if(b){let l=j(r.target);l&&t.disposables.push(l)}r.stopPropagation()}},o.onPointerUp=r=>{!g(r.currentTarget,d(r.nativeEvent))||t.pointerType==="virtual"||r.button===0&&k(r,t.pointerType||r.pointerType)},o.onPointerEnter=r=>{r.pointerId===t.activePointerId&&t.target&&!t.isOverTarget&&t.pointerType!=null&&(t.isOverTarget=!0,K(O(t.target,r),t.pointerType))},o.onPointerLeave=r=>{r.pointerId===t.activePointerId&&t.target&&t.isOverTarget&&t.pointerType!=null&&(t.isOverTarget=!1,m(O(t.target,r),t.pointerType,!1),D(r))};let i=r=>{if(r.pointerId===t.activePointerId&&t.isPressed&&r.button===0&&t.target){if(g(t.target,d(r))&&t.pointerType!=null){let l=!1,f=setTimeout(()=>{t.isPressed&&t.target instanceof HTMLElement&&(l?E(r):(re(t.target),t.target.click()))},80);x(r.currentTarget,"click",()=>l=!0,!0),t.disposables.push(()=>clearTimeout(f))}else E(r);t.isOverTarget=!1}},c=r=>{E(r)};o.onDragStart=r=>{g(r.currentTarget,d(r.nativeEvent))&&E(r)}}else{o.onMouseDown=r=>{if(r.button!==0||!g(r.currentTarget,d(r.nativeEvent)))return;if(t.ignoreEmulatedMouseEvents){r.stopPropagation();return}if(t.isPressed=!0,t.isOverTarget=!0,t.target=r.currentTarget,t.pointerType=z(r.nativeEvent)?"virtual":"mouse",he.flushSync(()=>K(r,t.pointerType))&&r.stopPropagation(),b){let f=j(r.target);f&&t.disposables.push(f)}x(M(r.currentTarget),"mouseup",i,!1)},o.onMouseEnter=r=>{if(!g(r.currentTarget,d(r.nativeEvent)))return;let l=!0;t.isPressed&&!t.ignoreEmulatedMouseEvents&&t.pointerType!=null&&(t.isOverTarget=!0,l=K(r,t.pointerType)),l&&r.stopPropagation()},o.onMouseLeave=r=>{if(!g(r.currentTarget,d(r.nativeEvent)))return;let l=!0;t.isPressed&&!t.ignoreEmulatedMouseEvents&&t.pointerType!=null&&(t.isOverTarget=!1,l=m(r,t.pointerType,!1),D(r)),l&&r.stopPropagation()},o.onMouseUp=r=>{g(r.currentTarget,d(r.nativeEvent))&&!t.ignoreEmulatedMouseEvents&&r.button===0&&k(r,t.pointerType||"mouse")};let i=r=>{if(r.button===0){if(t.ignoreEmulatedMouseEvents){t.ignoreEmulatedMouseEvents=!1;return}t.target&&t.target.contains(r.target)&&t.pointerType!=null||E(r),t.isOverTarget=!1}};o.onTouchStart=r=>{if(!g(r.currentTarget,d(r.nativeEvent)))return;let l=Me(r.nativeEvent);if(!l)return;t.activePointerId=l.identifier,t.ignoreEmulatedMouseEvents=!0,t.isOverTarget=!0,t.isPressed=!0,t.target=r.currentTarget,t.pointerType="touch",P||q(t.target),K(S(t.target,r),t.pointerType)&&r.stopPropagation(),x(B(r.currentTarget),"scroll",c,!0)},o.onTouchMove=r=>{if(!g(r.currentTarget,d(r.nativeEvent)))return;if(!t.isPressed){r.stopPropagation();return}let l=Z(r.nativeEvent,t.activePointerId),f=!0;l&&ee(l,r.currentTarget)?!t.isOverTarget&&t.pointerType!=null&&(t.isOverTarget=!0,f=K(S(t.target,r),t.pointerType)):t.isOverTarget&&t.pointerType!=null&&(t.isOverTarget=!1,f=m(S(t.target,r),t.pointerType,!1),D(S(t.target,r))),f&&r.stopPropagation()},o.onTouchEnd=r=>{if(!g(r.currentTarget,d(r.nativeEvent)))return;if(!t.isPressed){r.stopPropagation();return}let l=Z(r.nativeEvent,t.activePointerId),f=!0;l&&ee(l,r.currentTarget)&&t.pointerType!=null?(k(S(t.target,r),t.pointerType),f=m(S(t.target,r),t.pointerType)):t.isOverTarget&&t.pointerType!=null&&(f=m(S(t.target,r),t.pointerType,!1)),f&&r.stopPropagation(),t.isPressed=!1,t.activePointerId=null,t.isOverTarget=!1,t.ignoreEmulatedMouseEvents=!0,t.target&&!P&&G(t.target),U()},o.onTouchCancel=r=>{g(r.currentTarget,d(r.nativeEvent))&&(r.stopPropagation(),t.isPressed&&E(S(t.target,r)))};let c=r=>{t.isPressed&&g(d(r),t.target)&&E({currentTarget:t.target,shiftKey:!1,ctrlKey:!1,metaKey:!1,altKey:!1})};o.onDragStart=r=>{g(r.currentTarget,d(r.nativeEvent))&&E(r)}}return o},[x,p,b,U,P,E,D,m,K,k]);return T.useEffect(()=>{let t=w.current;return()=>{var o;P||G((o=t.target)!==null&&o!==void 0?o:void 0);for(let $ of t.disposables)$();t.disposables=[]}},[P]),{isPressed:y||fe,pressProps:ae(ue,ce)}}function V(e){return e.tagName==="A"&&e.hasAttribute("href")}function R(e,n){const{key:a,code:s}=e,u=n,v=u.getAttribute("role");return(a==="Enter"||a===" "||a==="Spacebar"||s==="Space")&&!(u instanceof B(u).HTMLInputElement&&!le(u,a)||u instanceof B(u).HTMLTextAreaElement||u.isContentEditable)&&!((v==="link"||!v&&V(u))&&a!=="Enter")}function Me(e){const{targetTouches:n}=e;return n.length>0?n[0]:null}function Z(e,n){const a=e.changedTouches;for(let s=0;s<a.length;s++){const u=a[s];if(u.identifier===n)return u}return null}function S(e,n){let a=0,s=0;return n.targetTouches&&n.targetTouches.length===1&&(a=n.targetTouches[0].clientX,s=n.targetTouches[0].clientY),{currentTarget:e,shiftKey:n.shiftKey,ctrlKey:n.ctrlKey,metaKey:n.metaKey,altKey:n.altKey,clientX:a,clientY:s}}function O(e,n){let a=n.clientX,s=n.clientY;return{currentTarget:e,shiftKey:n.shiftKey,ctrlKey:n.ctrlKey,metaKey:n.metaKey,altKey:n.altKey,clientX:a,clientY:s}}function Le(e){let n=0,a=0;return e.width!==void 0?n=e.width/2:e.radiusX!==void 0&&(n=e.radiusX),e.height!==void 0?a=e.height/2:e.radiusY!==void 0&&(a=e.radiusY),{top:e.clientY-a,right:e.clientX+n,bottom:e.clientY+a,left:e.clientX-n}}function Ce(e,n){return!(e.left>n.right||n.left>e.right||e.top>n.bottom||n.top>e.bottom)}function ee(e,n){let a=n.getBoundingClientRect(),s=Le(e);return Ce(a,s)}function Ae(e){return e instanceof HTMLInputElement?!1:e instanceof HTMLButtonElement?e.type!=="submit"&&e.type!=="reset":!V(e)}function te(e,n){return e instanceof HTMLInputElement?!le(e,n):Ae(e)}const Ie=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function le(e,n){return e.type==="checkbox"||e.type==="radio"?n===" ":Ie.has(e.type)}export{Fe as $,xe as _,ie as a,Re as b,He as c,Ke as d,se as e,C as f,Ge as g};
