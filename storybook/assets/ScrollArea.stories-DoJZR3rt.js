import{r as c,g as q,j as d,a8 as he}from"./iframe-CGPW5dgX.js";import{R as fe}from"./helpers-tUmR_xN7.js";import{c as ge,u as be,$ as ve}from"./index-C0dagnaq.js";import{u as U}from"./useRenderProps-B7rIWDyP.js";import{$ as ue}from"./filterDOMProps-CeZl_uWj.js";import{d as we,g as ye,h as Se}from"./usePress-BioWcz2v.js";import{a as G}from"./useObjectRef-CjsC0YUg.js";import{F as C}from"./Flex.component-BDldr6hG.js";import{I as O}from"./IconButton.component-CifirOzj.js";import{V as T}from"./View.component-BOuwyr5T.js";import"./preload-helper-Dp1pzeXC.js";import"./useFocusable-DT9_LXVA.js";import"./SSRProvider-Dwr0Ku02.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./index-BjoBGrPA.js";import"./layout-Dd7m2B0D.js";import"./utils-DqmNl-Il.js";import"./BaseButton-B8bVR-o6.js";import"./mixins-BJuiWlrm.js";import"./useFocusRing-Dbcio0BW.js";import"./useFocusWithin-BzfIRRcZ.js";import"./useButton-CjI92Tj6.js";import"./useLink-PwQmwW74.js";import"./Loading.context-EUscm4UA.js";import"./SpinnerLoader.component-BfUo5Fvz.js";import"./Loader.component-oLyQpXum.js";import"./Checkmark.component-DL9zPInj.js";import"./Spinner.component-CLncQyFJ.js";import"./ProgressCircle.component-Cc0SXoU-.js";import"./useLabel-BytR9cji.js";import"./useLabels-Bveo7T3X.js";import"./useNumberFormatter-CgBbBkmi.js";import"./context-CLSG1ylv.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-PU9nFmCW.js";import"./MaterialIcon.component-Dhrh5rCP.js";import"./Icons.styles-tJBW4wd9.js";function xe(y){let{onMoveStart:r,onMove:o,onMoveEnd:s}=y,e=c.useRef({didMove:!1,lastPosition:null,id:null}),{addGlobalListener:i,removeGlobalListener:p}=we(),w=G((l,b,S,n)=>{S===0&&n===0||(e.current.didMove||(e.current.didMove=!0,r==null||r({type:"movestart",pointerType:b,shiftKey:l.shiftKey,metaKey:l.metaKey,ctrlKey:l.ctrlKey,altKey:l.altKey})),o==null||o({type:"move",pointerType:b,deltaX:S,deltaY:n,shiftKey:l.shiftKey,metaKey:l.metaKey,ctrlKey:l.ctrlKey,altKey:l.altKey}))}),m=G((l,b)=>{ye(),e.current.didMove&&(s==null||s({type:"moveend",pointerType:b,shiftKey:l.shiftKey,metaKey:l.metaKey,ctrlKey:l.ctrlKey,altKey:l.altKey}))});return{moveProps:c.useMemo(()=>{let l={},b=()=>{Se(),e.current.didMove=!1};if(typeof PointerEvent>"u"){let n=t=>{if(t.button===0){var f,g,h,k;w(t,"mouse",t.pageX-((h=(f=e.current.lastPosition)===null||f===void 0?void 0:f.pageX)!==null&&h!==void 0?h:0),t.pageY-((k=(g=e.current.lastPosition)===null||g===void 0?void 0:g.pageY)!==null&&k!==void 0?k:0)),e.current.lastPosition={pageX:t.pageX,pageY:t.pageY}}},u=t=>{t.button===0&&(m(t,"mouse"),p(window,"mousemove",n,!1),p(window,"mouseup",u,!1))};l.onMouseDown=t=>{t.button===0&&(b(),t.stopPropagation(),t.preventDefault(),e.current.lastPosition={pageX:t.pageX,pageY:t.pageY},i(window,"mousemove",n,!1),i(window,"mouseup",u,!1))};let a=t=>{let f=[...t.changedTouches].findIndex(({identifier:A})=>A===e.current.id);if(f>=0){var g,h;let{pageX:A,pageY:R}=t.changedTouches[f];var k,N;w(t,"touch",A-((k=(g=e.current.lastPosition)===null||g===void 0?void 0:g.pageX)!==null&&k!==void 0?k:0),R-((N=(h=e.current.lastPosition)===null||h===void 0?void 0:h.pageY)!==null&&N!==void 0?N:0)),e.current.lastPosition={pageX:A,pageY:R}}},v=t=>{[...t.changedTouches].findIndex(({identifier:g})=>g===e.current.id)>=0&&(m(t,"touch"),e.current.id=null,p(window,"touchmove",a),p(window,"touchend",v),p(window,"touchcancel",v))};l.onTouchStart=t=>{if(t.changedTouches.length===0||e.current.id!=null)return;let{pageX:f,pageY:g,identifier:h}=t.changedTouches[0];b(),t.stopPropagation(),t.preventDefault(),e.current.lastPosition={pageX:f,pageY:g},e.current.id=h,i(window,"touchmove",a,!1),i(window,"touchend",v,!1),i(window,"touchcancel",v,!1)}}else{let n=a=>{if(a.pointerId===e.current.id){var v,t;let h=a.pointerType||"mouse";var f,g;w(a,h,a.pageX-((f=(v=e.current.lastPosition)===null||v===void 0?void 0:v.pageX)!==null&&f!==void 0?f:0),a.pageY-((g=(t=e.current.lastPosition)===null||t===void 0?void 0:t.pageY)!==null&&g!==void 0?g:0)),e.current.lastPosition={pageX:a.pageX,pageY:a.pageY}}},u=a=>{if(a.pointerId===e.current.id){let v=a.pointerType||"mouse";m(a,v),e.current.id=null,p(window,"pointermove",n,!1),p(window,"pointerup",u,!1),p(window,"pointercancel",u,!1)}};l.onPointerDown=a=>{a.button===0&&e.current.id==null&&(b(),a.stopPropagation(),a.preventDefault(),e.current.lastPosition={pageX:a.pageX,pageY:a.pageY},e.current.id=a.pointerId,i(window,"pointermove",n,!1),i(window,"pointerup",u,!1),i(window,"pointercancel",u,!1))}}let S=(n,u,a)=>{b(),w(n,"keyboard",u,a),m(n,"keyboard")};return l.onKeyDown=n=>{switch(n.key){case"Left":case"ArrowLeft":n.preventDefault(),n.stopPropagation(),S(n,-1,0);break;case"Right":case"ArrowRight":n.preventDefault(),n.stopPropagation(),S(n,1,0);break;case"Up":case"ArrowUp":n.preventDefault(),n.stopPropagation(),S(n,0,-1);break;case"Down":case"ArrowDown":n.preventDefault(),n.stopPropagation(),S(n,0,1);break}},l},[e,i,p,w,m])}}const $e=ge(),E=c.createContext(null),ke=q.div`
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
`,Ae=q.div`
  overflow: auto;

  /* Firefox */
  scrollbar-width: none;

  /* WebKit browsers */
  &::-webkit-scrollbar {
    display: none;
  }
`,Re=q.div`
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
`,Pe=q.div`
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
`;function Ne(){const[y,r]=c.useState({scrollLeft:0,scrollTop:0,scrollWidth:0,scrollHeight:0,clientWidth:0,clientHeight:0}),o=c.useCallback(s=>{r({scrollLeft:s.scrollLeft,scrollTop:s.scrollTop,scrollWidth:s.scrollWidth,scrollHeight:s.scrollHeight,clientWidth:s.clientWidth,clientHeight:s.clientHeight})},[]);return c.useMemo(()=>({...y,setFromElement:o,set:r}),[y,o])}const X=c.forwardRef(function(r,o){[r,o]=be($e,r,o);const{className:s,style:e,children:i,...p}=r,w=c.useRef(null),m=U({componentClassName:"aje-scrollarea",style:e,className:s,children:i}),$=Ne();return d.jsx(E.Provider,{value:{state:$,viewportRef:w},children:d.jsx(ke,{ref:o,...m,...p,children:m.children})})});X.displayName="ScrollArea";try{X.displayName="ScrollArea",X.__docgenInfo={description:"Component for creating a scrollable area with custom scrollbars.",displayName:"ScrollArea",filePath:"/home/runner/work/atomic-libs/atomic-libs/packages/atomic-elements/src/components/Layout/ScrollArea/components/ScrollAreaRoot.tsx",methods:[],props:{className:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"}],description:"",name:"className",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"},required:!1,tags:{},type:{name:"RenderClassName<never>"}},style:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"}],description:"",name:"style",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"},required:!1,tags:{},type:{name:"RenderStyle<never>"}}},tags:{}}}catch{}function Ve(y,r){const{viewportRef:o,children:s}=y,e=c.useCallback(()=>{if(o.current){const i=o.current;r.setFromElement(i)}},[]);return c.useLayoutEffect(()=>{e();const i=o.current;if(!i)return;const p=new ResizeObserver(()=>{e()});return p.observe(i),()=>{p.disconnect()}},[e,s]),{scrollAreaProps:{onScroll:e}}}const Y=c.forwardRef(function(r,o){const{viewportRef:s,state:e}=c.useContext(E),i=ve(s,o),p=U({componentClassName:"aje-scrollarea__viewport",...r}),{scrollAreaProps:w}=Ve({viewportRef:s,children:p.children},e);return d.jsx(Ae,{ref:i,...ue(r),...p,...w,children:p.children})});Y.displayName="ScrollArea.Viewport";try{Y.displayName="ScrollArea.Viewport",Y.__docgenInfo={description:"",displayName:"ScrollArea.Viewport",filePath:"/home/runner/work/atomic-libs/atomic-libs/packages/atomic-elements/src/components/Layout/ScrollArea/components/ScrollAreaViewPort.tsx",methods:[],props:{className:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"}],description:"",name:"className",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"},required:!1,tags:{},type:{name:"RenderClassName<never>"}},style:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"}],description:"",name:"style",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"},required:!1,tags:{},type:{name:"RenderStyle<never>"}}},tags:{}}}catch{}function J(y,r){const{orientation:o,direction:s,viewportRef:e,baseScrollAmount:i=20,maxSpeedMultiplier:p=5,accelerationDelay:w=150,accelerationRate:m=.5}=y,$=c.useRef(null),l=c.useRef(1),b=c.useRef(null),S=o==="horizontal",n=s==="advance",u=c.useCallback(()=>{$.current&&(clearInterval($.current),$.current=null),b.current&&(clearInterval(b.current),b.current=null),l.current=1},[]),a=c.useCallback(()=>{if(e.current){const h=e.current;r.setFromElement(h)}},[e,r]),v=c.useCallback(()=>{if(!e.current)return;u();const h=()=>{if(!e.current)return;const k=i*l.current,N=n?k:-k;S?e.current.scrollLeft+=N:e.current.scrollTop+=N,a()};h(),$.current=setInterval(h,50),setTimeout(()=>{b.current=setInterval(()=>{l.current<p&&(l.current+=m)},100)},w)},[e,S,n,a,u,i,p,w,m]),t=c.useCallback(()=>{v()},[v]),f=c.useCallback(()=>{u()},[u]);return{buttonProps:{onPress:c.useCallback(()=>{if(!e.current)return;const h=i,k=n?h:-h;S?e.current.scrollLeft+=k:e.current.scrollTop+=k,a()},[e,S,n,a,i]),onPressStart:t,onPressEnd:f,"aria-label":`Scroll ${s} ${o}ly`}}}function ze(y,r){const{viewportRef:o,trackRef:s,orientation:e}=y,[i,p]=c.useState(!1),w=c.useCallback(()=>{if(o.current){const A=o.current;r.setFromElement(A)}},[]),m=e==="horizontal",$=m?r.clientWidth>0?Math.max(r.clientWidth/r.scrollWidth*100,10):100:r.clientHeight>0?Math.max(r.clientHeight/r.scrollHeight*100,10):100,l=m?r.scrollWidth-r.clientWidth:r.scrollHeight-r.clientHeight,b=l>0,S=m?r.scrollLeft:r.scrollTop,n=l>0?S/l*(100-$):0,u=c.useRef(null),a=c.useRef(null),v=c.useCallback(()=>{u.current&&(clearInterval(u.current),u.current=null),a.current=null,p(!1)},[]),t=c.useCallback(A=>{if(!o.current||!s.current)return;p(!0),u.current&&(clearInterval(u.current),u.current=null);const R=s.current.getBoundingClientRect();let z;if(m){const P=A.clientX-R.left,j=R.width,V=$/100*j,M=P-V/2;z=Math.max(0,Math.min(1,M/(j-V)))*l}else{const P=A.clientY-R.top,j=R.height,V=$/100*j,M=P-V/2;z=Math.max(0,Math.min(1,M/(j-V)))*l}a.current=z;const L=()=>{if(!o.current||a.current===null)return;const P=m?o.current.scrollLeft:o.current.scrollTop,V=a.current-P;if(Math.abs(V)<1){u.current&&(clearInterval(u.current),u.current=null),a.current=null;return}const M=V*.15;m?o.current.scrollLeft+=M:o.current.scrollTop+=M,w()};u.current=setInterval(L,16)},[m,$,l,o,s,w]),f=c.useCallback(()=>{v()},[v]),{moveProps:g}=xe({onMoveStart:()=>{p(!0)},onMove:A=>{const R=m?A.deltaX:A.deltaY;if(o.current&&s.current){if(m){const z=s.current.offsetWidth,L=r.scrollWidth,P=R/z*L;o.current.scrollLeft+=P}else{const z=s.current.offsetHeight,L=r.scrollHeight,P=R/z*L;o.current.scrollTop+=P}w()}},onMoveEnd:()=>{p(!1)}}),h=m?{width:`${$}%`,left:`${n}%`}:{height:`${$}%`,top:`${n}%`},{buttonProps:k}=J({orientation:e,direction:"retreat",viewportRef:o},r),{buttonProps:N}=J({orientation:e,direction:"advance",viewportRef:o},r);return{thumbProps:{role:"scrollbar",tabIndex:0,"aria-valuenow":S,"aria-valuemin":0,"aria-valuemax":l,"aria-orientation":e,"aria-busy":i,"data-active":i,style:h,...g},trackProps:{onMouseDown:t,onMouseUp:f,"data-orientation":e,"data-active":i},advanceButtonProps:N,retreatButtonProps:k,isScrollable:b}}const F=c.forwardRef(function(r,o){const{orientation:s,size:e="viewport",show:i="auto",reserveSpace:p=!1}=r,{viewportRef:w,state:m}=c.useContext(E),$=c.useRef(null),l=c.useRef(null),{isScrollable:b,thumbProps:S,trackProps:n,advanceButtonProps:u,retreatButtonProps:a}=ze({viewportRef:w,trackRef:l,orientation:s},m),v=s==="horizontal";let t={};e==="viewport"?t=v?{width:`${m.clientWidth}px`}:{height:`${m.clientHeight}px`}:e&&e!=="auto"&&(t=v?{width:e}:{height:e});const f=U({componentClassName:"aje-scrollarea__scrollbar",...r,size:void 0});if(!b&&i==="auto"&&!p)return null;const g=!b&&p?{visibility:"hidden"}:{};return d.jsxs(C,{ref:o,$height:"100%",$align:"center",$direction:s==="horizontal"?"row":"column",$gap:"1",...ue(r),...f,style:{...t,...g,...f.style},children:[d.jsx(O,{...a,icon:s==="horizontal"?"arrow_left":"arrow_drop_up",variant:"scrollbar"}),d.jsx(Re,{ref:l,...n,children:d.jsx(Pe,{ref:$,...S})}),d.jsx(O,{...u,icon:s==="horizontal"?"arrow_right":"arrow_drop_down",variant:"scrollbar"})]})});F.displayName="ScrollArea.Bar";try{F.displayName="ScrollArea.Bar",F.__docgenInfo={description:"",displayName:"ScrollArea.Bar",filePath:"/home/runner/work/atomic-libs/atomic-libs/packages/atomic-elements/src/components/Layout/ScrollArea/components/Scrollbar.tsx",methods:[],props:{orientation:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Layout/ScrollArea/components/Scrollbar.tsx",name:"ScrollbarProps"}],description:"Which axis of the viewport the scrollbar controls.",name:"orientation",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Layout/ScrollArea/components/Scrollbar.tsx",name:"ScrollbarProps"},required:!0,tags:{},type:{name:"enum",raw:'"horizontal" | "vertical"',value:[{value:'"horizontal"'},{value:'"vertical"'}]}},size:{defaultValue:{value:'"viewport"'},declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Layout/ScrollArea/components/Scrollbar.tsx",name:"ScrollbarProps"}],description:"Length of the scrollbar: `viewport` matches the viewport, `auto` sizes to\nits content, or pass a CSS length.",name:"size",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Layout/ScrollArea/components/Scrollbar.tsx",name:"ScrollbarProps"},required:!1,tags:{default:'"viewport"'},type:{name:'SuggestStrings<"auto" | "viewport">'}},show:{defaultValue:{value:'"auto"'},declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Layout/ScrollArea/components/Scrollbar.tsx",name:"ScrollbarProps"}],description:"`auto` hides the scrollbar when the viewport can't scroll; `always` keeps\nit visible.",name:"show",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Layout/ScrollArea/components/Scrollbar.tsx",name:"ScrollbarProps"},required:!1,tags:{default:'"auto"'},type:{name:"enum",raw:'"auto" | "always"',value:[{value:'"auto"'},{value:'"always"'}]}},reserveSpace:{defaultValue:{value:"false"},declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Layout/ScrollArea/components/Scrollbar.tsx",name:"ScrollbarProps"}],description:`Keep the space of a hidden scrollbar, so the layout doesn't shift when it
appears.`,name:"reserveSpace",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Layout/ScrollArea/components/Scrollbar.tsx",name:"ScrollbarProps"},required:!1,tags:{default:"false"},type:{name:"boolean"}},className:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"}],description:"",name:"className",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"},required:!1,tags:{},type:{name:"RenderClassName<never>"}},style:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"}],description:"",name:"style",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"},required:!1,tags:{},type:{name:"RenderStyle<never>"}}},tags:{}}}catch{}const x=X;x.Viewport=Y;x.Bar=F;try{x.displayName="ScrollArea",x.__docgenInfo={description:"",displayName:"ScrollArea",filePath:"/home/runner/work/atomic-libs/atomic-libs/packages/atomic-elements/src/components/Layout/ScrollArea/ScrollArea.component.tsx",methods:[],props:{className:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"}],description:"",name:"className",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"},required:!1,tags:{},type:{name:"RenderClassName<never>"}},style:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"}],description:"",name:"style",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"},required:!1,tags:{},type:{name:"RenderStyle<never>"}}},tags:{}}}catch{}const fr={title:"Layouts/ScrollArea",component:x,subcomponents:{"ScrollArea.Viewport":x.Viewport,"ScrollArea.Bar":x.Bar},parameters:{cssprops:{scrollArea:he}},argTypes:{...fe}},K="linear-gradient(135deg, #2a7b9b 0%, #57c785 50%, #eddd53 100%)",B={args:{children:[d.jsxs(C,{$direction:"row",$width:"100%",$height:"100%",$gap:"1",children:[d.jsx(x.Viewport,{style:{height:900},children:d.jsx(T,{$height:"4000px",$width:"1000px",$bg:K})}),d.jsx(x.Bar,{orientation:"vertical"})]},"vertical")]}},I={args:{children:[d.jsxs(C,{$direction:"column",$width:"100%",$height:"100%",$gap:"1",children:[d.jsx(x.Viewport,{style:{width:900,height:300},children:d.jsx(T,{$width:"4000px",$height:"100%",$bg:K})}),d.jsx(x.Bar,{orientation:"horizontal"})]},"horizontal")]}},H={args:{children:[d.jsxs(C,{$direction:"column",$width:"100%",$height:"100%",$gap:"1",children:[d.jsx(x.Bar,{orientation:"horizontal"}),d.jsx(x.Viewport,{style:{width:900,height:300},children:d.jsx(T,{$width:"4000px",$height:"100%",$bg:K})})]},"horizontal-above")]}},D={args:{children:[d.jsxs(C,{$direction:"column",$width:"100%",$height:"100%",$gap:"1",children:[d.jsx(x.Viewport,{style:{width:900,height:300},children:d.jsx(T,{$width:"100%",$height:"100%",$bg:K})}),d.jsx(x.Bar,{orientation:"horizontal",show:"always"})]},"always")]}},W={args:{children:[d.jsxs(C,{$direction:"column",$width:"100%",$height:"100%",$gap:"1",children:[d.jsx(x.Viewport,{style:{width:900,height:300},children:d.jsx(T,{$width:"100%",$height:"100%",$bg:K})}),d.jsx(x.Bar,{orientation:"horizontal",reserveSpace:!0})]},"reserve-space")]}},gr=["Vertical","Horizontal","HorizontalAbove","AlwaysShowBar","ReserveSpace"];var Q,Z,_;B.parameters={...B.parameters,docs:{...(Q=B.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    children: [<Flex $direction="row" $width="100%" $height="100%" $gap="1" key="vertical">
        <ScrollArea.Viewport style={{
        height: 900
      }}>
          <View $height="4000px" $width="1000px" $bg={gradient} />
        </ScrollArea.Viewport>

        <ScrollArea.Bar orientation="vertical" />
      </Flex>]
  }
}`,...(_=(Z=B.parameters)==null?void 0:Z.docs)==null?void 0:_.source}}};var ee,re,te;I.parameters={...I.parameters,docs:{...(ee=I.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    children: [<Flex $direction="column" $width="100%" $height="100%" $gap="1" key="horizontal">
        <ScrollArea.Viewport style={{
        width: 900,
        height: 300
      }}>
          <View $width="4000px" $height="100%" $bg={gradient} />
        </ScrollArea.Viewport>

        <ScrollArea.Bar orientation="horizontal" />
      </Flex>]
  }
}`,...(te=(re=I.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var oe,ae,le;H.parameters={...H.parameters,docs:{...(oe=H.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    children: [<Flex $direction="column" $width="100%" $height="100%" $gap="1" key="horizontal-above">
        <ScrollArea.Bar orientation="horizontal" />
        <ScrollArea.Viewport style={{
        width: 900,
        height: 300
      }}>
          <View $width="4000px" $height="100%" $bg={gradient} />
        </ScrollArea.Viewport>
      </Flex>]
  }
}`,...(le=(ae=H.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};var ne,se,ce;D.parameters={...D.parameters,docs:{...(ne=D.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    children: [<Flex $direction="column" $width="100%" $height="100%" $gap="1" key="always">
        <ScrollArea.Viewport style={{
        width: 900,
        height: 300
      }}>
          <View $width="100%" $height="100%" $bg={gradient} />
        </ScrollArea.Viewport>
        <ScrollArea.Bar orientation="horizontal" show="always" />
      </Flex>]
  }
}`,...(ce=(se=D.parameters)==null?void 0:se.docs)==null?void 0:ce.source}}};var ie,pe,de;W.parameters={...W.parameters,docs:{...(ie=W.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    children: [<Flex $direction="column" $width="100%" $height="100%" $gap="1" key="reserve-space">
        <ScrollArea.Viewport style={{
        width: 900,
        height: 300
      }}>
          <View $width="100%" $height="100%" $bg={gradient} />
        </ScrollArea.Viewport>
        <ScrollArea.Bar orientation="horizontal" reserveSpace />
      </Flex>]
  }
}`,...(de=(pe=W.parameters)==null?void 0:pe.docs)==null?void 0:de.source}}};export{D as AlwaysShowBar,I as Horizontal,H as HorizontalAbove,W as ReserveSpace,B as Vertical,gr as __namedExportsOrder,fr as default};
