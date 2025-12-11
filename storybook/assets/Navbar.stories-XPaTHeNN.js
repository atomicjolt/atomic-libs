import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./index-CyCRagT9.js";import{L as U,R as X}from"./helpers-Dq9KpbNh.js";import{r as m}from"./index-BCtMShv3.js";import{c as f}from"./index-EJ0-2BeM.js";import{c as Y,u as Z}from"./index-CsiUWFDz.js";import{u as ee}from"./useRenderProps-CP918x9p.js";import{u as te}from"./useTranslations-lvMpgG-n.js";import{l as ae,f as re}from"./layout-D683Cy6J.js";import{d as ie}from"./styled-components.browser.esm-Y4FpNNpy.js";import{I as c}from"./IconButton.component-CJJEYgkN.js";import{F as D}from"./Flex.component-fpVWlrim.js";import{H}from"./Heading.component-mxtfW_-s.js";import{B as g}from"./Button.component-DHzP0KHP.js";import"./index-CfRAj5nh.js";import"./index-DLW06VQL.js";import"./index-BDzxygkP.js";import"./Collection-DqSZYP0m.js";import"./CollectionBuilder-D7AJqdfd.js";import"./index-BqCLlfdy.js";import"./index-D-fs5e6L.js";import"./useFocusable-DacP9xvE.js";import"./useObjectRef-D2RG7rRi.js";import"./SSRProvider-DyiXDq2k.js";import"./index-SU87TpAq.js";import"./scale-CqCDTNu0.js";import"./useLocalizedStringFormatter-BmC8c4z2.js";import"./context-z6pb9OkM.js";import"./utils-DqmNl-Il.js";import"./BaseButton-DPqTfoei.js";import"./mixins-XviowZ_6.js";import"./useFocusRing-88kjlAJd.js";import"./useFocusWithin-AgzTPs3-.js";import"./usePress-CzUfyTu7.js";import"./useButton-DYDUZLxM.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLink-D8UViwUR.js";import"./SpinnerLoader.component-C0eJ9FRC.js";import"./Loader.component-CTOZVNHq.js";import"./Checkmark.component-Bisr1A6O.js";import"./Spinner.component-C44VOTWe.js";import"./ProgressCircle.component-_TQleApR.js";import"./number-nHrFdSb-.js";import"./useLabel-DDcndmXW.js";import"./useLabels-B8dXFA8d.js";import"./useNumberFormatter-BHOsbS6G.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-x_YFGAop.js";import"./Button.context-BxdzJgC_.js";import"./MaterialIcon.component-0oB4vHh7.js";import"./Icons.styles-D-JqKhr6.js";import"./typography-B_qJ0BtB.js";const ne=Y(),oe=ie.nav`
  ${ae}
  ${re}
