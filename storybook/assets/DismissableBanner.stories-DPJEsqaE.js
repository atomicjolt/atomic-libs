import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{D as f,E as u,W as h}from"./index-M6Jthqw_.js";import{g as S}from"./cssprops-DECR0Nbg.js";import{R as w}from"./helpers-DpMr3oGb.js";import{fn as B}from"./index-BgLytPr-.js";import"./index-BCtMShv3.js";import"./useRenderProps-CP918x9p.js";import"./index-EJ0-2BeM.js";import"./useTranslations-8dZDm3M4.js";import"./useLocalizedStringFormatter-BmC8c4z2.js";import"./context-z6pb9OkM.js";import"./SSRProvider-DyiXDq2k.js";import"./Banner.component-DIlcTIpF.js";import"./styled-components.browser.esm-DC3GK9Rn.js";import"./mixins-CcgEHb9c.js";import"./layout-Dd7m2B0D.js";import"./spacing-Bd-CIscW.js";import"./utils-DqmNl-Il.js";import"./index-DnOMPDxK.js";import"./index-D0UYfcsL.js";import"./Icons.styles-qcj_pyb3.js";import"./useObjectRef-B4hnndUj.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-B7HbK8LX.js";import"./BaseButton-DBbmnCO8.js";import"./useFocusRing-zxvArQTZ.js";import"./useFocusWithin-dfJl9rAf.js";import"./usePress-BJ4Xpz5E.js";import"./index-q6RvvsFA.js";import"./index-D-fs5e6L.js";import"./useButton-B6TSBwA2.js";import"./useLink-C7Cuty20.js";import"./Loading.context-C7II2W1n.js";import"./SpinnerLoader.component-D4g-QhUe.js";import"./Loader.component-C9qA52Gf.js";import"./Flex.component-CMKfz10l.js";import"./index-BIzvBz7y.js";import"./Checkmark.component-DPw8o_SY.js";import"./Spinner.component-4On_l0hw.js";import"./ProgressCircle.component-D1QqNNgO.js";import"./number-nHrFdSb-.js";import"./useLabel-Bew-gTxt.js";import"./useLabels-BQTM_NWA.js";import"./useNumberFormatter-BHOsbS6G.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-x_YFGAop.js";import"./Button.context-DHqbpAmX.js";import"./Button.component-Bf_03czx.js";import"./scale-CqCDTNu0.js";import"./Collection-DwMxgycI.js";import"./CollectionBuilder-L_wKxqRd.js";const Sr={title:"Banners/DismissableBanner",component:f,parameters:{cssprops:S("Banner")},argTypes:{...w,variant:{control:"select",options:["info","warning","success","error"]},iconVariant:{control:"select",options:["default","outlined","rounded","two-tone","sharp"]}}},r={args:{children:"Notification Settings Saved",variant:"info",icon:"info",onDismiss:B()}},o={render:t=>l.jsx(u,{...t}),args:{children:"Something went wrong"}},n={render:t=>l.jsx(h,{...t}),args:{children:"Something went wrong"}};var i,e,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(m=o.parameters)==null?void 0:m.docs)==null?void 0:a.source}}};var c,d,g;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: props => <WarningBanner {...props} />,
  args: {
    children: "Something went wrong"
  }
}`,...(g=(d=n.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};const wr=["Info","Error","Warning"];export{o as Error,r as Info,n as Warning,wr as __namedExportsOrder,Sr as default};
