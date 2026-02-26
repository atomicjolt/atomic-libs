import{j as f}from"./jsx-runtime-D_zvdyIk.js";import"./index-CyCRagT9.js";import{g as ne}from"./cssprops-DECR0Nbg.js";import{R as ae}from"./helpers-B3IbUb69.js";import{r as c}from"./index-BCtMShv3.js";import{c as ie,u as ce,$ as se}from"./index-CsiUWFDz.js";import{u as D}from"./useRenderProps-CP918x9p.js";import{d as H}from"./styled-components.browser.esm-Y4FpNNpy.js";import{$ as ee}from"./filterDOMProps-CeZl_uWj.js";import{d as ue,g as de,h as pe}from"./usePress-CqXh5MnK.js";import{d as Y}from"./useObjectRef-D2RG7rRi.js";import{F as B}from"./Flex.component-fpVWlrim.js";import{I as L}from"./IconButton.component-B6sooa0d.js";import"./index-C3G89a7t.js";import"./index-DLW06VQL.js";import"./index-BDzxygkP.js";import"./Collection-Cmq5KClr.js";import"./CollectionBuilder-D3rKkOdu.js";import"./index-q6RvvsFA.js";import"./index-D-fs5e6L.js";import"./useFocusable-DacP9xvE.js";import"./SSRProvider-DyiXDq2k.js";import"./scale-CqCDTNu0.js";import"./index-EJ0-2BeM.js";import"./layout-D683Cy6J.js";import"./utils-DqmNl-Il.js";import"./BaseButton-BpwrdOfN.js";import"./mixins-XviowZ_6.js";import"./useFocusRing-DIS5Kyrs.js";import"./useFocusWithin-BJ0-_hiU.js";import"./useButton-9RZc7-Gk.js";import"./useLink-DD4jtrk3.js";import"./SpinnerLoader.component-Bw-qRosp.js";import"./Loader.component-CTOZVNHq.js";import"./Checkmark.component-Bisr1A6O.js";import"./Spinner.component-C59bpdXu.js";import"./ProgressCircle.component-gsiCSqhQ.js";import"./number-nHrFdSb-.js";import"./useLabel-DDcndmXW.js";import"./useLabels-B8dXFA8d.js";import"./useNumberFormatter-BHOsbS6G.js";import"./context-z6pb9OkM.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-x_YFGAop.js";import"./Button.context-BxdzJgC_.js";import"./MaterialIcon.component-B9aixorD.js";import"./Icons.styles-D-JqKhr6.js";function he(g){let{onMoveStart:r,onMove:o,onMoveEnd:i}=g,e=c.useRef({didMove:!1,lastPosition:null,id:null}),{addGlobalListener:s,removeGlobalListener:u}=ue(),y=Y((n,b,S,a)=>{S===0&&a===0||(e.current.didMove||(e.current.didMove=!0,r==null||r({type:"movestart",pointerType:b,shiftKey:n.shiftKey,metaKey:n.metaKey,ctrlKey:n.ctrlKey,altKey:n.altKey})),o==null||o({type:"move",pointerType:b,deltaX:S,deltaY:a,shiftKey:n.shiftKey,metaKey:n.metaKey,ctrlKey:n.ctrlKey,altKey:n.altKey}))}),p=Y((n,b)=>{de(),e.current.didMove&&(i==null||i({type:"moveend",pointerType:b,shiftKey:n.shiftKey,metaKey:n.metaKey,ctrlKey:n.ctrlKey,altKey:n.altKey}))});return{moveProps:c.useMemo(()=>{let n={},b=()=>{pe(),e.current.didMove=!1};if(typeof PointerEvent>"u"){let a=t=>{if(t.button===0){var m,v,h,$;y(t,"mouse",t.pageX-((h=(m=e.current.lastPosition)===null||m===void 0?void 0:m.pageX)!==null&&h!==void 0?h:0),t.pageY-(($=(v=e.current.lastPosition)===null||v===void 0?void 0:v.pageY)!==null&&$!==void 0?$:0)),e.current.lastPosition={pageX:t.pageX,pageY:t.pageY}}},d=t=>{t.button===0&&(p(t,"mouse"),u(window,"mousemove",a,!1),u(window,"mouseup",d,!1))};n.onMouseDown=t=>{t.button===0&&(b(),t.stopPropagation(),t.preventDefault(),e.current.lastPosition={pageX:t.pageX,pageY:t.pageY},s(window,"mousemove",a,!1),s(window,"mouseup",d,!1))};let l=t=>{let m=[...t.changedTouches].findIndex(({identifier:A})=>A===e.current.id);if(m>=0){var v,h;let{pageX:A,pageY:k}=t.changedTouches[m];var $,P;y(t,"touch",A-(($=(v=e.current.lastPosition)===null||v===void 0?void 0:v.pageX)!==null&&$!==void 0?$:0),k-((P=(h=e.current.lastPosition)===null||h===void 0?void 0:h.pageY)!==null&&P!==void 0?P:0)),e.current.lastPosition={pageX:A,pageY:k}}},w=t=>{[...t.changedTouches].findIndex(({identifier:v})=>v===e.current.id)>=0&&(p(t,"touch"),e.current.id=null,u(window,"touchmove",l),u(window,"touchend",w),u(window,"touchcancel",w))};n.onTouchStart=t=>{if(t.changedTouches.length===0||e.current.id!=null)return;let{pageX:m,pageY:v,identifier:h}=t.changedTouches[0];b(),t.stopPropagation(),t.preventDefault(),e.current.lastPosition={pageX:m,pageY:v},e.current.id=h,s(window,"touchmove",l,!1),s(window,"touchend",w,!1),s(window,"touchcancel",w,!1)}}else{let a=l=>{if(l.pointerId===e.current.id){var w,t;let h=l.pointerType||"mouse";var m,v;y(l,h,l.pageX-((m=(w=e.current.lastPosition)===null||w===void 0?void 0:w.pageX)!==null&&m!==void 0?m:0),l.pageY-((v=(t=e.current.lastPosition)===null||t===void 0?void 0:t.pageY)!==null&&v!==void 0?v:0)),e.current.lastPosition={pageX:l.pageX,pageY:l.pageY}}},d=l=>{if(l.pointerId===e.current.id){let w=l.pointerType||"mouse";p(l,w),e.current.id=null,u(window,"pointermove",a,!1),u(window,"pointerup",d,!1),u(window,"pointercancel",d,!1)}};n.onPointerDown=l=>{l.button===0&&e.current.id==null&&(b(),l.stopPropagation(),l.preventDefault(),e.current.lastPosition={pageX:l.pageX,pageY:l.pageY},e.current.id=l.pointerId,s(window,"pointermove",a,!1),s(window,"pointerup",d,!1),s(window,"pointercancel",d,!1))}}let S=(a,d,l)=>{b(),y(a,"keyboard",d,l),p(a,"keyboard")};return n.onKeyDown=a=>{switch(a.key){case"Left":case"ArrowLeft":a.preventDefault(),a.stopPropagation(),S(a,-1,0);break;case"Right":case"ArrowRight":a.preventDefault(),a.stopPropagation(),S(a,1,0);break;case"Up":case"ArrowUp":a.preventDefault(),a.stopPropagation(),S(a,0,-1);break;case"Down":case"ArrowDown":a.preventDefault(),a.stopPropagation(),S(a,0,1);break}},n},[e,s,u,y,p])}}const fe=ie(),W=c.createContext(null),me=H.div`
  button.aje-btn--scrollbar {
    --size-md-x: 24px;
    --size-md-y: 24px;
    --btn-icon-size: 3rem;
    --btn-pressed-transform: none;
    --btn-text-clr: var(--scrollarea-btn-clr);
    --btn-bg-clr: transparent;
    --btn-hover-text-clr: var(--scrollarea-btn-clr);
    --btn-hover-bg-clr: var(--scrollarea-track-clr);
    --btn-border: transparent;
  }
`,ve=H.div`
  overflow: auto;

  /* Firefox */
  scrollbar-width: none;

  /* WebKit browsers */
  &::-webkit-scrollbar {
    display: none;
  }
`,ge=H.div`
  position: relative;
  flex: 1;

  &::before {
    content: "";
    position: absolute;
    border-radius: 2px;
    background-color: var(--scrollarea-track-clr);
  }

  &[data-orientation="horizontal"] {
    height: 20px;
    width: 100%;

    &::before {
      top: 50%;
      translate: 0 -50%;
      height: 4px;
      width: 100%;
    }
  }

  &[data-orientation="vertical"] {
    width: 20px;
    flex: 1;
    min-height: 0;

    &::before {
      left: 50%;
      translate: -50% 0;
      width: 4px;
      height: 100%;
    }
  }
`,be=H.div`
  position: absolute;
  outline: none;

  &::before {
    content: "";
    position: absolute;
    background: var(--scrollarea-thumb-clr);
    border-radius: 99999px;
    inset: 8px;
    transition: inset 0.2s ease;
    cursor: pointer;
  }

  &:hover::before,
  &[data-active="true"]::before {
    background: var(--scrollarea-thumb-clr-hover);
  }

  &:focus-visible {
    outline: var(--outline);
    outline-offset: 1px;
    border-radius: 99999px;
  }

  &[aria-orientation="horizontal"] {
    height: 20px;
    top: 50%;
    transform: translateY(-50%);

    &::before {
      inset: 2px 0px;
    }

    &:hover::before,
    &:focus-visible::before,
    &[data-active="true"]::before {
      inset: 0px 0px;
    }
  }

  &[aria-orientation="vertical"] {
    width: 20px;
    left: 50%;
    transform: translateX(-50%);

    &::before {
      inset: 0px 2px;
    }

    &:hover::before,
    &:focus-visible::before,
    &[data-active="true"]::before {
      inset: 0px 0px;
    }
  }
`;function we(){const[g,r]=c.useState({scrollLeft:0,scrollTop:0,scrollWidth:0,scrollHeight:0,clientWidth:0,clientHeight:0}),o=c.useCallback(i=>{r({scrollLeft:i.scrollLeft,scrollTop:i.scrollTop,scrollWidth:i.scrollWidth,scrollHeight:i.scrollHeight,clientWidth:i.clientWidth,clientHeight:i.clientHeight})},[]);return c.useMemo(()=>({...g,setFromElement:o,set:r}),[g,o])}const re=c.forwardRef(function(r,o){[r,o]=ce(fe,r,o);const{className:i,style:e,children:s,...u}=r,y=c.useRef(null),p=D({componentClassName:"aje-scrollarea",style:e,className:i,children:s}),x=we();return f.jsx(W.Provider,{value:{state:x,viewportRef:y},children:f.jsx(me,{ref:o,...p,...u,children:p.children})})});re.displayName="ScrollArea";try{ScrollArea.displayName="ScrollArea",ScrollArea.__docgenInfo={description:"Component for creating a scrollable area with custom scrollbars.",displayName:"ScrollArea",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<never>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<never>"}}}}}catch{}function ye(g,r){const{viewportRef:o,children:i}=g,e=c.useCallback(()=>{if(o.current){const s=o.current;r.setFromElement(s)}},[]);return c.useLayoutEffect(()=>{e();const s=o.current;if(!s)return;const u=new ResizeObserver(()=>{e()});return u.observe(s),()=>{u.disconnect()}},[e,i]),{scrollAreaProps:{onScroll:e}}}const te=c.forwardRef(function(r,o){const{viewportRef:i,state:e}=c.useContext(W),s=se(i,o),u=D({componentClassName:"aje-scrollarea__viewport",...r}),{scrollAreaProps:y}=ye({viewportRef:i,children:u.children},e);return f.jsx(ve,{ref:s,...ee(r),...u,...y,children:u.children})});te.displayName="ScrollArea.Viewport";try{ScrollArea.Viewport.displayName="ScrollArea.Viewport",ScrollArea.Viewport.__docgenInfo={description:"",displayName:"ScrollArea.Viewport",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<never>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<never>"}}}}}catch{}function F(g,r){const{orientation:o,direction:i,viewportRef:e,baseScrollAmount:s=20,maxSpeedMultiplier:u=5,accelerationDelay:y=150,accelerationRate:p=.5}=g,x=c.useRef(null),n=c.useRef(1),b=c.useRef(null),S=o==="horizontal",a=i==="advance",d=c.useCallback(()=>{x.current&&(clearInterval(x.current),x.current=null),b.current&&(clearInterval(b.current),b.current=null),n.current=1},[]),l=c.useCallback(()=>{if(e.current){const h=e.current;r.setFromElement(h)}},[e,r]),w=c.useCallback(()=>{if(!e.current)return;d();const h=()=>{if(!e.current)return;const $=s*n.current,P=a?$:-$;S?e.current.scrollLeft+=P:e.current.scrollTop+=P,l()};h(),x.current=setInterval(h,50),setTimeout(()=>{b.current=setInterval(()=>{n.current<u&&(n.current+=p)},100)},y)},[e,S,a,l,d,s,u,y,p]),t=c.useCallback(()=>{w()},[w]),m=c.useCallback(()=>{d()},[d]);return{buttonProps:{onPress:c.useCallback(()=>{if(!e.current)return;const h=s,$=a?h:-h;S?e.current.scrollLeft+=$:e.current.scrollTop+=$,l()},[e,S,a,l,s]),onPressStart:t,onPressEnd:m,"aria-label":`Scroll ${i} ${o}ly`}}}function Se(g,r){const{viewportRef:o,trackRef:i,orientation:e}=g,[s,u]=c.useState(!1),y=c.useCallback(()=>{if(o.current){const A=o.current;r.setFromElement(A)}},[]),p=e==="horizontal",x=p?r.clientWidth>0?Math.max(r.clientWidth/r.scrollWidth*100,10):100:r.clientHeight>0?Math.max(r.clientHeight/r.scrollHeight*100,10):100,n=p?r.scrollWidth-r.clientWidth:r.scrollHeight-r.clientHeight,b=n>0,S=p?r.scrollLeft:r.scrollTop,a=n>0?S/n*(100-x):0,d=c.useRef(null),l=c.useRef(null),w=c.useCallback(()=>{d.current&&(clearInterval(d.current),d.current=null),l.current=null,u(!1)},[]),t=c.useCallback(A=>{if(!o.current||!i.current)return;u(!0),d.current&&(clearInterval(d.current),d.current=null);const k=i.current.getBoundingClientRect();let C;if(p){const z=A.clientX-k.left,V=k.width,M=x/100*V,T=z-M/2;C=Math.max(0,Math.min(1,T/(V-M)))*n}else{const z=A.clientY-k.top,V=k.height,M=x/100*V,T=z-M/2;C=Math.max(0,Math.min(1,T/(V-M)))*n}l.current=C;const j=()=>{if(!o.current||l.current===null)return;const z=p?o.current.scrollLeft:o.current.scrollTop,M=l.current-z;if(Math.abs(M)<1){d.current&&(clearInterval(d.current),d.current=null),l.current=null;return}const T=M*.15;p?o.current.scrollLeft+=T:o.current.scrollTop+=T,y()};d.current=setInterval(j,16)},[p,x,n,o,i,y]),m=c.useCallback(()=>{w()},[w]),{moveProps:v}=he({onMoveStart:()=>{u(!0)},onMove:A=>{const k=p?A.deltaX:A.deltaY;if(o.current&&i.current){if(p){const C=i.current.offsetWidth,j=r.scrollWidth,z=k/C*j;o.current.scrollLeft+=z}else{const C=i.current.offsetHeight,j=r.scrollHeight,z=k/C*j;o.current.scrollTop+=z}y()}},onMoveEnd:()=>{u(!1)}}),h=p?{width:`${x}%`,left:`${a}%`}:{height:`${x}%`,top:`${a}%`},{buttonProps:$}=F({orientation:e,direction:"retreat",viewportRef:o},r),{buttonProps:P}=F({orientation:e,direction:"advance",viewportRef:o},r);return{thumbProps:{role:"scrollbar",tabIndex:0,"aria-valuenow":S,"aria-valuemin":0,"aria-valuemax":n,"aria-orientation":e,"aria-busy":s,"data-active":s,style:h,...v},trackProps:{onMouseDown:t,onMouseUp:m,"data-orientation":e,"data-active":s},advanceButtonProps:P,retreatButtonProps:$,isScrollable:b}}const oe=c.forwardRef(function(r,o){const{orientation:i,size:e="viewport",show:s="auto",reserveSpace:u=!1}=r,{viewportRef:y,state:p}=c.useContext(W),x=c.useRef(null),n=c.useRef(null),{isScrollable:b,thumbProps:S,trackProps:a,advanceButtonProps:d,retreatButtonProps:l}=Se({viewportRef:y,trackRef:n,orientation:i},p),w=i==="horizontal";let t={};e==="viewport"?t=w?{width:`${p.clientWidth}px`}:{height:`${p.clientHeight}px`}:e&&e!=="auto"&&(t=w?{width:e}:{height:e});const m=D({componentClassName:"aje-scrollarea__scrollbar",...r,size:void 0});if(!b&&s==="auto"&&!u)return null;const v=!b&&u?{visibility:"hidden"}:{};return f.jsxs(B,{ref:o,$height:"100%",$align:"center",$direction:i==="horizontal"?"row":"column",$gap:"1",...ee(r),...m,style:{...t,...v,...m.style},children:[f.jsx(L,{...l,icon:i==="horizontal"?"arrow_left":"arrow_drop_up",variant:"scrollbar"}),f.jsx(ge,{ref:n,...a,children:f.jsx(be,{ref:x,...S})}),f.jsx(L,{...d,icon:i==="horizontal"?"arrow_right":"arrow_drop_down",variant:"scrollbar"})]})});oe.displayName="ScrollArea.Bar";try{ScrollArea.Bar.displayName="ScrollArea.Bar",ScrollArea.Bar.__docgenInfo={description:"",displayName:"ScrollArea.Bar",props:{orientation:{defaultValue:null,description:"",name:"orientation",required:!0,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'SuggestStrings<"auto" | "viewport">'}},show:{defaultValue:null,description:"",name:"show",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"always"'}]}},reserveSpace:{defaultValue:null,description:"",name:"reserveSpace",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<never>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<never>"}}}}}catch{}const R=re;R.Viewport=te;R.Bar=oe;try{R.displayName="ScrollArea",R.__docgenInfo={description:"",displayName:"ScrollArea",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<never>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<never>"}}}}}catch{}const mr={title:"Layouts/ScrollArea",component:R,parameters:{cssprops:ne("ScrollArea")},argTypes:{...ae}},K={args:{children:[f.jsxs(B,{$direction:"row",$width:"100%",$height:"100%",$gap:"1",children:[f.jsx(R.Viewport,{style:{height:900},children:f.jsx(X,{height:"4000px",width:"1000px"})}),f.jsx(R.Bar,{orientation:"vertical",size:"viewport"})]},"vertical")]}},N={args:{children:[f.jsxs(B,{$direction:"column",$width:"100%",$height:"100%",$gap:"1",children:[f.jsx(R.Viewport,{style:{width:900,height:300},children:f.jsx(X,{width:"4000px",height:"100%"})}),f.jsx(R.Bar,{orientation:"horizontal",size:"viewport"})]},"horizontal")]}},I={args:{children:[f.jsxs(B,{$direction:"column",$width:"100%",$height:"100%",$gap:"1",children:[f.jsx(R.Bar,{orientation:"horizontal"}),f.jsx(R.Viewport,{style:{width:900,height:300},children:f.jsx(X,{width:"4000px",height:"100%"})})]},"horizontal-above")]}};function X(g){const{height:r,width:o}=g;return f.jsx("div",{style:{backgroundImage:"linear-gradient(135deg,rgba(42, 123, 155, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(237, 221, 83, 1) 100%)",width:o,height:r,position:"relative"}})}var q,G,U;K.parameters={...K.parameters,docs:{...(q=K.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    children: [<Flex $direction="row" $width="100%" $height="100%" $gap="1" key="vertical">
        <ScrollArea.Viewport style={{
        height: 900
      }}>
          <PrettyGradient height="4000px" width="1000px" />
        </ScrollArea.Viewport>

        <ScrollArea.Bar orientation="vertical" size="viewport" />
      </Flex>]
  }
}`,...(U=(G=K.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var E,O,J;N.parameters={...N.parameters,docs:{...(E=N.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    children: [<Flex $direction="column" $width="100%" $height="100%" $gap="1" key="horizontal">
        <ScrollArea.Viewport style={{
        width: 900,
        height: 300
      }}>
          <PrettyGradient width="4000px" height="100%" />
        </ScrollArea.Viewport>

        <ScrollArea.Bar orientation="horizontal" size="viewport" />
      </Flex>]
  }
}`,...(J=(O=N.parameters)==null?void 0:O.docs)==null?void 0:J.source}}};var Q,Z,_;I.parameters={...I.parameters,docs:{...(Q=I.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    children: [<Flex $direction="column" $width="100%" $height="100%" $gap="1" key="horizontal-above">
        <ScrollArea.Bar orientation="horizontal" />
        <ScrollArea.Viewport style={{
        width: 900,
        height: 300
      }}>
          <PrettyGradient width="4000px" height="100%" />
        </ScrollArea.Viewport>
      </Flex>]
  }
}`,...(_=(Z=I.parameters)==null?void 0:Z.docs)==null?void 0:_.source}}};const vr=["Vertical","Horizontal","HorizontalAbove"];export{N as Horizontal,I as HorizontalAbove,K as Vertical,vr as __namedExportsOrder,mr as default};
