import{r as f,R as x,I,g as U,j as u,a9 as me}from"./iframe-CGPW5dgX.js";import{$ as se,s as ge,j as Te,G as he}from"./useFocusable-DT9_LXVA.js";import{$ as le}from"./useHover-9VTiwztB.js";import{$ as z,e as be}from"./useObjectRef-CjsC0YUg.js";import{P as xe}from"./Provider-CKCHWQEo.js";import{c as ve,u as ye}from"./index-C0dagnaq.js";import{$ as Ee,b as $e}from"./useOverlayTriggerState-DfGm2mCW.js";import{$ as Oe}from"./useOverlayPosition-HaX0xHeb.js";import{$ as Pe}from"./filterDOMProps-CeZl_uWj.js";import{m as Ne}from"./mixins-BJuiWlrm.js";import{u as Se}from"./useRenderProps-B7rIWDyP.js";import{B as De}from"./Button.component-Bd4z0Gnh.js";import{M as Ce}from"./MaterialIcon.component-Dhrh5rCP.js";import{T as ke}from"./TextInput.component-Z42Aw0Lv.js";const _e=1500,F=500;let v={},Re=0,S=!1,h=null,y=null;function we(r={}){let{delay:i=_e,closeDelay:s=F}=r,{isOpen:a,open:o,close:e}=Ee(r),t=f.useMemo(()=>`${++Re}`,[]),n=f.useRef(null),l=f.useRef(e),p=()=>{v[t]=T},c=()=>{for(let g in v)g!==t&&(v[g](!0),delete v[g])},m=()=>{n.current&&clearTimeout(n.current),n.current=null,c(),p(),S=!0,o(),h&&(clearTimeout(h),h=null),y&&(clearTimeout(y),y=null)},T=g=>{g||s<=0?(n.current&&clearTimeout(n.current),n.current=null,l.current()):n.current||(n.current=setTimeout(()=>{n.current=null,l.current()},s)),h&&(clearTimeout(h),h=null),S&&(y&&clearTimeout(y),y=setTimeout(()=>{delete v[t],y=null,S=!1},Math.max(F,s)))},W=()=>{c(),p(),!a&&!h&&!S?h=setTimeout(()=>{h=null,S=!0,m()},i):a||m()};return f.useEffect(()=>{l.current=e},[e]),f.useEffect(()=>()=>{n.current&&clearTimeout(n.current),v[t]&&delete v[t]},[t]),{isOpen:a,open:g=>{!g&&i>0&&!n.current?W():m()},close:T}}function Ie(r,i){let s=Pe(r,{labelable:!0}),{hoverProps:a}=le({onHoverStart:()=>i==null?void 0:i.open(!0),onHoverEnd:()=>i==null?void 0:i.close()});return{tooltipProps:z(s,a,{role:"tooltip"})}}function je(r,i,s){let{isDisabled:a,trigger:o}=r,e=be(),t=f.useRef(!1),n=f.useRef(!1),l=()=>{(t.current||n.current)&&i.open(n.current)},p=N=>{!t.current&&!n.current&&i.close(N)};f.useEffect(()=>{let N=B=>{s&&s.current&&B.key==="Escape"&&(B.stopPropagation(),i.close(!0))};if(i.isOpen)return document.addEventListener("keydown",N,!0),()=>{document.removeEventListener("keydown",N,!0)}},[s,i]);let c=()=>{o!=="focus"&&(ge()==="pointer"?t.current=!0:t.current=!1,l())},m=()=>{o!=="focus"&&(n.current=!1,t.current=!1,p())},T=()=>{n.current=!1,t.current=!1,p(!0)},W=()=>{Te()&&(n.current=!0,l())},g=()=>{n.current=!1,t.current=!1,p(!0)},{hoverProps:de}=le({isDisabled:a,onHoverStart:c,onHoverEnd:m}),{focusableProps:fe}=se({isDisabled:a,onFocus:W,onBlur:g},s);return{triggerProps:{"aria-describedby":i.isOpen?e:void 0,...z(fe,de,{onPointerDown:T,onKeyDown:T,tabIndex:void 0})},tooltipProps:{id:e}}}function Me(r,i){if(r==null)return{};var s={};for(var a in r)if({}.hasOwnProperty.call(r,a)){if(i.indexOf(a)!==-1)continue;s[a]=r[a]}return s}function H(r,i){return H=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(s,a){return s.__proto__=a,s},H(r,i)}function Le(r,i){r.prototype=Object.create(i.prototype),r.prototype.constructor=r,H(r,i)}const q={disabled:!1},pe=x.createContext(null);var We=function(i){return i.scrollTop},D="unmounted",E="exited",$="entering",P="entered",V="exiting",b=function(r){Le(i,r);function i(a,o){var e;e=r.call(this,a,o)||this;var t=o,n=t&&!t.isMounting?a.enter:a.appear,l;return e.appearStatus=null,a.in?n?(l=E,e.appearStatus=$):l=P:a.unmountOnExit||a.mountOnEnter?l=D:l=E,e.state={status:l},e.nextCallback=null,e}i.getDerivedStateFromProps=function(o,e){var t=o.in;return t&&e.status===D?{status:E}:null};var s=i.prototype;return s.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},s.componentDidUpdate=function(o){var e=null;if(o!==this.props){var t=this.state.status;this.props.in?t!==$&&t!==P&&(e=$):(t===$||t===P)&&(e=V)}this.updateStatus(!1,e)},s.componentWillUnmount=function(){this.cancelNextCallback()},s.getTimeouts=function(){var o=this.props.timeout,e,t,n;return e=t=n=o,o!=null&&typeof o!="number"&&(e=o.exit,t=o.enter,n=o.appear!==void 0?o.appear:t),{exit:e,enter:t,appear:n}},s.updateStatus=function(o,e){if(o===void 0&&(o=!1),e!==null)if(this.cancelNextCallback(),e===$){if(this.props.unmountOnExit||this.props.mountOnEnter){var t=this.props.nodeRef?this.props.nodeRef.current:I.findDOMNode(this);t&&We(t)}this.performEnter(o)}else this.performExit();else this.props.unmountOnExit&&this.state.status===E&&this.setState({status:D})},s.performEnter=function(o){var e=this,t=this.props.enter,n=this.context?this.context.isMounting:o,l=this.props.nodeRef?[n]:[I.findDOMNode(this),n],p=l[0],c=l[1],m=this.getTimeouts(),T=n?m.appear:m.enter;if(!o&&!t||q.disabled){this.safeSetState({status:P},function(){e.props.onEntered(p)});return}this.props.onEnter(p,c),this.safeSetState({status:$},function(){e.props.onEntering(p,c),e.onTransitionEnd(T,function(){e.safeSetState({status:P},function(){e.props.onEntered(p,c)})})})},s.performExit=function(){var o=this,e=this.props.exit,t=this.getTimeouts(),n=this.props.nodeRef?void 0:I.findDOMNode(this);if(!e||q.disabled){this.safeSetState({status:E},function(){o.props.onExited(n)});return}this.props.onExit(n),this.safeSetState({status:V},function(){o.props.onExiting(n),o.onTransitionEnd(t.exit,function(){o.safeSetState({status:E},function(){o.props.onExited(n)})})})},s.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},s.safeSetState=function(o,e){e=this.setNextCallback(e),this.setState(o,e)},s.setNextCallback=function(o){var e=this,t=!0;return this.nextCallback=function(n){t&&(t=!1,e.nextCallback=null,o(n))},this.nextCallback.cancel=function(){t=!1},this.nextCallback},s.onTransitionEnd=function(o,e){this.setNextCallback(e);var t=this.props.nodeRef?this.props.nodeRef.current:I.findDOMNode(this),n=o==null&&!this.props.addEndListener;if(!t||n){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[t,this.nextCallback],p=l[0],c=l[1];this.props.addEndListener(p,c)}o!=null&&setTimeout(this.nextCallback,o)},s.render=function(){var o=this.state.status;if(o===D)return null;var e=this.props,t=e.children;e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef;var n=Me(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return x.createElement(pe.Provider,{value:null},typeof t=="function"?t(o,n):x.cloneElement(x.Children.only(t),n))},i}(x.Component);b.contextType=pe;b.propTypes={};function O(){}b.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:O,onEntering:O,onEntered:O,onExit:O,onExiting:O,onExited:O};b.UNMOUNTED=D;b.EXITED=E;b.ENTERING=$;b.ENTERED=P;b.EXITING=V;const C=U.div`
  position: absolute;
  background-color: var(--tooltip-bg-clr);
  border-radius: var(--tooltip-arrow-radius, 2px);
  width: 12px;
  height: 12px;
  rotate: 45deg;
  z-index: 999;
`,He=U.div`
  ${Ne.Regular}
  background-color: var(--tooltip-bg-clr);
  color: var(--tooltip-text-clr);
  border-radius: var(--tooltip-radius, 5px);
  padding: var(--tooltip-padding-vert, 8px) var(--tooltip-padding-horiz, 8px);
  font-size: var(--tooltip-font-size, 1.3rem);
  font-weight: var(--tooltip-font-weight, normal);
  line-height: 1.4;
  max-width: 300px;
  opacity: 0;
  z-index: 1000;

  &[data-placement="top"] {
    --translateY: -4px;

    ${C} {
      translate: -50% 0;
      bottom: -4px;
    }
  }

  &[data-placement="bottom"] {
    --translateY: 4px;

    ${C} {
      translate: -50% 0;
      top: -4px;
    }
  }

  &[data-placement="left"] {
    --translateX: -4px;

    ${C} {
      translate: 0 -50%;
      right: -4px;
    }
  }

  &[data-placement="right"] {
    --translateX: 4px;

    ${C} {
      translate: 0 -50%;
      left: -4px;
    }
  }

  &[data-entering],
  &[data-entered] {
    opacity: 1;
    translate: var(--translateX, 0) var(--translateY, 0);
    transition:
      translate ${r=>r.$transitionDuration}ms,
      opacity ${r=>r.$transitionDuration}ms;
  }

  &[data-exiting],
  &[data-exited] {
    opacity: 0;
    translate: 0 0;
    pointer-events: none;
    transition:
      translate ${r=>r.$transitionDuration}ms,
      opacity ${r=>r.$transitionDuration}ms;
  }
`;U.span``;const ce=ve(),ue=x.createContext(null);function j(r){let i=f.useRef(null);[r,i]=ye(ce,r,i);const{triggerRef:s,transitionDuration:a=300,...o}=r,e=f.useContext(ue),{tooltipProps:t}=Ie({...o},e),{overlayProps:n,arrowProps:l,placement:p}=Oe({targetRef:s,overlayRef:i,isOpen:e.isOpen,placement:r.placement||"top",offset:r.offset??2,crossOffset:r.crossOffset,arrowBoundaryOffset:r.arrowBoundaryOffset,shouldFlip:r.shouldFlip}),c=Se({componentClassName:"aje-tooltip",...r}),m=z(n,t,c);return u.jsx($e,{children:u.jsx(b,{nodeRef:i,in:e.isOpen,timeout:a,unmountOnExit:!0,children:T=>u.jsxs(He,{$transitionDuration:a,ref:i,"data-placement":p,...m,[`data-${T}`]:!0,style:{...m.style,zIndex:100001},children:[c.children,u.jsx(C,{...l})]})})})}try{j.displayName="ToolTip",j.__docgenInfo={description:"A ToolTip component displays a popup with additional information when a user hovers over or focuses on an element.",displayName:"ToolTip",filePath:"/home/runner/work/atomic-libs/atomic-libs/packages/atomic-elements/src/components/Overlays/ToolTip/ToolTip.component.tsx",methods:[],props:{triggerRef:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Overlays/ToolTip/ToolTip.component.tsx",name:"ToolTipProps"}],description:`The ref for the element which the tooltip positions itself with respect to.

When used within a TooltipTrigger this is set automatically. It is only required when used standalone.`,name:"triggerRef",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Overlays/ToolTip/ToolTip.component.tsx",name:"ToolTipProps"},required:!1,tags:{},type:{name:"RefObject<Element | null>"}},placement:{defaultValue:{value:'"top"'},declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Overlays/ToolTip/ToolTip.component.tsx",name:"ToolTipProps"}],description:"Placement of the tooltip relative to the target element",name:"placement",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Overlays/ToolTip/ToolTip.component.tsx",name:"ToolTipProps"},required:!1,tags:{default:'"top"'},type:{name:"enum",raw:'"right" | "left" | "top" | "bottom"',value:[{value:'"right"'},{value:'"left"'},{value:'"top"'},{value:'"bottom"'}]}},transitionDuration:{defaultValue:{value:"300"},declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Overlays/ToolTip/ToolTip.component.tsx",name:"ToolTipProps"}],description:"Time in milliseconds for the tooltip to fade in and out",name:"transitionDuration",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Overlays/ToolTip/ToolTip.component.tsx",name:"ToolTipProps"},required:!1,tags:{default:"300"},type:{name:"number"}},className:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"}],description:"",name:"className",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"},required:!1,tags:{},type:{name:"RenderClassName<never>"}},style:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"}],description:"",name:"style",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"},required:!1,tags:{},type:{name:"RenderStyle<never>"}}},tags:{}}}catch{}function M(r){const{delay:i=0,closeDelay:s=0,...a}=r,o=we({delay:i,closeDelay:s,...a}),e=f.useRef(null),{triggerProps:t,tooltipProps:n}=je(r,o,e);return u.jsx(xe,{values:[[ue.Provider,o],[ce.Provider,{...n,triggerRef:e}]],children:u.jsx(he,{...t,ref:e,children:r.children})})}try{M.displayName="ToolTipTrigger",M.__docgenInfo={description:"Wraps a target element and a `ToolTip`, and shows the tooltip when the target is hovered or focused.",displayName:"ToolTipTrigger",filePath:"/home/runner/work/atomic-libs/atomic-libs/packages/atomic-elements/src/components/Overlays/ToolTip/ToolTipTrigger.component.tsx",methods:[],props:{className:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"HasClassName"}],description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"HasClassName"},required:!1,tags:{},type:{name:"Argument | Argument[]"}}},tags:{}}}catch{}function L(r){const{children:i}=r,s=x.Children.only(i),a=f.useRef(null),{focusableProps:o}=se({},a);return x.cloneElement(s,{...s.props,...o,ref:a})}try{L.displayName="ToolTipTarget",L.__docgenInfo={description:"Makes a custom element focusable so it can be the target of a `ToolTipTrigger`.",displayName:"ToolTipTarget",filePath:"/home/runner/work/atomic-libs/atomic-libs/packages/atomic-elements/src/components/Overlays/ToolTip/ToolTipTarget.component.tsx",methods:[],props:{},tags:{}}}catch{}const Ve={title:"Overlays/ToolTip",component:j,subcomponents:{ToolTipTrigger:M,ToolTipTarget:L},tags:["!autodocs"],parameters:{layout:"centered",cssprops:{tooltip:me}},argTypes:{target:{table:{disable:!0}},triggerRef:{table:{disable:!0}},trigger:{description:"By default, open for both focus and hover. Can be set to only open on focus. Set on `ToolTipTrigger`.",control:"select",options:["focus",null]},delay:{control:"number",description:"Delay in milliseconds before the tooltip appears. Set on `ToolTipTrigger`.",table:{defaultValue:{summary:"0"}}},closeDelay:{control:"number",description:"Delay in milliseconds before the tooltip disappears. Set on `ToolTipTrigger`.",table:{defaultValue:{summary:"0"}}},defaultOpen:{control:"boolean",description:"Whether the tooltip should be open by default. Set on `ToolTipTrigger`."},isDisabled:{control:"boolean",description:"Whether the tooltip should be disabled. Set on `ToolTipTrigger`."},isOpen:{control:"boolean",description:"Control the open state of the tooltip manually. Set on `ToolTipTrigger`."},onOpenChange:{action:"onOpenChange",description:"Callback for when the tooltip open state changes. Set on `ToolTipTrigger`.",table:{category:"Events"}},offset:{control:"number",description:"The offset of the tooltip from the trigger",table:{defaultValue:{summary:"2"}}}}},d={render:r=>{const{isOpen:i,defaultOpen:s,delay:a,closeDelay:o,onOpenChange:e,isDisabled:t,trigger:n,target:l,...p}=r;return u.jsxs(M,{isOpen:i,defaultOpen:s,delay:a,closeDelay:o,isDisabled:t,trigger:n,onOpenChange:e,children:[l,u.jsx(j,{...p})]})},args:{target:u.jsx(De,{children:"Hover Me"}),children:"This is the tooltip content"}},k={render:d.render,args:{...d.args,defaultOpen:!0}},_={...d,args:{...d.args,target:u.jsx(ke,{label:"Label"}),placement:"bottom"}},R={...d,args:{...d.args,target:u.jsx(L,{children:u.jsx("h1",{children:"Hover Me"})})}},w={...d,args:{...d.args,target:u.jsx(Ce,{icon:"info",size:"large",variant:"outlined",isFocusable:!0})}},Ue=["Primary","DefaultOpen","InputTarget","WithCustomTarget","IconWithTooltip"];var A,G,X;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => {
    const {
      isOpen,
      defaultOpen,
      delay,
      closeDelay,
      onOpenChange,
      isDisabled,
      trigger,
      target,
      ...rest
    } = args;
    return <ToolTipTrigger isOpen={isOpen} defaultOpen={defaultOpen} delay={delay} closeDelay={closeDelay} isDisabled={isDisabled} trigger={trigger} onOpenChange={onOpenChange}>
        {target}
        <ToolTip {...rest} />
      </ToolTipTrigger>;
  },
  args: {
    target: <Button>Hover Me</Button>,
    // @ts-ignore
    children: "This is the tooltip content"
  }
}`,...(X=(G=d.parameters)==null?void 0:G.docs)==null?void 0:X.source}}};var Y,K,J;k.parameters={...k.parameters,docs:{...(Y=k.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: Primary.render,
  args: {
    ...Primary.args,
    defaultOpen: true
  }
}`,...(J=(K=k.parameters)==null?void 0:K.docs)==null?void 0:J.source}}};var Q,Z,ee;_.parameters={..._.parameters,docs:{...(Q=_.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  ...Primary,
  args: {
    ...Primary.args,
    target: <TextInput label="Label" />,
    placement: "bottom"
  }
}`,...(ee=(Z=_.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,oe,re;R.parameters={...R.parameters,docs:{...(te=R.parameters)==null?void 0:te.docs,source:{originalSource:`{
  ...Primary,
  args: {
    ...Primary.args,
    target: <ToolTipTarget>
        <h1>Hover Me</h1>
      </ToolTipTarget>
  }
}`,...(re=(oe=R.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var ne,ae,ie;w.parameters={...w.parameters,docs:{...(ne=w.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  ...Primary,
  args: {
    ...Primary.args,
    target: <MaterialIcon icon="info" size="large" variant="outlined" isFocusable />
  }
}`,...(ie=(ae=w.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};const ot=Object.freeze(Object.defineProperty({__proto__:null,DefaultOpen:k,IconWithTooltip:w,InputTarget:_,Primary:d,WithCustomTarget:R,__namedExportsOrder:Ue,default:Ve},Symbol.toStringTag,{value:"Module"}));export{_ as I,ot as T,R as W,M as a,j as b};
