import{j as r}from"./jsx-runtime-CkxqCPlQ.js";import{R as w}from"./index-DJO9vBfz.js";import{c as R}from"./index-i5X67GZP.js";import{$ as d}from"./useObjectRef-C4RVQRRU.js";import{c as C,I as V}from"./Collection-Bcaq8CIK.js";import{u as _}from"./variants-Dln-jX-v.js";import{$ as q}from"./usePress-DG8LklVH.js";import{d as h}from"./styled-components.browser.esm-WCay-hu9.js";import{m as N}from"./mixins-TlkgTuSN.js";import{I as j}from"./IconButton.component-C815Wh4m.js";function I(e){const t=["isPressed","preventFocusOnPress","shouldCancelOnPointerExit","allowTextSelectionOnPress","onPress","onPressStart","onPressEnd","onPressChange","onPressUp"].some(i=>i in e)?"button":void 0,{pressProps:a,isPressed:o}=q(e);return{pressProps:{...a,role:t},isPressed:o}}const u=h.div`
  ${N.Bold}
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
`,$=h.div`
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

    ${u} button::hover {
      &::before {
        background-color: var(--neutral100);
      }
    }
  }
`;function n(e){return r.jsx(l,{...e,allowsRemoving:!!e.onRemove})}C(V,n);const l=w.forwardRef(function(c,t){const{className:a,variant:o="default",onRemove:i,isDisabled:s,children:m,wrapperProps:v={},contentProps:b={},removeButtonProps:f={},allowsRemoving:g=!1,...y}=c,P=_("aje-chip",o),{pressProps:x}=I(y),p=[v,{"aria-disabled":s||void 0}];return s||p.push(x),r.jsx($,{className:R("aje-chip",P,a),ref:t,...d(...p),children:r.jsxs(u,{...b,children:[m,g&&r.jsx(j,{icon:"close",size:"small",variant:"chip",...d({isDisabled:s,onPress:i},f)})]})})});try{n.displayName="Chip",n.__docgenInfo={description:"Chip component",displayName:"Chip",props:{children:{defaultValue:null,description:"Rendered contents of the item or child items.",name:"children",required:!0,type:{name:"ReactNode"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"ChipVariants"}},onRemove:{defaultValue:null,description:`Handler that is called when the user
clicks the remove button for the chip`,name:"onRemove",required:!1,type:{name:"(e: PressEvent) => void"}},isDisabled:{defaultValue:null,description:"Whether the press events should be disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",required:!1,type:{name:"Argument | Argument[]"}}}}}catch{}try{l.displayName="ChipInternal",l.__docgenInfo={description:"",displayName:"ChipInternal",props:{wrapperProps:{defaultValue:null,description:"",name:"wrapperProps",required:!1,type:{name:"DOMAttributes<HTMLDivElement>"}},contentProps:{defaultValue:null,description:"",name:"contentProps",required:!1,type:{name:"DOMAttributes<HTMLDivElement>"}},removeButtonProps:{defaultValue:null,description:"",name:"removeButtonProps",required:!1,type:{name:'AriaButtonProps<"button">'}},allowsRemoving:{defaultValue:null,description:"",name:"allowsRemoving",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Rendered contents of the item or child items.",name:"children",required:!0,type:{name:"ReactNode"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"ChipVariants"}},onRemove:{defaultValue:null,description:`Handler that is called when the user
clicks the remove button for the chip`,name:"onRemove",required:!1,type:{name:"(e: PressEvent) => void"}},isDisabled:{defaultValue:null,description:"Whether the press events should be disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",required:!1,type:{name:"Argument | Argument[]"}}}}}catch{}export{n as C,l as a};