`,V=m.forwardRef(function(a,r){[a,r]=Z(ne,a,r);const{className:n,style:i,children:o,...s}=a,l=ee({componentClassName:"aje-navbar",className:n,style:i,children:o});return e.jsx(oe,{ref:r,$gap:"1",...l,...s,children:l.children})});V.displayName="Navbar";const t=V,z=m.forwardRef(function(a,r){const n=te(),{"aria-label":i=n("back"),icon:o="arrow_back",className:s,...l}=a;return e.jsx(c,{className:f("aje-navbar__back",s),ref:r,icon:o,"aria-label":i,...l})});z.displayName="Navbar.BackButton";t.BackButton=z;const G=m.forwardRef(function(a,r){const{children:n,side:i="left",className:o,...s}=a;return e.jsx(D,{ref:r,className:f("aje-navbar__section",o),$align:"center",$justify:i==="left"?"start":i==="right"?"end":"center",$flexGrow:"1",$gap:"2",$wrap:"wrap",...s,children:n})});G.displayName="Navbar.Section";t.Section=G;const J=m.forwardRef(function(a,r){const{className:n,as:i="h1",$weight:o="regular",...s}=a;return e.jsx(H,{ref:r,className:f("aje-navbar__title",n),as:i,$weight:o,...s})});J.displayName="Navbar.Title";t.Title=J;const K=m.forwardRef(function(a,r){const{className:n,as:i="h2",$weight:o="light",$color:s="text-clr-alt",$size:l="2",...Q}=a;return e.jsx(H,{ref:r,className:f("aje-navbar__subtitle",n),as:i,$weight:o,$color:s,$size:l,...Q})});K.displayName="Navbar.Subtitle";t.Subtitle=K;try{t.displayName="Navbar",t.__docgenInfo={description:"",displayName:"Navbar",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<never>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<never>"}}}}}catch{}const nt={title:"Layouts/Navbar",component:t,argTypes:{...X,...U}},p={args:{children:[e.jsxs(t.Section,{side:"left",children:[e.jsx(t.BackButton,{}),e.jsx(t.Title,{children:"Title"})]},"left"),e.jsxs(t.Section,{side:"right",children:[e.jsx(g,{children:"Save"}),e.jsx(c,{icon:"settings","aria-label":"Settings"})]},"right")]}},b={args:{children:[e.jsxs(t.Section,{side:"left",children:[e.jsx(t.BackButton,{}),e.jsxs(D,{$gap:"1",$direction:"column",children:[e.jsx(t.Subtitle,{children:"Page subtitle"}),e.jsx(t.Title,{children:"Page Title"})]})]},"left"),e.jsx(t.Section,{side:"right",children:e.jsx(c,{icon:"more_vert","aria-label":"More options"})},"right")]}},u={args:{children:[e.jsx(t.Section,{side:"left",children:e.jsx(t.Title,{children:"Dashboard"})},"left")]}},h={args:{children:[e.jsxs(t.Section,{side:"left",children:[e.jsx(t.BackButton,{}),e.jsx(t.Title,{children:"Edit Profile"})]},"left"),e.jsxs(t.Section,{side:"right",children:[e.jsx(g,{variant:"outlined",children:"Cancel"}),e.jsx(g,{children:"Save Changes"}),e.jsx(c,{icon:"share","aria-label":"Share"}),e.jsx(c,{icon:"bookmark","aria-label":"Bookmark"})]},"right")]}},v={args:{children:[e.jsx(t.Section,{side:"left",children:e.jsx(t.BackButton,{})},"left"),e.jsx(t.Section,{side:"center",children:e.jsx(t.Title,{children:"Centered Title"})},"center"),e.jsx(t.Section,{side:"right",children:e.jsx(c,{icon:"search","aria-label":"Search"})},"right")]}},N={args:{children:[e.jsx(t.Section,{side:"left",children:e.jsx(t.BackButton,{})},"left"),e.jsx(t.Section,{side:"right",children:e.jsx(c,{icon:"close","aria-label":"Close"})},"right")]}},S={args:{children:[e.jsxs(t.Section,{side:"left",children:[e.jsx(t.BackButton,{icon:"chevron_left",variant:"ghost"}),e.jsx(t.Title,{children:"Custom Back Icon"})]},"left"),e.jsx(t.Section,{side:"right",children:e.jsx(g,{children:"Save"})},"right")]}};var x,B,j;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: [<Navbar.Section side="left" key="left">
        <Navbar.BackButton />
        <Navbar.Title>Title</Navbar.Title>
      </Navbar.Section>, <Navbar.Section side="right" key="right">
        <Button>Save</Button>
        <IconButton icon="settings" aria-label="Settings" />
      </Navbar.Section>]
  }
}`,...(j=(B=p.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};var k,y,T;b.parameters={...b.parameters,docs:{...(k=b.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: [<Navbar.Section side="left" key="left">
        <Navbar.BackButton />
        <Flex $gap="1" $direction="column">
          <Navbar.Subtitle>Page subtitle</Navbar.Subtitle>
          <Navbar.Title>Page Title</Navbar.Title>
        </Flex>
      </Navbar.Section>, <Navbar.Section side="right" key="right">
        <IconButton icon="more_vert" aria-label="More options" />
      </Navbar.Section>]
  }
}`,...(T=(y=b.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var _,C,$;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: [<Navbar.Section side="left" key="left">
        <Navbar.Title>Dashboard</Navbar.Title>
      </Navbar.Section>]
  }
}`,...($=(C=u.parameters)==null?void 0:C.docs)==null?void 0:$.source}}};var P,R,w;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    children: [<Navbar.Section side="left" key="left">
        <Navbar.BackButton />
        <Navbar.Title>Edit Profile</Navbar.Title>
      </Navbar.Section>, <Navbar.Section side="right" key="right">
        <Button variant="outlined">Cancel</Button>
        <Button>Save Changes</Button>
        <IconButton icon="share" aria-label="Share" />
        <IconButton icon="bookmark" aria-label="Bookmark" />
      </Navbar.Section>]
  }
}`,...(w=(R=h.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};var I,W,E;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    children: [<Navbar.Section side="left" key="left">
        <Navbar.BackButton />
      </Navbar.Section>, <Navbar.Section side="center" key="center">
        <Navbar.Title>Centered Title</Navbar.Title>
      </Navbar.Section>, <Navbar.Section side="right" key="right">
        <IconButton icon="search" aria-label="Search" />
      </Navbar.Section>]
  }
}`,...(E=(W=v.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var A,F,L;N.parameters={...N.parameters,docs:{...(A=N.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    children: [<Navbar.Section side="left" key="left">
        <Navbar.BackButton />
      </Navbar.Section>, <Navbar.Section side="right" key="right">
        <IconButton icon="close" aria-label="Close" />
      </Navbar.Section>]
  }
}`,...(L=(F=N.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var M,O,q;S.parameters={...S.parameters,docs:{...(M=S.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    children: [<Navbar.Section side="left" key="left">
        <Navbar.BackButton icon="chevron_left" variant="ghost" />
        <Navbar.Title>Custom Back Icon</Navbar.Title>
      </Navbar.Section>, <Navbar.Section side="right" key="right">
        <Button>Save</Button>
      </Navbar.Section>]
  }
}`,...(q=(O=S.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};const ot=["Primary","WithSubtitle","SimpleTitle","WithMultipleActions","CenteredTitle","NavigationOnly","WithCustomBackButton"];export{v as CenteredTitle,N as NavigationOnly,p as Primary,u as SimpleTitle,S as WithCustomBackButton,h as WithMultipleActions,b as WithSubtitle,ot as __namedExportsOrder,nt as default};
