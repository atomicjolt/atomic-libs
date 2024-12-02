import{j as u}from"./jsx-runtime-CkxqCPlQ.js";import{M as me}from"./index-C_RUmn9I.js";import{g as he}from"./cssprops-BGfeK0jo.js";import{r as f,R as T}from"./index-DJO9vBfz.js";import{$ as ge}from"./useOverlayPosition-DNw_PjS2.js";import{$ as be,b as Te}from"./useOverlayTriggerState-DMR8aBHV.js";import{$ as U,c as xe}from"./useObjectRef-C4RVQRRU.js";import{$ as ve}from"./filterDOMProps-CeZl_uWj.js";import{$ as se}from"./useHover-D34ofACQ.js";import{m as ye}from"./mixins-TlkgTuSN.js";import{d as B}from"./styled-components.browser.esm-WCay-hu9.js";import{a as Ee}from"./index-CXdyvu6V.js";import{u as $e}from"./useRenderProps-BqJZ5b79.js";import{F as k}from"./index-DJdX7xnk.js";import{l as Oe,e as Pe}from"./focusSafely-GXGk_mpd.js";import{$ as le,a as De}from"./useFocusable-DyKXFx56.js";import{P as Ce}from"./Provider-B9Eqn13H.js";import{B as _e}from"./Button.component-Bg3ttyxF.js";import{T as Se}from"./TextInput.component-4VwGPs30.js";const Ne=1500,V=500;let v={},Re=0,C=!1,b=null,y=null;function we(o={}){let{delay:s=Ne,closeDelay:i=V}=o,{isOpen:a,open:t,close:e}=be(o),r=f.useMemo(()=>`${++Re}`,[]),n=f.useRef(void 0),l=f.useRef(e),p=()=>{v[r]=g},c=()=>{for(let h in v)h!==r&&(v[h](!0),delete v[h])},m=()=>{clearTimeout(n.current),n.current=null,c(),p(),C=!0,t(),b&&(clearTimeout(b),b=null),y&&(clearTimeout(y),y=null)},g=h=>{h||i<=0?(clearTimeout(n.current),n.current=null,l.current()):n.current||(n.current=setTimeout(()=>{n.current=null,l.current()},i)),b&&(clearTimeout(b),b=null),C&&(y&&clearTimeout(y),y=setTimeout(()=>{delete v[r],y=null,C=!1},Math.max(V,i)))},M=()=>{c(),p(),!a&&!b&&!C?b=setTimeout(()=>{b=null,C=!0,m()},s):a||m()};return f.useEffect(()=>{l.current=e},[e]),f.useEffect(()=>()=>{clearTimeout(n.current),v[r]&&delete v[r]},[r]),{isOpen:a,open:h=>{!h&&s>0&&!n.current?M():m()},close:g}}function Ie(o,s){let i=ve(o,{labelable:!0}),{hoverProps:a}=se({onHoverStart:()=>s==null?void 0:s.open(!0),onHoverEnd:()=>s==null?void 0:s.close()});return{tooltipProps:U(i,a,{role:"tooltip"})}}function ke(o,s,i){let{isDisabled:a,trigger:t}=o,e=xe(),r=f.useRef(!1),n=f.useRef(!1),l=()=>{(r.current||n.current)&&s.open(n.current)},p=D=>{!r.current&&!n.current&&s.close(D)};f.useEffect(()=>{let D=F=>{i&&i.current&&F.key==="Escape"&&(F.stopPropagation(),s.close(!0))};if(s.isOpen)return document.addEventListener("keydown",D,!0),()=>{document.removeEventListener("keydown",D,!0)}},[i,s]);let c=()=>{t!=="focus"&&(Oe()==="pointer"?r.current=!0:r.current=!1,l())},m=()=>{t!=="focus"&&(n.current=!1,r.current=!1,p())},g=()=>{n.current=!1,r.current=!1,p(!0)},M=()=>{Pe()&&(n.current=!0,l())},h=()=>{n.current=!1,r.current=!1,p(!0)},{hoverProps:de}=se({isDisabled:a,onHoverStart:c,onHoverEnd:m}),{focusableProps:fe}=le({isDisabled:a,onFocus:M,onBlur:h},i);return{triggerProps:{"aria-describedby":s.isOpen?e:void 0,...U(fe,de,{onPointerDown:g,onKeyDown:g})},tooltipProps:{id:e}}}function je(o,s){if(o==null)return{};var i={};for(var a in o)if({}.hasOwnProperty.call(o,a)){if(s.includes(a))continue;i[a]=o[a]}return i}function L(o,s){return L=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,a){return i.__proto__=a,i},L(o,s)}function Me(o,s){o.prototype=Object.create(s.prototype),o.prototype.constructor=o,L(o,s)}const q={disabled:!1},pe=T.createContext(null);var Le=function(s){return s.scrollTop},_="unmounted",E="exited",$="entering",P="entered",W="exiting",x=function(o){Me(s,o);function s(a,t){var e;e=o.call(this,a,t)||this;var r=t,n=r&&!r.isMounting?a.enter:a.appear,l;return e.appearStatus=null,a.in?n?(l=E,e.appearStatus=$):l=P:a.unmountOnExit||a.mountOnEnter?l=_:l=E,e.state={status:l},e.nextCallback=null,e}s.getDerivedStateFromProps=function(t,e){var r=t.in;return r&&e.status===_?{status:E}:null};var i=s.prototype;return i.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},i.componentDidUpdate=function(t){var e=null;if(t!==this.props){var r=this.state.status;this.props.in?r!==$&&r!==P&&(e=$):(r===$||r===P)&&(e=W)}this.updateStatus(!1,e)},i.componentWillUnmount=function(){this.cancelNextCallback()},i.getTimeouts=function(){var t=this.props.timeout,e,r,n;return e=r=n=t,t!=null&&typeof t!="number"&&(e=t.exit,r=t.enter,n=t.appear!==void 0?t.appear:r),{exit:e,enter:r,appear:n}},i.updateStatus=function(t,e){if(t===void 0&&(t=!1),e!==null)if(this.cancelNextCallback(),e===$){if(this.props.unmountOnExit||this.props.mountOnEnter){var r=this.props.nodeRef?this.props.nodeRef.current:k.findDOMNode(this);r&&Le(r)}this.performEnter(t)}else this.performExit();else this.props.unmountOnExit&&this.state.status===E&&this.setState({status:_})},i.performEnter=function(t){var e=this,r=this.props.enter,n=this.context?this.context.isMounting:t,l=this.props.nodeRef?[n]:[k.findDOMNode(this),n],p=l[0],c=l[1],m=this.getTimeouts(),g=n?m.appear:m.enter;if(!t&&!r||q.disabled){this.safeSetState({status:P},function(){e.props.onEntered(p)});return}this.props.onEnter(p,c),this.safeSetState({status:$},function(){e.props.onEntering(p,c),e.onTransitionEnd(g,function(){e.safeSetState({status:P},function(){e.props.onEntered(p,c)})})})},i.performExit=function(){var t=this,e=this.props.exit,r=this.getTimeouts(),n=this.props.nodeRef?void 0:k.findDOMNode(this);if(!e||q.disabled){this.safeSetState({status:E},function(){t.props.onExited(n)});return}this.props.onExit(n),this.safeSetState({status:W},function(){t.props.onExiting(n),t.onTransitionEnd(r.exit,function(){t.safeSetState({status:E},function(){t.props.onExited(n)})})})},i.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},i.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},i.setNextCallback=function(t){var e=this,r=!0;return this.nextCallback=function(n){r&&(r=!1,e.nextCallback=null,t(n))},this.nextCallback.cancel=function(){r=!1},this.nextCallback},i.onTransitionEnd=function(t,e){this.setNextCallback(e);var r=this.props.nodeRef?this.props.nodeRef.current:k.findDOMNode(this),n=t==null&&!this.props.addEndListener;if(!r||n){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[r,this.nextCallback],p=l[0],c=l[1];this.props.addEndListener(p,c)}t!=null&&setTimeout(this.nextCallback,t)},i.render=function(){var t=this.state.status;if(t===_)return null;var e=this.props,r=e.children;e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef;var n=je(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return T.createElement(pe.Provider,{value:null},typeof r=="function"?r(t,n):T.cloneElement(T.Children.only(r),n))},s}(T.Component);x.contextType=pe;x.propTypes={};function O(){}x.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:O,onEntering:O,onEntered:O,onExit:O,onExiting:O,onExited:O};x.UNMOUNTED=_;x.EXITED=E;x.ENTERING=$;x.ENTERED=P;x.EXITING=W;const S=B.div`
  position: absolute;
  background-color: var(--tooltip-bg-clr);
  border-radius: var(--tooltip-arrow-radius, 2px);
  width: 12px;
  height: 12px;
  rotate: 45deg;
  z-index: 999;
`,We=B.div`
  ${ye.Regular}
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

    ${S} {
      translate: -50% 0;
      bottom: -4px;
    }
  }

  &[data-placement="bottom"] {
    --translateY: 4px;

    ${S} {
      translate: -50% 0;
      top: -4px;
    }
  }

  &[data-placement="left"] {
    --translateX: -4px;

    ${S} {
      translate: 0 -50%;
      right: -4px;
    }
  }

  &[data-placement="right"] {
    --translateX: 4px;

    ${S} {
      translate: 0 -50%;
      left: -4px;
    }
  }

  &[data-entering],
  &[data-entered] {
    opacity: 1;
    translate: var(--translateX, 0) var(--translateY, 0);
    transition:
      translate ${o=>o.$transitionDuration}ms,
      opacity ${o=>o.$transitionDuration}ms;
  }

  &[data-exiting],
  &[data-exited] {
    opacity: 0;
    translate: 0 0;
    pointer-events: none;
    transition:
      translate ${o=>o.$transitionDuration}ms,
      opacity ${o=>o.$transitionDuration}ms;
  }
`;B.span``;const ce=T.createContext(null),ue=T.createContext(null);function j(o){const{triggerRef:s,transitionDuration:i=300,...a}=Ee(ce,o),t=f.useContext(ue),e=f.useRef(null),{tooltipProps:r}=Ie({...a},t),{overlayProps:n,arrowProps:l,placement:p}=ge({targetRef:s,overlayRef:e,isOpen:t.isOpen,placement:o.placement||"top",offset:o.offset??2,crossOffset:o.crossOffset,arrowBoundaryOffset:o.arrowBoundaryOffset,shouldFlip:o.shouldFlip}),c=$e({componentClassName:"aje-tooltip",...o}),m=U(n,r,c);return u.jsx(Te,{children:u.jsx(x,{nodeRef:e,in:t.isOpen,timeout:i,unmountOnExit:!0,children:g=>u.jsxs(We,{$transitionDuration:i,ref:e,"data-placement":p,...m,[`data-${g}`]:!0,style:{...m.style,zIndex:100001},children:[c.children,u.jsx(S,{...l})]})})})}try{j.displayName="ToolTip",j.__docgenInfo={description:"A ToolTip component displays a popup with additional information when a user hovers over or focuses on an element.",displayName:"ToolTip",props:{triggerRef:{defaultValue:null,description:`The ref for the element which the tooltip positions itself with respect to.

When used within a TooltipTrigger this is set automatically. It is only required when used standalone.`,name:"triggerRef",required:!1,type:{name:"RefObject<Element>"}},placement:{defaultValue:null,description:"The placement of the element with respect to its anchor element.",name:"placement",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'},{value:'"top"'},{value:'"bottom"'}]}},transitionDuration:{defaultValue:null,description:"",name:"transitionDuration",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<never>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<never>"}}}}}catch{}function H(o){const{delay:s=0,closeDelay:i=0,...a}=o,t=we({delay:s,closeDelay:i,...a}),e=f.useRef(null),{triggerProps:r,tooltipProps:n}=ke(o,t,e);return u.jsx(Ce,{values:[[ue.Provider,t],[ce.Provider,{...n,triggerRef:e}]],children:u.jsx(De,{...r,ref:e,children:o.children})})}try{H.displayName="ToolTipTrigger",H.__docgenInfo={description:"",displayName:"ToolTipTrigger",props:{className:{defaultValue:null,description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",required:!1,type:{name:"Argument | Argument[]"}}}}}catch{}function z(o){const{children:s}=o,i=T.Children.only(s),a=f.useRef(null),{focusableProps:t}=le({},a);return T.cloneElement(i,{...i.props,...t,ref:a})}try{z.displayName="ToolTipTarget",z.__docgenInfo={description:"",displayName:"ToolTipTarget",props:{}}}catch{}const He={title:"Overlays/ToolTip",component:j,tags:["!autodocs"],parameters:{layout:"centered",cssprops:he("ToolTip")},argTypes:{size:{table:{disable:!0}},target:{table:{disable:!0}},triggerRef:{table:{disable:!0}},trigger:{description:"By default, open for both focus and hover. Can be set to only open on focus",control:"select",options:["focus",null]},delay:{control:"number",description:"Delay in milliseconds before the tooltip appears"},closeDelay:{control:"number",description:"Delay in milliseconds before the tooltip disappears"},defaultOpen:{control:"boolean",description:"Whether the tooltip should be open by default"},isDisabled:{control:"boolean",description:"Whether the tooltip should be disabled"},isOpen:{control:"boolean",description:"Control the open state of the tooltip manually"},onOpenChange:{action:"onOpenChange",description:"Callback for when the tooltip open state changes",table:{category:"Events"}},offset:{control:"number",description:"The offset of the tooltip from the trigger"}}},d={render:o=>{const{isOpen:s,defaultOpen:i,delay:a,closeDelay:t,onOpenChange:e,isDisabled:r,trigger:n,target:l,...p}=o;return u.jsxs(H,{isOpen:s,defaultOpen:i,delay:a,closeDelay:t,isDisabled:r,trigger:n,onOpenChange:e,children:[l,u.jsx(j,{...p})]})},args:{target:u.jsx(_e,{children:"Hover Me"}),children:"This is the tooltip content",delay:0}},N={render:d.render,args:{...d.args,defaultOpen:!0}},R={...d,args:{...d.args,target:u.jsx(Se,{label:"Label"}),placement:"bottom"}},w={...d,args:{...d.args,target:u.jsx(z,{children:u.jsx("h1",{children:"Hover Me"})})}},I={...d,args:{...d.args,target:u.jsx(me,{icon:"info",size:"large",variant:"outlined"})}};var A,X,G;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
    children: "This is the tooltip content",
    delay: 0
  }
}`,...(G=(X=d.parameters)==null?void 0:X.docs)==null?void 0:G.source}}};var Y,K,J;N.parameters={...N.parameters,docs:{...(Y=N.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: Primary.render,
  args: {
    ...Primary.args,
    defaultOpen: true
  }
}`,...(J=(K=N.parameters)==null?void 0:K.docs)==null?void 0:J.source}}};var Q,Z,ee;R.parameters={...R.parameters,docs:{...(Q=R.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  ...Primary,
  args: {
    ...Primary.args,
    target: <TextInput label="Label" />,
    placement: "bottom"
  }
}`,...(ee=(Z=R.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,re,oe;w.parameters={...w.parameters,docs:{...(te=w.parameters)==null?void 0:te.docs,source:{originalSource:`{
  ...Primary,
  args: {
    ...Primary.args,
    target: <ToolTipTarget>
        <h1>Hover Me</h1>
      </ToolTipTarget>
  }
}`,...(oe=(re=w.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var ne,ae,ie;I.parameters={...I.parameters,docs:{...(ne=I.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  ...Primary,
  args: {
    ...Primary.args,
    target: <MaterialIcon icon="info" size="large" variant="outlined" />
  }
}`,...(ie=(ae=I.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};const ze=["Primary","DefaultOpen","InputTarget","WithCustomTarget","IconWithTooltip"],it=Object.freeze(Object.defineProperty({__proto__:null,DefaultOpen:N,IconWithTooltip:I,InputTarget:R,Primary:d,WithCustomTarget:w,__namedExportsOrder:ze,default:He},Symbol.toStringTag,{value:"Module"}));export{R as I,d as P,it as T,w as W,H as a,j as b};
