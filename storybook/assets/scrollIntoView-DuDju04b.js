import{$ as W}from"./isScrollable-BSEN4xi5.js";function k(e,o){const t=[];for(;e&&e!==document.documentElement;)W(e,o)&&t.push(e),e=e.parentElement;return t}function B(e,o){let t=L(e,o,"left"),d=L(e,o,"top"),l=o.offsetWidth,r=o.offsetHeight,f=e.scrollLeft,s=e.scrollTop,{borderTopWidth:i,borderLeftWidth:c,scrollPaddingTop:n,scrollPaddingRight:a,scrollPaddingBottom:T,scrollPaddingLeft:g}=getComputedStyle(e),x=f+parseInt(c,10),u=s+parseInt(i,10),b=x+e.clientWidth,p=u+e.clientHeight,P=parseInt(n,10)||0,v=parseInt(T,10)||0,$=parseInt(a,10)||0,h=parseInt(g,10)||0;t<=f+h?f=t-parseInt(c,10)-h:t+l>b-$&&(f+=t+l-b+$),d<=u+P?s=d-parseInt(i,10)-P:d+r>p-v&&(s+=d+r-p+v),e.scrollLeft=f,e.scrollTop=s}function L(e,o,t){const d=t==="left"?"offsetLeft":"offsetTop";let l=0;for(;o.offsetParent&&(l+=o[d],o.offsetParent!==e);){if(o.offsetParent.contains(e)){l-=e[d];break}o=o.offsetParent}return l}function R(e,o){if(e&&document.contains(e)){let f=document.scrollingElement||document.documentElement;if(window.getComputedStyle(f).overflow==="hidden"){let i=k(e);for(let c of i)B(c,e)}else{var t;let{left:i,top:c}=e.getBoundingClientRect();e==null||(t=e.scrollIntoView)===null||t===void 0||t.call(e,{block:"nearest"});let{left:n,top:a}=e.getBoundingClientRect();if(Math.abs(i-n)>1||Math.abs(c-a)>1){var d,l,r;o==null||(l=o.containingElement)===null||l===void 0||(d=l.scrollIntoView)===null||d===void 0||d.call(l,{block:"center",inline:"center"}),(r=e.scrollIntoView)===null||r===void 0||r.call(e,{block:"nearest"})}}}}export{B as $,R as a};
