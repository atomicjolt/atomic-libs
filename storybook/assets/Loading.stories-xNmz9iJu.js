import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{C as B}from"./index-DjSi6EBk.js";import{r as C}from"./index-BCtMShv3.js";import{$ as _}from"./VisuallyHidden-DMkWAsdD.js";import{L as I}from"./Loading.context-C7II2W1n.js";import{u as V}from"./useRenderProps-CP918x9p.js";import{u as T}from"./useTranslations-8dZDm3M4.js";import{T as s}from"./TextInput.component-CnmjjJ4i.js";import{N as A}from"./NumberInput.component-B1RDOeuE.js";import{S as E}from"./SearchInput.component-DgRPDYYe.js";import{B as k}from"./Button.component-Bf_03czx.js";import"./useObjectRef-B4hnndUj.js";import"./SSRProvider-DyiXDq2k.js";import"./useFormValidationState-CONlS5Wo.js";import"./useFormValidation-CnIG3AAh.js";import"./useFocusable-B7HbK8LX.js";import"./usePress-BJ4Xpz5E.js";import"./index-q6RvvsFA.js";import"./index-D-fs5e6L.js";import"./useToggle-CZMQfoUA.js";import"./useControlledState-vzCMHZvt.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormReset-GcAVnfXr.js";import"./context-z6pb9OkM.js";import"./Inputs.styles-nDLoxjUU.js";import"./styled-components.browser.esm-DC3GK9Rn.js";import"./mixins-CcgEHb9c.js";import"./ComboInput.styles-kOaziVwv.js";import"./SkeletonLoader.component-q75MwwfP.js";import"./index-EJ0-2BeM.js";import"./TextField.component-BYvG7f2y.js";import"./useTextField-D4_p2q36.js";import"./useField-D8gfBVj0.js";import"./useLabel-Bew-gTxt.js";import"./useLabels-BQTM_NWA.js";import"./Field.styles-DjdYEYvF.js";import"./Provider-op_UCnZE.js";import"./Label.context-CXmZcjY3.js";import"./index-BIzvBz7y.js";import"./Message.context-BSLt3c3C.js";import"./ErrorMessage.context-C6OyzACS.js";import"./ComboInput.context-D__g77G8.js";import"./Input.context-WAk7TvcM.js";import"./TextArea.context-5ld-J3NK.js";import"./NumberField.component-CrCEMCoL.js";import"./useFocusWithin-dfJl9rAf.js";import"./useEvent-CI_xZcmG.js";import"./useLocalizedStringFormatter-BmC8c4z2.js";import"./useNumberFormatter-BHOsbS6G.js";import"./NumberFormatter-DNR9MAW-.js";import"./useSpinButton-B52iW2OY.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button.context-DHqbpAmX.js";import"./index-DnOMPDxK.js";import"./index-D0UYfcsL.js";import"./Icons.styles-qcj_pyb3.js";import"./BaseButton-DBbmnCO8.js";import"./useFocusRing-zxvArQTZ.js";import"./useButton-B6TSBwA2.js";import"./useLink-C7Cuty20.js";import"./SpinnerLoader.component-D4g-QhUe.js";import"./Loader.component-C9qA52Gf.js";import"./Flex.component-CMKfz10l.js";import"./layout-Dd7m2B0D.js";import"./spacing-Bd-CIscW.js";import"./utils-DqmNl-Il.js";import"./Checkmark.component-DPw8o_SY.js";import"./Spinner.component-4On_l0hw.js";import"./ProgressCircle.component-D1QqNNgO.js";import"./number-nHrFdSb-.js";import"./colors-x_YFGAop.js";import"./RequiredMarker-CwAzCIB3.js";import"./Message.component-C9hzP7Az.js";import"./ErrorMessage.component-2tMSRF0K.js";import"./FloatingFieldInputWrapper-BnMlLlUS.js";import"./Label.component-DuxPov30.js";import"./Input.component-zI-G4JAx.js";import"./ComboInput.component-DKd_jgPF.js";import"./Group.component-DjERy5u8.js";import"./SearchField.component-DsyBnElU.js";function l(n){const{isLoading:t,loadingLabel:m}=n,q=T(),p=C.useMemo(()=>({isLoading:t,loadingLabel:q("loading")}),[t,m]),d=V({componentClassName:"aje-loading",values:p,...n});return e.jsx(I.Provider,{value:p,children:e.jsxs("div",{...d,"aria-busy":t?"true":void 0,children:[e.jsx(_,{role:"status","aria-live":"polite",children:t?m:""}),d.children]})})}try{l.displayName="Loading",l.__docgenInfo={description:`Provides an ambient loading state to descendant components.
Any component that reads its loading state with \`useLoading\` will
pick this up unless it is given its own local loading props, which
take priority over the ambient state.`,displayName:"Loading",props:{id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",required:!1,type:{name:"Argument | Argument[]"}},size:{defaultValue:null,description:"Size of the component",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"auto"'},{value:'"medium"'},{value:'"small"'},{value:'"large"'},{value:'"full"'}]}},isLoading:{defaultValue:null,description:`When loading is true, the content will be replaced with a spinner.
When it is false, the content will be shown normally`,name:"isLoading",required:!1,type:{name:"boolean | undefined"}},loadingLabel:{defaultValue:null,description:"aria accessiblity label to inform screen-readers that it is loading",name:"loadingLabel",required:!1,type:{name:"string | undefined"}}}}}catch{}const lr={title:"Feedback/Loading",component:l,argTypes:{isLoading:{control:"boolean"},loadingLabel:{control:"text"},children:{control:!1}}},o={args:{isLoading:!0,loadingLabel:"Loading",children:e.jsx(s,{label:"Name",placeholder:"Jane Doe"})}},i={args:{...o.args,isLoading:!1}},a={args:{isLoading:!0,loadingLabel:"Loading",children:e.jsxs(e.Fragment,{children:[e.jsx(k,{children:"Submit"}),e.jsx(B,{children:"Subscribe to updates"})]})}},r={args:{isLoading:!0,loadingLabel:"Loading",children:e.jsxs(e.Fragment,{children:[e.jsx(s,{label:"Name",isRequired:!0}),e.jsx("br",{}),e.jsx(s,{label:"Email",isRequired:!0}),e.jsx("br",{}),e.jsx(A,{label:"Age",minValue:0,maxValue:120}),e.jsx("br",{}),e.jsx(E,{label:"Search contacts",onSubmit:()=>{}}),e.jsx("br",{}),e.jsx(B,{children:"Subscribe to updates"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(k,{children:"Save"})]})}};var c,u,g;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    isLoading: true,
    loadingLabel: "Loading",
    children: <TextInput label="Name" placeholder="Jane Doe" />
  }
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var b,h,f;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isLoading: false
  }
}`,...(f=(h=i.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var x,L,j;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    isLoading: true,
    loadingLabel: "Loading",
    children: <>
        <Button>Submit</Button>
        <CheckBox>Subscribe to updates</CheckBox>
      </>
  }
}`,...(j=(L=a.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var y,v,S,N,w;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    isLoading: true,
    loadingLabel: "Loading",
    children: <>
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
      </>
  }
}`,...(S=(v=r.parameters)==null?void 0:v.docs)==null?void 0:S.source},description:{story:"A more realistic example: a form with several different field types, all wrapped\nin a single `Loading` provider. None of the fields are passed `isLoading` directly -\nthey all pick up the ambient state from context. Toggle the switch to see every\nfield switch to its loading skeleton at once.",...(w=(N=r.parameters)==null?void 0:N.docs)==null?void 0:w.description}}};const mr=["Primary","NotLoading","WrappingMultipleComponents","ExampleForm"];export{r as ExampleForm,i as NotLoading,o as Primary,a as WrappingMultipleComponents,mr as __namedExportsOrder,lr as default};
