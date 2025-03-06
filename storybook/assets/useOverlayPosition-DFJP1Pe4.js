import{g as le}from"./focusSafely-BOUv7I-8.js";import{$ as Z}from"./ProgressCircle.component-DZo3rxOV.js";import{a as re}from"./useCloseOnScroll-ChRhZSVB.js";import{r as A}from"./index-DJO9vBfz.js";import{$ as U}from"./useLayoutEffect-Bj1hLagI.js";import{$ as ne}from"./context-BQ3_Es2z.js";function ie(){return typeof window.ResizeObserver<"u"}function G(t){const{ref:e,box:n,onResize:l}=t;A.useEffect(()=>{let o=e==null?void 0:e.current;if(o)if(ie()){const i=new window.ResizeObserver(a=>{a.length&&l()});return i.observe(o,{box:n}),()=>{o&&i.unobserve(o)}}else return window.addEventListener("resize",l,!1),()=>{window.removeEventListener("resize",l,!1)}},[l,e,n])}const C={top:"top",bottom:"top",left:"left",right:"left"},B={top:"bottom",bottom:"top",left:"right",right:"left"},ae={top:"left",left:"top"},j={top:"height",left:"width"},D={width:"totalWidth",height:"totalHeight"},N={};let P=typeof document<"u"&&window.visualViewport;function q(t){let e=0,n=0,l=0,o=0,i=0,a=0,r={},u=(P==null?void 0:P.scale)>1;if(t.tagName==="BODY"){let $=document.documentElement;l=$.clientWidth,o=$.clientHeight;var c;e=(c=P==null?void 0:P.width)!==null&&c!==void 0?c:l;var d;n=(d=P==null?void 0:P.height)!==null&&d!==void 0?d:o,r.top=$.scrollTop||t.scrollTop,r.left=$.scrollLeft||t.scrollLeft,P&&(i=P.offsetTop,a=P.offsetLeft)}else({width:e,height:n,top:i,left:a}=F(t)),r.top=t.scrollTop,r.left=t.scrollLeft,l=e,o=n;return le()&&(t.tagName==="BODY"||t.tagName==="HTML")&&u&&(r.top=0,r.left=0,i=P.pageTop,a=P.pageLeft),{width:e,height:n,totalWidth:l,totalHeight:o,scroll:r,top:i,left:a}}function ce(t){return{top:t.scrollTop,left:t.scrollLeft,width:t.scrollWidth,height:t.scrollHeight}}function J(t,e,n,l,o,i,a){let r=o.scroll[t],u=l[j[t]],c=l.scroll[C[t]]+i,d=u+l.scroll[C[t]]-i,$=e-r+a[t]-l[C[t]],w=e-r+n+a[t]-l[C[t]];return $<c?c-$:w>d?Math.max(d-w,c-$):0}function se(t){let e=window.getComputedStyle(t);return{top:parseInt(e.marginTop,10)||0,bottom:parseInt(e.marginBottom,10)||0,left:parseInt(e.marginLeft,10)||0,right:parseInt(e.marginRight,10)||0}}function K(t){if(N[t])return N[t];let[e,n]=t.split(" "),l=C[e]||"right",o=ae[l];C[n]||(n="center");let i=j[l],a=j[o];return N[t]={placement:e,crossPlacement:n,axis:l,crossAxis:o,size:i,crossSize:a},N[t]}function X(t,e,n,l,o,i,a,r,u,c){let{placement:d,crossPlacement:$,axis:w,crossAxis:s,size:x,crossSize:h}=l,f={};f[s]=t[s],$==="center"?f[s]+=(t[h]-n[h])/2:$!==s&&(f[s]+=t[h]-n[h]),f[s]+=i;const L=t[s]-n[h]+u+c,p=t[s]+t[h]-u-c;if(f[s]=Z(f[s],L,p),d===w){const E=r?a[x]:e[D[x]];f[B[w]]=Math.floor(E-t[w]+o)}else f[w]=Math.floor(t[w]+t[x]+o);return f}function fe(t,e,n,l,o,i,a,r){const u=l?n.height:e[D.height];let c=t.top!=null?n.top+t.top:n.top+(u-t.bottom-a),d=r!=="top"?Math.max(0,e.height+e.top+e.scroll.top-c-(o.top+o.bottom+i)):Math.max(0,c+a-(e.top+e.scroll.top)-(o.top+o.bottom+i));return Math.min(e.height-i*2,d)}function Q(t,e,n,l,o,i){let{placement:a,axis:r,size:u}=i;return a===r?Math.max(0,n[r]-t[r]-t.scroll[r]+e[r]-l[r]-l[B[r]]-o):Math.max(0,t[u]+t[r]+t.scroll[r]-e[r]-n[r]-n[u]-l[r]-l[B[r]]-o)}function pe(t,e,n,l,o,i,a,r,u,c,d,$,w,s,x,h){let f=K(t),{size:L,crossAxis:p,crossSize:E,placement:k,crossPlacement:R}=f,m=X(e,r,n,f,d,$,c,w,x,h),y=d,I=Q(r,c,e,o,i+d,f);if(a&&l[L]>I){let Y=K(`${B[k]} ${R}`),oe=X(e,r,n,Y,d,$,c,w,x,h);Q(r,c,e,o,i+d,Y)>I&&(f=Y,m=oe,y=d)}let v="bottom";f.axis==="top"?f.placement==="top"?v="top":f.placement==="bottom"&&(v="bottom"):f.crossAxis==="top"&&(f.crossPlacement==="top"?v="bottom":f.crossPlacement==="bottom"&&(v="top"));let b=J(p,m[p],n[E],r,u,i,c);m[p]+=b;let T=fe(m,r,c,w,o,i,n.height,v);s&&s<T&&(T=s),n.height=Math.min(n.height,T),m=X(e,r,n,f,y,$,c,w,x,h),b=J(p,m[p],n[E],r,u,i,c),m[p]+=b;let z={},S=e[p]+.5*e[E]-m[p]-o[C[p]];const H=x/2+h,M=C[p]==="left"?o.left+o.right:o.top+o.bottom,O=n[E]-M-x/2-h,_=e[p]+x/2-(m[p]+o[C[p]]),ee=e[p]+e[E]-x/2-(m[p]+o[C[p]]),te=Z(S,_,ee);return z[p]=Z(te,H,O),{position:m,maxHeight:T,arrowOffsetLeft:z.left,arrowOffsetTop:z.top,placement:f.placement}}function de(t){let{placement:e,targetNode:n,overlayNode:l,scrollNode:o,padding:i,shouldFlip:a,boundaryElement:r,offset:u,crossOffset:c,maxHeight:d,arrowSize:$=0,arrowBoundaryOffset:w=0}=t,s=l instanceof HTMLElement?ue(l):document.documentElement,x=s===document.documentElement;const h=window.getComputedStyle(s).position;let f=!!h&&h!=="static",L=x?F(n):W(n,s);if(!x){let{marginTop:I,marginLeft:v}=window.getComputedStyle(n);L.top+=parseInt(I,10)||0,L.left+=parseInt(v,10)||0}let p=F(l),E=se(l);p.width+=E.left+E.right,p.height+=E.top+E.bottom;let k=ce(o),R=q(r),m=q(s),y=r.tagName==="BODY"?F(s):W(s,r);return s.tagName==="HTML"&&r.tagName==="BODY"&&(m.scroll.top=0,m.scroll.left=0),pe(e,L,p,k,E,i,a,R,m,y,u,c,f,d,$,w)}function F(t){let{top:e,left:n,width:l,height:o}=t.getBoundingClientRect(),{scrollTop:i,scrollLeft:a,clientTop:r,clientLeft:u}=document.documentElement;return{top:e+i-r,left:n+a-u,width:l,height:o}}function W(t,e){let n=window.getComputedStyle(t),l;if(n.position==="fixed"){let{top:o,left:i,width:a,height:r}=t.getBoundingClientRect();l={top:o,left:i,width:a,height:r}}else{l=F(t);let o=F(e),i=window.getComputedStyle(e);o.top+=(parseInt(i.borderTopWidth,10)||0)-e.scrollTop,o.left+=(parseInt(i.borderLeftWidth,10)||0)-e.scrollLeft,l.top-=o.top,l.left-=o.left}return l.top-=parseInt(n.marginTop,10)||0,l.left-=parseInt(n.marginLeft,10)||0,l}function ue(t){let e=t.offsetParent;if(e&&e===document.body&&window.getComputedStyle(e).position==="static"&&!V(e)&&(e=document.documentElement),e==null)for(e=t.parentElement;e&&!V(e);)e=e.parentElement;return e||document.documentElement}function V(t){let e=window.getComputedStyle(t);return e.transform!=="none"||/transform|perspective/.test(e.willChange)||e.filter!=="none"||e.contain==="paint"||"backdropFilter"in e&&e.backdropFilter!=="none"||"WebkitBackdropFilter"in e&&e.WebkitBackdropFilter!=="none"}let g=typeof document<"u"&&window.visualViewport;function Pe(t){let{direction:e}=ne(),{arrowSize:n=0,targetRef:l,overlayRef:o,scrollRef:i=o,placement:a="bottom",containerPadding:r=12,shouldFlip:u=!0,boundaryElement:c=typeof document<"u"?document.body:null,offset:d=0,crossOffset:$=0,shouldUpdatePosition:w=!0,isOpen:s=!0,onClose:x,maxHeight:h,arrowBoundaryOffset:f=0}=t,[L,p]=A.useState({position:{},arrowOffsetLeft:void 0,arrowOffsetTop:void 0,maxHeight:void 0,placement:void 0}),E=[w,a,o.current,l.current,i.current,r,u,c,d,$,s,e,h,f,n],k=A.useRef(g==null?void 0:g.scale);A.useEffect(()=>{s&&(k.current=g==null?void 0:g.scale)},[s]);let R=A.useCallback(()=>{if(w===!1||!s||!o.current||!l.current||!c||(g==null?void 0:g.scale)!==k.current)return;let v=null;if(i.current&&i.current.contains(document.activeElement)){let H=document.activeElement.getBoundingClientRect(),M=i.current.getBoundingClientRect();v={type:"top",offset:H.top-M.top},v.offset>M.height/2&&(v.type="bottom",v.offset=H.bottom-M.bottom)}let b=o.current;if(!h&&o.current){var T;b.style.top="0px",b.style.bottom="";var z;b.style.maxHeight=((z=(T=window.visualViewport)===null||T===void 0?void 0:T.height)!==null&&z!==void 0?z:window.innerHeight)+"px"}let S=de({placement:ge(a,e),overlayNode:o.current,targetNode:l.current,scrollNode:i.current||o.current,padding:r,shouldFlip:u,boundaryElement:c,offset:d,crossOffset:$,maxHeight:h,arrowSize:n,arrowBoundaryOffset:f});if(b.style.top="",b.style.bottom="",b.style.left="",b.style.right="",Object.keys(S.position).forEach(H=>b.style[H]=S.position[H]+"px"),b.style.maxHeight=S.maxHeight!=null?S.maxHeight+"px":void 0,v){let H=document.activeElement.getBoundingClientRect(),M=i.current.getBoundingClientRect(),O=H[v.type]-M[v.type];i.current.scrollTop+=O-v.offset}p(S)},E);U(R,E),me(R),G({ref:o,onResize:R}),G({ref:l,onResize:R});let m=A.useRef(!1);U(()=>{let v,b=()=>{m.current=!0,clearTimeout(v),v=setTimeout(()=>{m.current=!1},500),R()},T=()=>{m.current&&b()};return g==null||g.addEventListener("resize",b),g==null||g.addEventListener("scroll",T),()=>{g==null||g.removeEventListener("resize",b),g==null||g.removeEventListener("scroll",T)}},[R]);let y=A.useCallback(()=>{m.current||x()},[x,m]);re({triggerRef:l,isOpen:s,onClose:x&&y});var I;return{overlayProps:{style:{position:"absolute",zIndex:1e5,...L.position,maxHeight:(I=L.maxHeight)!==null&&I!==void 0?I:"100vh"}},placement:L.placement,arrowProps:{"aria-hidden":"true",role:"presentation",style:{left:L.arrowOffsetLeft,top:L.arrowOffsetTop}},updatePosition:R}}function me(t){U(()=>(window.addEventListener("resize",t,!1),()=>{window.removeEventListener("resize",t,!1)}),[t])}function ge(t,e){return e==="rtl"?t.replace("start","right").replace("end","left"):t.replace("start","left").replace("end","right")}export{Pe as $};
