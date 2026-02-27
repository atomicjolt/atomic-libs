import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{F as D}from"./index-DzGcUmQS.js";import{L as U,R as X}from"./helpers-DUlpsdwY.js";import{r as m}from"./index-BCtMShv3.js";import{c as f}from"./index-EJ0-2BeM.js";import{c as Y,u as Z}from"./index-CsiUWFDz.js";import{u as ee}from"./useRenderProps-CP918x9p.js";import{u as ae}from"./useTranslations-lvMpgG-n.js";import{l as te,f as re}from"./layout-Dd7m2B0D.js";import{d as ie}from"./styled-components.browser.esm-Y4FpNNpy.js";import{I as c}from"./IconButton.component-Dxj12c7u.js";import{H}from"./Heading.component-7pgoIKIJ.js";import{B as g}from"./Button.component-DO32lFdV.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./Collection-Cmq5KClr.js";import"./CollectionBuilder-D3rKkOdu.js";import"./index-q6RvvsFA.js";import"./index-D-fs5e6L.js";import"./useFocusable-DacP9xvE.js";import"./useObjectRef-D2RG7rRi.js";import"./SSRProvider-DyiXDq2k.js";import"./useLocalizedStringFormatter-BmC8c4z2.js";import"./context-z6pb9OkM.js";import"./utils-DqmNl-Il.js";import"./BaseButton-9x9QWrBq.js";import"./mixins-XviowZ_6.js";import"./useFocusRing-DIS5Kyrs.js";import"./useFocusWithin-BJ0-_hiU.js";import"./usePress-CqXh5MnK.js";import"./useButton-9RZc7-Gk.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLink-DD4jtrk3.js";import"./SpinnerLoader.component-DcBCbE7B.js";import"./Loader.component-DettFilo.js";import"./Checkmark.component-Bisr1A6O.js";import"./Spinner.component-C59bpdXu.js";import"./ProgressCircle.component-gsiCSqhQ.js";import"./number-nHrFdSb-.js";import"./useLabel-DDcndmXW.js";import"./useLabels-B8dXFA8d.js";import"./useNumberFormatter-BHOsbS6G.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-x_YFGAop.js";import"./Button.context-BxdzJgC_.js";import"./MaterialIcon.component-CuXf9NhB.js";import"./Icons.styles-D-JqKhr6.js";import"./typography-B_qJ0BtB.js";const ne=Y(),oe=ie.nav`
  ${te}
  ${re}
`,V=m.forwardRef(function(t,r){[t,r]=Z(ne,t,r);const{className:n,style:i,children:o,...s}=t,l=ee({componentClassName:"aje-navbar",className:n,style:i,children:o});return e.jsx(oe,{ref:r,$gap:"1",...l,...s,children:l.children})});V.displayName="Navbar";const a=V,z=m.forwardRef(function(t,r){const n=ae(),{"aria-label":i=n("back"),icon:o="arrow_back",className:s,...l}=t;return e.jsx(c,{className:f("aje-navbar__back",s),ref:r,icon:o,"aria-label":i,...l})});z.displayName="Navbar.BackButton";a.BackButton=z;const G=m.forwardRef(function(t,r){const{children:n,side:i="left",className:o,...s}=t;return e.jsx(D,{ref:r,className:f("aje-navbar__section",o),$align:"center",$justify:i==="left"?"start":i==="right"?"end":"center",$flexGrow:"1",$gap:"2",$wrap:"wrap",...s,children:n})});G.displayName="Navbar.Section";a.Section=G;const J=m.forwardRef(function(t,r){const{className:n,as:i="h1",$weight:o="regular",...s}=t;return e.jsx(H,{ref:r,className:f("aje-navbar__title",n),as:i,$weight:o,...s})});J.displayName="Navbar.Title";a.Title=J;const K=m.forwardRef(function(t,r){const{className:n,as:i="h2",$weight:o="light",$color:s="text-clr-alt",$size:l="2",...Q}=t;return e.jsx(H,{ref:r,className:f("aje-navbar__subtitle",n),as:i,$weight:o,$color:s,$size:l,...Q})});K.displayName="Navbar.Subtitle";a.Subtitle=K;try{a.displayName="Navbar",a.__docgenInfo={description:"",displayName:"Navbar",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<never>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<never>"}}}}}catch{}const aa={title:"Layouts/Navbar",component:a,argTypes:{...X,...U}},p={args:{children:[e.jsxs(a.Section,{side:"left",children:[e.jsx(a.BackButton,{}),e.jsx(a.Title,{children:"Title"})]},"left"),e.jsxs(a.Section,{side:"right",children:[e.jsx(g,{children:"Save"}),e.jsx(c,{icon:"settings","aria-label":"Settings"})]},"right")]}},b={args:{children:[e.jsxs(a.Section,{side:"left",children:[e.jsx(a.BackButton,{}),e.jsxs(D,{$gap:"1",$direction:"column",children:[e.jsx(a.Subtitle,{children:"Page subtitle"}),e.jsx(a.Title,{children:"Page Title"})]})]},"left"),e.jsx(a.Section,{side:"right",children:e.jsx(c,{icon:"more_vert","aria-label":"More options"})},"right")]}},u={args:{children:[e.jsx(a.Section,{side:"left",children:e.jsx(a.Title,{children:"Dashboard"})},"left")]}},h={args:{children:[e.jsxs(a.Section,{side:"left",children:[e.jsx(a.BackButton,{}),e.jsx(a.Title,{children:"Edit Profile"})]},"left"),e.jsxs(a.Section,{side:"right",children:[e.jsx(g,{variant:"outlined",children:"Cancel"}),e.jsx(g,{children:"Save Changes"}),e.jsx(c,{icon:"share","aria-label":"Share"}),e.jsx(c,{icon:"bookmark","aria-label":"Bookmark"})]},"right")]}},v={args:{children:[e.jsx(a.Section,{side:"left",children:e.jsx(a.BackButton,{})},"left"),e.jsx(a.Section,{side:"center",children:e.jsx(a.Title,{children:"Centered Title"})},"center"),e.jsx(a.Section,{side:"right",children:e.jsx(c,{icon:"search","aria-label":"Search"})},"right")]}},N={args:{children:[e.jsx(a.Section,{side:"left",children:e.jsx(a.BackButton,{})},"left"),e.jsx(a.Section,{side:"right",children:e.jsx(c,{icon:"close","aria-label":"Close"})},"right")]}},S={args:{children:[e.jsxs(a.Section,{side:"left",children:[e.jsx(a.BackButton,{icon:"chevron_left",variant:"ghost"}),e.jsx(a.Title,{children:"Custom Back Icon"})]},"left"),e.jsx(a.Section,{side:"right",children:e.jsx(g,{children:"Save"})},"right")]}};var x,B,j;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(q=(O=S.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};const ta=["Primary","WithSubtitle","SimpleTitle","WithMultipleActions","CenteredTitle","NavigationOnly","WithCustomBackButton"];export{v as CenteredTitle,N as NavigationOnly,p as Primary,u as SimpleTitle,S as WithCustomBackButton,h as WithMultipleActions,b as WithSubtitle,ta as __namedExportsOrder,aa as default};
