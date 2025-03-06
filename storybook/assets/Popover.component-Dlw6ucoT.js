import{j as d}from"./jsx-runtime-CkxqCPlQ.js";import{R as v,r as f}from"./index-DJO9vBfz.js";import{$ as ie}from"./useLabels-B24R2YQq.js";import{$ as de}from"./useLocalizedStringFormatter-DBaQHtvd.js";import{$ as ne}from"./VisuallyHidden-C_KI20v8.js";import{$ as pe,a as ce,b as ue,O as fe}from"./context-C_Tf37_9.js";import{$ as le}from"./useOverlayPosition-DFJP1Pe4.js";import{b as y}from"./useObjectRef-BKue9pYL.js";import{$ as me}from"./useLayoutEffect-Bj1hLagI.js";import{$ as $e,b as ve}from"./useOverlayTriggerState-BXapIe9V.js";import{f as be}from"./CollectionBuilder-Xbel4YvD.js";import{u as xe}from"./useRenderProps-Bk8BH60l.js";import{u as he}from"./index-De95zDiF.js";import{u as ge}from"./useForwardedRef-BqZ3RrEL.js";import{m as ye,d as P}from"./styled-components.browser.esm-BQf_XqKi.js";import{P as Pe}from"./Popover.context-Iv_xuGDi.js";var R={};R={dismiss:"تجاهل"};var C={};C={dismiss:"Отхвърляне"};var O={};O={dismiss:"Odstranit"};var D={};D={dismiss:"Luk"};var w={};w={dismiss:"Schließen"};var j={};j={dismiss:"Απόρριψη"};var E={};E={dismiss:"Dismiss"};var N={};N={dismiss:"Descartar"};var S={};S={dismiss:"Lõpeta"};var A={};A={dismiss:"Hylkää"};var k={};k={dismiss:"Rejeter"};var I={};I={dismiss:"התעלם"};var B={};B={dismiss:"Odbaci"};var L={};L={dismiss:"Elutasítás"};var _={};_={dismiss:"Ignora"};var T={};T={dismiss:"閉じる"};var F={};F={dismiss:"무시"};var K={};K={dismiss:"Atmesti"};var H={};H={dismiss:"Nerādīt"};var V={};V={dismiss:"Lukk"};var W={};W={dismiss:"Negeren"};var q={};q={dismiss:"Zignoruj"};var M={};M={dismiss:"Descartar"};var U={};U={dismiss:"Dispensar"};var z={};z={dismiss:"Revocare"};var Z={};Z={dismiss:"Пропустить"};var G={};G={dismiss:"Zrušiť"};var Y={};Y={dismiss:"Opusti"};var J={};J={dismiss:"Odbaci"};var Q={};Q={dismiss:"Avvisa"};var X={};X={dismiss:"Kapat"};var ee={};ee={dismiss:"Скасувати"};var re={};re={dismiss:"取消"};var se={};se={dismiss:"關閉"};var oe={};oe={"ar-AE":R,"bg-BG":C,"cs-CZ":O,"da-DK":D,"de-DE":w,"el-GR":j,"en-US":E,"es-ES":N,"et-EE":S,"fi-FI":A,"fr-FR":k,"he-IL":I,"hr-HR":B,"hu-HU":L,"it-IT":_,"ja-JP":T,"ko-KR":F,"lt-LT":K,"lv-LV":H,"nb-NO":V,"nl-NL":W,"pl-PL":q,"pt-BR":M,"pt-PT":U,"ro-RO":z,"ru-RU":Z,"sk-SK":G,"sl-SI":Y,"sr-SP":J,"sv-SE":Q,"tr-TR":X,"uk-UA":ee,"zh-CN":re,"zh-TW":se};function Re(e){return e&&e.__esModule?e.default:e}function h(e){let{onDismiss:s,...t}=e,o=de(Re(oe),"@react-aria/overlays"),r=ie(t,o.format("dismiss")),i=()=>{s&&s()};return v.createElement(ne,null,v.createElement("button",{...r,tabIndex:-1,onClick:i,style:{width:1,height:1}}))}function Ce(e,s){let{triggerRef:t,popoverRef:o,isNonModal:r,isKeyboardDismissDisabled:i,shouldCloseOnInteractOutside:a,...n}=e,{overlayProps:p,underlayProps:c}=pe({isOpen:s.isOpen,onClose:s.close,shouldCloseOnBlur:!0,isDismissable:!r,isKeyboardDismissDisabled:i,shouldCloseOnInteractOutside:a},o),{overlayProps:l,arrowProps:m,placement:u}=le({...n,targetRef:t,overlayRef:o,isOpen:s.isOpen,onClose:r?s.close:null});return ce({isDisabled:r||!s.isOpen}),me(()=>{if(s.isOpen&&!r&&o.current)return ue([o.current])},[r,s.isOpen,o]),{popoverProps:y(p,l),arrowProps:m,underlayProps:c,placement:u}}function Oe(e,s,t={}){f.useLayoutEffect(()=>{if(!e||!window.ResizeObserver)return;const o=new ResizeObserver(s);return o.observe(e,t),()=>o.disconnect()},[e,s,t.box])}const De=ye`
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
    --popover-min-height: auto;
    --popover-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    --popover-radius: 5px;
    --popover-border: 1px solid var(--neutral300);
  }
`,Ee={left:"right",right:"left",top:"bottom",bottom:"top",center:"center"};function Ne(e){return Ee[e]}const g=v.forwardRef((e,s)=>{[e,s]=he(Pe,e,s);const{triggerRef:t,...o}=e,r=f.useContext(fe),i=$e(e),a=r??i;return be()?typeof e.children=="function"?e.children({triggerWidth:0}):e.children:a.isOpen?d.jsx(Se,{...o,popoverRef:s,triggerRef:t,state:a}):null}),Se=e=>{var b;const{children:s,offset:t=8,placement:o="bottom",triggerRef:r,popoverRef:i,state:a,...n}=e,p=ge(i),{popoverProps:c,underlayProps:l,placement:m}=Ce({...n,placement:o,offset:t,triggerRef:r,popoverRef:p},a),[u,te]=f.useState(((b=r==null?void 0:r.current)==null?void 0:b.offsetWidth)||0);Oe(r==null?void 0:r.current,f.useCallback(()=>{var x;return te(((x=r==null?void 0:r.current)==null?void 0:x.offsetWidth)||0)},[]));const $=xe({componentClassName:"aje-popover",values:{triggerWidth:u},...e}),ae=Ne(m);return d.jsxs(ve,{children:[d.jsx(we,{...l,className:"aje-popover-underlay"}),d.jsxs(je,{ref:p,id:n.id,...y(c,$),style:{...c.style,...$.style,"--trigger-width":`${u}px`},$transformOrigin:ae,children:[d.jsx(h,{onDismiss:a.close}),$.children,d.jsx(h,{onDismiss:a.close})]})]})};try{g.displayName="Popover",g.__docgenInfo={description:"A popover is an overlay element positioned relative to a target.",displayName:"Popover",props:{triggerRef:{defaultValue:null,description:"A ref to the element that triggers the popover to appear. Not necessary when used with trigger wrapper",name:"triggerRef",required:!1,type:{name:"RefObject<HTMLElement>"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<PopoverRenderProps>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<PopoverRenderProps>"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'SuggestStrings<"menu" | "listbox" | "datepicker">'}}}}}catch{}export{g as P};
