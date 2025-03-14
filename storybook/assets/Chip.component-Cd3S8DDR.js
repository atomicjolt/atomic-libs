import{j as D}from"./jsx-runtime-D_zvdyIk.js";import{r as E,R as We}from"./index-DmM0KDA7.js";import{$ as _,b as g,e as Oe,f as Ue,a as Ge}from"./useObjectRef-BO7mrmvR.js";import{$ as F}from"./filterDOMProps-CeZl_uWj.js";import{a as He,$ as _e}from"./useSelectableList-CerkSCCR.js";import{$ as Je}from"./useField-BhG43OVF.js";import{$ as Qe}from"./useFocusWithin-CrVHK3Cv.js";import{$ as Xe,a as Ye}from"./useHighlightSelectionDescription-DKPvJoA_.js";import{$ as Ze}from"./useHasTabbableChild-5m2xZxEz.js";import{$ as J}from"./context-BF7eBGFA.js";import{g as Q,$ as er}from"./usePress-Cxy0og0d.js";import{$ as rr}from"./useDescription-CP-qk7_s.js";import{q as B,j as tr,H as or,$ as ar}from"./useFocusable-B7cTVP20.js";import{$ as C}from"./getScrollParent-BL0kfGii.js";import{a as w}from"./scrollIntoView-DuDju04b.js";import{$ as W}from"./FocusScope-CLRP0VYY.js";import{i as ir,f as nr}from"./useSelectableItem-CQFuthIx.js";import{$ as lr}from"./useLocalizedStringFormatter-BJB32GAh.js";import{b as ur}from"./CollectionBuilder-BOiBnYCj.js";import{u as sr}from"./useFocusRing-4PdL76fJ.js";import{c as M,u as cr}from"./index-CqJC2f1M.js";import{u as X}from"./useRenderProps-BzxgHqRb.js";import{d as Y}from"./styled-components.browser.esm-B0S50oBn.js";import{m as dr}from"./mixins-CgZ-Dp8B.js";import{I as Z}from"./IconButton.component-DZzctQlJ.js";const j=new WeakMap;function O(t,e){var r;let{id:i}=(r=j.get(t))!==null&&r!==void 0?r:{};if(!i)throw new Error("Unknown list");return`${i}-${pr(e)}`}function pr(t){return typeof t=="string"?t.replace(/\s*/g,""):""+t}function br(t,e,r){let{isVirtualized:i,keyboardDelegate:s,layoutDelegate:o,onAction:n,disallowTypeAhead:b,linkBehavior:l="action",keyboardNavigationBehavior:c="arrow"}=t;!t["aria-label"]&&!t["aria-labelledby"]&&console.warn("An aria-label or aria-labelledby prop is required for accessibility.");let{listProps:m}=He({selectionManager:e.selectionManager,collection:e.collection,disabledKeys:e.disabledKeys,ref:r,keyboardDelegate:s,layoutDelegate:o,isVirtualized:i,selectOnFocus:e.selectionManager.selectionBehavior==="replace",shouldFocusWrap:t.shouldFocusWrap,linkBehavior:l,disallowTypeAhead:b,autoFocus:t.autoFocus}),d=_(t.id);j.set(e,{id:d,onAction:n,linkBehavior:l,keyboardNavigationBehavior:c});let p=Xe({selectionManager:e.selectionManager,hasItemActions:!!n}),f=Ze(r,{isDisabled:e.collection.size!==0}),v=F(t,{labelable:!0}),x=g(v,{role:"grid",id:d,"aria-multiselectable":e.selectionManager.selectionMode==="multiple"?"true":void 0},e.collection.size===0?{tabIndex:f?-1:0}:m,p);return i&&(x["aria-rowcount"]=e.collection.size,x["aria-colcount"]=1),Ye({},e),{gridProps:x}}const U={expand:{ltr:"ArrowRight",rtl:"ArrowLeft"},collapse:{ltr:"ArrowLeft",rtl:"ArrowRight"}};function mr(t,e,r){var i,s;let{node:o,isVirtualized:n,shouldSelectOnPressUp:b}=t,{direction:l}=J(),{onAction:c,linkBehavior:m,keyboardNavigationBehavior:d}=j.get(e),p=Oe(),f=E.useRef(null),v=()=>{var a;r.current!==null&&(f.current!=null&&o.key!==f.current||!(!((a=r.current)===null||a===void 0)&&a.contains(document.activeElement)))&&B(r.current)},x={},y=t.hasChildItems,K=e.selectionManager.isLink(o.key);if(o!=null&&"expandedKeys"in e){var A,L,R;let a=(A=(L=e.collection).getChildren)===null||A===void 0?void 0:A.call(L,o.key);y=y||[...a??[]].length>1,c==null&&!K&&e.selectionManager.selectionMode==="none"&&y&&(c=()=>e.toggleKey(o.key));let h=y?e.expandedKeys.has(o.key):void 0,k=1;var V;if(o.level>0&&(o==null?void 0:o.parentKey)!=null){let u=e.collection.getItem(o.parentKey);if(u){var N,P;let $=(N=(P=e.collection).getChildren)===null||N===void 0?void 0:N.call(P,u.key);k=ir($).index+1}}else k=((V=(R=[...e.collection].filter(u=>u.level===0).at(-1))===null||R===void 0?void 0:R.index)!==null&&V!==void 0?V:0)+1;x={"aria-expanded":h,"aria-level":o.level+1,"aria-posinset":(o==null?void 0:o.index)+1,"aria-setsize":k}}let{itemProps:Se,...q}=nr({selectionManager:e.selectionManager,key:o.key,ref:r,isVirtualized:n,shouldSelectOnPressUp:b,onAction:c||!((i=o.props)===null||i===void 0)&&i.onAction?Ue((s=o.props)===null||s===void 0?void 0:s.onAction,c?()=>c(o.key):void 0):void 0,focus:v,linkBehavior:m}),Me=a=>{if(!a.currentTarget.contains(a.target)||!r.current||!document.activeElement)return;let h=W(r.current);if(h.currentNode=document.activeElement,"expandedKeys"in e&&document.activeElement===r.current){if(a.key===U.expand[l]&&e.selectionManager.focusedKey===o.key&&y&&!e.expandedKeys.has(o.key)){e.toggleKey(o.key),a.stopPropagation();return}else if(a.key===U.collapse[l]&&e.selectionManager.focusedKey===o.key&&y&&e.expandedKeys.has(o.key)){e.toggleKey(o.key),a.stopPropagation();return}}switch(a.key){case"ArrowLeft":if(d==="arrow"){let u=l==="rtl"?h.nextNode():h.previousNode();if(u)a.preventDefault(),a.stopPropagation(),B(u),w(u,{containingElement:C(r.current)});else if(a.preventDefault(),a.stopPropagation(),l==="rtl")B(r.current),w(r.current,{containingElement:C(r.current)});else{h.currentNode=r.current;let $=G(h);$&&(B($),w($,{containingElement:C(r.current)}))}}break;case"ArrowRight":if(d==="arrow"){let u=l==="rtl"?h.previousNode():h.nextNode();if(u)a.preventDefault(),a.stopPropagation(),B(u),w(u,{containingElement:C(r.current)});else if(a.preventDefault(),a.stopPropagation(),l==="ltr")B(r.current),w(r.current,{containingElement:C(r.current)});else{h.currentNode=r.current;let $=G(h);$&&(B($),w($,{containingElement:C(r.current)}))}}break;case"ArrowUp":case"ArrowDown":if(!a.altKey&&r.current.contains(a.target)){var k;a.stopPropagation(),a.preventDefault(),(k=r.current.parentElement)===null||k===void 0||k.dispatchEvent(new KeyboardEvent(a.nativeEvent.type,a.nativeEvent))}break;case"Tab":if(d==="tab"){let u=W(r.current,{tabbable:!0});u.currentNode=document.activeElement,(a.shiftKey?u.previousNode():u.nextNode())&&a.stopPropagation()}}},je=a=>{if(f.current=o.key,a.target!==r.current){tr()||e.selectionManager.setFocusedKey(o.key);return}},Ie=Q(o.props),qe=q.hasAction?Ie:{},T=g(Se,qe,{role:"row",onKeyDownCapture:Me,onFocus:je,"aria-label":o.textValue||void 0,"aria-selected":e.selectionManager.canSelectItem(o.key)?e.selectionManager.isSelected(o.key):void 0,"aria-disabled":e.selectionManager.isDisabled(o.key)||void 0,"aria-labelledby":p&&o.textValue?`${O(e,o.key)} ${p}`:void 0,id:O(e,o.key)});n&&(T["aria-rowindex"]=o.index+1);let Te={role:"gridcell","aria-colindex":1};return{rowProps:{...g(T,x)},gridCellProps:Te,descriptionProps:{id:p},...q}}function G(t){let e=null,r=null;do r=t.lastChild(),r&&(e=r);while(r);return e}const ee=new WeakMap;function Gr(t,e,r){let{direction:i}=J(),s=t.keyboardDelegate||new _e({collection:e.collection,ref:r,orientation:"horizontal",direction:i,disabledKeys:e.disabledKeys,disabledBehavior:e.selectionManager.disabledBehavior}),{labelProps:o,fieldProps:n,descriptionProps:b,errorMessageProps:l}=Je({...t,labelElementType:"span"}),{gridProps:c}=br({...t,...n,keyboardDelegate:s,shouldFocusWrap:!0,linkBehavior:"override"},e,r),[m,d]=E.useState(!1),{focusWithinProps:p}=Qe({onFocusWithinChange:d}),f=F(t),v=E.useRef(e.collection.size);return E.useEffect(()=>{r.current&&v.current>0&&e.collection.size===0&&m&&r.current.focus(),v.current=e.collection.size},[e.collection.size,m,r]),ee.set(e,{onRemove:t.onRemove}),{gridProps:g(c,f,{role:e.collection.size?"grid":null,"aria-atomic":!1,"aria-relevant":"additions","aria-live":m?"polite":"off",...p,...n}),labelProps:o,descriptionProps:b,errorMessageProps:l}}var re={};re={removeButtonLabel:"إزالة",removeDescription:"اضغط على مفتاح DELETE لإزالة علامة."};var te={};te={removeButtonLabel:"Премахване",removeDescription:"Натиснете Delete, за да премахнете маркера."};var oe={};oe={removeButtonLabel:"Odebrat",removeDescription:"Stisknutím klávesy Delete odeberete značku."};var ae={};ae={removeButtonLabel:"Fjern",removeDescription:"Tryk på Slet for at fjerne tag."};var ie={};ie={removeButtonLabel:"Entfernen",removeDescription:"Auf „Löschen“ drücken, um das Tag zu entfernen."};var ne={};ne={removeButtonLabel:"Κατάργηση",removeDescription:"Πατήστε Διαγραφή για να καταργήσετε την ετικέτα."};var le={};le={removeDescription:"Press Delete to remove tag.",removeButtonLabel:"Remove"};var ue={};ue={removeButtonLabel:"Quitar",removeDescription:"Pulse Eliminar para quitar la etiqueta."};var se={};se={removeButtonLabel:"Eemalda",removeDescription:"Sildi eemaldamiseks vajutage kustutusklahvi Delete."};var ce={};ce={removeButtonLabel:"Poista",removeDescription:"Poista tunniste painamalla Poista-painiketta."};var de={};de={removeButtonLabel:"Supprimer",removeDescription:"Appuyez sur Supprimer pour supprimer l’étiquette."};var pe={};pe={removeButtonLabel:"הסר",removeDescription:"לחץ על מחק כדי להסיר תג."};var be={};be={removeButtonLabel:"Ukloni",removeDescription:"Pritisnite Delete za uklanjanje oznake."};var me={};me={removeButtonLabel:"Eltávolítás",removeDescription:"Nyomja meg a Delete billentyűt a címke eltávolításához."};var fe={};fe={removeButtonLabel:"Rimuovi",removeDescription:"Premi Elimina per rimuovere il tag."};var ve={};ve={removeButtonLabel:"削除",removeDescription:"タグを削除するには、Delete キーを押します。"};var he={};he={removeButtonLabel:"제거",removeDescription:"태그를 제거하려면 Delete 키를 누르십시오."};var $e={};$e={removeButtonLabel:"Pašalinti",removeDescription:"Norėdami pašalinti žymą, paspauskite „Delete“ klavišą."};var ge={};ge={removeButtonLabel:"Noņemt",removeDescription:"Nospiediet Delete [Dzēst], lai noņemtu tagu."};var xe={};xe={removeButtonLabel:"Fjern",removeDescription:"Trykk på Slett for å fjerne taggen."};var ye={};ye={removeButtonLabel:"Verwijderen",removeDescription:"Druk op Verwijderen om de tag te verwijderen."};var De={};De={removeButtonLabel:"Usuń",removeDescription:"Naciśnij Usuń, aby usunąć znacznik."};var ke={};ke={removeButtonLabel:"Remover",removeDescription:"Pressione Delete para remover a tag."};var Be={};Be={removeButtonLabel:"Eliminar",removeDescription:"Prima Delete para eliminar a tag."};var Pe={};Pe={removeButtonLabel:"Îndepărtaţi",removeDescription:"Apăsați pe Delete (Ștergere) pentru a elimina eticheta."};var Ce={};Ce={removeButtonLabel:"Удалить",removeDescription:"Нажмите DELETE, чтобы удалить тег."};var we={};we={removeButtonLabel:"Odstrániť",removeDescription:"Ak chcete odstrániť značku, stlačte kláves Delete."};var Ee={};Ee={removeButtonLabel:"Odstrani",removeDescription:"Pritisnite Delete, da odstranite oznako."};var Ae={};Ae={removeButtonLabel:"Ukloni",removeDescription:"Pritisnite Obriši da biste uklonili oznaku."};var Le={};Le={removeButtonLabel:"Ta bort",removeDescription:"Tryck på Radera för att ta bort taggen."};var Re={};Re={removeButtonLabel:"Kaldır",removeDescription:"Etiketi kaldırmak için Sil tuşuna basın."};var Ve={};Ve={removeButtonLabel:"Вилучити",removeDescription:"Натисніть Delete, щоб вилучити тег."};var Ne={};Ne={removeButtonLabel:"删除",removeDescription:"按下“删除”以删除标记。"};var Fe={};Fe={removeButtonLabel:"移除",removeDescription:"按 Delete 鍵以移除標記。"};var Ke={};Ke={"ar-AE":re,"bg-BG":te,"cs-CZ":oe,"da-DK":ae,"de-DE":ie,"el-GR":ne,"en-US":le,"es-ES":ue,"et-EE":se,"fi-FI":ce,"fr-FR":de,"he-IL":pe,"hr-HR":be,"hu-HU":me,"it-IT":fe,"ja-JP":ve,"ko-KR":he,"lt-LT":$e,"lv-LV":ge,"nb-NO":xe,"nl-NL":ye,"pl-PL":De,"pt-BR":ke,"pt-PT":Be,"ro-RO":Pe,"ru-RU":Ce,"sk-SK":we,"sl-SI":Ee,"sr-SP":Ae,"sv-SE":Le,"tr-TR":Re,"uk-UA":Ve,"zh-CN":Ne,"zh-TW":Fe};function fr(t){return t&&t.__esModule?t.default:t}function vr(t,e,r){let{item:i}=t,s=lr(fr(Ke),"@react-aria/tag"),o=_(),{onRemove:n}=ee.get(e)||{},{rowProps:b,gridCellProps:l,...c}=mr({node:i},e,r);delete b.onKeyDownCapture;let{descriptionProps:m,...d}=c,p=e.disabledKeys.has(i.key)||i.props.isDisabled,f=P=>{if(P.key==="Delete"||P.key==="Backspace"){if(p)return;P.preventDefault(),e.selectionManager.isSelected(i.key)?n==null||n(new Set(e.selectionManager.selectedKeys)):n==null||n(new Set([i.key]))}},v=or();v==="virtual"&&typeof window<"u"&&"ontouchstart"in window&&(v="pointer");let x=n&&(v==="keyboard"||v==="virtual")?s.format("removeDescription"):"",y=rr(x),K=i.key===e.selectionManager.focusedKey,A=e.selectionManager.focusedKey!=null,L=-1;!p&&(K||!A)&&(L=0);let R=F(i.props),V=Q(i.props),{focusableProps:N}=ar({isDisabled:p},r);return{removeButtonProps:{"aria-label":s.format("removeButtonLabel"),"aria-labelledby":`${o} ${b.id}`,isDisabled:p,id:o,onPress:()=>n?n(new Set([i.key])):null,excludeFromTabOrder:!0},rowProps:g(N,b,R,V,{tabIndex:L,onKeyDown:n?f:void 0,"aria-describedby":y["aria-describedby"]}),gridCellProps:g(l,{"aria-errormessage":t["aria-errormessage"],"aria-label":t["aria-label"]}),...d,allowsRemoving:!!n}}const Hr=M(),hr=E.createContext(null),_r=M();function $r(t){const r=["isPressed","preventFocusOnPress","shouldCancelOnPointerExit","allowTextSelectionOnPress","onPress","onPressStart","onPressEnd","onPressChange","onPressUp"].some(o=>o in t)?"button":void 0,{pressProps:i,isPressed:s}=er(t);return{pressProps:{...i,role:r},isPressed:s}}const I=Y.div`
  ${dr.Bold}
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
`,ze=Y.div`
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

    ${I} button::hover {
      &::before {
        background-color: var(--neutral100);
      }
    }
  }
`,gr=M();function z(...t){const[e,r]=cr(gr,t[0],t[1]);if(t.length===2)return D.jsx(S,{...e,ref:r,allowsRemoving:!!e.onRemove});const i=t[2];return D.jsx(xr,{item:i,itemRef:r,...e})}const H=ur("item",z);function xr(t){const{item:e}=t,r=Ge(t.itemRef),i=E.useContext(hr),{rowProps:s,gridCellProps:o,removeButtonProps:n,allowsRemoving:b,isFocused:l,isSelected:c}=vr(t,i,r),{focusProps:m,isFocusVisible:d}=sr({within:!0}),p=i.disabledKeys.has(e.key),f=X({componentClassName:"aje-chip",values:{isSelected:c,isFocusVisible:d,isFocused:l},...t});return D.jsx(ze,{ref:r,...g(s,m),...f,children:D.jsxs(I,{...o,children:[f.children,b&&D.jsx(Z,{icon:"close",size:"small",variant:"chip",...g(n,{isDisabled:p})})]})})}const S=We.forwardRef(function(e,r){const{className:i,variant:s,onRemove:o,isDisabled:n,children:b,allowsRemoving:l=!1,...c}=e,{pressProps:m}=$r(c),d=X({componentClassName:"aje-chip",values:{isSelected:!1,isFocusVisible:!1,isFocused:!1},...e});return D.jsx(ze,{ref:r,...g({"aria-disabled":n||void 0},m),...d,...F(e),children:D.jsxs(I,{children:[d.children,l&&D.jsx(Z,{icon:"close",size:"small",variant:"chip",isDisabled:n,onPress:o})]})})});try{z.displayName="ChipLeaf",z.__docgenInfo={description:"",displayName:"ChipLeaf",props:{0:{defaultValue:null,description:"",name:"0",required:!0,type:{name:"ChipProps<T>"}},1:{defaultValue:null,description:"",name:"1",required:!0,type:{name:"ForwardedRef<HTMLDivElement>"}},2:{defaultValue:null,description:"",name:"2",required:!0,type:{name:"Node<T>"}},length:{defaultValue:null,description:"",name:"length",required:!0,type:{name:"enum",value:[{value:"2"},{value:"3"}]}}}}}catch{}try{H.displayName="Chip",H.__docgenInfo={description:"Chip component. Can be used stand-alone, or within a parent\n`ChipGroup`",displayName:"Chip",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"ChipVariants"}},onRemove:{defaultValue:null,description:`Handler that is called when the user
clicks the remove button for the chip`,name:"onRemove",required:!1,type:{name:"(e: PressEvent) => void"}},isDisabled:{defaultValue:null,description:"Whether the press events should be disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"Id for this item",name:"id",required:!1,type:{name:"Key"}},onAction:{defaultValue:null,description:"Associated callback when an action is performed on this item",name:"onAction",required:!1,type:{name:"() => void"}},textValue:{defaultValue:null,description:"A string representation of the item's contents, used for features like typeahead.",name:"textValue",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"An accessibility label for this item.",name:"aria-label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<ItemRenderProps>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<ItemRenderProps>"}}}}}catch{}try{S.displayName="ChipInternal",S.__docgenInfo={description:"",displayName:"ChipInternal",props:{allowsRemoving:{defaultValue:null,description:"",name:"allowsRemoving",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"ChipVariants"}},onRemove:{defaultValue:null,description:`Handler that is called when the user
clicks the remove button for the chip`,name:"onRemove",required:!1,type:{name:"(e: PressEvent) => void"}},isDisabled:{defaultValue:null,description:"Whether the press events should be disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"Id for this item",name:"id",required:!1,type:{name:"Key"}},onAction:{defaultValue:null,description:"Associated callback when an action is performed on this item",name:"onAction",required:!1,type:{name:"() => void"}},textValue:{defaultValue:null,description:"A string representation of the item's contents, used for features like typeahead.",name:"textValue",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"An accessibility label for this item.",name:"aria-label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<ItemRenderProps>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<ItemRenderProps>"}}}}}catch{}export{Gr as $,H as C,hr as a,_r as b,z as c,Hr as d};
