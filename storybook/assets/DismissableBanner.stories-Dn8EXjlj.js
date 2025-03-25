import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{g as f}from"./cssprops-BO85xpNm.js";import{R as u}from"./helpers-CVUqcLcb.js";import{fn as h}from"./index-D1pa-M5k.js";import{D as S,E as w,W as B}from"./DismissableBanner.component-C-iCjzlP.js";import"./styled-components.browser.esm-B0S50oBn.js";import"./index-DmM0KDA7.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./Collection-Blx8idkz.js";import"./CollectionBuilder-C8aBQCuV.js";import"./index-CnHy7ftH.js";import"./index-nLeaPAJ8.js";import"./useFocusable-DDF3Tgcq.js";import"./useObjectRef-BMBYa31u.js";import"./SSRProvider-nIDwi1ZO.js";import"./useRenderProps-BzxgHqRb.js";import"./index-CrEZfznw.js";import"./index-DklmvzLu.js";import"./Icons.styles-D2L4nNgu.js";import"./filterDOMProps-CeZl_uWj.js";import"./Banner.component-BvNXw_oN.js";import"./mixins-CgZ-Dp8B.js";import"./layout-C5ppTKTq.js";import"./utils-DqmNl-Il.js";import"./IconButton.component-8BWc45Fv.js";import"./Button.component-CO_EKNnI.js";import"./useFocusRing-CMFCJy1v.js";import"./useFocusWithin-ypR2cHkl.js";import"./usePress-BejIIMCm.js";import"./useButton-EuBryRSZ.js";import"./useLink-ytEWay4y.js";import"./index-9MQGFWEg.js";import"./SpinnerLoader.component-C3aOYr0J.js";import"./Loader.component-CkFYGCWL.js";import"./Flex.component-CLGTqHVr.js";import"./Checkmark.component-CdBGiybJ.js";import"./Spinner.component-CXWvSCLl.js";import"./ProgressCircle.component-DE6AAkbz.js";import"./useLabel-C1USB2dP.js";import"./useLabels-DqNC8NnF.js";import"./useNumberFormatter-CH8tnwcW.js";import"./context-BF7eBGFA.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-x_YFGAop.js";const dr={title:"Banners/DismissableBanner",component:S,parameters:{cssprops:f("Banner")},argTypes:{...u,variant:{control:"select",options:["info","warning","success","error"]},iconVariant:{control:"select",options:["default","outlined","rounded","two-tone","sharp"]}}},r={args:{children:"Notification Settings Saved",variant:"info",icon:"info",onDismiss:h()}},o={render:t=>l.jsx(w,{...t}),args:{children:"Something went wrong"}},n={render:t=>l.jsx(B,{...t}),args:{children:"Something went wrong"}};var i,e,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
