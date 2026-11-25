import{R as h,r as v,O as ie,g as O,j as p}from"./iframe-CGPW5dgX.js";import{$ as ne}from"./useLabels-Bveo7T3X.js";import{$ as pe}from"./useLocalizedStringFormatter-CLx94-cg.js";import{$ as de}from"./VisuallyHidden-BPd2hceK.js";import{$ as ce,a as le,c as me,b as ue,O as fe}from"./context-ID_07sjv.js";import{$ as ve}from"./useOverlayPosition-HaX0xHeb.js";import{c as $e,$ as R}from"./useObjectRef-CjsC0YUg.js";import{$ as be,b as xe}from"./useOverlayTriggerState-DfGm2mCW.js";import{t as he}from"./helpers-tUmR_xN7.js";import{u as ge}from"./useRenderProps-B7rIWDyP.js";import{u as Pe}from"./index-C0dagnaq.js";import{u as ye}from"./useForwardedRef-DFbI-FzN.js";import{P as Oe}from"./Popover.context-D_v2VeGP.js";var C={};C={dismiss:"تجاهل"};var D={};D={dismiss:"Отхвърляне"};var N={};N={dismiss:"Odstranit"};var k={};k={dismiss:"Luk"};var w={};w={dismiss:"Schließen"};var S={};S={dismiss:"Απόρριψη"};var E={};E={dismiss:"Dismiss"};var j={};j={dismiss:"Descartar"};var A={};A={dismiss:"Lõpeta"};var I={};I={dismiss:"Hylkää"};var B={};B={dismiss:"Rejeter"};var L={};L={dismiss:"התעלם"};var T={};T={dismiss:"Odbaci"};var V={};V={dismiss:"Elutasítás"};var H={};H={dismiss:"Ignora"};var F={};F={dismiss:"閉じる"};var K={};K={dismiss:"무시"};var W={};W={dismiss:"Atmesti"};var q={};q={dismiss:"Nerādīt"};var M={};M={dismiss:"Lukk"};var U={};U={dismiss:"Negeren"};var z={};z={dismiss:"Zignoruj"};var Z={};Z={dismiss:"Descartar"};var G={};G={dismiss:"Dispensar"};var Y={};Y={dismiss:"Revocare"};var _={};_={dismiss:"Пропустить"};var J={};J={dismiss:"Zrušiť"};var Q={};Q={dismiss:"Opusti"};var X={};X={dismiss:"Odbaci"};var ee={};ee={dismiss:"Avvisa"};var se={};se={dismiss:"Kapat"};var re={};re={dismiss:"Скасувати"};var oe={};oe={dismiss:"取消"};var te={};te={dismiss:"關閉"};var ae={};ae={"ar-AE":C,"bg-BG":D,"cs-CZ":N,"da-DK":k,"de-DE":w,"el-GR":S,"en-US":E,"es-ES":j,"et-EE":A,"fi-FI":I,"fr-FR":B,"he-IL":L,"hr-HR":T,"hu-HU":V,"it-IT":H,"ja-JP":F,"ko-KR":K,"lt-LT":W,"lv-LV":q,"nb-NO":M,"nl-NL":U,"pl-PL":z,"pt-BR":Z,"pt-PT":G,"ro-RO":Y,"ru-RU":_,"sk-SK":J,"sl-SI":Q,"sr-SP":X,"sv-SE":ee,"tr-TR":se,"uk-UA":re,"zh-CN":oe,"zh-TW":te};function Re(e){return e&&e.__esModule?e.default:e}function P(e){let{onDismiss:r,...a}=e,o=pe(Re(ae),"@react-aria/overlays"),s=ne(a,o.format("dismiss")),t=()=>{r&&r()};return h.createElement(de,null,h.createElement("button",{...s,tabIndex:-1,onClick:t,style:{width:1,height:1}}))}function Ce(e,r){let{triggerRef:a,popoverRef:o,groupRef:s,isNonModal:t,isKeyboardDismissDisabled:i,shouldCloseOnInteractOutside:d,...c}=e,l=c.trigger==="SubmenuTrigger",{overlayProps:$,underlayProps:b}=ce({isOpen:r.isOpen,onClose:r.close,shouldCloseOnBlur:!0,isDismissable:!t||l,isKeyboardDismissDisabled:i,shouldCloseOnInteractOutside:d},s??o),{overlayProps:f,arrowProps:x,placement:m}=ve({...c,targetRef:a,overlayRef:o,isOpen:r.isOpen,onClose:t&&!l?r.close:null});return le({isDisabled:t||!r.isOpen}),$e(()=>{if(r.isOpen&&o.current){var u,n;return t?me((u=s==null?void 0:s.current)!==null&&u!==void 0?u:o.current):ue([(n=s==null?void 0:s.current)!==null&&n!==void 0?n:o.current])}},[t,r.isOpen,o,s]),{popoverProps:R($,f),arrowProps:x,underlayProps:b,placement:m}}function De(e,r,a={}){v.useLayoutEffect(()=>{if(!e||!window.ResizeObserver)return;const o=new ResizeObserver(r);return o.observe(e,a),()=>o.disconnect()},[e,r,a.box])}const Ne=ie`
  from {
    transform: scaleY(0.9);
  }

  to {
    transform: scaleY(1);
  }
`,ke=O.div`
  position: fixed;
  inset: 0;
`,we=O.div`
  min-height: var(--popover-min-height, 80px);
  box-shadow: var(--popover-box-shadow, none);
  border-radius: var(--popover-radius, 0px);
  border: var(--popover-border, none);
  overflow-y: auto;
  overflow-x: hidden;

  transform-origin: ${({$transformOrigin:e})=>e||"top"};
  animation: ${Ne} 0.2s ease-in-out;

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
    --popover-box-shadow: var(--shadow-md);
    --popover-radius: 5px;
    --popover-border: 1px solid var(--border-clr);
  }
`,Se={left:"right",right:"left",top:"bottom",bottom:"top",center:"center"};function Ee(e){return Se[e]}const y=h.forwardRef((e,r)=>{[e,r]=Pe(Oe,e,r);const{triggerRef:a,...o}=e,s=v.useContext(fe),t=be(e),i=s??t;return he()?typeof e.children=="function"?e.children({triggerWidth:0}):e.children:i.isOpen?p.jsx(je,{...o,popoverRef:r,triggerRef:a,state:i}):null}),je=e=>{var n;const{children:r,offset:a=8,placement:o="bottom",triggerRef:s,popoverRef:t,state:i,...d}=e,c=ye(t),{popoverProps:l,underlayProps:$,placement:b}=Ce({...d,placement:o,offset:a,triggerRef:s,popoverRef:c},i),[f,x]=v.useState(((n=s==null?void 0:s.current)==null?void 0:n.offsetWidth)||0);De(s==null?void 0:s.current,v.useCallback(()=>{var g;return x(((g=s==null?void 0:s.current)==null?void 0:g.offsetWidth)||0)},[]));const m=ge({componentClassName:"aje-popover",values:{triggerWidth:f},...e}),u=Ee(b??"bottom");return p.jsxs(xe,{children:[p.jsx(ke,{...$,className:"aje-popover-underlay"}),p.jsxs(we,{ref:c,id:d.id,...R(l,m),style:{...l.style,...m.style,"--trigger-width":`${f}px`},$transformOrigin:u,children:[p.jsx(P,{onDismiss:i.close}),m.children,p.jsx(P,{onDismiss:i.close})]})]})};try{y.displayName="Popover",y.__docgenInfo={description:"A popover is an overlay element positioned relative to a target.",displayName:"Popover",filePath:"/home/runner/work/atomic-libs/atomic-libs/packages/atomic-elements/src/components/Overlays/Popover/Popover.component.tsx",methods:[],props:{triggerRef:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Overlays/Popover/Popover.component.tsx",name:"PopoverProps"}],description:"A ref to the element that triggers the popover to appear. Not necessary when used with trigger wrapper",name:"triggerRef",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Overlays/Popover/Popover.component.tsx",name:"PopoverProps"},required:!1,tags:{},type:{name:"RefObject<HTMLElement | null>"}},id:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Overlays/Popover/Popover.component.tsx",name:"PopoverProps"}],description:"Id applied to the popover element",name:"id",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Overlays/Popover/Popover.component.tsx",name:"PopoverProps"},required:!1,tags:{},type:{name:"string"}},className:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"}],description:"",name:"className",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"},required:!1,tags:{},type:{name:"RenderClassName<PopoverRenderProps>"}},style:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"}],description:"",name:"style",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"},required:!1,tags:{},type:{name:"RenderStyle<PopoverRenderProps>"}},variant:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"HasVariant"}],description:"Visual style of the component.",name:"variant",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"HasVariant"},required:!1,tags:{},type:{name:'SuggestStrings<"menu" | "listbox" | "datepicker">'}}},tags:{}}}catch{}export{y as P};
