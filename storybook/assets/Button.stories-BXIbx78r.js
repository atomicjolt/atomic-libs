import{j as A}from"./jsx-runtime-D_zvdyIk.js";import{R as O,P as W}from"./helpers-DOVaRqs_.js";import{M as _}from"./index-DrYxa4Ea.js";import{g as F}from"./cssprops-DECR0Nbg.js";import{B as q}from"./Button.component-C28OZiWy.js";import"./styled-components.browser.esm-Y4FpNNpy.js";import"./index-BCtMShv3.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./Collection-C2kgHJSW.js";import"./CollectionBuilder-4ZFsDDvv.js";import"./index-BqCLlfdy.js";import"./index-D-fs5e6L.js";import"./useFocusable-B7HbK8LX.js";import"./useObjectRef-B4hnndUj.js";import"./SSRProvider-DyiXDq2k.js";import"./useRenderProps-CP918x9p.js";import"./index-EJ0-2BeM.js";import"./Icons.styles-D-JqKhr6.js";import"./filterDOMProps-CeZl_uWj.js";import"./index-C_lK3xe_.js";import"./BaseButton-12y0SWZH.js";import"./mixins-XviowZ_6.js";import"./useFocusRing-C-zHDrKK.js";import"./useFocusWithin-CUff8KyO.js";import"./usePress-DRrD1IP8.js";import"./useButton-5e9SJH5K.js";import"./useLink-CA4JS4F-.js";import"./SpinnerLoader.component-BakStGbE.js";import"./Loader.component-BkKFkjkF.js";import"./index-eHmJUSN_.js";import"./layout-Dd7m2B0D.js";import"./utils-DqmNl-Il.js";import"./Checkmark.component-9SUCBX5x.js";import"./Spinner.component-BXSi7FUq.js";import"./ProgressCircle.component-BVUiht0Q.js";import"./number-nHrFdSb-.js";import"./useLabel-Bew-gTxt.js";import"./useLabels-BQTM_NWA.js";import"./useNumberFormatter-BHOsbS6G.js";import"./context-z6pb9OkM.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-x_YFGAop.js";import"./Button.context-e0zTg6D5.js";const jr={title:"Buttons/Button",component:q,parameters:{layout:"centered",cssprops:F("Button")},argTypes:{...W,...O,children:{control:"text"},variant:{control:"select",description:"Button variant controls the presentation of the button.",table:{category:"Presentation"},options:["primary","secondary","link","error","success","inverted","content","border","ghost"]},isDisabled:{control:"boolean",description:"If true, the button will be not be clickable."},type:{control:"select",description:"The type of button.",options:["button","submit","reset"]},excludeFromTabOrder:{control:"boolean",description:"If true, the button will be excluded from the tab order and will not be focusable via keyboard navigation."}}},r={args:{children:"Primary",variant:"primary",type:"button",isDisabled:!1,isLoading:!1}},a={args:{...r.args,children:"Secondary",variant:"secondary"}},e={args:{...r.args,children:"Link",variant:"link"}},o={args:{...r.args,children:"Error",variant:"error"}},n={args:{...r.args,children:"Success",variant:"success"}},t={args:{...r.args,children:"Inverted",variant:"inverted"}},s={args:{...r.args,children:"Primary",variant:"primary",isLoading:!0,loadingLabel:"Now Loading"}},i={args:{...r.args,children:"Primary",variant:"primary",isLoading:!0,loadingLabel:"Now Loading",loadingComplete:!0}},c={argTypes:{children:{control:!1}},args:{...r.args,children:[A.jsx(_,{icon:"add"},"add"),"Primary"],variant:"primary"}};var m,p,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: "Primary",
    variant: "primary",
    type: "button",
    isDisabled: false,
    isLoading: false
  }
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var l,g,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    children: "Secondary",
    variant: "secondary"
  }
}`,...(u=(g=a.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var y,h,b;e.parameters={...e.parameters,docs:{...(y=e.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    children: "Link",
    variant: "link"
  }
}`,...(b=(h=e.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var v,P,L;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    children: "Error",
    variant: "error"
  }
}`,...(L=(P=o.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};var f,S,k;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    children: "Success",
    variant: "success"
  }
}`,...(k=(S=n.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var B,I,x;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    children: "Inverted",
    variant: "inverted"
  }
}`,...(x=(I=t.parameters)==null?void 0:I.docs)==null?void 0:x.source}}};var w,T,E;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    children: "Primary",
    variant: "primary",
    isLoading: true,
    loadingLabel: "Now Loading"
  }
}`,...(E=(T=s.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var C,N,j;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    children: "Primary",
    variant: "primary",
    isLoading: true,
    loadingLabel: "Now Loading",
    loadingComplete: true
  }
}`,...(j=(N=i.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var D,M,R;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  argTypes: {
    children: {
      control: false
    }
  },
  args: {
    ...Primary.args,
    children: [<MaterialIcon icon="add" key="add" />, "Primary"],
    variant: "primary"
  }
}`,...(R=(M=c.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};const Dr=["Primary","Secondary","Link","Error","Success","Inverted","LoadingButton","LoadingCompleteButton","WithIcon"];export{o as Error,t as Inverted,e as Link,s as LoadingButton,i as LoadingCompleteButton,r as Primary,a as Secondary,n as Success,c as WithIcon,Dr as __namedExportsOrder,jr as default};
