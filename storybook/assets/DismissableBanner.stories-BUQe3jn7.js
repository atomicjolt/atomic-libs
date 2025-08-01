import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{g as f}from"./cssprops-DECR0Nbg.js";import{R as u}from"./helpers-2R5bv1V7.js";import{fn as h}from"./index-BgJgh-x_.js";import{D as S,E as w,W as B}from"./DismissableBanner.component-BM3ZkRK_.js";import"./styled-components.browser.esm-Y4FpNNpy.js";import"./index-BCtMShv3.js";import"./index-BahBINXq.js";import"./index-DH6cMxOd.js";import"./index-Do_mbUnv.js";import"./index-BDzxygkP.js";import"./index-CyCRagT9.js";import"./Collection-DqSZYP0m.js";import"./CollectionBuilder-D7AJqdfd.js";import"./index-BqCLlfdy.js";import"./index-D-fs5e6L.js";import"./useFocusable-DacP9xvE.js";import"./useObjectRef-D2RG7rRi.js";import"./SSRProvider-DyiXDq2k.js";import"./scale-CqCDTNu0.js";import"./useRenderProps-CP918x9p.js";import"./index-EJ0-2BeM.js";import"./useTranslations-lvMpgG-n.js";import"./useLocalizedStringFormatter-BmC8c4z2.js";import"./context-z6pb9OkM.js";import"./Banner.component-CA69JdRH.js";import"./mixins-XviowZ_6.js";import"./layout-D683Cy6J.js";import"./utils-DqmNl-Il.js";import"./IconButton.component-Dh_feHGY.js";import"./Button.component-BphrT6T-.js";import"./useFocusRing-88kjlAJd.js";import"./useFocusWithin-AgzTPs3-.js";import"./usePress-CzUfyTu7.js";import"./useButton-DYDUZLxM.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLink-D8UViwUR.js";import"./index-CsiUWFDz.js";import"./Button.context-BxdzJgC_.js";import"./SpinnerLoader.component-m_6GktEi.js";import"./Loader.component-C9J8jQ0I.js";import"./Flex.component-fpVWlrim.js";import"./Checkmark.component-Bisr1A6O.js";import"./Spinner.component-C44VOTWe.js";import"./ProgressCircle.component-_TQleApR.js";import"./number-nHrFdSb-.js";import"./useLabel-DDcndmXW.js";import"./useLabels-B8dXFA8d.js";import"./useNumberFormatter-BHOsbS6G.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-x_YFGAop.js";import"./MaterialIcon.component-DlkcNvpT.js";import"./Icons.styles-D-JqKhr6.js";const Br={title:"Banners/DismissableBanner",component:S,parameters:{cssprops:f("Banner")},argTypes:{...u,variant:{control:"select",options:["info","warning","success","error"]},iconVariant:{control:"select",options:["default","outlined","rounded","two-tone","sharp"]}}},r={args:{children:"Notification Settings Saved",variant:"info",icon:"info",onDismiss:h()}},o={render:i=>l.jsx(w,{...i}),args:{children:"Something went wrong"}},t={render:i=>l.jsx(B,{...i}),args:{children:"Something went wrong"}};var n,e,s;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    children: "Notification Settings Saved",
    variant: "info",
    icon: "info",
    onDismiss: fn()
  }
}`,...(s=(e=r.parameters)==null?void 0:e.docs)==null?void 0:s.source}}};var p,m,a;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: props => <ErrorBanner {...props} />,
  args: {
    children: "Something went wrong"
  }
}`,...(a=(m=o.parameters)==null?void 0:m.docs)==null?void 0:a.source}}};var c,d,g;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: props => <WarningBanner {...props} />,
  args: {
    children: "Something went wrong"
  }
}`,...(g=(d=t.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};const Er=["Info","Error","Warning"];export{o as Error,r as Info,t as Warning,Er as __namedExportsOrder,Br as default};
