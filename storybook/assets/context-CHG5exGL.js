import{b as P}from"./FocusScope-DX4qyq_T.js";import{$ as C}from"./useFocusWithin-BshFo8_g.js";import{b as N,u as I}from"./useFocusable-DacP9xvE.js";import{d as L,c as M,f as D}from"./useObjectRef-D2RG7rRi.js";import{r as x,R}from"./index-BCtMShv3.js";import{$ as S}from"./getScrollParent-BL0kfGii.js";function F(e){let{ref:t,onInteractOutside:r,isDisabled:l,onInteractOutsideStart:u}=e,m=x.useRef({isPointerDown:!1,ignoreEmulatedMouseEvents:!1}),a=L(o=>{r&&g(o,t)&&(u&&u(o),m.current.isPointerDown=!0)}),c=L(o=>{r&&r(o)});x.useEffect(()=>{let o=m.current;if(l)return;const i=t.current,n=N(i);if(typeof PointerEvent<"u"){let p=d=>{o.isPointerDown&&g(d,t)&&c(d),o.isPointerDown=!1};return n.addEventListener("pointerdown",a,!0),n.addEventListener("pointerup",p,!0),()=>{n.removeEventListener("pointerdown",a,!0),n.removeEventListener("pointerup",p,!0)}}else{let p=$=>{o.ignoreEmulatedMouseEvents?o.ignoreEmulatedMouseEvents=!1:o.isPointerDown&&g($,t)&&c($),o.isPointerDown=!1},d=$=>{o.ignoreEmulatedMouseEvents=!0,o.isPointerDown&&g($,t)&&c($),o.isPointerDown=!1};return n.addEventListener("mousedown",a,!0),n.addEventListener("mouseup",p,!0),n.addEventListener("touchstart",a,!0),n.addEventListener("touchend",d,!0),()=>{n.removeEventListener("mousedown",a,!0),n.removeEventListener("mouseup",p,!0),n.removeEventListener("touchstart",a,!0),n.removeEventListener("touchend",d,!0)}}},[t,l,a,c])}function g(e,t){if(e.button>0)return!1;if(e.target){const r=e.target.ownerDocument;if(!r||!r.documentElement.contains(e.target)||e.target.closest("[data-react-aria-top-layer]"))return!1}return t.current?!e.composedPath().includes(t.current):!1}const v=[];function Y(e,t){let{onClose:r,shouldCloseOnBlur:l,isOpen:u,isDismissable:m=!1,isKeyboardDismissDisabled:a=!1,shouldCloseOnInteractOutside:c}=e;x.useEffect(()=>{if(u&&!v.includes(t))return v.push(t),()=>{let s=v.indexOf(t);s>=0&&v.splice(s,1)}},[u,t]);let o=()=>{v[v.length-1]===t&&r&&r()},i=s=>{(!c||c(s.target))&&v[v.length-1]===t&&(s.stopPropagation(),s.preventDefault())},n=s=>{(!c||c(s.target))&&(v[v.length-1]===t&&(s.stopPropagation(),s.preventDefault()),o())},p=s=>{s.key==="Escape"&&!a&&!s.nativeEvent.isComposing&&(s.stopPropagation(),s.preventDefault(),o())};F({ref:t,onInteractOutside:m&&u?n:void 0,onInteractOutsideStart:i});let{focusWithinProps:d}=C({isDisabled:!l,onBlurWithin:s=>{!s.relatedTarget||P(s.relatedTarget)||(!c||c(s.relatedTarget))&&(r==null||r())}}),$=s=>{s.target===s.currentTarget&&s.preventDefault()};return{overlayProps:{onKeyDown:p,...d},underlayProps:{onPointerDown:$}}}const T=typeof document<"u"&&window.visualViewport,W=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);let w=0,y;function J(e={}){let{isDisabled:t}=e;M(()=>{if(!t)return w++,w===1&&(I()?y=H():y=A()),()=>{w--,w===0&&y()}},[t])}function A(){return D(b(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`),b(document.documentElement,"overflow","hidden"))}function H(){let e,t,r=i=>{e=S(i.target,!0),!(e===document.documentElement&&e===document.body)&&e instanceof HTMLElement&&window.getComputedStyle(e).overscrollBehavior==="auto"&&(t=b(e,"overscrollBehavior","contain"))},l=i=>{if(!e||e===document.documentElement||e===document.body){i.preventDefault();return}e.scrollHeight===e.clientHeight&&e.scrollWidth===e.clientWidth&&i.preventDefault()},u=()=>{t&&t()},m=i=>{let n=i.target;_(n)&&(c(),n.style.transform="translateY(-2000px)",requestAnimationFrame(()=>{n.style.transform="",T&&(T.height<window.innerHeight?requestAnimationFrame(()=>{O(n)}):T.addEventListener("resize",()=>O(n),{once:!0}))}))},a=null,c=()=>{if(a)return;let i=()=>{window.scrollTo(0,0)},n=window.pageXOffset,p=window.pageYOffset;a=D(E(window,"scroll",i),b(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`),b(document.documentElement,"overflow","hidden"),b(document.body,"marginTop",`-${p}px`),()=>{window.scrollTo(n,p)}),window.scrollTo(0,0)},o=D(E(document,"touchstart",r,{passive:!1,capture:!0}),E(document,"touchmove",l,{passive:!1,capture:!0}),E(document,"touchend",u,{passive:!1,capture:!0}),E(document,"focus",m,!0));return()=>{t==null||t(),a==null||a(),o()}}function b(e,t,r){let l=e.style[t];return e.style[t]=r,()=>{e.style[t]=l}}function E(e,t,r,l){return e.addEventListener(t,r,l),()=>{e.removeEventListener(t,r,l)}}function O(e){let t=document.scrollingElement||document.documentElement,r=e;for(;r&&r!==t;){let l=S(r);if(l!==document.documentElement&&l!==document.body&&l!==r){let u=l.getBoundingClientRect().top,m=r.getBoundingClientRect().top;m>u+r.clientHeight&&(l.scrollTop+=m-u)}r=l.parentElement}}function _(e){return e instanceof HTMLInputElement&&!W.has(e.type)||e instanceof HTMLTextAreaElement||e instanceof HTMLElement&&e.isContentEditable}let h=new WeakMap,f=[];function X(e,t=document.body){let r=new Set(e),l=new Set,u=o=>{for(let d of o.querySelectorAll("[data-live-announcer], [data-react-aria-top-layer]"))r.add(d);let i=d=>{if(r.has(d)||d.parentElement&&l.has(d.parentElement)&&d.parentElement.getAttribute("role")!=="row")return NodeFilter.FILTER_REJECT;for(let $ of r)if(d.contains($))return NodeFilter.FILTER_SKIP;return NodeFilter.FILTER_ACCEPT},n=document.createTreeWalker(o,NodeFilter.SHOW_ELEMENT,{acceptNode:i}),p=i(o);if(p===NodeFilter.FILTER_ACCEPT&&m(o),p!==NodeFilter.FILTER_REJECT){let d=n.nextNode();for(;d!=null;)m(d),d=n.nextNode()}},m=o=>{var i;let n=(i=h.get(o))!==null&&i!==void 0?i:0;o.getAttribute("aria-hidden")==="true"&&n===0||(n===0&&o.setAttribute("aria-hidden","true"),l.add(o),h.set(o,n+1))};f.length&&f[f.length-1].disconnect(),u(t);let a=new MutationObserver(o=>{for(let i of o)if(!(i.type!=="childList"||i.addedNodes.length===0)&&![...r,...l].some(n=>n.contains(i.target))){for(let n of i.removedNodes)n instanceof Element&&(r.delete(n),l.delete(n));for(let n of i.addedNodes)(n instanceof HTMLElement||n instanceof SVGElement)&&(n.dataset.liveAnnouncer==="true"||n.dataset.reactAriaTopLayer==="true")?r.add(n):n instanceof Element&&u(n)}});a.observe(t,{childList:!0,subtree:!0});let c={visibleNodes:r,hiddenNodes:l,observe(){a.observe(t,{childList:!0,subtree:!0})},disconnect(){a.disconnect()}};return f.push(c),()=>{a.disconnect();for(let o of l){let i=h.get(o);i!=null&&(i===1?(o.removeAttribute("aria-hidden"),h.delete(o)):h.set(o,i-1))}c===f[f.length-1]?(f.pop(),f.length&&f[f.length-1].observe()):f.splice(f.indexOf(c),1)}}function j(e){let t=f[f.length-1];if(t&&!t.visibleNodes.has(e))return t.visibleNodes.add(e),()=>{t.visibleNodes.delete(e)}}const z=R.createContext(null);export{Y as $,z as O,J as a,X as b,j as c};
