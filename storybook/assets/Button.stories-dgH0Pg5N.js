import{j as A}from"./jsx-runtime-D_zvdyIk.js";import{R as O,P as W}from"./helpers-CVUqcLcb.js";import{M as _}from"./index-DGavfVYP.js";import{g as F}from"./cssprops-BO85xpNm.js";import{B as q}from"./Button.component-Bc8mRpye.js";import"./styled-components.browser.esm-B0S50oBn.js";import"./index-DmM0KDA7.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./Collection-Blx8idkz.js";import"./CollectionBuilder-C8aBQCuV.js";import"./index-CnHy7ftH.js";import"./index-nLeaPAJ8.js";import"./useFocusable-DDF3Tgcq.js";import"./useObjectRef-BMBYa31u.js";import"./SSRProvider-nIDwi1ZO.js";import"./useRenderProps-BzxgHqRb.js";import"./index-CrEZfznw.js";import"./Icons.styles-D2L4nNgu.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusRing-CMFCJy1v.js";import"./useFocusWithin-ypR2cHkl.js";import"./usePress-BejIIMCm.js";import"./useButton-EuBryRSZ.js";import"./useLink-ytEWay4y.js";import"./index-9MQGFWEg.js";import"./mixins-CgZ-Dp8B.js";import"./SpinnerLoader.component-CKnzGd3o.js";import"./Loader.component-BVJk9SjC.js";import"./Flex.component-CLGTqHVr.js";import"./layout-C5ppTKTq.js";import"./utils-DqmNl-Il.js";import"./Checkmark.component-CdBGiybJ.js";import"./Spinner.component-Dtx1YsdI.js";import"./ProgressCircle.component-DRcKSkPB.js";import"./useLabel-C1USB2dP.js";import"./useLabels-DqNC8NnF.js";import"./useNumberFormatter-CH8tnwcW.js";import"./context-BF7eBGFA.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-x_YFGAop.js";const Er={title:"Buttons/Button",component:q,parameters:{layout:"centered",cssprops:F("Button")},argTypes:{...W,...O,children:{control:"text"},variant:{control:"select",description:"Button variant controls the presentation of the button.",table:{category:"Presentation"},options:["primary","secondary","link","error","success","inverted","content","border","ghost"]},isDisabled:{control:"boolean",description:"If true, the button will be not be clickable."},type:{control:"select",description:"The type of button.",options:["button","submit","reset"]},excludeFromTabOrder:{control:"boolean",description:"If true, the button will be excluded from the tab order and will not be focusable via keyboard navigation."}}},r={args:{children:"Primary",variant:"primary",type:"button",isDisabled:!1,isLoading:!1}},a={args:{...r.args,children:"Secondary",variant:"secondary"}},e={args:{...r.args,children:"Link",variant:"link"}},o={args:{...r.args,children:"Error",variant:"error"}},n={args:{...r.args,children:"Success",variant:"success"}},t={args:{...r.args,children:"Inverted",variant:"inverted"}},s={args:{...r.args,children:"Primary",variant:"primary",isLoading:!0,loadingLabel:"Now Loading"}},i={args:{...r.args,children:"Primary",variant:"primary",isLoading:!0,loadingLabel:"Now Loading",loadingComplete:!0}},c={argTypes:{children:{control:!1}},args:{...r.args,children:[A.jsx(_,{icon:"add"},"add"),"Primary"],variant:"primary"}};var m,p,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(R=(M=c.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};const Cr=["Primary","Secondary","Link","Error","Success","Inverted","LoadingButton","LoadingCompleteButton","WithIcon"];export{o as Error,t as Inverted,e as Link,s as LoadingButton,i as LoadingCompleteButton,r as Primary,a as Secondary,n as Success,c as WithIcon,Cr as __namedExportsOrder,Er as default};
