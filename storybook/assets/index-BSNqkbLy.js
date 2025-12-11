import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{R as h,r as v}from"./index-BCtMShv3.js";import{$ as ie}from"./useLabels-B8dXFA8d.js";import{$ as de}from"./useLocalizedStringFormatter-BmC8c4z2.js";import{$ as ne}from"./VisuallyHidden-zwVgBnCN.js";import{$ as pe,a as le,c as ue,b as ce,O as fe}from"./context-AES9ne4t.js";import{$ as me}from"./useOverlayPosition-CUQlxOSl.js";import{c as ve,b as R}from"./useObjectRef-D2RG7rRi.js";import{$ as $e,b as be}from"./useOverlayTriggerState-e1JH9f22.js";import{f as xe}from"./CollectionBuilder-D7AJqdfd.js";import{u as he}from"./index-CsiUWFDz.js";import{u as ge}from"./useForwardedRef-Tweo1nQG.js";import{m as ye,d as C}from"./styled-components.browser.esm-Y4FpNNpy.js";import{P as Pe}from"./Popover.context-C-WvC77F.js";import{u as Re}from"./useRenderProps-CP918x9p.js";var O={};O={dismiss:"تجاهل"};var D={};D={dismiss:"Отхвърляне"};var w={};w={dismiss:"Odstranit"};var N={};N={dismiss:"Luk"};var S={};S={dismiss:"Schließen"};var j={};j={dismiss:"Απόρριψη"};var E={};E={dismiss:"Dismiss"};var A={};A={dismiss:"Descartar"};var k={};k={dismiss:"Lõpeta"};var I={};I={dismiss:"Hylkää"};var L={};L={dismiss:"Rejeter"};var V={};V={dismiss:"התעלם"};var q={};q={dismiss:"Odbaci"};var B={};B={dismiss:"Elutasítás"};var T={};T={dismiss:"Ignora"};var _={};_={dismiss:"閉じる"};var F={};F={dismiss:"무시"};var H={};H={dismiss:"Atmesti"};var K={};K={dismiss:"Nerādīt"};var M={};M={dismiss:"Lukk"};var W={};W={dismiss:"Negeren"};var U={};U={dismiss:"Zignoruj"};var z={};z={dismiss:"Descartar"};var Z={};Z={dismiss:"Dispensar"};var G={};G={dismiss:"Revocare"};var Y={};Y={dismiss:"Пропустить"};var J={};J={dismiss:"Zrušiť"};var Q={};Q={dismiss:"Opusti"};var X={};X={dismiss:"Odbaci"};var ee={};ee={dismiss:"Avvisa"};var re={};re={dismiss:"Kapat"};var se={};se={dismiss:"Скасувати"};var oe={};oe={dismiss:"取消"};var te={};te={dismiss:"關閉"};var ae={};ae={"ar-AE":O,"bg-BG":D,"cs-CZ":w,"da-DK":N,"de-DE":S,"el-GR":j,"en-US":E,"es-ES":A,"et-EE":k,"fi-FI":I,"fr-FR":L,"he-IL":V,"hr-HR":q,"hu-HU":B,"it-IT":T,"ja-JP":_,"ko-KR":F,"lt-LT":H,"lv-LV":K,"nb-NO":M,"nl-NL":W,"pl-PL":U,"pt-BR":z,"pt-PT":Z,"ro-RO":G,"ru-RU":Y,"sk-SK":J,"sl-SI":Q,"sr-SP":X,"sv-SE":ee,"tr-TR":re,"uk-UA":se,"zh-CN":oe,"zh-TW":te};function Ce(e){return e&&e.__esModule?e.default:e}function y(e){let{onDismiss:s,...a}=e,o=de(Ce(ae),"@react-aria/overlays"),r=ie(a,o.format("dismiss")),t=()=>{s&&s()};return h.createElement(ne,null,h.createElement("button",{...r,tabIndex:-1,onClick:t,style:{width:1,height:1}}))}function Oe(e,s){let{triggerRef:a,popoverRef:o,groupRef:r,isNonModal:t,isKeyboardDismissDisabled:i,shouldCloseOnInteractOutside:p,...l}=e,u=l.trigger==="SubmenuTrigger",{overlayProps:$,underlayProps:b}=pe({isOpen:s.isOpen,onClose:s.close,shouldCloseOnBlur:!0,isDismissable:!t||u,isKeyboardDismissDisabled:i,shouldCloseOnInteractOutside:p},r??o),{overlayProps:m,arrowProps:x,placement:c}=me({...l,targetRef:a,overlayRef:o,isOpen:s.isOpen,onClose:t&&!u?s.close:null});return le({isDisabled:t||!s.isOpen}),ve(()=>{if(s.isOpen&&o.current){var f,d;return t?ue((f=r==null?void 0:r.current)!==null&&f!==void 0?f:o.current):ce([(d=r==null?void 0:r.current)!==null&&d!==void 0?d:o.current])}},[t,s.isOpen,o,r]),{popoverProps:R($,m),arrowProps:x,underlayProps:b,placement:c}}function De(e,s,a={}){v.useLayoutEffect(()=>{if(!e||!window.ResizeObserver)return;const o=new ResizeObserver(s);return o.observe(e,a),()=>o.disconnect()},[e,s,a.box])}const we=ye`
  from {
    transform: scaleY(0.9);
  }

  to {
    transform: scaleY(1);
  }
`,Ne=C.div`
  position: fixed;
  inset: 0;
`,Se=C.div`
  min-height: var(--popover-min-height, 80px);
  box-shadow: var(--popover-box-shadow, none);
  border-radius: var(--popover-radius, 0px);
  border: var(--popover-border, none);
  overflow-y: auto;
  overflow-x: hidden;

  transform-origin: ${({$transformOrigin:e})=>e||"top"};
  animation: ${we} 0.2s ease-in-out;

  &.aje-popover--listbox {
    --popover-min-height: var(--listbox-item-height);
    --popover-box-shadow: var(--listbox-box-shadow);
    --popover-radius: var(--listbox-border-radius);
  }

  &.aje-popover--menu {
    --popover-min-height: var(--menu-item-height);
    --popover-box-shadow: var(--menu-box-shadow);
    --popover-radius: var(--menu-border-radius);
  }

  &.aje-popover--datepicker {
    --popover-min-height: auto;
    --popover-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    --popover-radius: 5px;
    --popover-border: 1px solid var(--neutral300);
  }
`,je={left:"right",right:"left",top:"bottom",bottom:"top",center:"center"};function Ee(e){return je[e]}const P=h.forwardRef((e,s)=>{[e,s]=he(Pe,e,s);const{triggerRef:a,...o}=e,r=v.useContext(fe),t=$e(e),i=r??t;return xe()?typeof e.children=="function"?e.children({triggerWidth:0}):e.children:i.isOpen?n.jsx(Ae,{...o,popoverRef:s,triggerRef:a,state:i}):null}),Ae=e=>{var d;const{children:s,offset:a=8,placement:o="bottom",triggerRef:r,popoverRef:t,state:i,...p}=e,l=ge(t),{popoverProps:u,underlayProps:$,placement:b}=Oe({...p,placement:o,offset:a,triggerRef:r,popoverRef:l},i),[m,x]=v.useState(((d=r==null?void 0:r.current)==null?void 0:d.offsetWidth)||0);De(r==null?void 0:r.current,v.useCallback(()=>{var g;return x(((g=r==null?void 0:r.current)==null?void 0:g.offsetWidth)||0)},[]));const c=Re({componentClassName:"aje-popover",values:{triggerWidth:m},...e}),f=Ee(b??"bottom");return n.jsxs(be,{children:[n.jsx(Ne,{...$,className:"aje-popover-underlay"}),n.jsxs(Se,{ref:l,id:p.id,...R(u,c),style:{...u.style,...c.style,"--trigger-width":`${m}px`},$transformOrigin:f,children:[n.jsx(y,{onDismiss:i.close}),c.children,n.jsx(y,{onDismiss:i.close})]})]})};try{P.displayName="Popover",P.__docgenInfo={description:"A popover is an overlay element positioned relative to a target.",displayName:"Popover",props:{triggerRef:{defaultValue:null,description:"A ref to the element that triggers the popover to appear. Not necessary when used with trigger wrapper",name:"triggerRef",required:!1,type:{name:"RefObject<HTMLElement>"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<PopoverRenderProps>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<PopoverRenderProps>"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'SuggestStrings<"menu" | "listbox" | "datepicker">'}}}}}catch{}try{Popover.displayName="Popover",Popover.__docgenInfo={description:"A popover is an overlay element positioned relative to a target.",displayName:"Popover",props:{triggerRef:{defaultValue:null,description:"A ref to the element that triggers the popover to appear. Not necessary when used with trigger wrapper",name:"triggerRef",required:!1,type:{name:"RefObject<HTMLElement>"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<PopoverRenderProps>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<PopoverRenderProps>"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'SuggestStrings<"menu" | "listbox" | "datepicker">'}}}}}catch{}export{P};
