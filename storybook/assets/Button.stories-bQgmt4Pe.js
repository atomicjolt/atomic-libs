import{j as A}from"./jsx-runtime-CkxqCPlQ.js";import{P as O,R as W}from"./helpers-D-Gur9Js.js";import{g as _}from"./cssprops-BO85xpNm.js";import{B as F}from"./Button.component-Bfqq8odl.js";import{M as q}from"./MaterialIcon.component-Bqs5W7S4.js";import"./index-DJO9vBfz.js";import"./styled-components.browser.esm-BQf_XqKi.js";import"./index-DLW06VQL.js";import"./index-BDzxygkP.js";import"./index-C0DXmw5d.js";import"./index-CyCRagT9.js";import"./Collection-CnHW8amz.js";import"./CollectionBuilder-Xbel4YvD.js";import"./index-DJdX7xnk.js";import"./SSRProvider-DAMUgb6s.js";import"./useLayoutEffect-Bj1hLagI.js";import"./index-SU87TpAq.js";import"./scale-CqCDTNu0.js";import"./useObjectRef-BKue9pYL.js";import"./useFocusRing-CPkBIT8D.js";import"./useFocus-DJe2BRHe.js";import"./utils-Df1WEgxG.js";import"./focusSafely-BOUv7I-8.js";import"./useFocusWithin-DSbUfD8x.js";import"./useRenderProps-Bk8BH60l.js";import"./index-i5X67GZP.js";import"./useButton-AoKYWM9F.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-o0N_IkwX.js";import"./useKeyboard-A8_doyNT.js";import"./usePress-Cu0aM-K5.js";import"./useLink-ByNL9j8X.js";import"./index-De95zDiF.js";import"./mixins-B7X2BZyR.js";import"./SpinnerLoader.component-qW2PqPLJ.js";import"./Loader.component-l5wuRCiG.js";import"./Flex.component-DqBL6Xjb.js";import"./layout-B6NAx4l9.js";import"./utils-2VFVy79V.js";import"./Checkmark.component-uYKMesek.js";import"./Spinner.component-D3qB71XV.js";import"./ProgressCircle.component-DZo3rxOV.js";import"./useLabel-CSTUXoQW.js";import"./useLabels-B24R2YQq.js";import"./useNumberFormatter-D5qg7lg6.js";import"./context-BQ3_Es2z.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-x_YFGAop.js";import"./Icons.styles-BaNpbbIh.js";const Or={title:"Buttons/Button",component:F,parameters:{layout:"centered",cssprops:_("Button")},argTypes:{...O,...W,children:{control:"text"},variant:{control:"select",description:"Button variant controls the presentation of the button.",table:{category:"Presentation"},options:["primary","secondary","link","error","success","inverted","content","border","ghost"]},isDisabled:{control:"boolean",description:"If true, the button will be not be clickable."},type:{control:"select",description:"The type of button.",options:["button","submit","reset"]},excludeFromTabOrder:{control:"boolean",description:"If true, the button will be excluded from the tab order and will not be focusable via keyboard navigation."}}},r={args:{children:"Primary",variant:"primary",type:"button",isDisabled:!1,isLoading:!1}},a={args:{...r.args,children:"Secondary",variant:"secondary"}},e={args:{...r.args,children:"Link",variant:"link"}},o={args:{...r.args,children:"Error",variant:"error"}},t={args:{...r.args,children:"Success",variant:"success"}},n={args:{...r.args,children:"Inverted",variant:"inverted"}},s={args:{...r.args,children:"Primary",variant:"primary",isLoading:!0,loadingLabel:"Now Loading"}},i={args:{...r.args,children:"Primary",variant:"primary",isLoading:!0,loadingLabel:"Now Loading",loadingComplete:!0}},c={argTypes:{children:{control:!1}},args:{...r.args,children:[A.jsx(q,{icon:"add"},"add"),"Primary"],variant:"primary"}};var m,p,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(L=(P=o.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};var f,S,k;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    children: "Success",
    variant: "success"
  }
}`,...(k=(S=t.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var B,I,x;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    children: "Inverted",
    variant: "inverted"
  }
}`,...(x=(I=n.parameters)==null?void 0:I.docs)==null?void 0:x.source}}};var w,T,E;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(R=(M=c.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};const Wr=["Primary","Secondary","Link","Error","Success","Inverted","LoadingButton","LoadingCompleteButton","WithIcon"];export{o as Error,n as Inverted,e as Link,s as LoadingButton,i as LoadingCompleteButton,r as Primary,a as Secondary,t as Success,c as WithIcon,Wr as __namedExportsOrder,Or as default};
