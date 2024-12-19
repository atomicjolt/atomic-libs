import{j as u}from"./jsx-runtime-CkxqCPlQ.js";import{g as me}from"./cssprops-CrN9keDZ.js";import{r as f,R as x}from"./index-DJO9vBfz.js";import{$ as he}from"./useOverlayPosition-C9xJM2-X.js";import{$ as ge,b as be}from"./useOverlayTriggerState-CQYPpINQ.js";import{a as U,c as Te}from"./useObjectRef-B0fXxeND.js";import{$ as xe}from"./filterDOMProps-CeZl_uWj.js";import{$ as se}from"./useHover-D34ofACQ.js";import{m as ve}from"./mixins-TlkgTuSN.js";import{d as B}from"./styled-components.browser.esm-WCay-hu9.js";import{c as ye,u as Ee}from"./index-B_KxbAnX.js";import{u as $e}from"./useRenderProps-BqJZ5b79.js";import{F as k}from"./index-DJdX7xnk.js";import{k as Oe,e as Pe}from"./focusSafely-DAnwb70X.js";import{$ as le,a as De}from"./useFocusable-CsZREXhx.js";import{P as Ce}from"./Provider-B9Eqn13H.js";import{B as _e}from"./Button.component-CvwjrRb6.js";import{T as Se}from"./TextInput.component-CH1Jg1aN.js";import{M as Ne}from"./MaterialIcon.component-DppQdNZ1.js";const Re=1500,V=500;let v={},we=0,C=!1,b=null,y=null;function Ie(o={}){let{delay:i=Re,closeDelay:s=V}=o,{isOpen:n,open:r,close:e}=ge(o),t=f.useMemo(()=>`${++we}`,[]),a=f.useRef(void 0),l=f.useRef(e),p=()=>{v[t]=g},c=()=>{for(let h in v)h!==t&&(v[h](!0),delete v[h])},m=()=>{clearTimeout(a.current),a.current=null,c(),p(),C=!0,r(),b&&(clearTimeout(b),b=null),y&&(clearTimeout(y),y=null)},g=h=>{h||s<=0?(clearTimeout(a.current),a.current=null,l.current()):a.current||(a.current=setTimeout(()=>{a.current=null,l.current()},s)),b&&(clearTimeout(b),b=null),C&&(y&&clearTimeout(y),y=setTimeout(()=>{delete v[t],y=null,C=!1},Math.max(V,s)))},M=()=>{c(),p(),!n&&!b&&!C?b=setTimeout(()=>{b=null,C=!0,m()},i):n||m()};return f.useEffect(()=>{l.current=e},[e]),f.useEffect(()=>()=>{clearTimeout(a.current),v[t]&&delete v[t]},[t]),{isOpen:n,open:h=>{!h&&i>0&&!a.current?M():m()},close:g}}function ke(o,i){let s=xe(o,{labelable:!0}),{hoverProps:n}=se({onHoverStart:()=>i==null?void 0:i.open(!0),onHoverEnd:()=>i==null?void 0:i.close()});return{tooltipProps:U(s,n,{role:"tooltip"})}}function je(o,i,s){let{isDisabled:n,trigger:r}=o,e=Te(),t=f.useRef(!1),a=f.useRef(!1),l=()=>{(t.current||a.current)&&i.open(a.current)},p=D=>{!t.current&&!a.current&&i.close(D)};f.useEffect(()=>{let D=F=>{s&&s.current&&F.key==="Escape"&&(F.stopPropagation(),i.close(!0))};if(i.isOpen)return document.addEventListener("keydown",D,!0),()=>{document.removeEventListener("keydown",D,!0)}},[s,i]);let c=()=>{r!=="focus"&&(Oe()==="pointer"?t.current=!0:t.current=!1,l())},m=()=>{r!=="focus"&&(a.current=!1,t.current=!1,p())},g=()=>{a.current=!1,t.current=!1,p(!0)},M=()=>{Pe()&&(a.current=!0,l())},h=()=>{a.current=!1,t.current=!1,p(!0)},{hoverProps:de}=se({isDisabled:n,onHoverStart:c,onHoverEnd:m}),{focusableProps:fe}=le({isDisabled:n,onFocus:M,onBlur:h},s);return{triggerProps:{"aria-describedby":i.isOpen?e:void 0,...U(fe,de,{onPointerDown:g,onKeyDown:g})},tooltipProps:{id:e}}}function Me(o,i){if(o==null)return{};var s={};for(var n in o)if({}.hasOwnProperty.call(o,n)){if(i.includes(n))continue;s[n]=o[n]}return s}function L(o,i){return L=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(s,n){return s.__proto__=n,s},L(o,i)}function Le(o,i){o.prototype=Object.create(i.prototype),o.prototype.constructor=o,L(o,i)}const q={disabled:!1},pe=x.createContext(null);var We=function(i){return i.scrollTop},_="unmounted",E="exited",$="entering",P="entered",W="exiting",T=function(o){Le(i,o);function i(n,r){var e;e=o.call(this,n,r)||this;var t=r,a=t&&!t.isMounting?n.enter:n.appear,l;return e.appearStatus=null,n.in?a?(l=E,e.appearStatus=$):l=P:n.unmountOnExit||n.mountOnEnter?l=_:l=E,e.state={status:l},e.nextCallback=null,e}i.getDerivedStateFromProps=function(r,e){var t=r.in;return t&&e.status===_?{status:E}:null};var s=i.prototype;return s.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},s.componentDidUpdate=function(r){var e=null;if(r!==this.props){var t=this.state.status;this.props.in?t!==$&&t!==P&&(e=$):(t===$||t===P)&&(e=W)}this.updateStatus(!1,e)},s.componentWillUnmount=function(){this.cancelNextCallback()},s.getTimeouts=function(){var r=this.props.timeout,e,t,a;return e=t=a=r,r!=null&&typeof r!="number"&&(e=r.exit,t=r.enter,a=r.appear!==void 0?r.appear:t),{exit:e,enter:t,appear:a}},s.updateStatus=function(r,e){if(r===void 0&&(r=!1),e!==null)if(this.cancelNextCallback(),e===$){if(this.props.unmountOnExit||this.props.mountOnEnter){var t=this.props.nodeRef?this.props.nodeRef.current:k.findDOMNode(this);t&&We(t)}this.performEnter(r)}else this.performExit();else this.props.unmountOnExit&&this.state.status===E&&this.setState({status:_})},s.performEnter=function(r){var e=this,t=this.props.enter,a=this.context?this.context.isMounting:r,l=this.props.nodeRef?[a]:[k.findDOMNode(this),a],p=l[0],c=l[1],m=this.getTimeouts(),g=a?m.appear:m.enter;if(!r&&!t||q.disabled){this.safeSetState({status:P},function(){e.props.onEntered(p)});return}this.props.onEnter(p,c),this.safeSetState({status:$},function(){e.props.onEntering(p,c),e.onTransitionEnd(g,function(){e.safeSetState({status:P},function(){e.props.onEntered(p,c)})})})},s.performExit=function(){var r=this,e=this.props.exit,t=this.getTimeouts(),a=this.props.nodeRef?void 0:k.findDOMNode(this);if(!e||q.disabled){this.safeSetState({status:E},function(){r.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:W},function(){r.props.onExiting(a),r.onTransitionEnd(t.exit,function(){r.safeSetState({status:E},function(){r.props.onExited(a)})})})},s.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},s.safeSetState=function(r,e){e=this.setNextCallback(e),this.setState(r,e)},s.setNextCallback=function(r){var e=this,t=!0;return this.nextCallback=function(a){t&&(t=!1,e.nextCallback=null,r(a))},this.nextCallback.cancel=function(){t=!1},this.nextCallback},s.onTransitionEnd=function(r,e){this.setNextCallback(e);var t=this.props.nodeRef?this.props.nodeRef.current:k.findDOMNode(this),a=r==null&&!this.props.addEndListener;if(!t||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[t,this.nextCallback],p=l[0],c=l[1];this.props.addEndListener(p,c)}r!=null&&setTimeout(this.nextCallback,r)},s.render=function(){var r=this.state.status;if(r===_)return null;var e=this.props,t=e.children;e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef;var a=Me(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return x.createElement(pe.Provider,{value:null},typeof t=="function"?t(r,a):x.cloneElement(x.Children.only(t),a))},i}(x.Component);T.contextType=pe;T.propTypes={};function O(){}T.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:O,onEntering:O,onEntered:O,onExit:O,onExiting:O,onExited:O};T.UNMOUNTED=_;T.EXITED=E;T.ENTERING=$;T.ENTERED=P;T.EXITING=W;const S=B.div`
  position: absolute;
  background-color: var(--tooltip-bg-clr);
  border-radius: var(--tooltip-arrow-radius, 2px);
  width: 12px;
  height: 12px;
  rotate: 45deg;
  z-index: 999;
`,He=B.div`
  ${ve.Regular}
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
`;B.span``;const ce=ye(),ue=x.createContext(null);function j(o){let i=f.useRef(null);[o,i]=Ee(ce,o,i);const{triggerRef:s,transitionDuration:n=300,...r}=o,e=f.useContext(ue),{tooltipProps:t}=ke({...r},e),{overlayProps:a,arrowProps:l,placement:p}=he({targetRef:s,overlayRef:i,isOpen:e.isOpen,placement:o.placement||"top",offset:o.offset??2,crossOffset:o.crossOffset,arrowBoundaryOffset:o.arrowBoundaryOffset,shouldFlip:o.shouldFlip}),c=$e({componentClassName:"aje-tooltip",...o}),m=U(a,t,c);return u.jsx(be,{children:u.jsx(T,{nodeRef:i,in:e.isOpen,timeout:n,unmountOnExit:!0,children:g=>u.jsxs(He,{$transitionDuration:n,ref:i,"data-placement":p,...m,[`data-${g}`]:!0,style:{...m.style,zIndex:100001},children:[c.children,u.jsx(S,{...l})]})})})}try{j.displayName="ToolTip",j.__docgenInfo={description:"A ToolTip component displays a popup with additional information when a user hovers over or focuses on an element.",displayName:"ToolTip",props:{triggerRef:{defaultValue:null,description:`The ref for the element which the tooltip positions itself with respect to.

When used within a TooltipTrigger this is set automatically. It is only required when used standalone.`,name:"triggerRef",required:!1,type:{name:"RefObject<Element>"}},placement:{defaultValue:null,description:"The placement of the element with respect to its anchor element.",name:"placement",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'},{value:'"top"'},{value:'"bottom"'}]}},transitionDuration:{defaultValue:null,description:"",name:"transitionDuration",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<never>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<never>"}}}}}catch{}function H(o){const{delay:i=0,closeDelay:s=0,...n}=o,r=Ie({delay:i,closeDelay:s,...n}),e=f.useRef(null),{triggerProps:t,tooltipProps:a}=je(o,r,e);return u.jsx(Ce,{values:[[ue.Provider,r],[ce.Provider,{...a,triggerRef:e}]],children:u.jsx(De,{...t,ref:e,children:o.children})})}try{H.displayName="ToolTipTrigger",H.__docgenInfo={description:"",displayName:"ToolTipTrigger",props:{className:{defaultValue:null,description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",required:!1,type:{name:"Argument | Argument[]"}}}}}catch{}function z(o){const{children:i}=o,s=x.Children.only(i),n=f.useRef(null),{focusableProps:r}=le({},n);return x.cloneElement(s,{...s.props,...r,ref:n})}try{z.displayName="ToolTipTarget",z.__docgenInfo={description:"",displayName:"ToolTipTarget",props:{}}}catch{}const ze={title:"Overlays/ToolTip",component:j,tags:["!autodocs"],parameters:{layout:"centered",cssprops:me("ToolTip")},argTypes:{size:{table:{disable:!0}},target:{table:{disable:!0}},triggerRef:{table:{disable:!0}},trigger:{description:"By default, open for both focus and hover. Can be set to only open on focus",control:"select",options:["focus",null]},delay:{control:"number",description:"Delay in milliseconds before the tooltip appears"},closeDelay:{control:"number",description:"Delay in milliseconds before the tooltip disappears"},defaultOpen:{control:"boolean",description:"Whether the tooltip should be open by default"},isDisabled:{control:"boolean",description:"Whether the tooltip should be disabled"},isOpen:{control:"boolean",description:"Control the open state of the tooltip manually"},onOpenChange:{action:"onOpenChange",description:"Callback for when the tooltip open state changes",table:{category:"Events"}},offset:{control:"number",description:"The offset of the tooltip from the trigger"}}},d={render:o=>{const{isOpen:i,defaultOpen:s,delay:n,closeDelay:r,onOpenChange:e,isDisabled:t,trigger:a,target:l,...p}=o;return u.jsxs(H,{isOpen:i,defaultOpen:s,delay:n,closeDelay:r,isDisabled:t,trigger:a,onOpenChange:e,children:[l,u.jsx(j,{...p})]})},args:{target:u.jsx(_e,{children:"Hover Me"}),children:"This is the tooltip content",delay:0}},N={render:d.render,args:{...d.args,defaultOpen:!0}},R={...d,args:{...d.args,target:u.jsx(Se,{label:"Label"}),placement:"bottom"}},w={...d,args:{...d.args,target:u.jsx(z,{children:u.jsx("h1",{children:"Hover Me"})})}},I={...d,args:{...d.args,target:u.jsx(Ne,{icon:"info",size:"large",variant:"outlined"})}};var A,X,G;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(ie=(ae=I.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};const Ue=["Primary","DefaultOpen","InputTarget","WithCustomTarget","IconWithTooltip"],st=Object.freeze(Object.defineProperty({__proto__:null,DefaultOpen:N,IconWithTooltip:I,InputTarget:R,Primary:d,WithCustomTarget:w,__namedExportsOrder:Ue,default:ze},Symbol.toStringTag,{value:"Module"}));export{R as I,d as P,st as T,w as W,H as a,j as b};
