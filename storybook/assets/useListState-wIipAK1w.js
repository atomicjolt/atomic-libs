import{$,a as x,b as M}from"./useCollectionRenderer-Dwym1jfR.js";import{r as K}from"./index-DmM0KDA7.js";class b{*[Symbol.iterator](){yield*this.iterable}get size(){return this.keyMap.size}getKeys(){return this.keyMap.keys()}getKeyBefore(t){let e=this.keyMap.get(t);var l;return e&&(l=e.prevKey)!==null&&l!==void 0?l:null}getKeyAfter(t){let e=this.keyMap.get(t);var l;return e&&(l=e.nextKey)!==null&&l!==void 0?l:null}getFirstKey(){return this.firstKey}getLastKey(){return this.lastKey}getItem(t){var e;return(e=this.keyMap.get(t))!==null&&e!==void 0?e:null}at(t){const e=[...this.getKeys()];return this.getItem(e[t])}getChildren(t){let e=this.keyMap.get(t);return(e==null?void 0:e.childNodes)||[]}constructor(t){this.keyMap=new Map,this.firstKey=null,this.lastKey=null,this.iterable=t;let e=i=>{if(this.keyMap.set(i.key,i),i.childNodes&&i.type==="section")for(let n of i.childNodes)e(n)};for(let i of t)e(i);let l=null,y=0;for(let[i,n]of this.keyMap)l?(l.nextKey=i,n.prevKey=l.key):(this.firstKey=i,n.prevKey=void 0),n.type==="item"&&(n.index=y++),l=n,l.nextKey=void 0;var d;this.lastKey=(d=l==null?void 0:l.key)!==null&&d!==void 0?d:null}}function D(u){let{filter:t,layoutDelegate:e}=u,l=$(u),y=K.useMemo(()=>u.disabledKeys?new Set(u.disabledKeys):new Set,[u.disabledKeys]),d=K.useCallback(c=>t?new b(t(c)):new b(c),[t]),i=K.useMemo(()=>({suppressTextValueWarning:u.suppressTextValueWarning}),[u.suppressTextValueWarning]),n=x(u,d,i),f=K.useMemo(()=>new M(n,l,{layoutDelegate:e}),[n,l,e]);return m(n,f),{collection:n,disabledKeys:y,selectionManager:f}}function m(u,t){const e=K.useRef(null);K.useEffect(()=>{if(t.focusedKey!=null&&!u.getItem(t.focusedKey)&&e.current){const s=e.current.getItem(t.focusedKey),h=[...e.current.getKeys()].map(v=>{const o=e.current.getItem(v);return(o==null?void 0:o.type)==="item"?o:null}).filter(v=>v!==null),r=[...u.getKeys()].map(v=>{const o=u.getItem(v);return(o==null?void 0:o.type)==="item"?o:null}).filter(v=>v!==null);var l,y;const p=((l=h==null?void 0:h.length)!==null&&l!==void 0?l:0)-((y=r==null?void 0:r.length)!==null&&y!==void 0?y:0);var d,i,n;let a=Math.min(p>1?Math.max(((d=s==null?void 0:s.index)!==null&&d!==void 0?d:0)-p+1,0):(i=s==null?void 0:s.index)!==null&&i!==void 0?i:0,((n=r==null?void 0:r.length)!==null&&n!==void 0?n:0)-1),g=null,k=!1;for(;a>=0;){if(!t.isDisabled(r[a].key)){g=r[a];break}if(a<r.length-1&&!k)a++;else{k=!0;var f,c;a>((f=s==null?void 0:s.index)!==null&&f!==void 0?f:0)&&(a=(c=s==null?void 0:s.index)!==null&&c!==void 0?c:0),a--}}t.setFocusedKey(g?g.key:null)}e.current=u},[u,t])}export{D as $,b as a};
