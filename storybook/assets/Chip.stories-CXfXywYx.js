import{C as E}from"./Chip.component-DGYabamg.js";import{P as A}from"./helpers-tUmR_xN7.js";import"./iframe-CGPW5dgX.js";import"./preload-helper-Dp1pzeXC.js";import"./useObjectRef-CjsC0YUg.js";import"./SSRProvider-Dwr0Ku02.js";import"./filterDOMProps-CeZl_uWj.js";import"./useSelectableList-BWSkIROv.js";import"./useSelectableItem-BeBcEVva.js";import"./useFocusable-DT9_LXVA.js";import"./usePress-BioWcz2v.js";import"./useEvent-CiV_uWQE.js";import"./scrollIntoView-DuDju04b.js";import"./isScrollable-BSEN4xi5.js";import"./FocusScope-DFxiutEz.js";import"./context-CLSG1ylv.js";import"./useDescription-DvoUWjyy.js";import"./DOMLayoutDelegate-OHLFlax3.js";import"./useCollator-BIvanRFU.js";import"./useField-DXQ2XZid.js";import"./useLabel-BytR9cji.js";import"./useLabels-Bveo7T3X.js";import"./useFocusWithin-BzfIRRcZ.js";import"./useHighlightSelectionDescription-Cdr0c3M2.js";import"./LiveAnnouncer-CAA6IyTk.js";import"./useUpdateEffect-C9zW1oNg.js";import"./useLocalizedStringFormatter-CLx94-cg.js";import"./useHasTabbableChild-Dkhd6ZX_.js";import"./getScrollParent-BL0kfGii.js";import"./useLink-PwQmwW74.js";import"./useFocusRing-Dbcio0BW.js";import"./index-C0dagnaq.js";import"./useRenderProps-B7rIWDyP.js";import"./index-BjoBGrPA.js";import"./mixins-BJuiWlrm.js";import"./IconButton.component-CifirOzj.js";import"./BaseButton-B8bVR-o6.js";import"./useButton-CjI92Tj6.js";import"./Loading.context-EUscm4UA.js";import"./SpinnerLoader.component-BfUo5Fvz.js";import"./Loader.component-oLyQpXum.js";import"./Flex.component-BDldr6hG.js";import"./layout-Dd7m2B0D.js";import"./spacing-Bd-CIscW.js";import"./utils-DqmNl-Il.js";import"./Checkmark.component-DL9zPInj.js";import"./Spinner.component-CLncQyFJ.js";import"./ProgressCircle.component-Cc0SXoU-.js";import"./useNumberFormatter-CgBbBkmi.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-PU9nFmCW.js";import"./MaterialIcon.component-Dhrh5rCP.js";import"./Icons.styles-tJBW4wd9.js";import"./scale-CqCDTNu0.js";const{fn:w}=__STORYBOOK_MODULE_TEST__,xr={title:"Chips/Chip",component:E,parameters:{layout:"centered"},argTypes:{children:{type:"string"},variant:{control:"select",options:["default","warning","success","danger"]},onRemove:{description:"Function to call when the chip is removed",table:{category:"Events"}},onAction:{table:{disable:!0}}}},r={args:{children:"Chip"}},e={args:{...r.args,onRemove:w()}},s={args:{...r.args,variant:"warning"}},a={args:{...r.args,variant:"success"}},o={args:{...r.args,variant:"danger"}},t={args:{...e.args,isDisabled:!0}},i={args:{...r.args,onPress:w()},argTypes:{...A}},Wr=["Primary","Removable","Warning","Success","Danger","Disabled","Pressable"];var m,n,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: "Chip"
  }
}`,...(p=(n=r.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,g,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    onRemove: fn()
  }
}`,...(d=(g=e.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var u,l,v;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: "warning"
  }
}`,...(v=(l=s.parameters)==null?void 0:l.docs)==null?void 0:v.source}}};var y,b,P;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: "success"
  }
}`,...(P=(b=a.parameters)==null?void 0:b.docs)==null?void 0:P.source}}};var h,S,_;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: "danger"
  }
}`,...(_=(S=o.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var T,f,C;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Removable.args,
    isDisabled: true
  }
}`,...(C=(f=t.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var D,R,O;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    onPress: fn()
  },
  argTypes: {
    ...PressableArgTypes
  }
}`,...(O=(R=i.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};export{o as Danger,t as Disabled,i as Pressable,r as Primary,e as Removable,a as Success,s as Warning,Wr as __namedExportsOrder,xr as default};
