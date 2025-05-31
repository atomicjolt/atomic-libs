import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{R as h,r as $}from"./index-BCtMShv3.js";import{$ as ie}from"./useLabels-B8dXFA8d.js";import{$ as de}from"./useLocalizedStringFormatter-BmC8c4z2.js";import{$ as ne}from"./VisuallyHidden-XQ8XJ7MR.js";import{$ as pe,a as ue,c as ce,b as le,O as fe}from"./context-CHG5exGL.js";import{$ as me}from"./useOverlayPosition-CUQlxOSl.js";import{c as $e,b as C}from"./useObjectRef-D2RG7rRi.js";import{$ as ve,b as be}from"./useOverlayTriggerState-P0osIcob.js";import{f as xe}from"./CollectionBuilder-D7AJqdfd.js";import{u as he}from"./useRenderProps-CP918x9p.js";import{u as ge}from"./index-CsiUWFDz.js";import{u as ye}from"./useForwardedRef-Tweo1nQG.js";import{m as Pe,d as O}from"./styled-components.browser.esm-Y4FpNNpy.js";import{P as Ce}from"./Popover.context-C-WvC77F.js";var R={};R={dismiss:"تجاهل"};var D={};D={dismiss:"Отхвърляне"};var w={};w={dismiss:"Odstranit"};var j={};j={dismiss:"Luk"};var E={};E={dismiss:"Schließen"};var S={};S={dismiss:"Απόρριψη"};var N={};N={dismiss:"Dismiss"};var A={};A={dismiss:"Descartar"};var k={};k={dismiss:"Lõpeta"};var I={};I={dismiss:"Hylkää"};var B={};B={dismiss:"Rejeter"};var L={};L={dismiss:"התעלם"};var T={};T={dismiss:"Odbaci"};var F={};F={dismiss:"Elutasítás"};var K={};K={dismiss:"Ignora"};var H={};H={dismiss:"閉じる"};var V={};V={dismiss:"무시"};var W={};W={dismiss:"Atmesti"};var q={};q={dismiss:"Nerādīt"};var M={};M={dismiss:"Lukk"};var U={};U={dismiss:"Negeren"};var z={};z={dismiss:"Zignoruj"};var Z={};Z={dismiss:"Descartar"};var G={};G={dismiss:"Dispensar"};var Y={};Y={dismiss:"Revocare"};var _={};_={dismiss:"Пропустить"};var J={};J={dismiss:"Zrušiť"};var Q={};Q={dismiss:"Opusti"};var X={};X={dismiss:"Odbaci"};var ee={};ee={dismiss:"Avvisa"};var re={};re={dismiss:"Kapat"};var se={};se={dismiss:"Скасувати"};var oe={};oe={dismiss:"取消"};var te={};te={dismiss:"關閉"};var ae={};ae={"ar-AE":R,"bg-BG":D,"cs-CZ":w,"da-DK":j,"de-DE":E,"el-GR":S,"en-US":N,"es-ES":A,"et-EE":k,"fi-FI":I,"fr-FR":B,"he-IL":L,"hr-HR":T,"hu-HU":F,"it-IT":K,"ja-JP":H,"ko-KR":V,"lt-LT":W,"lv-LV":q,"nb-NO":M,"nl-NL":U,"pl-PL":z,"pt-BR":Z,"pt-PT":G,"ro-RO":Y,"ru-RU":_,"sk-SK":J,"sl-SI":Q,"sr-SP":X,"sv-SE":ee,"tr-TR":re,"uk-UA":se,"zh-CN":oe,"zh-TW":te};function Oe(e){return e&&e.__esModule?e.default:e}function y(e){let{onDismiss:s,...a}=e,o=de(Oe(ae),"@react-aria/overlays"),r=ie(a,o.format("dismiss")),t=()=>{s&&s()};return h.createElement(ne,null,h.createElement("button",{...r,tabIndex:-1,onClick:t,style:{width:1,height:1}}))}function Re(e,s){let{triggerRef:a,popoverRef:o,groupRef:r,isNonModal:t,isKeyboardDismissDisabled:i,shouldCloseOnInteractOutside:p,...u}=e,c=u.trigger==="SubmenuTrigger",{overlayProps:v,underlayProps:b}=pe({isOpen:s.isOpen,onClose:s.close,shouldCloseOnBlur:!0,isDismissable:!t||c,isKeyboardDismissDisabled:i,shouldCloseOnInteractOutside:p},r??o),{overlayProps:m,arrowProps:x,placement:l}=me({...u,targetRef:a,overlayRef:o,isOpen:s.isOpen,onClose:t&&!c?s.close:null});return ue({isDisabled:t||!s.isOpen}),$e(()=>{if(s.isOpen&&o.current){var f,d;return t?ce((f=r==null?void 0:r.current)!==null&&f!==void 0?f:o.current):le([(d=r==null?void 0:r.current)!==null&&d!==void 0?d:o.current])}},[t,s.isOpen,o,r]),{popoverProps:C(v,m),arrowProps:x,underlayProps:b,placement:l}}function De(e,s,a={}){$.useLayoutEffect(()=>{if(!e||!window.ResizeObserver)return;const o=new ResizeObserver(s);return o.observe(e,a),()=>o.disconnect()},[e,s,a.box])}const we=Pe`
  from {
    transform: scaleY(0.9);
  }

  to {
    transform: scaleY(1);
  }
`,je=O.div`
  position: fixed;
  inset: 0;
`,Ee=O.div`
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
`,Se={left:"right",right:"left",top:"bottom",bottom:"top",center:"center"};function Ne(e){return Se[e]}const P=h.forwardRef((e,s)=>{[e,s]=ge(Ce,e,s);const{triggerRef:a,...o}=e,r=$.useContext(fe),t=ve(e),i=r??t;return xe()?typeof e.children=="function"?e.children({triggerWidth:0}):e.children:i.isOpen?n.jsx(Ae,{...o,popoverRef:s,triggerRef:a,state:i}):null}),Ae=e=>{var d;const{children:s,offset:a=8,placement:o="bottom",triggerRef:r,popoverRef:t,state:i,...p}=e,u=ye(t),{popoverProps:c,underlayProps:v,placement:b}=Re({...p,placement:o,offset:a,triggerRef:r,popoverRef:u},i),[m,x]=$.useState(((d=r==null?void 0:r.current)==null?void 0:d.offsetWidth)||0);De(r==null?void 0:r.current,$.useCallback(()=>{var g;return x(((g=r==null?void 0:r.current)==null?void 0:g.offsetWidth)||0)},[]));const l=he({componentClassName:"aje-popover",values:{triggerWidth:m},...e}),f=Ne(b??"bottom");return n.jsxs(be,{children:[n.jsx(je,{...v,className:"aje-popover-underlay"}),n.jsxs(Ee,{ref:u,id:p.id,...C(c,l),style:{...c.style,...l.style,"--trigger-width":`${m}px`},$transformOrigin:f,children:[n.jsx(y,{onDismiss:i.close}),l.children,n.jsx(y,{onDismiss:i.close})]})]})};try{P.displayName="Popover",P.__docgenInfo={description:"A popover is an overlay element positioned relative to a target.",displayName:"Popover",props:{triggerRef:{defaultValue:null,description:"A ref to the element that triggers the popover to appear. Not necessary when used with trigger wrapper",name:"triggerRef",required:!1,type:{name:"RefObject<HTMLElement>"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<PopoverRenderProps>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<PopoverRenderProps>"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'SuggestStrings<"listbox" | "menu" | "datepicker">'}}}}}catch{}export{P};
