import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{g as f}from"./cssprops-BO85xpNm.js";import{R as u}from"./helpers-B5Ajgn2E.js";import{fn as h}from"./index-BgJgh-x_.js";import{D as S,E as w,W as B}from"./DismissableBanner.component-u5h8-Op5.js";import"./styled-components.browser.esm-Y4FpNNpy.js";import"./index-BCtMShv3.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./Collection-DqSZYP0m.js";import"./CollectionBuilder-D7AJqdfd.js";import"./index-BqCLlfdy.js";import"./index-D-fs5e6L.js";import"./useFocusable-DacP9xvE.js";import"./useObjectRef-D2RG7rRi.js";import"./SSRProvider-DyiXDq2k.js";import"./useRenderProps-CP918x9p.js";import"./index-EJ0-2BeM.js";import"./Banner.component-B8uRezLf.js";import"./mixins-XviowZ_6.js";import"./layout-C5ppTKTq.js";import"./utils-DqmNl-Il.js";import"./IconButton.component-BLxKwVs3.js";import"./Button.component-B1VuTqO-.js";import"./useFocusRing-CLjBjOxD.js";import"./useFocusWithin-BshFo8_g.js";import"./usePress-B9aiz4Kw.js";import"./useButton-nVeIkIqk.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLink-FIfyncSu.js";import"./index-CsiUWFDz.js";import"./SpinnerLoader.component-m7qmEdMF.js";import"./Loader.component-CAkSYpHw.js";import"./index-CgV6Zd7Q.js";import"./Checkmark.component-ByE1AGU6.js";import"./Spinner.component-Bslo7_jG.js";import"./ProgressCircle.component-OpnlU6y-.js";import"./useLabel-DDcndmXW.js";import"./useLabels-B8dXFA8d.js";import"./useNumberFormatter-BHOsbS6G.js";import"./context-z6pb9OkM.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-x_YFGAop.js";import"./MaterialIcon.component-DVFNi2Fq.js";import"./Icons.styles-D-JqKhr6.js";const dr={title:"Banners/DismissableBanner",component:S,parameters:{cssprops:f("Banner")},argTypes:{...u,variant:{control:"select",options:["info","warning","success","error"]},iconVariant:{control:"select",options:["default","outlined","rounded","two-tone","sharp"]}}},r={args:{children:"Notification Settings Saved",variant:"info",icon:"info",onDismiss:h()}},o={render:t=>l.jsx(w,{...t}),args:{children:"Something went wrong"}},n={render:t=>l.jsx(B,{...t}),args:{children:"Something went wrong"}};var i,e,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
