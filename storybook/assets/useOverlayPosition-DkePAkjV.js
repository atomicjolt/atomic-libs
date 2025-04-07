import{m as ae}from"./useFocusable-B7cTVP20.js";import{$ as G}from"./ProgressCircle.component-C7gS1D9i.js";import{a as se}from"./useCloseOnScroll-CkGkhb-Y.js";import{r as O}from"./index-DmM0KDA7.js";import{c as q}from"./useObjectRef-BO7mrmvR.js";import{$ as ce}from"./context-BF7eBGFA.js";function de(){return typeof window.ResizeObserver<"u"}function K(t){const{ref:e,box:i,onResize:o}=t;O.useEffect(()=>{let l=e==null?void 0:e.current;if(l)if(de()){const n=new window.ResizeObserver(c=>{c.length&&o()});return n.observe(l,{box:i}),()=>{l&&n.unobserve(l)}}else return window.addEventListener("resize",o,!1),()=>{window.removeEventListener("resize",o,!1)}},[o,e,i])}const A={top:"top",bottom:"top",left:"left",right:"left"},X={top:"bottom",bottom:"top",left:"right",right:"left"},fe={top:"left",left:"top"},J={top:"height",left:"width"},le={width:"totalWidth",height:"totalHeight"},Y={};let P=typeof document<"u"?window.visualViewport:null;function Q(t){let e=0,i=0,o=0,l=0,n=0,c=0,r={};var $;let d=(($=P==null?void 0:P.scale)!==null&&$!==void 0?$:1)>1;if(t.tagName==="BODY"){let f=document.documentElement;o=f.clientWidth,l=f.clientHeight;var p;e=(p=P==null?void 0:P.width)!==null&&p!==void 0?p:o;var g;i=(g=P==null?void 0:P.height)!==null&&g!==void 0?g:l,r.top=f.scrollTop||t.scrollTop,r.left=f.scrollLeft||t.scrollLeft,P&&(n=P.offsetTop,c=P.offsetLeft)}else({width:e,height:i,top:n,left:c}=B(t)),r.top=t.scrollTop,r.left=t.scrollLeft,o=e,l=i;if(ae()&&(t.tagName==="BODY"||t.tagName==="HTML")&&d){r.top=0,r.left=0;var u;n=(u=P==null?void 0:P.pageTop)!==null&&u!==void 0?u:0;var a;c=(a=P==null?void 0:P.pageLeft)!==null&&a!==void 0?a:0}return{width:e,height:i,totalWidth:o,totalHeight:l,scroll:r,top:n,left:c}}function pe(t){return{top:t.scrollTop,left:t.scrollLeft,width:t.scrollWidth,height:t.scrollHeight}}function W(t,e,i,o,l,n,c){var r;let $=(r=l.scroll[t])!==null&&r!==void 0?r:0,d=o[J[t]],p=o.scroll[A[t]]+n,g=d+o.scroll[A[t]]-n,u=e-$+c[t]-o[A[t]],a=e-$+i+c[t]-o[A[t]];return u<p?p-u:a>g?Math.max(g-a,p-u):0}function ue(t){let e=window.getComputedStyle(t);return{top:parseInt(e.marginTop,10)||0,bottom:parseInt(e.marginBottom,10)||0,left:parseInt(e.marginLeft,10)||0,right:parseInt(e.marginRight,10)||0}}function V(t){if(Y[t])return Y[t];let[e,i]=t.split(" "),o=A[e]||"right",l=fe[o];A[i]||(i="center");let n=J[o],c=J[l];return Y[t]={placement:e,crossPlacement:i,axis:o,crossAxis:l,size:n,crossSize:c},Y[t]}function j(t,e,i,o,l,n,c,r,$,d){let{placement:p,crossPlacement:g,axis:u,crossAxis:a,size:f,crossSize:h}=o,s={};var m;s[a]=(m=t[a])!==null&&m!==void 0?m:0;var v,E,R,L;g==="center"?s[a]+=(((v=t[h])!==null&&v!==void 0?v:0)-((E=i[h])!==null&&E!==void 0?E:0))/2:g!==a&&(s[a]+=((R=t[h])!==null&&R!==void 0?R:0)-((L=i[h])!==null&&L!==void 0?L:0)),s[a]+=n;const b=t[a]-i[h]+$+d,H=t[a]+t[h]-$-d;if(s[a]=G(s[a],b,H),p===u){const I=r?c[f]:e[le[f]];s[X[u]]=Math.floor(I-t[u]+l)}else s[u]=Math.floor(t[u]+t[f]+l);return s}function me(t,e,i,o,l,n,c,r){const $=o?i.height:e[le.height];var d;let p=t.top!=null?i.top+t.top:i.top+($-((d=t.bottom)!==null&&d!==void 0?d:0)-c);var g,u,a,f,h,s;let m=r!=="top"?Math.max(0,e.height+e.top+((g=e.scroll.top)!==null&&g!==void 0?g:0)-p-(((u=l.top)!==null&&u!==void 0?u:0)+((a=l.bottom)!==null&&a!==void 0?a:0)+n)):Math.max(0,p+c-(e.top+((f=e.scroll.top)!==null&&f!==void 0?f:0))-(((h=l.top)!==null&&h!==void 0?h:0)+((s=l.bottom)!==null&&s!==void 0?s:0)+n));return Math.min(e.height-n*2,m)}function D(t,e,i,o,l,n){let{placement:c,axis:r,size:$}=n;var d,p;if(c===r)return Math.max(0,i[r]-t[r]-((d=t.scroll[r])!==null&&d!==void 0?d:0)+e[r]-((p=o[r])!==null&&p!==void 0?p:0)-o[X[r]]-l);var g;return Math.max(0,t[$]+t[r]+t.scroll[r]-e[r]-i[r]-i[$]-((g=o[r])!==null&&g!==void 0?g:0)-o[X[r]]-l)}function ve(t,e,i,o,l,n,c,r,$,d,p,g,u,a,f,h){let s=V(t),{size:m,crossAxis:v,crossSize:E,placement:R,crossPlacement:L}=s,b=j(e,r,i,s,p,g,d,u,f,h),H=p,I=D(r,d,e,l,n+p,s);if(c&&o[m]>I){let U=V(`${X[R]} ${L}`),ne=j(e,r,i,U,p,g,d,u,f,h);D(r,d,e,l,n+p,U)>I&&(s=U,b=ne,H=p)}let S="bottom";s.axis==="top"?s.placement==="top"?S="top":s.placement==="bottom"&&(S="bottom"):s.crossAxis==="top"&&(s.crossPlacement==="top"?S="bottom":s.crossPlacement==="bottom"&&(S="top"));let w=W(v,b[v],i[E],r,$,n,d);b[v]+=w;let z=me(b,r,d,u,l,n,i.height,S);a&&a<z&&(z=a),i.height=Math.min(i.height,z),b=j(e,r,i,s,H,g,d,u,f,h),w=W(v,b[v],i[E],r,$,n,d),b[v]+=w;let T={},y=e[v]+.5*e[E]-b[v]-l[A[v]];const _=f/2+h;var k,F,M,C;const N=A[v]==="left"?((k=l.left)!==null&&k!==void 0?k:0)+((F=l.right)!==null&&F!==void 0?F:0):((M=l.top)!==null&&M!==void 0?M:0)+((C=l.bottom)!==null&&C!==void 0?C:0),Z=i[E]-N-f/2-h,oe=e[v]+f/2-(b[v]+l[A[v]]),re=e[v]+e[E]-f/2-(b[v]+l[A[v]]),ie=G(y,oe,re);return T[v]=G(ie,_,Z),{position:b,maxHeight:z,arrowOffsetLeft:T.left,arrowOffsetTop:T.top,placement:s.placement}}function ge(t){let{placement:e,targetNode:i,overlayNode:o,scrollNode:l,padding:n,shouldFlip:c,boundaryElement:r,offset:$,crossOffset:d,maxHeight:p,arrowSize:g=0,arrowBoundaryOffset:u=0}=t,a=o instanceof HTMLElement?$e(o):document.documentElement,f=a===document.documentElement;const h=window.getComputedStyle(a).position;let s=!!h&&h!=="static",m=f?B(i):ee(i,a);if(!f){let{marginTop:T,marginLeft:y}=window.getComputedStyle(i);m.top+=parseInt(T,10)||0,m.left+=parseInt(y,10)||0}let v=B(o),E=ue(o);var R,L;v.width+=((R=E.left)!==null&&R!==void 0?R:0)+((L=E.right)!==null&&L!==void 0?L:0);var b,H;v.height+=((b=E.top)!==null&&b!==void 0?b:0)+((H=E.bottom)!==null&&H!==void 0?H:0);let I=pe(l),S=Q(r),w=Q(a),z=r.tagName==="BODY"?B(a):ee(a,r);return a.tagName==="HTML"&&r.tagName==="BODY"&&(w.scroll.top=0,w.scroll.left=0),ve(e,m,v,I,E,n,c,S,w,z,$,d,s,p,g,u)}function B(t){let{top:e,left:i,width:o,height:l}=t.getBoundingClientRect(),{scrollTop:n,scrollLeft:c,clientTop:r,clientLeft:$}=document.documentElement;return{top:e+n-r,left:i+c-$,width:o,height:l}}function ee(t,e){let i=window.getComputedStyle(t),o;if(i.position==="fixed"){let{top:l,left:n,width:c,height:r}=t.getBoundingClientRect();o={top:l,left:n,width:c,height:r}}else{o=B(t);let l=B(e),n=window.getComputedStyle(e);l.top+=(parseInt(n.borderTopWidth,10)||0)-e.scrollTop,l.left+=(parseInt(n.borderLeftWidth,10)||0)-e.scrollLeft,o.top-=l.top,o.left-=l.left}return o.top-=parseInt(i.marginTop,10)||0,o.left-=parseInt(i.marginLeft,10)||0,o}function $e(t){let e=t.offsetParent;if(e&&e===document.body&&window.getComputedStyle(e).position==="static"&&!te(e)&&(e=document.documentElement),e==null)for(e=t.parentElement;e&&!te(e);)e=e.parentElement;return e||document.documentElement}function te(t){let e=window.getComputedStyle(t);return e.transform!=="none"||/transform|perspective/.test(e.willChange)||e.filter!=="none"||e.contain==="paint"||"backdropFilter"in e&&e.backdropFilter!=="none"||"WebkitBackdropFilter"in e&&e.WebkitBackdropFilter!=="none"}let x=typeof document<"u"?window.visualViewport:null;function Re(t){let{direction:e}=ce(),{arrowSize:i=0,targetRef:o,overlayRef:l,scrollRef:n=l,placement:c="bottom",containerPadding:r=12,shouldFlip:$=!0,boundaryElement:d=typeof document<"u"?document.body:null,offset:p=0,crossOffset:g=0,shouldUpdatePosition:u=!0,isOpen:a=!0,onClose:f,maxHeight:h,arrowBoundaryOffset:s=0}=t,[m,v]=O.useState(null),E=[u,c,l.current,o.current,n.current,r,$,d,p,g,a,e,h,s,i],R=O.useRef(x==null?void 0:x.scale);O.useEffect(()=>{a&&(R.current=x==null?void 0:x.scale)},[a]);let L=O.useCallback(()=>{if(u===!1||!a||!l.current||!o.current||!d||(x==null?void 0:x.scale)!==R.current)return;let w=null;if(n.current&&n.current.contains(document.activeElement)){var z;let C=(z=document.activeElement)===null||z===void 0?void 0:z.getBoundingClientRect(),N=n.current.getBoundingClientRect();var T;if(w={type:"top",offset:((T=C==null?void 0:C.top)!==null&&T!==void 0?T:0)-N.top},w.offset>N.height/2){w.type="bottom";var y;w.offset=((y=C==null?void 0:C.bottom)!==null&&y!==void 0?y:0)-N.bottom}}let _=l.current;if(!h&&l.current){var k;_.style.top="0px",_.style.bottom="";var F;_.style.maxHeight=((F=(k=window.visualViewport)===null||k===void 0?void 0:k.height)!==null&&F!==void 0?F:window.innerHeight)+"px"}let M=ge({placement:be(c,e),overlayNode:l.current,targetNode:o.current,scrollNode:n.current||l.current,padding:r,shouldFlip:$,boundaryElement:d,offset:p,crossOffset:g,maxHeight:h,arrowSize:i,arrowBoundaryOffset:s});if(M.position){if(_.style.top="",_.style.bottom="",_.style.left="",_.style.right="",Object.keys(M.position).forEach(C=>_.style[C]=M.position[C]+"px"),_.style.maxHeight=M.maxHeight!=null?M.maxHeight+"px":"",w&&document.activeElement&&n.current){let C=document.activeElement.getBoundingClientRect(),N=n.current.getBoundingClientRect(),Z=C[w.type]-N[w.type];n.current.scrollTop+=Z-w.offset}v(M)}},E);q(L,E),he(L),K({ref:l,onResize:L}),K({ref:o,onResize:L});let b=O.useRef(!1);q(()=>{let w,z=()=>{b.current=!0,clearTimeout(w),w=setTimeout(()=>{b.current=!1},500),L()},T=()=>{b.current&&z()};return x==null||x.addEventListener("resize",z),x==null||x.addEventListener("scroll",T),()=>{x==null||x.removeEventListener("resize",z),x==null||x.removeEventListener("scroll",T)}},[L]);let H=O.useCallback(()=>{b.current||f==null||f()},[f,b]);se({triggerRef:o,isOpen:a,onClose:f&&H});var I,S;return{overlayProps:{style:{position:"absolute",zIndex:1e5,...m==null?void 0:m.position,maxHeight:(I=m==null?void 0:m.maxHeight)!==null&&I!==void 0?I:"100vh"}},placement:(S=m==null?void 0:m.placement)!==null&&S!==void 0?S:null,arrowProps:{"aria-hidden":"true",role:"presentation",style:{left:m==null?void 0:m.arrowOffsetLeft,top:m==null?void 0:m.arrowOffsetTop}},updatePosition:L}}function he(t){q(()=>(window.addEventListener("resize",t,!1),()=>{window.removeEventListener("resize",t,!1)}),[t])}function be(t,e){return e==="rtl"?t.replace("start","right").replace("end","left"):t.replace("start","left").replace("end","right")}export{Re as $};
