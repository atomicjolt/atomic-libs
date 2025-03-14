import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{g as f}from"./cssprops-BO85xpNm.js";import{R as u}from"./helpers-CeNUlk3Q.js";import{fn as h}from"./index-D1pa-M5k.js";import{D as S,E as w,W as B}from"./DismissableBanner.component-CDWjw7yz.js";import"./styled-components.browser.esm-B0S50oBn.js";import"./index-DmM0KDA7.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./Collection-CfmUX7eJ.js";import"./CollectionBuilder-BOiBnYCj.js";import"./index-CnHy7ftH.js";import"./index-nLeaPAJ8.js";import"./useFocusable-B7cTVP20.js";import"./useObjectRef-BO7mrmvR.js";import"./SSRProvider-nIDwi1ZO.js";import"./useRenderProps-BzxgHqRb.js";import"./index-CrEZfznw.js";import"./Banner.component-BYtWDYXR.js";import"./mixins-CgZ-Dp8B.js";import"./layout-UyCWIQlE.js";import"./utils-2VFVy79V.js";import"./IconButton.component-DZzctQlJ.js";import"./Button.component-BLbJfzea.js";import"./useFocusRing-4PdL76fJ.js";import"./useFocusWithin-CrVHK3Cv.js";import"./usePress-Cxy0og0d.js";import"./useButton-DlM8S39G.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLink-CqmZ9M1P.js";import"./index-CqJC2f1M.js";import"./SpinnerLoader.component-C-GjOD5G.js";import"./Loader.component-op5N5W1y.js";import"./Flex.component-B3J_h_z8.js";import"./Checkmark.component-CdgaIQiV.js";import"./Spinner.component-fO3c5uZz.js";import"./ProgressCircle.component-dfZhFUDA.js";import"./useLabel-B1sX0IQZ.js";import"./useLabels-D0NjiLiF.js";import"./useNumberFormatter-CH8tnwcW.js";import"./context-BF7eBGFA.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-x_YFGAop.js";import"./MaterialIcon.component-BoC_hioH.js";import"./Icons.styles-D2L4nNgu.js";const dr={title:"Banners/DismissableBanner",component:S,parameters:{cssprops:f("Banner")},argTypes:{...u,variant:{control:"select",options:["info","warning","success","error"]},iconVariant:{control:"select",options:["default","outlined","rounded","two-tone","sharp"]}}},r={args:{children:"Notification Settings Saved",variant:"info",icon:"info",onDismiss:h()}},o={render:t=>l.jsx(w,{...t}),args:{children:"Something went wrong"}},n={render:t=>l.jsx(B,{...t}),args:{children:"Something went wrong"}};var i,e,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(g=(d=n.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};const gr=["Info","Error","Warning"];export{o as Error,r as Info,n as Warning,gr as __namedExportsOrder,dr as default};
