import{j as x}from"./jsx-runtime-CkxqCPlQ.js";import{r as P,R as ze}from"./index-DJO9vBfz.js";import{$ as I,a as $,d as Se,e as _e,b as Me}from"./useObjectRef-CA0MXmrf.js";import{$ as E}from"./filterDOMProps-CeZl_uWj.js";import{a as je,$ as qe}from"./useSelectableList-Cco9av5W.js";import{$ as Ie}from"./useField-DAe_M2wp.js";import{$ as Te}from"./useFocusWithin-Bb3mfDwa.js";import{$ as We,a as Oe}from"./useHighlightSelectionDescription-Cdub3fbR.js";import{$ as Ue}from"./useHasTabbableChild-CnPy-0wR.js";import{$ as T}from"./context-BQ3_Es2z.js";import{g as W,$ as Ge}from"./usePress-DBLAzBwe.js";import{$ as He}from"./useDescription-DnVXAhCi.js";import{$ as k}from"./getScrollParent-BL0kfGii.js";import{a as C}from"./scrollIntoView-DuDju04b.js";import{$ as S}from"./FocusScope-BnAoeAyt.js";import{$ as D,e as Je,m as Qe}from"./focusSafely-BOUv7I-8.js";import{g as Xe,e as Ye}from"./useSelectableItem-c4_FIivV.js";import{$ as Ze}from"./useLocalizedStringFormatter-DBaQHtvd.js";import{b as er}from"./CollectionBuilder-Xbel4YvD.js";import{u as rr}from"./useFocusRing-PETNqKnG.js";import{c as N,u as tr}from"./index-CHPAqjqs.js";import{u as O}from"./useRenderProps-Bk8BH60l.js";import{d as U}from"./styled-components.browser.esm-BQf_XqKi.js";import{m as or}from"./mixins-B7X2BZyR.js";import{I as G}from"./IconButton.component-CFNeuELj.js";const K=new WeakMap;function _(t,e){let{id:r}=K.get(t);if(!r)throw new Error("Unknown list");return`${r}-${ar(e)}`}function ar(t){return typeof t=="string"?t.replace(/\s*/g,""):""+t}function ir(t,e,r){let{isVirtualized:i,keyboardDelegate:u,layoutDelegate:o,onAction:n,linkBehavior:p="action",keyboardNavigationBehavior:l="arrow"}=t;!t["aria-label"]&&!t["aria-labelledby"]&&console.warn("An aria-label or aria-labelledby prop is required for accessibility.");let{listProps:s}=je({selectionManager:e.selectionManager,collection:e.collection,disabledKeys:e.disabledKeys,ref:r,keyboardDelegate:u,layoutDelegate:o,isVirtualized:i,selectOnFocus:e.selectionManager.selectionBehavior==="replace",shouldFocusWrap:t.shouldFocusWrap,linkBehavior:p}),b=I(t.id);K.set(e,{id:b,onAction:n,linkBehavior:p,keyboardNavigationBehavior:l});let d=We({selectionManager:e.selectionManager,hasItemActions:!!n}),m=Ue(r,{isDisabled:e.collection.size!==0}),c=E(t,{labelable:!0}),h=$(c,{role:"grid",id:b,"aria-multiselectable":e.selectionManager.selectionMode==="multiple"?"true":void 0},e.collection.size===0?{tabIndex:m?-1:0}:s,d);return i&&(h["aria-rowcount"]=e.collection.size,h["aria-colcount"]=1),Oe({},e),{gridProps:h}}const M={expand:{ltr:"ArrowRight",rtl:"ArrowLeft"},collapse:{ltr:"ArrowLeft",rtl:"ArrowRight"}};function nr(t,e,r){var i,u;let{node:o,isVirtualized:n,shouldSelectOnPressUp:p}=t,{direction:l}=T(),{onAction:s,linkBehavior:b,keyboardNavigationBehavior:d}=K.get(e),m=Se(),c=P.useRef(null),h=()=>{var a;(c.current!=null&&o.key!==c.current||!(!((a=r.current)===null||a===void 0)&&a.contains(document.activeElement)))&&D(r.current)},w={},y,A=e.selectionManager.isLink(o.key);o!=null&&"expandedKeys"in e&&(y=[...e.collection.getChildren(o.key)].length>1,s==null&&!A&&e.selectionManager.selectionMode==="none"&&y&&(s=()=>e.toggleKey(o.key)),w={"aria-expanded":y?e.expandedKeys.has(o.key):void 0,"aria-level":o.level+1,"aria-posinset":(o==null?void 0:o.index)+1,"aria-setsize":o.level>0?Xe(e.collection.getChildren(o==null?void 0:o.parentKey)).index+1:[...e.collection].filter(f=>f.level===0).at(-1).index+1});let{itemProps:L,...B}=Ye({selectionManager:e.selectionManager,key:o.key,ref:r,isVirtualized:n,shouldSelectOnPressUp:p,onAction:s||!((i=o.props)===null||i===void 0)&&i.onAction?_e((u=o.props)===null||u===void 0?void 0:u.onAction,s?()=>s(o.key):void 0):void 0,focus:h,linkBehavior:b}),Re=a=>{if(!a.currentTarget.contains(a.target))return;let f=S(r.current);if(f.currentNode=document.activeElement,"expandedKeys"in e&&document.activeElement===r.current){if(a.key===M.expand[l]&&e.selectionManager.focusedKey===o.key&&y&&!e.expandedKeys.has(o.key)){e.toggleKey(o.key),a.stopPropagation();return}else if(a.key===M.collapse[l]&&e.selectionManager.focusedKey===o.key&&y&&e.expandedKeys.has(o.key)){e.toggleKey(o.key),a.stopPropagation();return}}switch(a.key){case"ArrowLeft":if(d==="arrow"){let v=l==="rtl"?f.nextNode():f.previousNode();if(v)a.preventDefault(),a.stopPropagation(),D(v),C(v,{containingElement:k(r.current)});else if(a.preventDefault(),a.stopPropagation(),l==="rtl")D(r.current),C(r.current,{containingElement:k(r.current)});else{f.currentNode=r.current;let g=j(f);g&&(D(g),C(g,{containingElement:k(r.current)}))}}break;case"ArrowRight":if(d==="arrow"){let v=l==="rtl"?f.previousNode():f.nextNode();if(v)a.preventDefault(),a.stopPropagation(),D(v),C(v,{containingElement:k(r.current)});else if(a.preventDefault(),a.stopPropagation(),l==="ltr")D(r.current),C(r.current,{containingElement:k(r.current)});else{f.currentNode=r.current;let g=j(f);g&&(D(g),C(g,{containingElement:k(r.current)}))}}break;case"ArrowUp":case"ArrowDown":!a.altKey&&r.current.contains(a.target)&&(a.stopPropagation(),a.preventDefault(),r.current.parentElement.dispatchEvent(new KeyboardEvent(a.nativeEvent.type,a.nativeEvent)));break;case"Tab":if(d==="tab"){let v=S(r.current,{tabbable:!0});v.currentNode=document.activeElement,(a.shiftKey?v.previousNode():v.nextNode())&&a.stopPropagation()}}},Ve=a=>{if(c.current=o.key,a.target!==r.current){Je()||e.selectionManager.setFocusedKey(o.key);return}},Ne=W(o.props),Ke=B.hasAction?Ne:{},z=$(L,Ke,{role:"row",onKeyDownCapture:Re,onFocus:Ve,"aria-label":o.textValue||void 0,"aria-selected":e.selectionManager.canSelectItem(o.key)?e.selectionManager.isSelected(o.key):void 0,"aria-disabled":e.selectionManager.isDisabled(o.key)||void 0,"aria-labelledby":m&&o.textValue?`${_(e,o.key)} ${m}`:void 0,id:_(e,o.key)});n&&(z["aria-rowindex"]=o.index+1);let Fe={role:"gridcell","aria-colindex":1};return{rowProps:{...$(z,w)},gridCellProps:Fe,descriptionProps:{id:m},...B}}function j(t){let e,r;do r=t.lastChild(),r&&(e=r);while(r);return e}const H=new WeakMap;function _r(t,e,r){let{direction:i}=T(),u=t.keyboardDelegate||new qe({collection:e.collection,ref:r,orientation:"horizontal",direction:i,disabledKeys:e.disabledKeys,disabledBehavior:e.selectionManager.disabledBehavior}),{labelProps:o,fieldProps:n,descriptionProps:p,errorMessageProps:l}=Ie({...t,labelElementType:"span"}),{gridProps:s}=ir({...t,...n,keyboardDelegate:u,shouldFocusWrap:!0,linkBehavior:"override"},e,r),[b,d]=P.useState(!1),{focusWithinProps:m}=Te({onFocusWithinChange:d}),c=E(t),h=P.useRef(e.collection.size);return P.useEffect(()=>{r.current&&h.current>0&&e.collection.size===0&&b&&r.current.focus(),h.current=e.collection.size},[e.collection.size,b,r]),H.set(e,{onRemove:t.onRemove}),{gridProps:$(s,c,{role:e.collection.size?"grid":null,"aria-atomic":!1,"aria-relevant":"additions","aria-live":b?"polite":"off",...m,...n}),labelProps:o,descriptionProps:p,errorMessageProps:l}}var J={};J={removeButtonLabel:"إزالة",removeDescription:"اضغط على مفتاح DELETE لإزالة علامة."};var Q={};Q={removeButtonLabel:"Премахване",removeDescription:"Натиснете Delete, за да премахнете маркера."};var X={};X={removeButtonLabel:"Odebrat",removeDescription:"Stisknutím klávesy Delete odeberete značku."};var Y={};Y={removeButtonLabel:"Fjern",removeDescription:"Tryk på Slet for at fjerne tag."};var Z={};Z={removeButtonLabel:"Entfernen",removeDescription:"Auf „Löschen“ drücken, um das Tag zu entfernen."};var ee={};ee={removeButtonLabel:"Κατάργηση",removeDescription:"Πατήστε Διαγραφή για να καταργήσετε την ετικέτα."};var re={};re={removeDescription:"Press Delete to remove tag.",removeButtonLabel:"Remove"};var te={};te={removeButtonLabel:"Quitar",removeDescription:"Pulse Eliminar para quitar la etiqueta."};var oe={};oe={removeButtonLabel:"Eemalda",removeDescription:"Sildi eemaldamiseks vajutage kustutusklahvi Delete."};var ae={};ae={removeButtonLabel:"Poista",removeDescription:"Poista tunniste painamalla Poista-painiketta."};var ie={};ie={removeButtonLabel:"Supprimer",removeDescription:"Appuyez sur Supprimer pour supprimer l’étiquette."};var ne={};ne={removeButtonLabel:"הסר",removeDescription:"לחץ על מחק כדי להסיר תג."};var le={};le={removeButtonLabel:"Ukloni",removeDescription:"Pritisnite Delete za uklanjanje oznake."};var ue={};ue={removeButtonLabel:"Eltávolítás",removeDescription:"Nyomja meg a Delete billentyűt a címke eltávolításához."};var se={};se={removeButtonLabel:"Rimuovi",removeDescription:"Premi Elimina per rimuovere il tag."};var ce={};ce={removeButtonLabel:"削除",removeDescription:"タグを削除するには、Delete キーを押します。"};var de={};de={removeButtonLabel:"제거",removeDescription:"태그를 제거하려면 Delete 키를 누르십시오."};var pe={};pe={removeButtonLabel:"Pašalinti",removeDescription:"Norėdami pašalinti žymą, paspauskite „Delete“ klavišą."};var be={};be={removeButtonLabel:"Noņemt",removeDescription:"Nospiediet Delete [Dzēst], lai noņemtu tagu."};var me={};me={removeButtonLabel:"Fjern",removeDescription:"Trykk på Slett for å fjerne taggen."};var fe={};fe={removeButtonLabel:"Verwijderen",removeDescription:"Druk op Verwijderen om de tag te verwijderen."};var ve={};ve={removeButtonLabel:"Usuń",removeDescription:"Naciśnij Usuń, aby usunąć znacznik."};var he={};he={removeButtonLabel:"Remover",removeDescription:"Pressione Delete para remover a tag."};var $e={};$e={removeButtonLabel:"Eliminar",removeDescription:"Prima Delete para eliminar a tag."};var ge={};ge={removeButtonLabel:"Îndepărtaţi",removeDescription:"Apăsați pe Delete (Ștergere) pentru a elimina eticheta."};var xe={};xe={removeButtonLabel:"Удалить",removeDescription:"Нажмите DELETE, чтобы удалить тег."};var ye={};ye={removeButtonLabel:"Odstrániť",removeDescription:"Ak chcete odstrániť značku, stlačte kláves Delete."};var De={};De={removeButtonLabel:"Odstrani",removeDescription:"Pritisnite Delete, da odstranite oznako."};var Be={};Be={removeButtonLabel:"Ukloni",removeDescription:"Pritisnite Obriši da biste uklonili oznaku."};var ke={};ke={removeButtonLabel:"Ta bort",removeDescription:"Tryck på Radera för att ta bort taggen."};var Ce={};Ce={removeButtonLabel:"Kaldır",removeDescription:"Etiketi kaldırmak için Sil tuşuna basın."};var Pe={};Pe={removeButtonLabel:"Вилучити",removeDescription:"Натисніть Delete, щоб вилучити тег."};var we={};we={removeButtonLabel:"删除",removeDescription:"按下“删除”以删除标记。"};var Ee={};Ee={removeButtonLabel:"移除",removeDescription:"按 Delete 鍵以移除標記。"};var Ae={};Ae={"ar-AE":J,"bg-BG":Q,"cs-CZ":X,"da-DK":Y,"de-DE":Z,"el-GR":ee,"en-US":re,"es-ES":te,"et-EE":oe,"fi-FI":ae,"fr-FR":ie,"he-IL":ne,"hr-HR":le,"hu-HU":ue,"it-IT":se,"ja-JP":ce,"ko-KR":de,"lt-LT":pe,"lv-LV":be,"nb-NO":me,"nl-NL":fe,"pl-PL":ve,"pt-BR":he,"pt-PT":$e,"ro-RO":ge,"ru-RU":xe,"sk-SK":ye,"sl-SI":De,"sr-SP":Be,"sv-SE":ke,"tr-TR":Ce,"uk-UA":Pe,"zh-CN":we,"zh-TW":Ee};function lr(t){return t&&t.__esModule?t.default:t}function ur(t,e,r){let{item:i}=t,u=Ze(lr(Ae),"@react-aria/tag"),o=I(),{onRemove:n}=H.get(e)||{},{rowProps:p,gridCellProps:l,...s}=nr({node:i},e,r);delete p.onKeyDownCapture;let{descriptionProps:b,...d}=s,m=B=>{(B.key==="Delete"||B.key==="Backspace")&&(B.preventDefault(),e.selectionManager.isSelected(i.key)?n==null||n(new Set(e.selectionManager.selectedKeys)):n==null||n(new Set([i.key])))},c=Qe();c==="virtual"&&typeof window<"u"&&"ontouchstart"in window&&(c="pointer");let h=n&&(c==="keyboard"||c==="virtual")?u.format("removeDescription"):"",w=He(h),y=i.key===e.selectionManager.focusedKey,A=E(i.props),L=W(i.props);return{removeButtonProps:{"aria-label":u.format("removeButtonLabel"),"aria-labelledby":`${o} ${p.id}`,isDisabled:e.disabledKeys.has(i.key)||i.props.isDisabled,id:o,onPress:()=>n?n(new Set([i.key])):null,excludeFromTabOrder:!0},rowProps:$(p,A,L,{tabIndex:y||e.selectionManager.focusedKey==null?0:-1,onKeyDown:n?m:void 0,"aria-describedby":w["aria-describedby"]}),gridCellProps:$(l,{"aria-errormessage":t["aria-errormessage"],"aria-label":t["aria-label"]}),...d,allowsRemoving:!!n}}const Mr=N(),sr=P.createContext(null),jr=N();function cr(t){const r=["isPressed","preventFocusOnPress","shouldCancelOnPointerExit","allowTextSelectionOnPress","onPress","onPressStart","onPressEnd","onPressChange","onPressUp"].some(o=>o in t)?"button":void 0,{pressProps:i,isPressed:u}=Ge(t);return{pressProps:{...i,role:r},isPressed:u}}const F=U.div`
  ${or.Bold}
  display: flex;
  align-items: center;
  min-height: 2.2rem;
  padding: 0.3rem 0.6rem;
  line-height: 1;
  font-size: 1.2rem;
  gap: 0.6rem;

  .aje-btn--chip {
    --btn-height: 2.2rem;
    --btn-padding-horiz: 0;
    --btn-padding-vert: 0;
    --btn-bg-clr: none;
    --btn-hover-bg-clr: var(--chip-btn-hover-bg-clr);
    --btn-pressed-transform: none;
    --btn-border-radius: 0 var(--chip-radius) var(--chip-radius) 0;
    --btn-text-clr: var(--chip-text-clr);
    --btn-hover-text-clr: var(--chip-text-clr);

    width: 2.2rem;
    position: relative;
    isolation: isolate;
    margin-right: -0.6rem;
    margin-top: -0.6rem;
    margin-bottom: -0.6rem;
  }
`,Le=U.div`
  display: inline-block;
  background-color: var(--chip-bg-clr);
  color: var(--chip-text-clr);
  border-radius: var(--chip-radius);
  border: var(--chip-border);

  &.aje-chip--success {
    --chip-bg-clr: var(--success100);
    --chip-border: 1px solid #aee1b6;
    --chip-hover-bg-clr: var(--success200);
    --chip-btn-hover-bg-clr: var(--success200);
    --chip-text-clr: var(--success800);
  }

  &.aje-chip--warning {
    --chip-bg-clr: var(--warning100);
    --chip-text-clr: var(--warning700);
    --chip-hover-bg-clr: var(--warning200);
    --chip-btn-hover-bg-clr: var(--warning200);
    --chip-border: 1px solid #e3d488;
  }

  &.aje-chip--danger {
    --chip-bg-clr: var(--error100);
    --chip-text-clr: var(--error800);
    --chip-hover-bg-clr: var(--error200);
    --chip-btn-hover-bg-clr: var(--error200);
    --chip-border: 1px solid #f1b6b6;
  }

  &[role="button"]:hover,
  &[aria-selected]:hover {
    cursor: pointer;
    --chip-bg-clr: var(--chip-hover-bg-clr);
  }

  /* For some reason, when you click the remove button on a
    chip, the focus moves to the last keyboard-focused element.
    BUT it doesn't set the focus-visible attribute to true.
    So we have to setup the outline twice
  */
  &:focus-visible {
    outline: none;
  }

  &[data-focus-visible="true"] {
    outline: var(--outline);

    &:focus-within {
      outline: var(--outline);
    }
  }

  &[aria-selected="true"] {
    --chip-bg-clr: var(--chip-selected-bg-clr);
    --chip-text-clr: var(--chip-selected-text-clr);
    --chip-hover-bg-clr: var(--chip-selected-hover-bg-clr);
    --chip-btn-hover-bg-clr: var(--chip-selected-hover-bg-clr);

    &:hover {
      --chip-hover-bg-clr: var(--chip-selected-hover-bg-clr);
    }
  }

  &[aria-disabled] {
    opacity: 0.5;

    ${F} button::hover {
      &::before {
        background-color: var(--neutral100);
      }
    }
  }
`,dr=N();function R(...t){const[e,r]=tr(dr,t[0],t[1]);if(t.length===2)return x.jsx(V,{...e,ref:r,allowsRemoving:!!e.onRemove});const i=t[2];return x.jsx(pr,{item:i,itemRef:r,...e})}const q=er("item",R);function pr(t){const{item:e}=t,r=Me(t.itemRef),i=P.useContext(sr),{rowProps:u,gridCellProps:o,removeButtonProps:n,allowsRemoving:p,isFocused:l,isSelected:s}=ur(t,i,r),{focusProps:b,isFocusVisible:d}=rr({within:!0}),m=i.disabledKeys.has(e.key),c=O({componentClassName:"aje-chip",values:{isSelected:s,isFocusVisible:d,isFocused:l},...t});return x.jsx(Le,{ref:r,...$(u,b),...c,children:x.jsxs(F,{...o,children:[c.children,p&&x.jsx(G,{icon:"close",size:"small",variant:"chip",...$(n,{isDisabled:m})})]})})}const V=ze.forwardRef(function(e,r){const{className:i,variant:u,onRemove:o,isDisabled:n,children:p,allowsRemoving:l=!1,...s}=e,{pressProps:b}=cr(s),d=O({componentClassName:"aje-chip",values:{isSelected:!1,isFocusVisible:!1,isFocused:!1},...e});return x.jsx(Le,{ref:r,...$({"aria-disabled":n||void 0},b),...d,...E(e),children:x.jsxs(F,{children:[d.children,l&&x.jsx(G,{icon:"close",size:"small",variant:"chip",isDisabled:n,onPress:o})]})})});try{R.displayName="ChipLeaf",R.__docgenInfo={description:"",displayName:"ChipLeaf",props:{0:{defaultValue:null,description:"",name:"0",required:!0,type:{name:"ChipProps<T>"}},1:{defaultValue:null,description:"",name:"1",required:!0,type:{name:"ForwardedRef<HTMLDivElement>"}},2:{defaultValue:null,description:"",name:"2",required:!0,type:{name:"Node<T>"}},length:{defaultValue:null,description:"",name:"length",required:!0,type:{name:"enum",value:[{value:"2"},{value:"3"}]}}}}}catch{}try{q.displayName="Chip",q.__docgenInfo={description:"Chip component. Can be used stand-alone, or within a parent\n`ChipGroup`",displayName:"Chip",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"ChipVariants"}},onRemove:{defaultValue:null,description:`Handler that is called when the user
clicks the remove button for the chip`,name:"onRemove",required:!1,type:{name:"(e: PressEvent) => void"}},isDisabled:{defaultValue:null,description:"Whether the press events should be disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"Id for this item",name:"id",required:!1,type:{name:"Key"}},onAction:{defaultValue:null,description:"Associated callback when an action is performed on this item",name:"onAction",required:!1,type:{name:"() => void"}},textValue:{defaultValue:null,description:"A string representation of the item's contents, used for features like typeahead.",name:"textValue",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"An accessibility label for this item.",name:"aria-label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<ItemRenderProps>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<ItemRenderProps>"}}}}}catch{}try{V.displayName="ChipInternal",V.__docgenInfo={description:"",displayName:"ChipInternal",props:{allowsRemoving:{defaultValue:null,description:"",name:"allowsRemoving",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"ChipVariants"}},onRemove:{defaultValue:null,description:`Handler that is called when the user
clicks the remove button for the chip`,name:"onRemove",required:!1,type:{name:"(e: PressEvent) => void"}},isDisabled:{defaultValue:null,description:"Whether the press events should be disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"Id for this item",name:"id",required:!1,type:{name:"Key"}},onAction:{defaultValue:null,description:"Associated callback when an action is performed on this item",name:"onAction",required:!1,type:{name:"() => void"}},textValue:{defaultValue:null,description:"A string representation of the item's contents, used for features like typeahead.",name:"textValue",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"An accessibility label for this item.",name:"aria-label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<ItemRenderProps>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<ItemRenderProps>"}}}}}catch{}export{_r as $,q as C,sr as a,jr as b,R as c,Mr as d};
