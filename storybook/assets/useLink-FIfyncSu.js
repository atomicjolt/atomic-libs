import{b as i}from"./useObjectRef-D2RG7rRi.js";import{$ as T}from"./filterDOMProps-CeZl_uWj.js";import{$ as v,a as C,b as h,c as D}from"./usePress-B9aiz4Kw.js";import{$ as g}from"./useFocusable-DacP9xvE.js";function L(r,o){let{elementType:l="a",onPress:f,onPressStart:b,onPressEnd:$,onClick:n,isDisabled:s,...P}=r,c={};l!=="a"&&(c={role:"link",tabIndex:s?void 0:0});let{focusableProps:p}=g(r,o),{pressProps:a,isPressed:u}=v({onPress:f,onPressStart:b,onPressEnd:$,isDisabled:s,ref:o}),m=T(P,{labelable:!0}),k=i(p,a),d=C(),x=h(r);return{isPressed:u,linkProps:i(m,x,{...k,...c,"aria-disabled":s||void 0,"aria-current":r["aria-current"],onClick:e=>{var t;(t=a.onClick)===null||t===void 0||t.call(a,e),n&&(n(e),console.warn("onClick is deprecated, please use onPress")),!d.isNative&&e.currentTarget instanceof HTMLAnchorElement&&e.currentTarget.href&&!e.isDefaultPrevented()&&D(e.currentTarget,e)&&r.href&&(e.preventDefault(),d.open(e.currentTarget,e,r.href,r.routerOptions))}})}}export{L as $};
