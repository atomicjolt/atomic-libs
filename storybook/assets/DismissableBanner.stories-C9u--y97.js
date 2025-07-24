import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{g as f}from"./cssprops-BO85xpNm.js";import{R as u}from"./helpers-DOVaRqs_.js";import{fn as h}from"./index-BgJgh-x_.js";import{D as S,E as w,W as B}from"./DismissableBanner.component-CBjrWPro.js";import"./styled-components.browser.esm-Y4FpNNpy.js";import"./index-BCtMShv3.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./Collection-C2kgHJSW.js";import"./CollectionBuilder-4ZFsDDvv.js";import"./index-BqCLlfdy.js";import"./index-D-fs5e6L.js";import"./useFocusable-B7HbK8LX.js";import"./useObjectRef-B4hnndUj.js";import"./SSRProvider-DyiXDq2k.js";import"./useRenderProps-CP918x9p.js";import"./index-EJ0-2BeM.js";import"./index-SPKsbD02.js";import"./Icons.styles-D-JqKhr6.js";import"./filterDOMProps-CeZl_uWj.js";import"./Banner.component-Brc5DqFW.js";import"./mixins-XviowZ_6.js";import"./layout-C5ppTKTq.js";import"./utils-DqmNl-Il.js";import"./IconButton.component-C57JyDaI.js";import"./Button.component-I4DbnubE.js";import"./useFocusRing-BT9oCgfs.js";import"./useFocusWithin-J-xELNez.js";import"./usePress-CzPFgv00.js";import"./useButton-CIXIyXj7.js";import"./useLink-C_TmUO2i.js";import"./index-C_lK3xe_.js";import"./Button.context-e0zTg6D5.js";import"./SpinnerLoader.component-CZyqbQAt.js";import"./Loader.component-Bbv54XPB.js";import"./index-BqqCK9sT.js";import"./Checkmark.component-Bisr1A6O.js";import"./Spinner.component-CKgxLGDu.js";import"./ProgressCircle.component-BOqryRrp.js";import"./number-nHrFdSb-.js";import"./useLabel-Bew-gTxt.js";import"./useLabels-BQTM_NWA.js";import"./useNumberFormatter-BHOsbS6G.js";import"./context-z6pb9OkM.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-x_YFGAop.js";const lr={title:"Banners/DismissableBanner",component:S,parameters:{cssprops:f("Banner")},argTypes:{...u,variant:{control:"select",options:["info","warning","success","error"]},iconVariant:{control:"select",options:["default","outlined","rounded","two-tone","sharp"]}}},r={args:{children:"Notification Settings Saved",variant:"info",icon:"info",onDismiss:h()}},o={render:t=>l.jsx(w,{...t}),args:{children:"Something went wrong"}},n={render:t=>l.jsx(B,{...t}),args:{children:"Something went wrong"}};var i,e,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: "Notification Settings Saved",
    variant: "info",
    icon: "info",
    onDismiss: fn()
  }
}`,...(s=(e=r.parameters)==null?void 0:e.docs)==null?void 0:s.source}}};var p,a,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: props => <ErrorBanner {...props} />,
  args: {
    children: "Something went wrong"
  }
}`,...(m=(a=o.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};var c,d,g;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: props => <WarningBanner {...props} />,
  args: {
    children: "Something went wrong"
  }
}`,...(g=(d=n.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};const fr=["Info","Error","Warning"];export{o as Error,r as Info,n as Warning,fr as __namedExportsOrder,lr as default};
