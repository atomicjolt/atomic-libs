import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{C as B}from"./index-CAk021NZ.js";import{N as C}from"./index-L3yvc1jG.js";import{S as _}from"./index-CstgytMr.js";import{r as I}from"./index-BCtMShv3.js";import{$ as V}from"./VisuallyHidden-CdgZn78T.js";import{L as T}from"./Loading.context-C7II2W1n.js";import{u as A}from"./useRenderProps-CP918x9p.js";import{u as E}from"./useTranslations-8dZDm3M4.js";import{T as s}from"./TextInput.component-9MOSTsL4.js";import{B as k}from"./Button.component-mSxeRaSI.js";import"./useObjectRef-D2RG7rRi.js";import"./SSRProvider-DyiXDq2k.js";import"./useFormValidationState-CONlS5Wo.js";import"./useFormValidation-BfT1egZx.js";import"./useFocusable-DacP9xvE.js";import"./usePress-CqXh5MnK.js";import"./index-q6RvvsFA.js";import"./index-D-fs5e6L.js";import"./useToggle-iesXfB0X.js";import"./useControlledState-vzCMHZvt.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormReset-BY6BQbOl.js";import"./context-z6pb9OkM.js";import"./Inputs.styles-Ch7s-CR_.js";import"./styled-components.browser.esm-DC3GK9Rn.js";import"./mixins-CcgEHb9c.js";import"./ComboInput.styles-kOaziVwv.js";import"./SkeletonLoader.component-q75MwwfP.js";import"./index-EJ0-2BeM.js";import"./TextField.component-N2s51dq8.js";import"./useTextField-CQoa95kJ.js";import"./useField-BY78xfaL.js";import"./useLabel-DDcndmXW.js";import"./useLabels-B8dXFA8d.js";import"./Field.styles-DjdYEYvF.js";import"./Provider-op_UCnZE.js";import"./Label.context-CCD9MV1z.js";import"./index-CKqsTkFX.js";import"./Message.context-Dd4cT4rL.js";import"./ErrorMessage.context-AYC8UfzI.js";import"./ComboInput.context-_UpYbRGR.js";import"./Input.context-Cyaw3phX.js";import"./TextArea.context-AnZs5gnW.js";import"./NumberField.component-BL-NgYzA.js";import"./useFocusWithin-BJ0-_hiU.js";import"./useEvent-CeKNPFU-.js";import"./useLocalizedStringFormatter-BmC8c4z2.js";import"./useNumberFormatter-BHOsbS6G.js";import"./NumberFormatter-DNR9MAW-.js";import"./useSpinButton-CEXF7CxP.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button.context-CorcCtTC.js";import"./index-DAiKQP8B.js";import"./BaseButton-hqyUXOtf.js";import"./useFocusRing-DIS5Kyrs.js";import"./useButton-9RZc7-Gk.js";import"./useLink-DD4jtrk3.js";import"./SpinnerLoader.component-KlnkCnHe.js";import"./Loader.component-CrjS-2nc.js";import"./index-CB5SOmuf.js";import"./layout-Dd7m2B0D.js";import"./spacing-Bd-CIscW.js";import"./utils-DqmNl-Il.js";import"./Checkmark.component-BsvhAJlZ.js";import"./Spinner.component-CbEi-nNZ.js";import"./ProgressCircle.component-Cto4SYF5.js";import"./number-nHrFdSb-.js";import"./colors-x_YFGAop.js";import"./MaterialIcon.component-wzFBvnrE.js";import"./Icons.styles-qcj_pyb3.js";import"./RequiredMarker-CwAzCIB3.js";import"./Message.component-CZ4-z7fs.js";import"./ErrorMessage.component-DBytMZ-8.js";import"./index-C5FB09Y9.js";import"./FloatingFieldInputWrapper-DHHM-5zK.js";import"./Label.component-BWEgwSKL.js";import"./ComboInput.component-AZYKBBz8.js";import"./Input.component-BV7OW4Aw.js";import"./SearchField.component-CSQmeh8I.js";function l(n){const{isLoading:t,loadingLabel:m}=n,q=E(),p=I.useMemo(()=>({isLoading:t,loadingLabel:q("loading")}),[t,m]),d=A({componentClassName:"aje-loading",values:p,...n});return e.jsx(T.Provider,{value:p,children:e.jsxs("div",{...d,"aria-busy":t?"true":void 0,children:[e.jsx(V,{role:"status","aria-live":"polite",children:t?m:""}),d.children]})})}try{l.displayName="Loading",l.__docgenInfo={description:`Provides an ambient loading state to descendant components.
Any component that reads its loading state with \`useLoading\` will
pick this up unless it is given its own local loading props, which
take priority over the ambient state.`,displayName:"Loading",props:{id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",required:!1,type:{name:"Argument | Argument[]"}},size:{defaultValue:null,description:"Size of the component",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"auto"'},{value:'"full"'}]}},isLoading:{defaultValue:null,description:`When loading is true, the content will be replaced with a spinner.
When it is false, the content will be shown normally`,name:"isLoading",required:!1,type:{name:"boolean | undefined"}},loadingLabel:{defaultValue:null,description:"aria accessiblity label to inform screen-readers that it is loading",name:"loadingLabel",required:!1,type:{name:"string | undefined"}}}}}catch{}const lr={title:"Feedback/Loading",component:l,argTypes:{isLoading:{control:"boolean"},loadingLabel:{control:"text"},children:{control:!1}}},o={args:{isLoading:!0,loadingLabel:"Loading",children:e.jsx(s,{label:"Name",placeholder:"Jane Doe"})}},i={args:{...o.args,isLoading:!1}},a={args:{isLoading:!0,loadingLabel:"Loading",children:e.jsxs(e.Fragment,{children:[e.jsx(k,{children:"Submit"}),e.jsx(B,{children:"Subscribe to updates"})]})}},r={args:{isLoading:!0,loadingLabel:"Loading",children:e.jsxs(e.Fragment,{children:[e.jsx(s,{label:"Name",isRequired:!0}),e.jsx("br",{}),e.jsx(s,{label:"Email",isRequired:!0}),e.jsx("br",{}),e.jsx(C,{label:"Age",minValue:0,maxValue:120}),e.jsx("br",{}),e.jsx(_,{label:"Search contacts",onSubmit:()=>{}}),e.jsx("br",{}),e.jsx(B,{children:"Subscribe to updates"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(k,{children:"Save"})]})}};var c,u,g;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
