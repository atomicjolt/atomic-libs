import{$ as C,a as T,b as V}from"./useCollectionRenderer-BjBmU679.js";import{r as c}from"./index-DJO9vBfz.js";class D{*[Symbol.iterator](){yield*this.iterable}get size(){return this.keyMap.size}getKeys(){return this.keyMap.keys()}getKeyBefore(t){let l=this.keyMap.get(t);var e;return l&&(e=l.prevKey)!==null&&e!==void 0?e:null}getKeyAfter(t){let l=this.keyMap.get(t);var e;return l&&(e=l.nextKey)!==null&&e!==void 0?e:null}getFirstKey(){return this.firstKey}getLastKey(){return this.lastKey}getItem(t){var l;return(l=this.keyMap.get(t))!==null&&l!==void 0?l:null}at(t){const l=[...this.getKeys()];return this.getItem(l[t])}getChildren(t){let l=this.keyMap.get(t);return(l==null?void 0:l.childNodes)||[]}constructor(t){this.keyMap=new Map,this.firstKey=null,this.lastKey=null,this.iterable=t;let l=n=>{if(this.keyMap.set(n.key,n),n.childNodes&&n.type==="section")for(let i of n.childNodes)l(i)};for(let n of t)l(n);let e=null,K=0;for(let[n,i]of this.keyMap)e?(e.nextKey=n,i.prevKey=e.key):(this.firstKey=n,i.prevKey=void 0),i.type==="item"&&(i.index=K++),e=i,e.nextKey=void 0;var v;this.lastKey=(v=e==null?void 0:e.key)!==null&&v!==void 0?v:null}}function E(s){let{filter:t,layoutDelegate:l}=s,e=C(s),K=c.useMemo(()=>s.disabledKeys?new Set(s.disabledKeys):new Set,[s.disabledKeys]),v=c.useCallback(y=>t?new D(t(y)):new D(y),[t]),n=c.useMemo(()=>({suppressTextValueWarning:s.suppressTextValueWarning}),[s.suppressTextValueWarning]),i=T(s,v,n),g=c.useMemo(()=>new V(i,e,{layoutDelegate:l}),[i,e,l]);const f=c.useRef(null);return c.useEffect(()=>{if(e.focusedKey!=null&&!i.getItem(e.focusedKey)&&f.current){const o=f.current.getItem(e.focusedKey),x=[...f.current.getKeys()].map(d=>{const r=f.current.getItem(d);return(r==null?void 0:r.type)==="item"?r:null}).filter(d=>d!==null),u=[...i.getKeys()].map(d=>{const r=i.getItem(d);return(r==null?void 0:r.type)==="item"?r:null}).filter(d=>d!==null);var y,h;const w=((y=x==null?void 0:x.length)!==null&&y!==void 0?y:0)-((h=u==null?void 0:u.length)!==null&&h!==void 0?h:0);var p,k,b;let a=Math.min(w>1?Math.max(((p=o==null?void 0:o.index)!==null&&p!==void 0?p:0)-w+1,0):(k=o==null?void 0:o.index)!==null&&k!==void 0?k:0,((b=u==null?void 0:u.length)!==null&&b!==void 0?b:0)-1),m=null,S=!1;for(;a>=0;){if(!g.isDisabled(u[a].key)){m=u[a];break}if(a<u.length-1&&!S)a++;else{S=!0;var M,$;a>((M=o==null?void 0:o.index)!==null&&M!==void 0?M:0)&&(a=($=o==null?void 0:o.index)!==null&&$!==void 0?$:0),a--}}e.setFocusedKey(m?m.key:null)}f.current=i},[i,g,e,e.focusedKey]),{collection:i,disabledKeys:K,selectionManager:g}}export{E as $,D as a};
