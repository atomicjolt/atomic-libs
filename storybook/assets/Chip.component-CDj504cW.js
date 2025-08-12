import{j as D}from"./jsx-runtime-D_zvdyIk.js";import{r as E,R as Oe}from"./index-BCtMShv3.js";import{$ as _,a as x,e as Ue,f as Ge,b as He}from"./useObjectRef-B4hnndUj.js";import{$ as F}from"./filterDOMProps-CeZl_uWj.js";import{a as _e,$ as Je}from"./useSelectableList-_nP8zjTo.js";import{$ as Qe}from"./useField-D8gfBVj0.js";import{$ as Xe}from"./useFocusWithin-CUff8KyO.js";import{$ as Ye,a as Ze}from"./useHighlightSelectionDescription-BpNZI8eN.js";import{$ as er}from"./useHasTabbableChild-DbNVCcYN.js";import{$ as J}from"./context-z6pb9OkM.js";import{i as Q,$ as rr}from"./usePress-DRrD1IP8.js";import{$ as tr}from"./useDescription-BfD2gYva.js";import{q as B,j as or,H as ar,$ as ir}from"./useFocusable-B7HbK8LX.js";import{$ as C}from"./getScrollParent-BL0kfGii.js";import{a as w}from"./scrollIntoView-DuDju04b.js";import{$ as W}from"./FocusScope-BPqc7wak.js";import{i as nr,f as lr}from"./useSelectableItem-CnP4hcGx.js";import{$ as ur}from"./useLocalizedStringFormatter-BmC8c4z2.js";import{b as sr}from"./CollectionBuilder-4ZFsDDvv.js";import{$ as X}from"./useLink-CA4JS4F-.js";import{u as cr}from"./useFocusRing-C-zHDrKK.js";import{c as M,u as dr}from"./index-C_lK3xe_.js";import{u as Y}from"./useRenderProps-CP918x9p.js";import{d as Z}from"./styled-components.browser.esm-Y4FpNNpy.js";import{m as pr}from"./mixins-XviowZ_6.js";import{I as ee}from"./IconButton.component-DYMySrnG.js";const j=new WeakMap;function O(t,e){var r;let{id:i}=(r=j.get(t))!==null&&r!==void 0?r:{};if(!i)throw new Error("Unknown list");return`${i}-${br(e)}`}function br(t){return typeof t=="string"?t.replace(/\s*/g,""):""+t}function mr(t,e,r){let{isVirtualized:i,keyboardDelegate:c,layoutDelegate:o,onAction:n,disallowTypeAhead:f,linkBehavior:l="action",keyboardNavigationBehavior:d="arrow"}=t;!t["aria-label"]&&!t["aria-labelledby"]&&console.warn("An aria-label or aria-labelledby prop is required for accessibility.");let{listProps:v}=_e({selectionManager:e.selectionManager,collection:e.collection,disabledKeys:e.disabledKeys,ref:r,keyboardDelegate:c,layoutDelegate:o,isVirtualized:i,selectOnFocus:e.selectionManager.selectionBehavior==="replace",shouldFocusWrap:t.shouldFocusWrap,linkBehavior:l,disallowTypeAhead:f,autoFocus:t.autoFocus}),p=_(t.id);j.set(e,{id:p,onAction:n,linkBehavior:l,keyboardNavigationBehavior:d});let u=Ye({selectionManager:e.selectionManager,hasItemActions:!!n}),b=er(r,{isDisabled:e.collection.size!==0}),m=F(t,{labelable:!0}),$=x(m,{role:"grid",id:p,"aria-multiselectable":e.selectionManager.selectionMode==="multiple"?"true":void 0},e.collection.size===0?{tabIndex:b?-1:0}:v,u);return i&&($["aria-rowcount"]=e.collection.size,$["aria-colcount"]=1),Ze({},e),{gridProps:$}}const U={expand:{ltr:"ArrowRight",rtl:"ArrowLeft"},collapse:{ltr:"ArrowLeft",rtl:"ArrowRight"}};function fr(t,e,r){var i,c;let{node:o,isVirtualized:n,shouldSelectOnPressUp:f}=t,{direction:l}=J(),{onAction:d,linkBehavior:v,keyboardNavigationBehavior:p}=j.get(e),u=Ue(),b=E.useRef(null),m=()=>{var a;r.current!==null&&(b.current!=null&&o.key!==b.current||!(!((a=r.current)===null||a===void 0)&&a.contains(document.activeElement)))&&B(r.current)},$={},y=t.hasChildItems,K=e.selectionManager.isLink(o.key);if(o!=null&&"expandedKeys"in e){var A,L,R;let a=(A=(L=e.collection).getChildren)===null||A===void 0?void 0:A.call(L,o.key);y=y||[...a??[]].length>1,d==null&&!K&&e.selectionManager.selectionMode==="none"&&y&&(d=()=>e.toggleKey(o.key));let h=y?e.expandedKeys.has(o.key):void 0,k=1;var V;if(o.level>0&&(o==null?void 0:o.parentKey)!=null){let s=e.collection.getItem(o.parentKey);if(s){var N,P;let g=(N=(P=e.collection).getChildren)===null||N===void 0?void 0:N.call(P,s.key);k=nr(g).index+1}}else k=((V=(R=[...e.collection].filter(s=>s.level===0).at(-1))===null||R===void 0?void 0:R.index)!==null&&V!==void 0?V:0)+1;$={"aria-expanded":h,"aria-level":o.level+1,"aria-posinset":(o==null?void 0:o.index)+1,"aria-setsize":k}}let{itemProps:Me,...q}=lr({selectionManager:e.selectionManager,key:o.key,ref:r,isVirtualized:n,shouldSelectOnPressUp:f,onAction:d||!((i=o.props)===null||i===void 0)&&i.onAction?Ge((c=o.props)===null||c===void 0?void 0:c.onAction,d?()=>d(o.key):void 0):void 0,focus:m,linkBehavior:v}),je=a=>{if(!a.currentTarget.contains(a.target)||!r.current||!document.activeElement)return;let h=W(r.current);if(h.currentNode=document.activeElement,"expandedKeys"in e&&document.activeElement===r.current){if(a.key===U.expand[l]&&e.selectionManager.focusedKey===o.key&&y&&!e.expandedKeys.has(o.key)){e.toggleKey(o.key),a.stopPropagation();return}else if(a.key===U.collapse[l]&&e.selectionManager.focusedKey===o.key&&y&&e.expandedKeys.has(o.key)){e.toggleKey(o.key),a.stopPropagation();return}}switch(a.key){case"ArrowLeft":if(p==="arrow"){let s=l==="rtl"?h.nextNode():h.previousNode();if(s)a.preventDefault(),a.stopPropagation(),B(s),w(s,{containingElement:C(r.current)});else if(a.preventDefault(),a.stopPropagation(),l==="rtl")B(r.current),w(r.current,{containingElement:C(r.current)});else{h.currentNode=r.current;let g=G(h);g&&(B(g),w(g,{containingElement:C(r.current)}))}}break;case"ArrowRight":if(p==="arrow"){let s=l==="rtl"?h.previousNode():h.nextNode();if(s)a.preventDefault(),a.stopPropagation(),B(s),w(s,{containingElement:C(r.current)});else if(a.preventDefault(),a.stopPropagation(),l==="ltr")B(r.current),w(r.current,{containingElement:C(r.current)});else{h.currentNode=r.current;let g=G(h);g&&(B(g),w(g,{containingElement:C(r.current)}))}}break;case"ArrowUp":case"ArrowDown":if(!a.altKey&&r.current.contains(a.target)){var k;a.stopPropagation(),a.preventDefault(),(k=r.current.parentElement)===null||k===void 0||k.dispatchEvent(new KeyboardEvent(a.nativeEvent.type,a.nativeEvent))}break;case"Tab":if(p==="tab"){let s=W(r.current,{tabbable:!0});s.currentNode=document.activeElement,(a.shiftKey?s.previousNode():s.nextNode())&&a.stopPropagation()}}},Ie=a=>{if(b.current=o.key,a.target!==r.current){or()||e.selectionManager.setFocusedKey(o.key);return}},qe=Q(o.props),Te=q.hasAction?qe:{},T=x(Me,Te,{role:"row",onKeyDownCapture:je,onFocus:Ie,"aria-label":o.textValue||void 0,"aria-selected":e.selectionManager.canSelectItem(o.key)?e.selectionManager.isSelected(o.key):void 0,"aria-disabled":e.selectionManager.isDisabled(o.key)||void 0,"aria-labelledby":u&&o.textValue?`${O(e,o.key)} ${u}`:void 0,id:O(e,o.key)});n&&(T["aria-rowindex"]=o.index+1);let We={role:"gridcell","aria-colindex":1};return{rowProps:{...x(T,$)},gridCellProps:We,descriptionProps:{id:u},...q}}function G(t){let e=null,r=null;do r=t.lastChild(),r&&(e=r);while(r);return e}const re=new WeakMap;function _r(t,e,r){let{direction:i}=J(),c=t.keyboardDelegate||new Je({collection:e.collection,ref:r,orientation:"horizontal",direction:i,disabledKeys:e.disabledKeys,disabledBehavior:e.selectionManager.disabledBehavior}),{labelProps:o,fieldProps:n,descriptionProps:f,errorMessageProps:l}=Qe({...t,labelElementType:"span"}),{gridProps:d}=mr({...t,...n,keyboardDelegate:c,shouldFocusWrap:!0,linkBehavior:"override"},e,r),[v,p]=E.useState(!1),{focusWithinProps:u}=Xe({onFocusWithinChange:p}),b=F(t),m=E.useRef(e.collection.size);return E.useEffect(()=>{r.current&&m.current>0&&e.collection.size===0&&v&&r.current.focus(),m.current=e.collection.size},[e.collection.size,v,r]),re.set(e,{onRemove:t.onRemove}),{gridProps:x(d,b,{role:e.collection.size?"grid":null,"aria-atomic":!1,"aria-relevant":"additions","aria-live":v?"polite":"off",...u,...n}),labelProps:o,descriptionProps:f,errorMessageProps:l}}var te={};te={removeButtonLabel:"إزالة",removeDescription:"اضغط على مفتاح DELETE لإزالة علامة."};var oe={};oe={removeButtonLabel:"Премахване",removeDescription:"Натиснете Delete, за да премахнете маркера."};var ae={};ae={removeButtonLabel:"Odebrat",removeDescription:"Stisknutím klávesy Delete odeberete značku."};var ie={};ie={removeButtonLabel:"Fjern",removeDescription:"Tryk på Slet for at fjerne tag."};var ne={};ne={removeButtonLabel:"Entfernen",removeDescription:"Auf „Löschen“ drücken, um das Tag zu entfernen."};var le={};le={removeButtonLabel:"Κατάργηση",removeDescription:"Πατήστε Διαγραφή για να καταργήσετε την ετικέτα."};var ue={};ue={removeDescription:"Press Delete to remove tag.",removeButtonLabel:"Remove"};var se={};se={removeButtonLabel:"Quitar",removeDescription:"Pulse Eliminar para quitar la etiqueta."};var ce={};ce={removeButtonLabel:"Eemalda",removeDescription:"Sildi eemaldamiseks vajutage kustutusklahvi Delete."};var de={};de={removeButtonLabel:"Poista",removeDescription:"Poista tunniste painamalla Poista-painiketta."};var pe={};pe={removeButtonLabel:"Supprimer",removeDescription:"Appuyez sur Supprimer pour supprimer l’étiquette."};var be={};be={removeButtonLabel:"הסר",removeDescription:"לחץ על מחק כדי להסיר תג."};var me={};me={removeButtonLabel:"Ukloni",removeDescription:"Pritisnite Delete za uklanjanje oznake."};var fe={};fe={removeButtonLabel:"Eltávolítás",removeDescription:"Nyomja meg a Delete billentyűt a címke eltávolításához."};var ve={};ve={removeButtonLabel:"Rimuovi",removeDescription:"Premi Elimina per rimuovere il tag."};var he={};he={removeButtonLabel:"削除",removeDescription:"タグを削除するには、Delete キーを押します。"};var $e={};$e={removeButtonLabel:"제거",removeDescription:"태그를 제거하려면 Delete 키를 누르십시오."};var ge={};ge={removeButtonLabel:"Pašalinti",removeDescription:"Norėdami pašalinti žymą, paspauskite „Delete“ klavišą."};var xe={};xe={removeButtonLabel:"Noņemt",removeDescription:"Nospiediet Delete [Dzēst], lai noņemtu tagu."};var ye={};ye={removeButtonLabel:"Fjern",removeDescription:"Trykk på Slett for å fjerne taggen."};var De={};De={removeButtonLabel:"Verwijderen",removeDescription:"Druk op Verwijderen om de tag te verwijderen."};var ke={};ke={removeButtonLabel:"Usuń",removeDescription:"Naciśnij Usuń, aby usunąć znacznik."};var Be={};Be={removeButtonLabel:"Remover",removeDescription:"Pressione Delete para remover a tag."};var Pe={};Pe={removeButtonLabel:"Eliminar",removeDescription:"Prima Delete para eliminar a tag."};var Ce={};Ce={removeButtonLabel:"Îndepărtaţi",removeDescription:"Apăsați pe Delete (Ștergere) pentru a elimina eticheta."};var we={};we={removeButtonLabel:"Удалить",removeDescription:"Нажмите DELETE, чтобы удалить тег."};var Ee={};Ee={removeButtonLabel:"Odstrániť",removeDescription:"Ak chcete odstrániť značku, stlačte kláves Delete."};var Ae={};Ae={removeButtonLabel:"Odstrani",removeDescription:"Pritisnite Delete, da odstranite oznako."};var Le={};Le={removeButtonLabel:"Ukloni",removeDescription:"Pritisnite Obriši da biste uklonili oznaku."};var Re={};Re={removeButtonLabel:"Ta bort",removeDescription:"Tryck på Radera för att ta bort taggen."};var Ve={};Ve={removeButtonLabel:"Kaldır",removeDescription:"Etiketi kaldırmak için Sil tuşuna basın."};var Ne={};Ne={removeButtonLabel:"Вилучити",removeDescription:"Натисніть Delete, щоб вилучити тег."};var Fe={};Fe={removeButtonLabel:"删除",removeDescription:"按下“删除”以删除标记。"};var Ke={};Ke={removeButtonLabel:"移除",removeDescription:"按 Delete 鍵以移除標記。"};var ze={};ze={"ar-AE":te,"bg-BG":oe,"cs-CZ":ae,"da-DK":ie,"de-DE":ne,"el-GR":le,"en-US":ue,"es-ES":se,"et-EE":ce,"fi-FI":de,"fr-FR":pe,"he-IL":be,"hr-HR":me,"hu-HU":fe,"it-IT":ve,"ja-JP":he,"ko-KR":$e,"lt-LT":ge,"lv-LV":xe,"nb-NO":ye,"nl-NL":De,"pl-PL":ke,"pt-BR":Be,"pt-PT":Pe,"ro-RO":Ce,"ru-RU":we,"sk-SK":Ee,"sl-SI":Ae,"sr-SP":Le,"sv-SE":Re,"tr-TR":Ve,"uk-UA":Ne,"zh-CN":Fe,"zh-TW":Ke};function vr(t){return t&&t.__esModule?t.default:t}function hr(t,e,r){let{item:i}=t,c=ur(vr(ze),"@react-aria/tag"),o=_(),{onRemove:n}=re.get(e)||{},{rowProps:f,gridCellProps:l,...d}=fr({node:i},e,r);delete f.onKeyDownCapture;let{descriptionProps:v,...p}=d,u=e.disabledKeys.has(i.key)||i.props.isDisabled,b=P=>{if(P.key==="Delete"||P.key==="Backspace"){if(u)return;P.preventDefault(),e.selectionManager.isSelected(i.key)?n==null||n(new Set(e.selectionManager.selectedKeys)):n==null||n(new Set([i.key]))}},m=ar();m==="virtual"&&typeof window<"u"&&"ontouchstart"in window&&(m="pointer");let $=n&&(m==="keyboard"||m==="virtual")?c.format("removeDescription"):"",y=tr($),K=i.key===e.selectionManager.focusedKey,A=e.selectionManager.focusedKey!=null,L=-1;!u&&(K||!A)&&(L=0);let R=F(i.props),V=Q(i.props),{focusableProps:N}=ir({isDisabled:u},r);return{removeButtonProps:{"aria-label":c.format("removeButtonLabel"),"aria-labelledby":`${o} ${f.id}`,isDisabled:u,id:o,onPress:()=>n?n(new Set([i.key])):null,excludeFromTabOrder:!0},rowProps:x(N,f,R,V,{tabIndex:L,onKeyDown:n?b:void 0,"aria-describedby":y["aria-describedby"]}),gridCellProps:x(l,{"aria-errormessage":t["aria-errormessage"],"aria-label":t["aria-label"]}),...p,allowsRemoving:!!n}}const Jr=M(),$r=E.createContext(null),Qr=M();function gr(t){const r=["isPressed","preventFocusOnPress","shouldCancelOnPointerExit","allowTextSelectionOnPress","onPress","onPressStart","onPressEnd","onPressChange","onPressUp"].some(o=>o in t)?"button":void 0,{pressProps:i,isPressed:c}=rr(t);return{pressProps:{...i,role:r},isPressed:c}}const I=Z.div`
  ${pr.Bold}
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
`,Se=Z.div`
  display: inline-block;
  background-color: var(--chip-bg-clr);
  color: var(--chip-text-clr);
  border-radius: var(--chip-radius);
  border: var(--chip-border);
  text-decoration: none;
  cursor: default;

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
  &[aria-selected]:hover,
  &:is(a):hover {
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
`,xr=M();function z(...t){const[e,r]=dr(xr,t[0],t[1]);if(t.length===2)return D.jsx(S,{...e,ref:r,allowsRemoving:!!e.onRemove});const i=t[2];return D.jsx(yr,{item:i,itemRef:r,...e})}const H=sr("item",z);function yr(t){const{item:e}=t,r=He(t.itemRef),i=E.useContext($r),{rowProps:c,gridCellProps:o,removeButtonProps:n,allowsRemoving:f,isFocused:l,isSelected:d}=hr(t,i,r),{focusProps:v,isFocusVisible:p}=cr({within:!0}),u=i.disabledKeys.has(e.key),b=Y({componentClassName:"aje-chip",values:{isSelected:d,isFocusVisible:p,isFocused:l},...t}),{linkProps:m}=X(t,r),$=x(c,v,t.href?m:{});return D.jsx(Se,{ref:r,as:t.href?"a":"div",...$,...b,...F(t),children:D.jsxs(I,{...o,children:[b.children,f&&D.jsx(ee,{icon:"close",size:"small",variant:"chip",...x(n,{isDisabled:u})})]})})}const S=Oe.forwardRef(function(e,r){const{className:i,variant:c,onRemove:o,isDisabled:n,children:f,allowsRemoving:l=!1,...d}=e,{pressProps:v}=gr(d),{linkProps:p}=X(e,r),u=Y({componentClassName:"aje-chip",values:{isSelected:!1,isFocusVisible:!1,isFocused:!1},...e}),b=x({"aria-disabled":n||void 0},v,e.href?p:{});return D.jsx(Se,{as:e.href?"a":"div",ref:r,...b,...u,...F(e),children:D.jsxs(I,{children:[u.children,l&&D.jsx(ee,{icon:"close",size:"small",variant:"chip",isDisabled:n,onPress:o})]})})});try{z.displayName="ChipLeaf",z.__docgenInfo={description:"",displayName:"ChipLeaf",props:{0:{defaultValue:null,description:"",name:"0",required:!0,type:{name:"ChipProps<T>"}},1:{defaultValue:null,description:"",name:"1",required:!0,type:{name:"ForwardedRef<HTMLDivElement>"}},2:{defaultValue:null,description:"",name:"2",required:!0,type:{name:"Node<T>"}},length:{defaultValue:null,description:"",name:"length",required:!0,type:{name:"enum",value:[{value:"2"},{value:"3"}]}}}}}catch{}try{H.displayName="Chip",H.__docgenInfo={description:"Chip component. Can be used stand-alone, or within a parent\n`ChipGroup`",displayName:"Chip",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"ChipVariants"}},onRemove:{defaultValue:null,description:`Handler that is called when the user
clicks the remove button for the chip`,name:"onRemove",required:!1,type:{name:"(e: PressEvent) => void"}},isDisabled:{defaultValue:null,description:"Whether the press events should be disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"Id for this item",name:"id",required:!1,type:{name:"Key"}},onAction:{defaultValue:null,description:"Associated callback when an action is performed on this item",name:"onAction",required:!1,type:{name:"() => void"}},textValue:{defaultValue:null,description:"A string representation of the item's contents, used for features like typeahead.",name:"textValue",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"An accessibility label for this item.",name:"aria-label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<ItemRenderProps>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<ItemRenderProps>"}}}}}catch{}try{S.displayName="ChipInternal",S.__docgenInfo={description:"",displayName:"ChipInternal",props:{allowsRemoving:{defaultValue:null,description:"",name:"allowsRemoving",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"ChipVariants"}},onRemove:{defaultValue:null,description:`Handler that is called when the user
clicks the remove button for the chip`,name:"onRemove",required:!1,type:{name:"(e: PressEvent) => void"}},isDisabled:{defaultValue:null,description:"Whether the press events should be disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"Id for this item",name:"id",required:!1,type:{name:"Key"}},onAction:{defaultValue:null,description:"Associated callback when an action is performed on this item",name:"onAction",required:!1,type:{name:"() => void"}},textValue:{defaultValue:null,description:"A string representation of the item's contents, used for features like typeahead.",name:"textValue",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"An accessibility label for this item.",name:"aria-label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<ItemRenderProps>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<ItemRenderProps>"}}}}}catch{}export{_r as $,H as C,$r as a,Qr as b,z as c,Jr as d};
