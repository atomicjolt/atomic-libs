import{r as C,j as e}from"./iframe-CGPW5dgX.js";import{C as w}from"./CheckBox.component-CxjuYA2v.js";import{$ as T}from"./VisuallyHidden-BPd2hceK.js";import{L as _}from"./Loading.context-EUscm4UA.js";import{u as q}from"./useRenderProps-B7rIWDyP.js";import{u as A}from"./useTranslations-BQv9_06X.js";import{T as m}from"./TextInput.component-Z42Aw0Lv.js";import{N as I}from"./NumberInput.component-adRNrRrE.js";import{S as V}from"./SearchInput.component-DElHx3Y1.js";import{B as P}from"./Button.component-Bd4z0Gnh.js";import"./preload-helper-Dp1pzeXC.js";import"./useObjectRef-CjsC0YUg.js";import"./SSRProvider-Dwr0Ku02.js";import"./useFormValidationState-CWonILzS.js";import"./useFormValidation-hpNb-DuC.js";import"./useFocusable-DT9_LXVA.js";import"./usePress-BioWcz2v.js";import"./useToggle-IjgFUxMK.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormReset-mO407CKi.js";import"./context-CLSG1ylv.js";import"./Inputs.styles-C-Gxmll0.js";import"./mixins-BJuiWlrm.js";import"./ComboInput.styles-CPtnBAXP.js";import"./SkeletonLoader.component-DalY9QZY.js";import"./index-BjoBGrPA.js";import"./TextField.component-DJemlHOu.js";import"./useTextField-CPDUiJax.js";import"./useField-DXQ2XZid.js";import"./useLabel-BytR9cji.js";import"./useLabels-Bveo7T3X.js";import"./Field.styles-CxKAGZMW.js";import"./Provider-CKCHWQEo.js";import"./Label.context-D58S6_wU.js";import"./index-C0dagnaq.js";import"./Message.context-D_Dpg15a.js";import"./ErrorMessage.context-tIEpfdG1.js";import"./ComboInput.context-3NxJI3U3.js";import"./Input.context-DET8yoFh.js";import"./TextArea.context-C9KYZsFH.js";import"./NumberField.component-fcYsibWP.js";import"./displayName-CEXLPPBu.js";import"./useFocusWithin-BzfIRRcZ.js";import"./useEvent-CiV_uWQE.js";import"./useLocalizedStringFormatter-CLx94-cg.js";import"./useNumberFormatter-CgBbBkmi.js";import"./NumberFormatter-DNR9MAW-.js";import"./useSpinButton-BU1srigh.js";import"./LiveAnnouncer-CAA6IyTk.js";import"./BaseButton-B8bVR-o6.js";import"./useFocusRing-Dbcio0BW.js";import"./useButton-CjI92Tj6.js";import"./useLink-PwQmwW74.js";import"./SpinnerLoader.component-BfUo5Fvz.js";import"./Loader.component-oLyQpXum.js";import"./Flex.component-BDldr6hG.js";import"./layout-Dd7m2B0D.js";import"./spacing-Bd-CIscW.js";import"./utils-DqmNl-Il.js";import"./Checkmark.component-DL9zPInj.js";import"./Spinner.component-CLncQyFJ.js";import"./ProgressCircle.component-Cc0SXoU-.js";import"./colors-PU9nFmCW.js";import"./IconButton.component-CifirOzj.js";import"./MaterialIcon.component-Dhrh5rCP.js";import"./Icons.styles-tJBW4wd9.js";import"./RequiredMarker-C4F_ExJL.js";import"./Message.component-CIEamcUq.js";import"./ErrorMessage.component-DUCD1jzH.js";import"./FloatingFieldInputWrapper-Y4NWaWCQ.js";import"./Label.component-Bo8kkSzq.js";import"./Input.component-dygiXatG.js";import"./ComboInput.component-CE8IM2YS.js";import"./Group.component-DBQBcqJr.js";import"./SearchField.component-sMA4bmax.js";function i(t){const{isLoading:r,loadingLabel:l}=t,B=A(),p=C.useMemo(()=>({isLoading:r,loadingLabel:B("loading")}),[r,l]),d=q({componentClassName:"aje-loading",values:p,...t});return e.jsx(_.Provider,{value:p,children:e.jsxs("div",{...d,id:t.id,"aria-busy":r?"true":void 0,children:[e.jsx(T,{role:"status","aria-live":"polite",children:r?l:""}),d.children]})})}try{i.displayName="Loading",i.__docgenInfo={description:`Provides an ambient loading state to descendant components.
Any component that reads its loading state with \`useLoading\` will
pick this up unless it is given its own local loading props, which
take priority over the ambient state.`,displayName:"Loading",filePath:"/home/runner/work/atomic-libs/atomic-libs/packages/atomic-elements/src/components/Feedback/Loading/Loading.component.tsx",methods:[],props:{id:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"DomProps"}],description:"Unique id for the component",name:"id",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"DomProps"},required:!1,tags:{},type:{name:"string"}},className:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"PresentationProps"}],description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"PresentationProps"},required:!1,tags:{},type:{name:"Argument | Argument[]"}},isLoading:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"TypeLiteral"}],description:`When loading is true, the content will be replaced with a spinner.
When it is false, the content will be shown normally`,name:"isLoading",required:!1,tags:{},type:{name:"boolean"}},loadingLabel:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"TypeLiteral"}],description:"aria accessibility label to inform screen-readers that it is loading",name:"loadingLabel",required:!1,tags:{},type:{name:"string"}}},tags:{}}}catch{}const ot={title:"Feedback/Loading",component:i,argTypes:{isLoading:{control:"boolean",description:"The ambient loading state. Descendants that read their loading state with `useLoading` (inputs, buttons, `LoadingStatus`…) show their loading state while it's true, unless they're given their own `isLoading`. Also sets `aria-busy` on the wrapper.",table:{category:"State"}},loadingLabel:{control:"text",description:'Announced to screen readers through a visually hidden status region while `isLoading` is true. Descendants don\'t receive it: they get the translated "loading" string instead.',table:{category:"State"}},children:{control:!1,description:"Content that shares the loading state."}}},o={args:{isLoading:!0,loadingLabel:"Loading",children:e.jsx(m,{label:"Name",placeholder:"Jane Doe"})}},n={args:{...o.args,isLoading:!1}},s={args:{isLoading:!0,loadingLabel:"Loading"},render:t=>e.jsxs(i,{...t,children:[e.jsx(P,{children:"Submit"}),e.jsx(w,{children:"Subscribe to updates"})]})},a={args:{isLoading:!0,loadingLabel:"Loading"},render:t=>e.jsxs(i,{...t,children:[e.jsx(m,{label:"Name",isRequired:!0}),e.jsx("br",{}),e.jsx(m,{label:"Email",isRequired:!0}),e.jsx("br",{}),e.jsx(I,{label:"Age",minValue:0,maxValue:120}),e.jsx("br",{}),e.jsx(V,{label:"Search contacts",onSubmit:()=>{}}),e.jsx("br",{}),e.jsx(w,{children:"Subscribe to updates"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(P,{children:"Save"})]})},it=["Primary","NotLoading","WrappingMultipleComponents","ExampleForm"];var c,g,u;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    isLoading: true,
    loadingLabel: "Loading",
    children: <TextInput label="Name" placeholder="Jane Doe" />
  }
}`,...(u=(g=o.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var b,h,L;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isLoading: false
  }
}`,...(L=(h=n.parameters)==null?void 0:h.docs)==null?void 0:L.source}}};var f,x,y;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    isLoading: true,
    loadingLabel: "Loading"
  },
  render: args => <Loading {...args}>
      <Button>Submit</Button>
      <CheckBox>Subscribe to updates</CheckBox>
    </Loading>
}`,...(y=(x=s.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var j,S,N,k,v;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    isLoading: true,
    loadingLabel: "Loading"
  },
  render: args => <Loading {...args}>
      <TextInput label="Name" isRequired />

      <br />

      <TextInput label="Email" isRequired />

      <br />

      <NumberInput label="Age" minValue={0} maxValue={120} />

      <br />

      <SearchInput label="Search contacts" onSubmit={() => {}} />

      <br />

      <CheckBox>Subscribe to updates</CheckBox>

      <br />
      <br />

      <Button>Save</Button>
    </Loading>
}`,...(N=(S=a.parameters)==null?void 0:S.docs)==null?void 0:N.source},description:{story:"A more realistic example: a form with several different field types, all wrapped\nin a single `Loading` provider. None of the fields are passed `isLoading` directly -\nthey all pick up the ambient state from context. Toggle the `isLoading` control to see every\nfield switch to its loading skeleton at once.",...(v=(k=a.parameters)==null?void 0:k.docs)==null?void 0:v.description}}};export{a as ExampleForm,n as NotLoading,o as Primary,s as WrappingMultipleComponents,it as __namedExportsOrder,ot as default};
