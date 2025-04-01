import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./index-D4IwYvU9.js";import{M as r}from"./Modal.component-C5APn-aI.js";import{M as h}from"./MaterialIcon.component-w-Hb6GVM.js";import{T as f}from"./Text.component-BHioX2_j.js";import{B as y}from"./Button.component-BObpPVxs.js";import"./index-DmM0KDA7.js";import"./context-D5CkyXRW.js";import"./FocusScope-CLRP0VYY.js";import"./useFocusable-B7cTVP20.js";import"./useObjectRef-BO7mrmvR.js";import"./SSRProvider-nIDwi1ZO.js";import"./useFocusWithin-CrVHK3Cv.js";import"./usePress-Cxy0og0d.js";import"./index-CnHy7ftH.js";import"./index-nLeaPAJ8.js";import"./getScrollParent-BL0kfGii.js";import"./isScrollable-BSEN4xi5.js";import"./useOverlayTriggerState-3VWy5d8s.js";import"./PressResponder-D-PDHmhd.js";import"./useControlledState-sJfMLWrs.js";import"./index-CqJC2f1M.js";import"./useRenderProps-BzxgHqRb.js";import"./index-CrEZfznw.js";import"./Modal.context-CnJk84dQ.js";import"./layout-C5ppTKTq.js";import"./spacing-Bd-CIscW.js";import"./utils-DqmNl-Il.js";import"./styled-components.browser.esm-B0S50oBn.js";import"./Flex.component-DSJ8Mwfi.js";import"./Heading.component-6PKA-0l5.js";import"./typography-B_qJ0BtB.js";import"./scale-CqCDTNu0.js";import"./colors-x_YFGAop.js";import"./index-BDzxygkP.js";import"./View.component-Ct2KpdGZ.js";import"./Icons.styles-D2L4nNgu.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusRing-4PdL76fJ.js";import"./useButton-DlM8S39G.js";import"./useLink-CqmZ9M1P.js";import"./mixins-CgZ-Dp8B.js";import"./SpinnerLoader.component-DGq62Hsy.js";import"./Loader.component-D2Ngq9hJ.js";import"./Checkmark.component-CdBGiybJ.js";import"./Spinner.component-fO3c5uZz.js";import"./ProgressCircle.component-dfZhFUDA.js";import"./useLabel-B1sX0IQZ.js";import"./useLabels-D0NjiLiF.js";import"./useNumberFormatter-CH8tnwcW.js";import"./context-BF7eBGFA.js";import"./NumberFormatter-DNR9MAW-.js";function i(n){const{title:l,children:p,buttonText:d="Close",onClose:o,...c}=n;return e.jsx(r,{$width:"400px",...c,children:u=>e.jsxs(e.Fragment,{children:[e.jsxs(r.Header,{$justify:"start",children:[e.jsx(h,{icon:"error"}),e.jsx(r.Title,{children:l})]}),e.jsx(r.Body,{children:e.jsx(f,{$size:"3",children:p})}),e.jsx(r.Footer,{children:e.jsx(y,{variant:"error",type:"button",onPress:()=>{o==null||o(),u()},children:d})})]})})}try{i.displayName="ErrorModal",i.__docgenInfo={description:"Error Modal Component. For displaying an error message and a button to close the modal.\n\nKeep in mind that the `ErrorModal` is a simple wrapper around the `Modal` component for a simple error message.\nIf you need a more complex error modal, you can use the `Modal` component directly. [Check the ErrorModal implementation for a starting point](https://github.com/atomicjolt/atomic-libs/blob/main/packages/atomic-elements/src/components/Overlays/ErrorModal/ErrorModal.component.tsx)",displayName:"ErrorModal",props:{title:{defaultValue:null,description:"Must include a title. Titles are always in Title case.",name:"title",required:!0,type:{name:"string"}},buttonText:{defaultValue:null,description:"Text of the button to close the modal.",name:"buttonText",required:!1,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"() => void"}},centered:{defaultValue:null,description:"Centers the modal within the viewport\n@deprecated Use `isCentered` instead",name:"centered",required:!1,type:{name:"boolean"}},isCentered:{defaultValue:null,description:"Centers the modal within the viewport",name:"isCentered",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<never>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<never>"}}}}}catch{}const fe={title:"Overlays/Modals/ErrorModal",component:i,parameters:{docs:{story:{inline:!1,height:"400px"}}}},t={args:{isOpen:!0,title:"Error",children:"An error has occurred",buttonText:"Close",centered:!0}};var a,s,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: "Error",
    children: "An error has occurred",
    buttonText: "Close",
    centered: true
  }
}`,...(m=(s=t.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const ye=["Primary"];export{t as Primary,ye as __namedExportsOrder,fe as default};
