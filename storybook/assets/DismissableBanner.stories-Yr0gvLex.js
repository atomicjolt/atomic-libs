import{o as f,j as l}from"./iframe-CGPW5dgX.js";import{D as u,E as S,W as h}from"./DismissableBanner.component-DAPhub_k.js";import{R as w}from"./helpers-tUmR_xN7.js";import"./preload-helper-Dp1pzeXC.js";import"./useRenderProps-B7rIWDyP.js";import"./index-BjoBGrPA.js";import"./useTranslations-BQv9_06X.js";import"./useLocalizedStringFormatter-CLx94-cg.js";import"./context-CLSG1ylv.js";import"./SSRProvider-Dwr0Ku02.js";import"./Banner.component-_HzM6Lm9.js";import"./displayName-CEXLPPBu.js";import"./mixins-BJuiWlrm.js";import"./layout-Dd7m2B0D.js";import"./spacing-Bd-CIscW.js";import"./utils-DqmNl-Il.js";import"./MaterialIcon.component-Dhrh5rCP.js";import"./Icons.styles-tJBW4wd9.js";import"./useObjectRef-CjsC0YUg.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-DT9_LXVA.js";import"./IconButton.component-CifirOzj.js";import"./BaseButton-B8bVR-o6.js";import"./index-C0dagnaq.js";import"./useFocusRing-Dbcio0BW.js";import"./useFocusWithin-BzfIRRcZ.js";import"./usePress-BioWcz2v.js";import"./useButton-CjI92Tj6.js";import"./useLink-PwQmwW74.js";import"./Loading.context-EUscm4UA.js";import"./SpinnerLoader.component-BfUo5Fvz.js";import"./Loader.component-oLyQpXum.js";import"./Flex.component-BDldr6hG.js";import"./Checkmark.component-DL9zPInj.js";import"./Spinner.component-CLncQyFJ.js";import"./ProgressCircle.component-Cc0SXoU-.js";import"./useLabel-BytR9cji.js";import"./useLabels-Bveo7T3X.js";import"./useNumberFormatter-CgBbBkmi.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-PU9nFmCW.js";import"./Button.component-Bd4z0Gnh.js";import"./scale-CqCDTNu0.js";const{fn:B}=__STORYBOOK_MODULE_TEST__,mr={title:"Banners/DismissableBanner",component:u,parameters:{cssprops:{banner:f}},argTypes:{...w,variant:{control:"select",options:["info","warning","success","error"]},iconVariant:{control:"select",options:["default","outlined","round","sharp","two-tone"]}}},r={args:{children:"Notification Settings Saved",variant:"info",icon:"info",onDismiss:B()}},o={render:t=>l.jsx(S,{...t}),args:{children:"Something went wrong"}},n={render:t=>l.jsx(h,{...t}),args:{children:"Something went wrong"}},cr=["Info","Error","Warning"];var i,e,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: "Notification Settings Saved",
    variant: "info",
    icon: "info",
    onDismiss: fn()
  }
}`,...(s=(e=r.parameters)==null?void 0:e.docs)==null?void 0:s.source}}};var a,p,m;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: props => <ErrorBanner {...props} />,
  args: {
    children: "Something went wrong"
  }
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var c,d,g;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: props => <WarningBanner {...props} />,
  args: {
    children: "Something went wrong"
  }
}`,...(g=(d=n.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};export{o as Error,r as Info,n as Warning,cr as __namedExportsOrder,mr as default};
