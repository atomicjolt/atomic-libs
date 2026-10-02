import{g as T}from"./cssprops-DECR0Nbg.js";import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{R as q}from"./index-BCtMShv3.js";import{c as j}from"./index-EJ0-2BeM.js";import{$ as R,a as _}from"./useToggle-iesXfB0X.js";import{$ as V}from"./VisuallyHidden-CdgZn78T.js";import{g as i,E as g}from"./styled-components.browser.esm-DC3GK9Rn.js";import{m as L}from"./mixins-CcgEHb9c.js";import{S as F}from"./SkeletonLoader.component-q75MwwfP.js";import{u as I}from"./useForwardedRef-Tweo1nQG.js";import{a as N}from"./util-DYWyeGCs.js";import{u as X}from"./useFocusRing-DIS5Kyrs.js";import{u as C,f as W}from"./useRenderProps-CP918x9p.js";import{u as D}from"./Loading.context-C7II2W1n.js";import"./useControlledState-vzCMHZvt.js";import"./useObjectRef-D2RG7rRi.js";import"./SSRProvider-DyiXDq2k.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormReset-BY6BQbOl.js";import"./usePress-CqXh5MnK.js";import"./useFocusable-DacP9xvE.js";import"./index-q6RvvsFA.js";import"./index-D-fs5e6L.js";import"./useFocusWithin-BJ0-_hiU.js";import"./context-z6pb9OkM.js";function E(e,m,n){let{labelProps:l,inputProps:s,isSelected:c,isPressed:a,isDisabled:u,isReadOnly:f}=R(e,m,n);return{labelProps:l,inputProps:{...s,role:"switch",checked:c},isSelected:c,isPressed:a,isDisabled:u,isReadOnly:f}}const A=i(F)`
  width: calc(var(--toggle-size) * 1.666);
  height: var(--toggle-size);
  display: inline-block;
`,O=g`
  0% {
    transform: translateX(0) scale(1, 1);
  }
  50% {
    transform: translateX(calc(var(--toggle-travel) / 2)) scale(1.25, 0.8);
  }
  100% {
    transform: translateX(var(--toggle-travel)) scale(1, 1);
  }
`,B=g`
  0% {
    transform: translateX(var(--toggle-travel)) scale(1, 1);
  }
  50% {
    transform: translateX(calc(var(--toggle-travel) / 2)) scale(1.25, 0.8);
  }
  100% {
    transform: translateX(0) scale(1, 1);
  }
`,J=g`
  0% {
    content: "\\e5cd";
  }
  50% {
    content: "\\e15b";
  }
  100% {
    content: "\\e5ca";
  }
`,M=g`
  0% {
    content: "\e5ca";
  }
  50% {
    content: "\\e15b";
  }
  100% {
    content: "\\e5cd";
  }
`,r=i.div`
  ${L.FocusVisible(2)}
  position: relative;
  width: calc(var(--toggle-size) * 1.666);
  height: var(--toggle-size);
  border-radius: calc(var(--toggle-size) / 2);
  background-color: var(--toggle-unchecked);
  transition: background-color 200ms linear;
  overflow: hidden;
`,U=i.span`
  ${L.Bold}
  display: inline-flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  position: relative;
  font-size: 1.3rem;
  line-height: 1.5;
  color: var(--text-clr);

  &.is-checked ${r} {
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

  &.check-animation ${r} {
    background-color: var(--toggle-checked);
    i {
      animation: ${O} 200ms linear forwards;
      border-color: var(--toggle-checked);

      &::before {
        animation: ${J} 200ms linear forwards;
        color: var(--toggle-checked);
      }
    }
  }

  &.uncheck-animation ${r} {
    background-color: var(--toggle-unchecked);
    i {
      animation: ${B} 200ms linear forwards;
      border-color: var(--toggle-unchecked);

      &::before {
        animation: ${M} 200ms linear forwards;
        color: var(--text-clr-alt);
      }
    }
  }
`,G=i.label`
  &[data-invalid] ${r} {
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
`,H=i.i`
  position: absolute;
  top: 0;
  left: 0;
  width: var(--toggle-size);
  height: var(--toggle-size);
  border-radius: 50%;
  box-sizing: border-box;
  background-color: var(--neutral50);
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
    color: var(--text-clr-alt);
    z-index: 2;
  }
`,v=q.forwardRef((e,m)=>{const n=_(e),l=I(m),{inputProps:s,labelProps:c,isSelected:a}=E(e,n,l),{focusProps:u,isFocusVisible:f}=X(),p=N(n.isSelected),{childrenPosition:y="left"}=e,{isLoading:h,loadingLabel:z}=D(e),b=C({componentClassName:"aje-toggle-switch",...e,selectors:{...W(e),"data-loading":h}});return o.jsx(G,{...b,children:o.jsxs(U,{...c,className:j("aje-toggle-switch__label",{"check-animation":a&&p,"uncheck-animation":!a&&p,"is-checked":a&&!p}),children:[o.jsx(V,{children:o.jsx("input",{...s,...u,ref:l,disabled:h||s.disabled})}),y==="left"&&b.children,h?o.jsx(A,{title:z,children:o.jsx("rect",{x:"0",y:"0",width:"100%",height:"100%",rx:"calc(var(--toggle-size) / 2)",ry:"calc(var(--toggle-size) / 2)"})}):o.jsx(r,{"data-focus-visible":f,children:o.jsx(H,{})}),y==="right"&&b.children]})})});try{v.displayName="ToggleSwitch",v.__docgenInfo={description:"A Toggle Switch is similar to a checkbox, but represents on/off values as opposed to selection.",displayName:"ToggleSwitch",props:{childrenPosition:{defaultValue:null,description:"The position of the children relative to the switch",name:"childrenPosition",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"right"'},{value:'"left"'}]}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean | undefined"}},isInvalid:{defaultValue:null,description:"",name:"isInvalid",required:!1,type:{name:"boolean | undefined"}},name:{defaultValue:null,description:"Name of the Field",name:"name",required:!1,type:{name:"string | undefined"}},id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",required:!1,type:{name:"Argument | Argument[]"}},size:{defaultValue:null,description:"Size of the component",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"auto"'},{value:'"full"'}]}},isLoading:{defaultValue:null,description:`When loading is true, the content will be replaced with a spinner.
When it is false, the content will be shown normally`,name:"isLoading",required:!1,type:{name:"boolean | undefined"}},loadingLabel:{defaultValue:null,description:"aria accessiblity label to inform screen-readers that it is loading",name:"loadingLabel",required:!1,type:{name:"string | undefined"}}}}}catch{}const ke={title:"Inputs/Choose State/ToggleSwitch",component:v,parameters:{layout:"centered",cssprops:T("Toggle")},argTypes:{isLoading:{control:"boolean",table:{category:"Field State"}},loadingLabel:{control:"text",table:{category:"Field State"}},onChange:{control:!1,table:{category:"Events"}},defaultSelected:{control:"boolean",description:"Whether the switch is checked by default for an uncontrolled component"},isSelected:{control:"boolean",description:"Whether the switch is checked for a controlled component"}}},t={args:{children:"Toggle switch"}},d={args:{...t.args,isLoading:!0,loadingLabel:"Loading"}};var w,k,x;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: "Toggle switch"
  }
}`,...(x=(k=t.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var S,$,P;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isLoading: true,
    loadingLabel: "Loading"
  }
}`,...(P=($=d.parameters)==null?void 0:$.docs)==null?void 0:P.source}}};const xe=["Primary","Loading"];export{d as Loading,t as Primary,xe as __namedExportsOrder,ke as default};
