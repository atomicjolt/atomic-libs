import{d as O}from"./helpers-tUmR_xN7.js";import{g as r,O as h,R as W,j as a,a1 as A}from"./iframe-CGPW5dgX.js";import{c as E}from"./index-BjoBGrPA.js";import{$ as B,a as U}from"./useToggle-IjgFUxMK.js";import{$ as J}from"./VisuallyHidden-BPd2hceK.js";import{m as C}from"./mixins-BJuiWlrm.js";import{S as M}from"./SkeletonLoader.component-DalY9QZY.js";import{u as G}from"./useForwardedRef-DFbI-FzN.js";import{a as H}from"./util-7dvZ73yi.js";import{u as K}from"./useFocusRing-Dbcio0BW.js";import{u as Q,f as Y}from"./useRenderProps-B7rIWDyP.js";import{u as Z}from"./Loading.context-EUscm4UA.js";import"./useFocusable-DT9_LXVA.js";import"./useObjectRef-CjsC0YUg.js";import"./SSRProvider-Dwr0Ku02.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./preload-helper-Dp1pzeXC.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormReset-mO407CKi.js";import"./usePress-BioWcz2v.js";import"./useFocusWithin-BzfIRRcZ.js";import"./context-CLSG1ylv.js";function ee(e,u,i){let{labelProps:n,inputProps:l,isSelected:c,isPressed:o,isDisabled:f,isReadOnly:b}=B(e,u,i);return{labelProps:n,inputProps:{...l,role:"switch",checked:c},isSelected:c,isPressed:o,isDisabled:f,isReadOnly:b}}const ae=r(M)`
  width: calc(var(--toggle-size) * 1.666);
  height: var(--toggle-size);
  display: inline-block;
`,te=h`
  0% {
    transform: translateX(0) scale(1, 1);
  }
  50% {
    transform: translateX(calc(var(--toggle-travel) / 2)) scale(1.25, 0.8);
  }
  100% {
    transform: translateX(var(--toggle-travel)) scale(1, 1);
  }
`,oe=h`
  0% {
    transform: translateX(var(--toggle-travel)) scale(1, 1);
  }
  50% {
    transform: translateX(calc(var(--toggle-travel) / 2)) scale(1.25, 0.8);
  }
  100% {
    transform: translateX(0) scale(1, 1);
  }
`,se=h`
  0% {
    content: "\\e5cd";
  }
  50% {
    content: "\\e15b";
  }
  100% {
    content: "\\e5ca";
  }
`,re=h`
  0% {
    content: "\e5ca";
  }
  50% {
    content: "\\e15b";
  }
  100% {
    content: "\\e5cd";
  }
`,s=r.div`
  ${C.FocusVisible(2)}
  position: relative;
  width: calc(var(--toggle-size) * 1.666);
  height: var(--toggle-size);
  border-radius: calc(var(--toggle-size) / 2);
  background-color: var(--toggle-unchecked);
  transition: background-color 200ms linear;
  overflow: hidden;
`,ie=r.span`
  ${C.Bold}
  display: inline-flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  position: relative;
  font-size: 1.3rem;
  line-height: 1.5;
  color: var(--text-clr);

  &.is-checked ${s} {
    background-color: var(--toggle-checked);

    i {
      transform: translateX(var(--toggle-travel)) scale(1, 1);
      border-color: var(--toggle-checked);

      &::before {
        color: var(--toggle-checked);
        translate: translateX(var(--toggle-travel)) scale(1, 1);
        content: "\\e5ca";
      }
    }
  }

  &.check-animation ${s} {
    background-color: var(--toggle-checked);
    i {
      animation: ${te} 200ms linear forwards;
      border-color: var(--toggle-checked);

      &::before {
        animation: ${se} 200ms linear forwards;
        color: var(--toggle-checked);
      }
    }
  }

  &.uncheck-animation ${s} {
    background-color: var(--toggle-unchecked);
    i {
      animation: ${oe} 200ms linear forwards;
      border-color: var(--toggle-unchecked);

      &::before {
        animation: ${re} 200ms linear forwards;
        color: var(--text-clr-secondary);
      }
    }
  }
`,ne=r.label`
  &[data-invalid] ${s} {
    background-color: var(--toggle-error);

    i {
      border-color: var(--toggle-error);

      &::before {
        color: var(--toggle-error);
      }
    }
  }

  &[data-disabled] {
    cursor: auto;
    opacity: 0.5;
  }
`,le=r.i`
  position: absolute;
  top: 0;
  left: 0;
  width: var(--toggle-size);
  height: var(--toggle-size);
  border-radius: 50%;
  box-sizing: border-box;
  background-color: var(--background-clr);
  border: 3px solid var(--toggle-unchecked);
  transform-origin: left center;
  transition: border-color 200ms linear;
  display: flex;
  margin: auto;

  &::before {
    content: "\\e5cd";
    align-self: center;
    margin: auto;
    font-size: 1.4rem;
    font-family: "Material Icons";
    font-style: normal;
    line-height: 1;
    color: var(--text-clr-secondary);
    z-index: 2;
  }
`,w=W.forwardRef((e,u)=>{const i=U(e),n=G(u),{inputProps:l,labelProps:c,isSelected:o}=ee(e,i,n),{focusProps:f,isFocusVisible:b}=K(),y=H(i.isSelected),{childrenPosition:S="left"}=e,{isLoading:v,loadingLabel:X}=Z(e),k=Q({componentClassName:"aje-toggle-switch",...e,selectors:{...Y(e),"data-loading":v}});return a.jsx(ne,{...k,children:a.jsxs(ie,{...c,className:E("aje-toggle-switch__label",{"check-animation":o&&y,"uncheck-animation":!o&&y,"is-checked":o&&!y}),children:[a.jsx(J,{children:a.jsx("input",{...l,...f,ref:n,disabled:v||l.disabled})}),S==="left"&&k.children,v?a.jsx(ae,{title:X,children:a.jsx("rect",{x:"0",y:"0",width:"100%",height:"100%",rx:"calc(var(--toggle-size) / 2)",ry:"calc(var(--toggle-size) / 2)"})}):a.jsx(s,{"data-focus-visible":b,children:a.jsx(le,{})}),S==="right"&&k.children]})})});try{w.displayName="ToggleSwitch",w.__docgenInfo={description:"A Toggle Switch is similar to a checkbox, but represents on/off values as opposed to selection.",displayName:"ToggleSwitch",filePath:"/home/runner/work/atomic-libs/atomic-libs/packages/atomic-elements/src/components/Inputs/ToggleSwitch/ToggleSwitch.component.tsx",methods:[],props:{childrenPosition:{defaultValue:{value:'"left"'},declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Inputs/ToggleSwitch/ToggleSwitch.component.tsx",name:"ToggleSwitchProps"}],description:"The position of the children relative to the switch",name:"childrenPosition",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Inputs/ToggleSwitch/ToggleSwitch.component.tsx",name:"ToggleSwitchProps"},required:!1,tags:{default:'"left"'},type:{name:"enum",raw:'"right" | "left"',value:[{value:'"right"'},{value:'"left"'}]}},name:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"FieldDomProps"}],description:"Name of the Field",name:"name",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"FieldDomProps"},required:!1,tags:{},type:{name:"string"}},id:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"DomProps"}],description:"Unique id for the component",name:"id",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"DomProps"},required:!1,tags:{},type:{name:"string"}},className:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"PresentationProps"}],description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"PresentationProps"},required:!1,tags:{},type:{name:"Argument | Argument[]"}},isDisabled:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"FieldStatusProps"}],description:"Field cannot be interacted with, should be de-emphasized in the UI",name:"isDisabled",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"FieldStatusProps"},required:!1,tags:{selector:"[data-disabled]"},type:{name:"boolean"}},isInvalid:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"FieldStatusProps"}],description:"Field has an error. Should be made to look like an error.\nControls whether the value of `error` is displayed",name:"isInvalid",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/fields.ts",name:"FieldStatusProps"},required:!1,tags:{selector:"[data-invalid]"},type:{name:"boolean"}},isLoading:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"TypeLiteral"}],description:`When loading is true, the content will be replaced with a spinner.
When it is false, the content will be shown normally`,name:"isLoading",required:!1,tags:{},type:{name:"boolean"}},loadingLabel:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"TypeLiteral"}],description:"aria accessibility label to inform screen-readers that it is loading",name:"loadingLabel",required:!1,tags:{},type:{name:"string"}}},tags:{}}}catch{}const qe={title:"Inputs/Choose State/ToggleSwitch",component:w,parameters:{layout:"centered",cssprops:{toggle:A}},argTypes:{...O,children:{control:"text",description:"Label rendered next to the switch"},onChange:{control:!1,description:"Called with the new selected state when the switch is toggled",table:{category:"Events"}},defaultSelected:{control:"boolean",description:"Whether the switch is checked by default for an uncontrolled component"},isSelected:{control:"boolean",description:"Whether the switch is checked for a controlled component"}}},t={args:{children:"Toggle switch"}},d={args:{...t.args,defaultSelected:!0}},m={args:{...t.args,isDisabled:!0}},g={args:{...t.args,childrenPosition:"right"}},p={args:{...t.args,isLoading:!0,loadingLabel:"Loading"}},De=["Primary","Selected","Disabled","ChildrenOnRight","Loading"];var P,x,T;t.parameters={...t.parameters,docs:{...(P=t.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    children: "Toggle switch"
  }
}`,...(T=(x=t.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var $,L,N;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    defaultSelected: true
  }
}`,...(N=(L=d.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var z,F,R;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isDisabled: true
  }
}`,...(R=(F=m.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var q,D,j;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    childrenPosition: "right"
  }
}`,...(j=(D=g.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};var I,_,V;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isLoading: true,
    loadingLabel: "Loading"
  }
}`,...(V=(_=p.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};export{g as ChildrenOnRight,m as Disabled,p as Loading,t as Primary,d as Selected,De as __namedExportsOrder,qe as default};
