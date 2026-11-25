import{b as cr,j as e}from"./iframe-CGPW5dgX.js";import{d as b,R as v,A as dr,P as lr}from"./helpers-tUmR_xN7.js";import{B as h}from"./Button.component-Bd4z0Gnh.js";import{F as mr}from"./Flex.component-BDldr6hG.js";import{M as pr}from"./MaterialIcon.component-Dhrh5rCP.js";import"./preload-helper-Dp1pzeXC.js";import"./useFocusable-DT9_LXVA.js";import"./useObjectRef-CjsC0YUg.js";import"./SSRProvider-Dwr0Ku02.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./index-C0dagnaq.js";import"./BaseButton-B8bVR-o6.js";import"./mixins-BJuiWlrm.js";import"./useRenderProps-B7rIWDyP.js";import"./index-BjoBGrPA.js";import"./useFocusRing-Dbcio0BW.js";import"./useFocusWithin-BzfIRRcZ.js";import"./usePress-BioWcz2v.js";import"./useButton-CjI92Tj6.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLink-PwQmwW74.js";import"./Loading.context-EUscm4UA.js";import"./SpinnerLoader.component-BfUo5Fvz.js";import"./Loader.component-oLyQpXum.js";import"./Checkmark.component-DL9zPInj.js";import"./Spinner.component-CLncQyFJ.js";import"./ProgressCircle.component-Cc0SXoU-.js";import"./useLabel-BytR9cji.js";import"./useLabels-Bveo7T3X.js";import"./useNumberFormatter-CgBbBkmi.js";import"./context-CLSG1ylv.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-PU9nFmCW.js";import"./layout-Dd7m2B0D.js";import"./utils-DqmNl-Il.js";import"./Icons.styles-tJBW4wd9.js";var f;const Qr={title:"Buttons/Button",component:h,parameters:{layout:"centered",cssprops:{button:cr}},argTypes:{...lr,...v,...dr,children:{...v.children,control:"text",description:"Content of the button. Can also be a function that receives the button's render state."},variant:{control:"select",description:"Button variant controls the presentation of the button.",options:["primary","secondary","link","error","success","inverted","content","border","ghost"],table:{defaultValue:{summary:'"primary"'}}},size:{control:"select",options:["small","medium","large","full","auto"],description:"Width of the button. `auto` fits the content and `full` fills the container.",table:{defaultValue:{summary:'"auto"'}}},as:{control:"select",options:["button","a"],description:"The element to render the button as.",table:{defaultValue:{summary:'"a" when `href` is set, otherwise "button"'}}},href:{control:"text",description:"URL to link to. When set, the button renders as an `<a>` element."},slot:{control:"text",description:"Slot name, used to pick up props from a parent component (for example `previous-month` inside a Calendar)."},isDisabled:{control:"boolean",description:"If true, the button will not be clickable.",table:{category:"State"}},isLoading:{...b.isLoading,description:"Shows a loading spinner in place of the content. The button stays pressable.",table:{...(f=b.isLoading)==null?void 0:f.table,defaultValue:{summary:"false"}}},loadingLabel:{...b.loadingLabel,description:"Label announced to screen readers while loading. Replaces the button's `aria-label` while `isLoading` is true."},loadingComplete:{control:"boolean",description:"Transitions the loading spinner to a checkmark. Use with `isLoading`.",table:{category:"State",defaultValue:{summary:"false"}}},type:{control:"select",description:"The type of button.",options:["button","submit","reset"],table:{defaultValue:{summary:'"button"'}}},excludeFromTabOrder:{control:"boolean",description:"If true, the button will be excluded from the tab order and will not be focusable via keyboard navigation."}}},r={args:{children:"Primary",variant:"primary"}},a={args:{...r.args,children:"Secondary",variant:"secondary"}},n={args:{...r.args,children:"Link",variant:"link"}},t={args:{...r.args,children:"Error",variant:"error"}},o={args:{...r.args,children:"Success",variant:"success"}},s={args:{...r.args,children:"Inverted",variant:"inverted"}},i={args:{...r.args,children:"Content",variant:"content"}},c={args:{...r.args,children:"Border",variant:"border"}},d={args:{...r.args,children:"Ghost",variant:"ghost"}},l={args:{...r.args,children:"Disabled",isDisabled:!0}},m={render:y=>e.jsxs(mr,{$gap:"8px",$align:"center",children:[e.jsx(h,{...y,size:"small",children:"Small"}),e.jsx(h,{...y,size:"medium",children:"Medium"}),e.jsx(h,{...y,size:"large",children:"Large"})]}),args:{...r.args}},p={args:{...r.args,children:"Primary",variant:"primary",isLoading:!0,loadingLabel:"Now Loading"}},u={args:{...r.args,children:"Primary",variant:"primary",isLoading:!0,loadingLabel:"Now Loading",loadingComplete:!0}},g={argTypes:{children:{control:!1}},args:{...r.args,children:[e.jsx(pr,{icon:"add"},"add"),"Primary"],variant:"primary"}},Xr=["Primary","Secondary","Link","Error","Success","Inverted","Content","Border","Ghost","Disabled","Sizes","Loading","LoadingComplete","WithIcon"];var L,S,P;r.parameters={...r.parameters,docs:{...(L=r.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    children: "Primary",
    variant: "primary"
  }
}`,...(P=(S=r.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};var x,B,k;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    children: "Secondary",
    variant: "secondary"
  }
}`,...(k=(B=a.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var w,C,T;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    children: "Link",
    variant: "link"
  }
}`,...(T=(C=n.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var I,z,j;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    children: "Error",
    variant: "error"
  }
}`,...(j=(z=t.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};var D,A,E;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    children: "Success",
    variant: "success"
  }
}`,...(E=(A=o.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var V,F,M;s.parameters={...s.parameters,docs:{...(V=s.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    children: "Inverted",
    variant: "inverted"
  }
}`,...(M=(F=s.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var R,G,N;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    children: "Content",
    variant: "content"
  }
}`,...(N=(G=i.parameters)==null?void 0:G.docs)==null?void 0:N.source}}};var W,$,O;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    children: "Border",
    variant: "border"
  }
}`,...(O=($=c.parameters)==null?void 0:$.docs)==null?void 0:O.source}}};var U,_,q;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    children: "Ghost",
    variant: "ghost"
  }
}`,...(q=(_=d.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var H,J,K;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    children: "Disabled",
    isDisabled: true
  }
}`,...(K=(J=l.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: args => <Flex $gap="8px" $align="center">
      <Button {...args} size="small">
        Small
      </Button>
      <Button {...args} size="medium">
        Medium
      </Button>
      <Button {...args} size="large">
        Large
      </Button>
    </Flex>,
  args: {
    ...Primary.args
  }
}`,...(Y=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,rr,er;p.parameters={...p.parameters,docs:{...(Z=p.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    children: "Primary",
    variant: "primary",
    isLoading: true,
    loadingLabel: "Now Loading"
  }
}`,...(er=(rr=p.parameters)==null?void 0:rr.docs)==null?void 0:er.source}}};var ar,nr,tr;u.parameters={...u.parameters,docs:{...(ar=u.parameters)==null?void 0:ar.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    children: "Primary",
    variant: "primary",
    isLoading: true,
    loadingLabel: "Now Loading",
    loadingComplete: true
  }
}`,...(tr=(nr=u.parameters)==null?void 0:nr.docs)==null?void 0:tr.source}}};var or,sr,ir;g.parameters={...g.parameters,docs:{...(or=g.parameters)==null?void 0:or.docs,source:{originalSource:`{
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
}`,...(ir=(sr=g.parameters)==null?void 0:sr.docs)==null?void 0:ir.source}}};export{c as Border,i as Content,l as Disabled,t as Error,d as Ghost,s as Inverted,n as Link,p as Loading,u as LoadingComplete,r as Primary,a as Secondary,m as Sizes,o as Success,g as WithIcon,Xr as __namedExportsOrder,Qr as default};
