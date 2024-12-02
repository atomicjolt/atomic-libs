import{j as A}from"./jsx-runtime-CkxqCPlQ.js";import{P as O,R as W}from"./helpers-DsiJys5i.js";import{M as _}from"./index-C_RUmn9I.js";import{g as F}from"./cssprops-BGfeK0jo.js";import{B as q}from"./Button.component-Bg3ttyxF.js";import"./index-DJO9vBfz.js";import"./styled-components.browser.esm-WCay-hu9.js";import"./CollectionBuilder-Vf4TV1hX.js";import"./index-DJdX7xnk.js";import"./SSRProvider-DAMUgb6s.js";import"./useLayoutEffect-Bj1hLagI.js";import"./Section-BBepoPM4.js";import"./useRenderProps-BqJZ5b79.js";import"./index-i5X67GZP.js";import"./Icons.styles-Doaby5xe.js";import"./useObjectRef-C4RVQRRU.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-DyKXFx56.js";import"./focusSafely-GXGk_mpd.js";import"./useFocus-C-we61At.js";import"./utils-DHlq6CLd.js";import"./useKeyboard-A8_doyNT.js";import"./useFocusRing-MU4psFt8.js";import"./useFocusWithin-DOCmU_ML.js";import"./useButton-GWYvoXvT.js";import"./usePress-DG8LklVH.js";import"./useLink-ytCU544I.js";import"./index-CXdyvu6V.js";import"./mixins-TlkgTuSN.js";import"./SpinnerLoader.component-BS7s8xEm.js";import"./Loader.component-CqkhvLsa.js";import"./index-K1z_EpAd.js";import"./utils-CWBnbg5w.js";import"./Checkmark.component-CAhyXLZS.js";import"./Spinner.component-DpjfBBgU.js";const kr={title:"Buttons/Button",component:q,parameters:{layout:"centered",cssprops:F("Button")},argTypes:{...O,...W,children:{control:"text"},variant:{control:"select",description:"Button variant controls the presentation of the button.",table:{category:"Presentation"},options:["primary","secondary","link","error","success","inverted","content","border","ghost"]},isDisabled:{control:"boolean",description:"If true, the button will be not be clickable."},type:{control:"select",description:"The type of button.",options:["button","submit","reset"]},excludeFromTabOrder:{control:"boolean",description:"If true, the button will be excluded from the tab order and will not be focusable via keyboard navigation."}}},r={args:{children:"Primary",variant:"primary",type:"button",isDisabled:!1,isLoading:!1}},a={args:{...r.args,children:"Secondary",variant:"secondary"}},e={args:{...r.args,children:"Link",variant:"link"}},o={args:{...r.args,children:"Error",variant:"error"}},n={args:{...r.args,children:"Success",variant:"success"}},t={args:{...r.args,children:"Inverted",variant:"inverted"}},s={args:{...r.args,children:"Primary",variant:"primary",isLoading:!0,loadingLabel:"Now Loading"}},i={args:{...r.args,children:"Primary",variant:"primary",isLoading:!0,loadingLabel:"Now Loading",loadingComplete:!0}},c={argTypes:{children:{control:!1}},args:{...r.args,children:[A.jsx(_,{icon:"add"},"add"),"Primary"],variant:"primary"}};var m,d,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: "Primary",
    variant: "primary",
    type: "button",
    isDisabled: false,
    isLoading: false
  }
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var l,g,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(R=(M=c.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};const Br=["Primary","Secondary","Link","Error","Success","Inverted","LoadingButton","LoadingCompleteButton","WithIcon"];export{o as Error,t as Inverted,e as Link,s as LoadingButton,i as LoadingCompleteButton,r as Primary,a as Secondary,n as Success,c as WithIcon,Br as __namedExportsOrder,kr as default};
