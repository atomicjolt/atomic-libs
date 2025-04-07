import{j as u}from"./jsx-runtime-D_zvdyIk.js";import{g as me}from"./cssprops-BO85xpNm.js";import{r as f,R as T}from"./index-DmM0KDA7.js";import{$ as he}from"./useOverlayPosition-BbD5l9N4.js";import{$ as ge,b as be}from"./useOverlayTriggerState-3VWy5d8s.js";import{b as U,$ as xe}from"./useObjectRef-BO7mrmvR.js";import{$ as Te}from"./filterDOMProps-CeZl_uWj.js";import{$ as se}from"./useHover-BMz_rS5A.js";import{m as ve}from"./mixins-CgZ-Dp8B.js";import{d as B}from"./styled-components.browser.esm-B0S50oBn.js";import{c as ye,u as Ee}from"./index-CqJC2f1M.js";import{u as $e}from"./useRenderProps-BzxgHqRb.js";import{G as k}from"./index-CnHy7ftH.js";import{B as Oe}from"./Button.component-B61Bok0W.js";import{$ as le,t as Pe,j as De,G as Ce}from"./useFocusable-B7cTVP20.js";import{P as _e}from"./Provider-op_UCnZE.js";import{T as Se}from"./TextInput.component-D5WyJYPn.js";import{M as Ne}from"./MaterialIcon.component-ue1xslV6.js";const Re=1500,V=500;let v={},we=0,C=!1,b=null,y=null;function Ie(n={}){let{delay:i=Re,closeDelay:s=V}=n,{isOpen:a,open:r,close:e}=ge(n),t=f.useMemo(()=>`${++we}`,[]),o=f.useRef(null),l=f.useRef(e),p=()=>{v[t]=g},c=()=>{for(let h in v)h!==t&&(v[h](!0),delete v[h])},m=()=>{o.current&&clearTimeout(o.current),o.current=null,c(),p(),C=!0,r(),b&&(clearTimeout(b),b=null),y&&(clearTimeout(y),y=null)},g=h=>{h||s<=0?(o.current&&clearTimeout(o.current),o.current=null,l.current()):o.current||(o.current=setTimeout(()=>{o.current=null,l.current()},s)),b&&(clearTimeout(b),b=null),C&&(y&&clearTimeout(y),y=setTimeout(()=>{delete v[t],y=null,C=!1},Math.max(V,s)))},M=()=>{c(),p(),!a&&!b&&!C?b=setTimeout(()=>{b=null,C=!0,m()},i):a||m()};return f.useEffect(()=>{l.current=e},[e]),f.useEffect(()=>()=>{o.current&&clearTimeout(o.current),v[t]&&delete v[t]},[t]),{isOpen:a,open:h=>{!h&&i>0&&!o.current?M():m()},close:g}}function ke(n,i){let s=Te(n,{labelable:!0}),{hoverProps:a}=se({onHoverStart:()=>i==null?void 0:i.open(!0),onHoverEnd:()=>i==null?void 0:i.close()});return{tooltipProps:U(s,a,{role:"tooltip"})}}function je(n,i,s){let{isDisabled:a,trigger:r}=n,e=xe(),t=f.useRef(!1),o=f.useRef(!1),l=()=>{(t.current||o.current)&&i.open(o.current)},p=D=>{!t.current&&!o.current&&i.close(D)};f.useEffect(()=>{let D=G=>{s&&s.current&&G.key==="Escape"&&(G.stopPropagation(),i.close(!0))};if(i.isOpen)return document.addEventListener("keydown",D,!0),()=>{document.removeEventListener("keydown",D,!0)}},[s,i]);let c=()=>{r!=="focus"&&(Pe()==="pointer"?t.current=!0:t.current=!1,l())},m=()=>{r!=="focus"&&(o.current=!1,t.current=!1,p())},g=()=>{o.current=!1,t.current=!1,p(!0)},M=()=>{De()&&(o.current=!0,l())},h=()=>{o.current=!1,t.current=!1,p(!0)},{hoverProps:de}=se({isDisabled:a,onHoverStart:c,onHoverEnd:m}),{focusableProps:fe}=le({isDisabled:a,onFocus:M,onBlur:h},s);return{triggerProps:{"aria-describedby":i.isOpen?e:void 0,...U(fe,de,{onPointerDown:g,onKeyDown:g,tabIndex:void 0})},tooltipProps:{id:e}}}function Me(n,i){if(n==null)return{};var s={};for(var a in n)if({}.hasOwnProperty.call(n,a)){if(i.indexOf(a)!==-1)continue;s[a]=n[a]}return s}function L(n,i){return L=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(s,a){return s.__proto__=a,s},L(n,i)}function Le(n,i){n.prototype=Object.create(i.prototype),n.prototype.constructor=n,L(n,i)}const q={disabled:!1},pe=T.createContext(null);var We=function(i){return i.scrollTop},_="unmounted",E="exited",$="entering",P="entered",W="exiting",x=function(n){Le(i,n);function i(a,r){var e;e=n.call(this,a,r)||this;var t=r,o=t&&!t.isMounting?a.enter:a.appear,l;return e.appearStatus=null,a.in?o?(l=E,e.appearStatus=$):l=P:a.unmountOnExit||a.mountOnEnter?l=_:l=E,e.state={status:l},e.nextCallback=null,e}i.getDerivedStateFromProps=function(r,e){var t=r.in;return t&&e.status===_?{status:E}:null};var s=i.prototype;return s.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},s.componentDidUpdate=function(r){var e=null;if(r!==this.props){var t=this.state.status;this.props.in?t!==$&&t!==P&&(e=$):(t===$||t===P)&&(e=W)}this.updateStatus(!1,e)},s.componentWillUnmount=function(){this.cancelNextCallback()},s.getTimeouts=function(){var r=this.props.timeout,e,t,o;return e=t=o=r,r!=null&&typeof r!="number"&&(e=r.exit,t=r.enter,o=r.appear!==void 0?r.appear:t),{exit:e,enter:t,appear:o}},s.updateStatus=function(r,e){if(r===void 0&&(r=!1),e!==null)if(this.cancelNextCallback(),e===$){if(this.props.unmountOnExit||this.props.mountOnEnter){var t=this.props.nodeRef?this.props.nodeRef.current:k.findDOMNode(this);t&&We(t)}this.performEnter(r)}else this.performExit();else this.props.unmountOnExit&&this.state.status===E&&this.setState({status:_})},s.performEnter=function(r){var e=this,t=this.props.enter,o=this.context?this.context.isMounting:r,l=this.props.nodeRef?[o]:[k.findDOMNode(this),o],p=l[0],c=l[1],m=this.getTimeouts(),g=o?m.appear:m.enter;if(!r&&!t||q.disabled){this.safeSetState({status:P},function(){e.props.onEntered(p)});return}this.props.onEnter(p,c),this.safeSetState({status:$},function(){e.props.onEntering(p,c),e.onTransitionEnd(g,function(){e.safeSetState({status:P},function(){e.props.onEntered(p,c)})})})},s.performExit=function(){var r=this,e=this.props.exit,t=this.getTimeouts(),o=this.props.nodeRef?void 0:k.findDOMNode(this);if(!e||q.disabled){this.safeSetState({status:E},function(){r.props.onExited(o)});return}this.props.onExit(o),this.safeSetState({status:W},function(){r.props.onExiting(o),r.onTransitionEnd(t.exit,function(){r.safeSetState({status:E},function(){r.props.onExited(o)})})})},s.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},s.safeSetState=function(r,e){e=this.setNextCallback(e),this.setState(r,e)},s.setNextCallback=function(r){var e=this,t=!0;return this.nextCallback=function(o){t&&(t=!1,e.nextCallback=null,r(o))},this.nextCallback.cancel=function(){t=!1},this.nextCallback},s.onTransitionEnd=function(r,e){this.setNextCallback(e);var t=this.props.nodeRef?this.props.nodeRef.current:k.findDOMNode(this),o=r==null&&!this.props.addEndListener;if(!t||o){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[t,this.nextCallback],p=l[0],c=l[1];this.props.addEndListener(p,c)}r!=null&&setTimeout(this.nextCallback,r)},s.render=function(){var r=this.state.status;if(r===_)return null;var e=this.props,t=e.children;e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef;var o=Me(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return T.createElement(pe.Provider,{value:null},typeof t=="function"?t(r,o):T.cloneElement(T.Children.only(t),o))},i}(T.Component);x.contextType=pe;x.propTypes={};function O(){}x.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:O,onEntering:O,onEntered:O,onExit:O,onExiting:O,onExited:O};x.UNMOUNTED=_;x.EXITED=E;x.ENTERING=$;x.ENTERED=P;x.EXITING=W;const S=B.div`
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
      translate ${n=>n.$transitionDuration}ms,
      opacity ${n=>n.$transitionDuration}ms;
  }

  &[data-exiting],
  &[data-exited] {
    opacity: 0;
    translate: 0 0;
    pointer-events: none;
    transition:
      translate ${n=>n.$transitionDuration}ms,
      opacity ${n=>n.$transitionDuration}ms;
  }
`;B.span``;const ce=ye(),ue=T.createContext(null);function j(n){let i=f.useRef(null);[n,i]=Ee(ce,n,i);const{triggerRef:s,transitionDuration:a=300,...r}=n,e=f.useContext(ue),{tooltipProps:t}=ke({...r},e),{overlayProps:o,arrowProps:l,placement:p}=he({targetRef:s,overlayRef:i,isOpen:e.isOpen,placement:n.placement||"top",offset:n.offset??2,crossOffset:n.crossOffset,arrowBoundaryOffset:n.arrowBoundaryOffset,shouldFlip:n.shouldFlip}),c=$e({componentClassName:"aje-tooltip",...n}),m=U(o,t,c);return u.jsx(be,{children:u.jsx(x,{nodeRef:i,in:e.isOpen,timeout:a,unmountOnExit:!0,children:g=>u.jsxs(He,{$transitionDuration:a,ref:i,"data-placement":p,...m,[`data-${g}`]:!0,style:{...m.style,zIndex:100001},children:[c.children,u.jsx(S,{...l})]})})})}try{j.displayName="ToolTip",j.__docgenInfo={description:"A ToolTip component displays a popup with additional information when a user hovers over or focuses on an element.",displayName:"ToolTip",props:{triggerRef:{defaultValue:null,description:`The ref for the element which the tooltip positions itself with respect to.

When used within a TooltipTrigger this is set automatically. It is only required when used standalone.`,name:"triggerRef",required:!1,type:{name:"RefObject<Element>"}},placement:{defaultValue:null,description:"The placement of the element with respect to its anchor element.",name:"placement",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'},{value:'"top"'},{value:'"bottom"'}]}},transitionDuration:{defaultValue:null,description:"",name:"transitionDuration",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<never>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<never>"}}}}}catch{}function H(n){const{delay:i=0,closeDelay:s=0,...a}=n,r=Ie({delay:i,closeDelay:s,...a}),e=f.useRef(null),{triggerProps:t,tooltipProps:o}=je(n,r,e);return u.jsx(_e,{values:[[ue.Provider,r],[ce.Provider,{...o,triggerRef:e}]],children:u.jsx(Ce,{...t,ref:e,children:n.children})})}try{H.displayName="ToolTipTrigger",H.__docgenInfo={description:"",displayName:"ToolTipTrigger",props:{className:{defaultValue:null,description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",required:!1,type:{name:"Argument | Argument[]"}}}}}catch{}function z(n){const{children:i}=n,s=T.Children.only(i),a=f.useRef(null),{focusableProps:r}=le({},a);return T.cloneElement(s,{...s.props,...r,ref:a})}try{z.displayName="ToolTipTarget",z.__docgenInfo={description:"",displayName:"ToolTipTarget",props:{}}}catch{}const ze={title:"Overlays/ToolTip",component:j,tags:["!autodocs"],parameters:{layout:"centered",cssprops:me("ToolTip")},argTypes:{size:{table:{disable:!0}},target:{table:{disable:!0}},triggerRef:{table:{disable:!0}},trigger:{description:"By default, open for both focus and hover. Can be set to only open on focus",control:"select",options:["focus",null]},delay:{control:"number",description:"Delay in milliseconds before the tooltip appears"},closeDelay:{control:"number",description:"Delay in milliseconds before the tooltip disappears"},defaultOpen:{control:"boolean",description:"Whether the tooltip should be open by default"},isDisabled:{control:"boolean",description:"Whether the tooltip should be disabled"},isOpen:{control:"boolean",description:"Control the open state of the tooltip manually"},onOpenChange:{action:"onOpenChange",description:"Callback for when the tooltip open state changes",table:{category:"Events"}},offset:{control:"number",description:"The offset of the tooltip from the trigger"}}},d={render:n=>{const{isOpen:i,defaultOpen:s,delay:a,closeDelay:r,onOpenChange:e,isDisabled:t,trigger:o,target:l,...p}=n;return u.jsxs(H,{isOpen:i,defaultOpen:s,delay:a,closeDelay:r,isDisabled:t,trigger:o,onOpenChange:e,children:[l,u.jsx(j,{...p})]})},args:{target:u.jsx(Oe,{children:"Hover Me"}),children:"This is the tooltip content",delay:0}},N={render:d.render,args:{...d.args,defaultOpen:!0}},R={...d,args:{...d.args,target:u.jsx(Se,{label:"Label"}),placement:"bottom"}},w={...d,args:{...d.args,target:u.jsx(z,{children:u.jsx("h1",{children:"Hover Me"})})}},I={...d,args:{...d.args,target:u.jsx(Ne,{icon:"info",size:"large",variant:"outlined"})}};var A,F,X;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(X=(F=d.parameters)==null?void 0:F.docs)==null?void 0:X.source}}};var Y,K,J;N.parameters={...N.parameters,docs:{...(Y=N.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=R.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,re,ne;w.parameters={...w.parameters,docs:{...(te=w.parameters)==null?void 0:te.docs,source:{originalSource:`{
  ...Primary,
  args: {
    ...Primary.args,
    target: <ToolTipTarget>
        <h1>Hover Me</h1>
      </ToolTipTarget>
  }
}`,...(ne=(re=w.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var oe,ae,ie;I.parameters={...I.parameters,docs:{...(oe=I.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  ...Primary,
  args: {
    ...Primary.args,
    target: <MaterialIcon icon="info" size="large" variant="outlined" />
  }
}`,...(ie=(ae=I.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};const Ue=["Primary","DefaultOpen","InputTarget","WithCustomTarget","IconWithTooltip"],it=Object.freeze(Object.defineProperty({__proto__:null,DefaultOpen:N,IconWithTooltip:I,InputTarget:R,Primary:d,WithCustomTarget:w,__namedExportsOrder:Ue,default:ze},Symbol.toStringTag,{value:"Module"}));export{R as I,d as P,it as T,w as W,H as a,j as b};
