import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{g as f}from"./cssprops-BO85xpNm.js";import{R as u}from"./helpers-DIZg5bA6.js";import{fn as h}from"./index-D1pa-M5k.js";import{D as S,E as w,W as B}from"./DismissableBanner.component-Bz7cSJCX.js";import"./styled-components.browser.esm-S-CusIP4.js";import"./index-DmM0KDA7.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./Collection-cZH6f0Bi.js";import"./CollectionBuilder-DglRgqo3.js";import"./index-D_Kw7eWP.js";import"./index-nLeaPAJ8.js";import"./useFocusable-B7cTVP20.js";import"./useObjectRef-BO7mrmvR.js";import"./SSRProvider-nIDwi1ZO.js";import"./useRenderProps-BzxgHqRb.js";import"./index-CrEZfznw.js";import"./Banner.component-06N0UcPb.js";import"./mixins-BOHXBJW9.js";import"./layout-C5ppTKTq.js";import"./utils-DqmNl-Il.js";import"./IconButton.component-Da4ILow8.js";import"./Button.component-BcdaaP2f.js";import"./useFocusRing-BmyBc2tX.js";import"./useFocusWithin-C-e8UI97.js";import"./usePress-Cng8MYxN.js";import"./useButton-CBzhh6F5.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLink-BTwsTyp1.js";import"./index-CqJC2f1M.js";import"./SpinnerLoader.component-DJXvo7dP.js";import"./Loader.component-Dt3yODGv.js";import"./Flex.component-LqFgqvCS.js";import"./Checkmark.component-CRE6wLUH.js";import"./Spinner.component-C1TzuC8j.js";import"./ProgressCircle.component-BlbtEDe_.js";import"./useLabel-B1sX0IQZ.js";import"./useLabels-D0NjiLiF.js";import"./useNumberFormatter-CH8tnwcW.js";import"./context-BF7eBGFA.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-x_YFGAop.js";import"./MaterialIcon.component-hQ9Uu0J7.js";import"./Icons.styles-T5NoJEsB.js";const dr={title:"Banners/DismissableBanner",component:S,parameters:{cssprops:f("Banner")},argTypes:{...u,variant:{control:"select",options:["info","warning","success","error"]},iconVariant:{control:"select",options:["default","outlined","rounded","two-tone","sharp"]}}},r={args:{children:"Notification Settings Saved",variant:"info",icon:"info",onDismiss:h()}},o={render:t=>l.jsx(w,{...t}),args:{children:"Something went wrong"}},n={render:t=>l.jsx(B,{...t}),args:{children:"Something went wrong"}};var i,e,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
