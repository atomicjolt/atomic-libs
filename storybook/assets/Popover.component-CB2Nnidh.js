import{j as p}from"./jsx-runtime-CkxqCPlQ.js";import{R as v,r as f}from"./index-DJO9vBfz.js";import{$ as ie}from"./useLabels-DtS694vG.js";import{$ as de}from"./useLocalizedStringFormatter-CIL7QaWo.js";import{$ as pe}from"./VisuallyHidden-BPFT_fih.js";import{$ as ne,a as ce,b as ue,O as fe}from"./context-C5Zmhtj1.js";import{$ as le}from"./useOverlayPosition-DNw_PjS2.js";import{$ as y}from"./useObjectRef-C4RVQRRU.js";import{$ as me}from"./useLayoutEffect-Bj1hLagI.js";import{$ as $e,b as ve}from"./useOverlayTriggerState-DMR8aBHV.js";import{u as be}from"./useRenderProps-BqJZ5b79.js";import{a as xe}from"./index-CXdyvu6V.js";import{u as he}from"./useForwardedRef-BqZ3RrEL.js";import{m as ge,d as P}from"./styled-components.browser.esm-WCay-hu9.js";import{P as ye}from"./context-p027hjsN.js";import{f as Pe}from"./CollectionBuilder-Vf4TV1hX.js";var R={};R={dismiss:"تجاهل"};var C={};C={dismiss:"Отхвърляне"};var O={};O={dismiss:"Odstranit"};var D={};D={dismiss:"Luk"};var w={};w={dismiss:"Schließen"};var j={};j={dismiss:"Απόρριψη"};var E={};E={dismiss:"Dismiss"};var N={};N={dismiss:"Descartar"};var S={};S={dismiss:"Lõpeta"};var A={};A={dismiss:"Hylkää"};var k={};k={dismiss:"Rejeter"};var I={};I={dismiss:"התעלם"};var B={};B={dismiss:"Odbaci"};var L={};L={dismiss:"Elutasítás"};var _={};_={dismiss:"Ignora"};var T={};T={dismiss:"閉じる"};var F={};F={dismiss:"무시"};var K={};K={dismiss:"Atmesti"};var H={};H={dismiss:"Nerādīt"};var V={};V={dismiss:"Lukk"};var W={};W={dismiss:"Negeren"};var q={};q={dismiss:"Zignoruj"};var M={};M={dismiss:"Descartar"};var U={};U={dismiss:"Dispensar"};var z={};z={dismiss:"Revocare"};var Z={};Z={dismiss:"Пропустить"};var G={};G={dismiss:"Zrušiť"};var Y={};Y={dismiss:"Opusti"};var J={};J={dismiss:"Odbaci"};var Q={};Q={dismiss:"Avvisa"};var X={};X={dismiss:"Kapat"};var ee={};ee={dismiss:"Скасувати"};var re={};re={dismiss:"取消"};var se={};se={dismiss:"關閉"};var oe={};oe={"ar-AE":R,"bg-BG":C,"cs-CZ":O,"da-DK":D,"de-DE":w,"el-GR":j,"en-US":E,"es-ES":N,"et-EE":S,"fi-FI":A,"fr-FR":k,"he-IL":I,"hr-HR":B,"hu-HU":L,"it-IT":_,"ja-JP":T,"ko-KR":F,"lt-LT":K,"lv-LV":H,"nb-NO":V,"nl-NL":W,"pl-PL":q,"pt-BR":M,"pt-PT":U,"ro-RO":z,"ru-RU":Z,"sk-SK":G,"sl-SI":Y,"sr-SP":J,"sv-SE":Q,"tr-TR":X,"uk-UA":ee,"zh-CN":re,"zh-TW":se};function Re(e){return e&&e.__esModule?e.default:e}function h(e){let{onDismiss:s,...t}=e,o=de(Re(oe),"@react-aria/overlays"),r=ie(t,o.format("dismiss")),a=()=>{s&&s()};return v.createElement(pe,null,v.createElement("button",{...r,tabIndex:-1,onClick:a,style:{width:1,height:1}}))}function Ce(e,s){let{triggerRef:t,popoverRef:o,isNonModal:r,isKeyboardDismissDisabled:a,shouldCloseOnInteractOutside:i,...d}=e,{overlayProps:n,underlayProps:c}=ne({isOpen:s.isOpen,onClose:s.close,shouldCloseOnBlur:!0,isDismissable:!r,isKeyboardDismissDisabled:a,shouldCloseOnInteractOutside:i},o),{overlayProps:l,arrowProps:m,placement:u}=le({...d,targetRef:t,overlayRef:o,isOpen:s.isOpen,onClose:r?s.close:null});return ce({isDisabled:r||!s.isOpen}),me(()=>{if(s.isOpen&&!r&&o.current)return ue([o.current])},[r,s.isOpen,o]),{popoverProps:y(n,l),arrowProps:m,underlayProps:c,placement:u}}function Oe(e,s,t={}){f.useLayoutEffect(()=>{if(!e||!window.ResizeObserver)return;const o=new ResizeObserver(s);return o.observe(e,t),()=>o.disconnect()},[e,s,t.box])}const De=ge`
  from {
    transform: scaleY(0.9);
  }

  to {
    transform: scaleY(1);
  }
`,we=P.div`
  position: fixed;
  inset: 0;
`,je=P.div`
  min-height: var(--popover-min-height, 80px);
  box-shadow: var(--popover-box-shadow, none);
  border-radius: var(--popover-radius, 0px);
  border: var(--popover-border, none);
  overflow-y: auto;
  overflow-x: hidden;

  transform-origin: ${({$transformOrigin:e})=>e||"top"};
  animation: ${De} 0.2s ease-in-out;

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
    --popover-min-height: 330px;
    --popover-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    --popover-radius: 5px;
    --popover-border: 1px solid var(--neutral300);
  }
`,Ee={left:"right",right:"left",top:"bottom",bottom:"top",center:"center"};function Ne(e){return Ee[e]}const g=v.forwardRef((e,s)=>{const t=xe(ye,e),{triggerRef:o,...r}=t,a=f.useContext(fe),i=$e(e),d=a??i;return Pe()?typeof e.children=="function"?e.children({triggerWidth:0}):e.children:d.isOpen?p.jsx(Se,{...r,popoverRef:s,triggerRef:o,state:d}):null}),Se=e=>{var b;const{children:s,offset:t=8,placement:o="bottom",triggerRef:r,popoverRef:a,state:i,...d}=e,n=he(a),{popoverProps:c,underlayProps:l,placement:m}=Ce({...d,placement:o,offset:t,triggerRef:r,popoverRef:n},i),[u,te]=f.useState(((b=r==null?void 0:r.current)==null?void 0:b.offsetWidth)||0);Oe(r==null?void 0:r.current,f.useCallback(()=>{var x;return te(((x=r==null?void 0:r.current)==null?void 0:x.offsetWidth)||0)},[]));const $=be({componentClassName:"aje-popover",values:{triggerWidth:u},...e}),ae=Ne(m);return p.jsxs(ve,{children:[p.jsx(we,{...l,className:"aje-popover-underlay"}),p.jsxs(je,{ref:n,id:d.id,...y(c,$),style:{...c.style,...$.style,"--trigger-width":`${u}px`},$transformOrigin:ae,children:[p.jsx(h,{onDismiss:i.close}),$.children,p.jsx(h,{onDismiss:i.close})]})]})};try{g.displayName="Popover",g.__docgenInfo={description:"A popover is an overlay element positioned relative to a target.",displayName:"Popover",props:{triggerRef:{defaultValue:null,description:"A ref to the element that triggers the popover to appear. Not necessary when used with trigger wrapper",name:"triggerRef",required:!1,type:{name:"RefObject<HTMLElement>"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<PopoverRenderProps>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<PopoverRenderProps>"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'SuggestStrings<"menu" | "listbox" | "datepicker">'}}}}}catch{}export{g as P};
