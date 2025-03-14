import{n as U,e as K,i as G,c as m,b as $,o as j,p as B,q as J,d as g,r as Y,s as Q,t as X}from"./useFocusable-B7cTVP20.js";import{c as k}from"./useObjectRef-BO7mrmvR.js";import{r as w,R}from"./index-DmM0KDA7.js";class Z{get currentNode(){return this._currentNode}set currentNode(e){if(!K(this.root,e))throw new Error("Cannot set currentNode to a node that is not contained by the root node.");const t=[];let n=e,o=e;for(this._currentNode=e;n&&n!==this.root;)if(n.nodeType===Node.DOCUMENT_FRAGMENT_NODE){const l=n,i=this._doc.createTreeWalker(l,this.whatToShow,{acceptNode:this._acceptNode});t.push(i),i.currentNode=o,this._currentSetFor.add(i),n=o=l.host}else n=n.parentNode;const a=this._doc.createTreeWalker(this.root,this.whatToShow,{acceptNode:this._acceptNode});t.push(a),a.currentNode=o,this._currentSetFor.add(a),this._walkerStack=t}get doc(){return this._doc}firstChild(){let e=this.currentNode,t=this.nextNode();return K(e,t)?(t&&(this.currentNode=t),t):(this.currentNode=e,null)}lastChild(){let t=this._walkerStack[0].lastChild();return t&&(this.currentNode=t),t}nextNode(){const e=this._walkerStack[0].nextNode();if(e){if(e.shadowRoot){var t;let o;if(typeof this.filter=="function"?o=this.filter(e):!((t=this.filter)===null||t===void 0)&&t.acceptNode&&(o=this.filter.acceptNode(e)),o===NodeFilter.FILTER_ACCEPT)return this.currentNode=e,e;let a=this.nextNode();return a&&(this.currentNode=a),a}return e&&(this.currentNode=e),e}else if(this._walkerStack.length>1){this._walkerStack.shift();let n=this.nextNode();return n&&(this.currentNode=n),n}else return null}previousNode(){const e=this._walkerStack[0];if(e.currentNode===e.root){if(this._currentSetFor.has(e))if(this._currentSetFor.delete(e),this._walkerStack.length>1){this._walkerStack.shift();let o=this.previousNode();return o&&(this.currentNode=o),o}else return null;return null}const t=e.previousNode();if(t){if(t.shadowRoot){var n;let a;if(typeof this.filter=="function"?a=this.filter(t):!((n=this.filter)===null||n===void 0)&&n.acceptNode&&(a=this.filter.acceptNode(t)),a===NodeFilter.FILTER_ACCEPT)return t&&(this.currentNode=t),t;let l=this.lastChild();return l&&(this.currentNode=l),l}return t&&(this.currentNode=t),t}else if(this._walkerStack.length>1){this._walkerStack.shift();let o=this.previousNode();return o&&(this.currentNode=o),o}else return null}nextSibling(){return null}previousSibling(){return null}parentNode(){return null}constructor(e,t,n,o){this._walkerStack=[],this._currentSetFor=new Set,this._acceptNode=l=>{if(l.nodeType===Node.ELEMENT_NODE){const f=l.shadowRoot;if(f){const u=this._doc.createTreeWalker(f,this.whatToShow,{acceptNode:this._acceptNode});return this._walkerStack.unshift(u),NodeFilter.FILTER_ACCEPT}else{var i;if(typeof this.filter=="function")return this.filter(l);if(!((i=this.filter)===null||i===void 0)&&i.acceptNode)return this.filter.acceptNode(l);if(this.filter===null)return NodeFilter.FILTER_ACCEPT}}return NodeFilter.FILTER_SKIP},this._doc=e,this.root=t,this.filter=o??null,this.whatToShow=n??NodeFilter.SHOW_ALL,this._currentNode=t,this._walkerStack.unshift(e.createTreeWalker(t,n,this._acceptNode));const a=t.shadowRoot;if(a){const l=this._doc.createTreeWalker(a,this.whatToShow,{acceptNode:this._acceptNode});this._walkerStack.unshift(l)}}}function O(r,e,t,n){return U()?new Z(r,e,t,n):r.createTreeWalker(e,t,n)}function ee(r){const e=G(r);if(!(r instanceof e.HTMLElement)&&!(r instanceof e.SVGElement))return!1;let{display:t,visibility:n}=r.style,o=t!=="none"&&n!=="hidden"&&n!=="collapse";if(o){const{getComputedStyle:a}=r.ownerDocument.defaultView;let{display:l,visibility:i}=a(r);o=l!=="none"&&i!=="hidden"&&i!=="collapse"}return o}function te(r,e){return!r.hasAttribute("hidden")&&!r.hasAttribute("data-react-aria-prevent-focus")&&(r.nodeName==="DETAILS"&&e&&e.nodeName!=="SUMMARY"?r.hasAttribute("open"):!0)}function z(r,e){return r.nodeName!=="#comment"&&ee(r)&&te(r,e)&&(!r.parentElement||z(r.parentElement,r))}const P=R.createContext(null),M="react-aria-focus-scope-restore";let h=null;function de(r){let{children:e,contain:t,restoreFocus:n,autoFocus:o}=r,a=w.useRef(null),l=w.useRef(null),i=w.useRef([]),{parentNode:f}=w.useContext(P)||{},u=w.useMemo(()=>new D({scopeRef:i}),[i]);k(()=>{let s=f||N.root;if(N.getTreeNode(s.scopeRef)&&h&&!F(h,s.scopeRef)){let b=N.getTreeNode(h);b&&(s=b)}s.addChild(u),N.addNode(u)},[u,f]),k(()=>{let s=N.getTreeNode(i);s&&(s.contain=!!t)},[t]),k(()=>{var s;let b=(s=a.current)===null||s===void 0?void 0:s.nextSibling,v=[],_=C=>C.stopPropagation();for(;b&&b!==l.current;)v.push(b),b.addEventListener(M,_),b=b.nextSibling;return i.current=v,()=>{for(let C of v)C.removeEventListener(M,_)}},[e]),ie(i,n,t),ne(i,t),ae(i,n,t),oe(i,o),w.useEffect(()=>{const s=m($(i.current?i.current[0]:void 0));let b=null;if(T(s,i.current)){for(let v of N.traverse())v.scopeRef&&T(s,v.scopeRef.current)&&(b=v);b===N.getTreeNode(i)&&(h=b.scopeRef)}},[i]),k(()=>()=>{var s,b,v;let _=(v=(b=N.getTreeNode(i))===null||b===void 0||(s=b.parent)===null||s===void 0?void 0:s.scopeRef)!==null&&v!==void 0?v:null;(i===h||F(i,h))&&(!_||N.getTreeNode(_))&&(h=_),N.removeTreeNode(i)},[i]);let d=w.useMemo(()=>re(i),[]),c=w.useMemo(()=>({focusManager:d,parentNode:u}),[u,d]);return R.createElement(P.Provider,{value:c},R.createElement("span",{"data-focus-scope-start":!0,hidden:!0,ref:a}),e,R.createElement("span",{"data-focus-scope-end":!0,hidden:!0,ref:l}))}function re(r){return{focusNext(e={}){let t=r.current,{from:n,tabbable:o,wrap:a,accept:l}=e;var i;let f=n||m($((i=t[0])!==null&&i!==void 0?i:void 0)),u=t[0].previousElementSibling,d=S(t),c=E(d,{tabbable:o,accept:l},t);c.currentNode=T(f,t)?f:u;let s=c.nextNode();return!s&&a&&(c.currentNode=u,s=c.nextNode()),s&&p(s,!0),s},focusPrevious(e={}){let t=r.current,{from:n,tabbable:o,wrap:a,accept:l}=e;var i;let f=n||m($((i=t[0])!==null&&i!==void 0?i:void 0)),u=t[t.length-1].nextElementSibling,d=S(t),c=E(d,{tabbable:o,accept:l},t);c.currentNode=T(f,t)?f:u;let s=c.previousNode();return!s&&a&&(c.currentNode=u,s=c.previousNode()),s&&p(s,!0),s},focusFirst(e={}){let t=r.current,{tabbable:n,accept:o}=e,a=S(t),l=E(a,{tabbable:n,accept:o},t);l.currentNode=t[0].previousElementSibling;let i=l.nextNode();return i&&p(i,!0),i},focusLast(e={}){let t=r.current,{tabbable:n,accept:o}=e,a=S(t),l=E(a,{tabbable:n,accept:o},t);l.currentNode=t[t.length-1].nextElementSibling;let i=l.previousNode();return i&&p(i,!0),i}}}function S(r){return r[0].parentElement}function y(r){let e=N.getTreeNode(h);for(;e&&e.scopeRef!==r;){if(e.contain)return!1;e=e.parent}return!0}function ne(r,e){let t=w.useRef(void 0),n=w.useRef(void 0);k(()=>{let o=r.current;if(!e){n.current&&(cancelAnimationFrame(n.current),n.current=void 0);return}const a=$(o?o[0]:void 0);let l=u=>{if(u.key!=="Tab"||u.altKey||u.ctrlKey||u.metaKey||!y(r)||u.isComposing)return;let d=m(a),c=r.current;if(!c||!T(d,c))return;let s=S(c),b=E(s,{tabbable:!0},c);if(!d)return;b.currentNode=d;let v=u.shiftKey?b.previousNode():b.nextNode();v||(b.currentNode=u.shiftKey?c[c.length-1].nextElementSibling:c[0].previousElementSibling,v=u.shiftKey?b.previousNode():b.nextNode()),u.preventDefault(),v&&p(v,!0)},i=u=>{(!h||F(h,r))&&T(g(u),r.current)?(h=r,t.current=g(u)):y(r)&&!x(g(u),r)?t.current?t.current.focus():h&&h.current&&A(h.current):y(r)&&(t.current=g(u))},f=u=>{n.current&&cancelAnimationFrame(n.current),n.current=requestAnimationFrame(()=>{let d=X(),c=(d==="virtual"||d===null)&&Y()&&Q(),s=m(a);if(!c&&s&&y(r)&&!x(s,r)){h=r;let v=g(u);if(v&&v.isConnected){var b;t.current=v,(b=t.current)===null||b===void 0||b.focus()}else h.current&&A(h.current)}})};return a.addEventListener("keydown",l,!1),a.addEventListener("focusin",i,!1),o==null||o.forEach(u=>u.addEventListener("focusin",i,!1)),o==null||o.forEach(u=>u.addEventListener("focusout",f,!1)),()=>{a.removeEventListener("keydown",l,!1),a.removeEventListener("focusin",i,!1),o==null||o.forEach(u=>u.removeEventListener("focusin",i,!1)),o==null||o.forEach(u=>u.removeEventListener("focusout",f,!1))}},[r,e]),k(()=>()=>{n.current&&cancelAnimationFrame(n.current)},[n])}function q(r){return x(r)}function T(r,e){return!r||!e?!1:e.some(t=>t.contains(r))}function x(r,e=null){if(r instanceof Element&&r.closest("[data-react-aria-top-layer]"))return!0;for(let{scopeRef:t}of N.traverse(N.getTreeNode(e)))if(t&&T(r,t.current))return!0;return!1}function se(r){return x(r,h)}function F(r,e){var t;let n=(t=N.getTreeNode(e))===null||t===void 0?void 0:t.parent;for(;n;){if(n.scopeRef===r)return!0;n=n.parent}return!1}function p(r,e=!1){if(r!=null&&!e)try{J(r)}catch{}else if(r!=null)try{r.focus()}catch{}}function H(r,e=!0){let t=r[0].previousElementSibling,n=S(r),o=E(n,{tabbable:e},r);o.currentNode=t;let a=o.nextNode();return e&&!a&&(n=S(r),o=E(n,{tabbable:!1},r),o.currentNode=t,a=o.nextNode()),a}function A(r,e=!0){p(H(r,e))}function oe(r,e){const t=R.useRef(e);w.useEffect(()=>{if(t.current){h=r;const n=$(r.current?r.current[0]:void 0);!T(m(n),h.current)&&r.current&&A(r.current)}t.current=!1},[r])}function ie(r,e,t){k(()=>{if(e||t)return;let n=r.current;const o=$(n?n[0]:void 0);let a=l=>{let i=g(l);T(i,r.current)?h=r:q(i)||(h=null)};return o.addEventListener("focusin",a,!1),n==null||n.forEach(l=>l.addEventListener("focusin",a,!1)),()=>{o.removeEventListener("focusin",a,!1),n==null||n.forEach(l=>l.removeEventListener("focusin",a,!1))}},[r,e,t])}function W(r){let e=N.getTreeNode(h);for(;e&&e.scopeRef!==r;){if(e.nodeToRestore)return!1;e=e.parent}return(e==null?void 0:e.scopeRef)===r}function ae(r,e,t){const n=w.useRef(typeof document<"u"?m($(r.current?r.current[0]:void 0)):null);k(()=>{let o=r.current;const a=$(o?o[0]:void 0);if(!e||t)return;let l=()=>{(!h||F(h,r))&&T(m(a),r.current)&&(h=r)};return a.addEventListener("focusin",l,!1),o==null||o.forEach(i=>i.addEventListener("focusin",l,!1)),()=>{a.removeEventListener("focusin",l,!1),o==null||o.forEach(i=>i.removeEventListener("focusin",l,!1))}},[r,t]),k(()=>{const o=$(r.current?r.current[0]:void 0);if(!e)return;let a=l=>{if(l.key!=="Tab"||l.altKey||l.ctrlKey||l.metaKey||!y(r)||l.isComposing)return;let i=o.activeElement;if(!x(i,r)||!W(r))return;let f=N.getTreeNode(r);if(!f)return;let u=f.nodeToRestore,d=E(o.body,{tabbable:!0});d.currentNode=i;let c=l.shiftKey?d.previousNode():d.nextNode();if((!u||!u.isConnected||u===o.body)&&(u=void 0,f.nodeToRestore=void 0),(!c||!x(c,r))&&u){d.currentNode=u;do c=l.shiftKey?d.previousNode():d.nextNode();while(x(c,r));l.preventDefault(),l.stopPropagation(),c?p(c,!0):q(u)?p(u,!0):i.blur()}};return t||o.addEventListener("keydown",a,!0),()=>{t||o.removeEventListener("keydown",a,!0)}},[r,e,t]),k(()=>{const o=$(r.current?r.current[0]:void 0);if(!e)return;let a=N.getTreeNode(r);if(a){var l;return a.nodeToRestore=(l=n.current)!==null&&l!==void 0?l:void 0,()=>{let i=N.getTreeNode(r);if(!i)return;let f=i.nodeToRestore,u=m(o);if(e&&f&&(u&&x(u,r)||u===o.body&&W(r))){let d=N.clone();requestAnimationFrame(()=>{if(o.activeElement===o.body){let c=d.getTreeNode(r);for(;c;){if(c.nodeToRestore&&c.nodeToRestore.isConnected){V(c.nodeToRestore);return}c=c.parent}for(c=d.getTreeNode(r);c;){if(c.scopeRef&&c.scopeRef.current&&N.getTreeNode(c.scopeRef)){let s=H(c.scopeRef.current,!0);V(s);return}c=c.parent}}})}}}},[r,e])}function V(r){r.dispatchEvent(new CustomEvent(M,{bubbles:!0,cancelable:!0}))&&p(r)}function E(r,e,t){let n=e!=null&&e.tabbable?j:B,o=(r==null?void 0:r.nodeType)===Node.ELEMENT_NODE?r:null,a=$(o),l=O(a,r||a,NodeFilter.SHOW_ELEMENT,{acceptNode(i){var f;return!(e==null||(f=e.from)===null||f===void 0)&&f.contains(i)?NodeFilter.FILTER_REJECT:n(i)&&z(i)&&(!t||T(i,t))&&(!(e!=null&&e.accept)||e.accept(i))?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});return e!=null&&e.from&&(l.currentNode=e.from),l}function fe(r,e={}){return{focusNext(t={}){let n=r.current;if(!n)return null;let{from:o,tabbable:a=e.tabbable,wrap:l=e.wrap,accept:i=e.accept}=t,f=o||m($(n)),u=E(n,{tabbable:a,accept:i});n.contains(f)&&(u.currentNode=f);let d=u.nextNode();return!d&&l&&(u.currentNode=n,d=u.nextNode()),d&&p(d,!0),d},focusPrevious(t=e){let n=r.current;if(!n)return null;let{from:o,tabbable:a=e.tabbable,wrap:l=e.wrap,accept:i=e.accept}=t,f=o||m($(n)),u=E(n,{tabbable:a,accept:i});if(n.contains(f))u.currentNode=f;else{let c=L(u);return c&&p(c,!0),c??null}let d=u.previousNode();if(!d&&l){u.currentNode=n;let c=L(u);if(!c)return null;d=c}return d&&p(d,!0),d??null},focusFirst(t=e){let n=r.current;if(!n)return null;let{tabbable:o=e.tabbable,accept:a=e.accept}=t,i=E(n,{tabbable:o,accept:a}).nextNode();return i&&p(i,!0),i},focusLast(t=e){let n=r.current;if(!n)return null;let{tabbable:o=e.tabbable,accept:a=e.accept}=t,l=E(n,{tabbable:o,accept:a}),i=L(l);return i&&p(i,!0),i??null}}}function L(r){let e,t;do t=r.lastChild(),t&&(e=t);while(t);return e}class I{get size(){return this.fastMap.size}getTreeNode(e){return this.fastMap.get(e)}addTreeNode(e,t,n){let o=this.fastMap.get(t??null);if(!o)return;let a=new D({scopeRef:e});o.addChild(a),a.parent=o,this.fastMap.set(e,a),n&&(a.nodeToRestore=n)}addNode(e){this.fastMap.set(e.scopeRef,e)}removeTreeNode(e){if(e===null)return;let t=this.fastMap.get(e);if(!t)return;let n=t.parent;for(let a of this.traverse())a!==t&&t.nodeToRestore&&a.nodeToRestore&&t.scopeRef&&t.scopeRef.current&&T(a.nodeToRestore,t.scopeRef.current)&&(a.nodeToRestore=t.nodeToRestore);let o=t.children;n&&(n.removeChild(t),o.size>0&&o.forEach(a=>n&&n.addChild(a))),this.fastMap.delete(t.scopeRef)}*traverse(e=this.root){if(e.scopeRef!=null&&(yield e),e.children.size>0)for(let t of e.children)yield*this.traverse(t)}clone(){var e;let t=new I;var n;for(let o of this.traverse())t.addTreeNode(o.scopeRef,(n=(e=o.parent)===null||e===void 0?void 0:e.scopeRef)!==null&&n!==void 0?n:null,o.nodeToRestore);return t}constructor(){this.fastMap=new Map,this.root=new D({scopeRef:null}),this.fastMap.set(null,this.root)}}class D{addChild(e){this.children.add(e),e.parent=this}removeChild(e){this.children.delete(e),e.parent=void 0}constructor(e){this.children=new Set,this.contain=!1,this.scopeRef=e.scopeRef}}let N=new I;export{E as $,de as a,se as b,fe as c};
