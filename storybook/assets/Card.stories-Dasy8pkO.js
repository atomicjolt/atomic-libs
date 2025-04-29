import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{g as M}from"./cssprops-BO85xpNm.js";import{T as n}from"./index-BFsPqTdJ.js";import{u as R}from"./useRenderProps-CP918x9p.js";import{d as V}from"./styled-components.browser.esm-Y4FpNNpy.js";import{b as D}from"./colors-x_YFGAop.js";import{l as F,d as B}from"./layout-C5ppTKTq.js";import{F as c}from"./Flex.component-rrKmR1Yr.js";import{G as Q}from"./Grid.component-C2vtNrbK.js";import{D as U}from"./Divider.component-DNSQqAMQ.js";import{I as _}from"./IconButton.component-U5atzCO9.js";import"./index-BCtMShv3.js";import"./index-CsiUWFDz.js";import"./useObjectRef-D2RG7rRi.js";import"./SSRProvider-DyiXDq2k.js";import"./typography-B_qJ0BtB.js";import"./scale-CqCDTNu0.js";import"./index-EJ0-2BeM.js";import"./spacing-Bd-CIscW.js";import"./utils-DqmNl-Il.js";import"./filterDOMProps-CeZl_uWj.js";import"./Button.component-W0MMZ58g.js";import"./useFocusRing-CLjBjOxD.js";import"./useFocusable-DacP9xvE.js";import"./useFocusWithin-BshFo8_g.js";import"./usePress-B9aiz4Kw.js";import"./index-BqCLlfdy.js";import"./index-D-fs5e6L.js";import"./useButton-nVeIkIqk.js";import"./useLink-FIfyncSu.js";import"./mixins-XviowZ_6.js";import"./Button.context-BxdzJgC_.js";import"./SpinnerLoader.component-_s3mi7W0.js";import"./Loader.component-DMkqasMO.js";import"./Checkmark.component-Bisr1A6O.js";import"./Spinner.component-C44VOTWe.js";import"./ProgressCircle.component-_TQleApR.js";import"./number-nHrFdSb-.js";import"./useLabel-DDcndmXW.js";import"./useLabels-B8dXFA8d.js";import"./useNumberFormatter-BHOsbS6G.js";import"./context-z6pb9OkM.js";import"./NumberFormatter-DNR9MAW-.js";import"./MaterialIcon.component-BeI1h3Qw.js";import"./Icons.styles-D-JqKhr6.js";const x=V.div`
  ${F}
  ${B}
  ${D}

  border-radius: var(--card-radius);
`,y=V.div`
  ${F}
  ${B}
  ${D}

  border-radius: var(--card-radius);
  border: var(--card-border);

  --divider-margin-secondary: calc(var(--card-panel-padding) * -1);
`;try{x.displayName="StyledCardPanel",x.__docgenInfo={description:"",displayName:"StyledCardPanel",props:{}}}catch{}try{y.displayName="CardWrapper",y.__docgenInfo={description:"",displayName:"CardWrapper",props:{}}}catch{}function e(a){const{children:p,className:m,style:C,...u}=a,h=R({componentClassName:"aje-card",children:p,className:m,style:C});return r.jsx(y,{$bg:"var(--card-bg-clr)",$p:"var(--card-padding)",...h,...u})}function A(a){const{className:p,style:m,children:C,...u}=a,h=R({componentClassName:"aje-card-panel",className:p,style:m,children:C});return r.jsx(x,{$bg:"var(--card-panel-bg-clr)",$p:"var(--card-panel-padding)",$flexGrow:"1",...h,...u})}function E(a){return r.jsx(c,{$gap:"var(--card-padding)",$direction:"column",...a})}function O(a){return r.jsx(c,{$gap:"var(--card-padding)",...a})}function J(a){return r.jsx(n,{$size:"3",$weight:"bold",...a})}function K(a){return r.jsx(c,{$gap:"2",$mb:"var(--card-padding)",$align:"center",...a})}function L(a){return r.jsx(Q,{$gap:"var(--card-padding)",...a})}e.Header=K;K.displayName="Card.Header";e.Title=J;J.displayName="Card.Title";e.Panel=A;A.displayName="Card.Panel";e.Columns=O;O.displayName="Card.Columns";e.Stack=E;E.displayName="Card.Stack";e.Grid=L;L.displayName="Card.Grid";try{e.Header.displayName="Card.Header",e.Header.__docgenInfo={description:"Card component groups a set of related pieces of content and actions",displayName:"Card.Header",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<never>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<never>"}}}}}catch{}try{e.Title.displayName="Card.Title",e.Title.__docgenInfo={description:"",displayName:"Card.Title",props:{}}}catch{}try{e.Panel.displayName="Card.Panel",e.Panel.__docgenInfo={description:"",displayName:"Card.Panel",props:{}}}catch{}try{e.Columns.displayName="Card.Columns",e.Columns.__docgenInfo={description:"",displayName:"Card.Columns",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"div"'},{value:'"span"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<never>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<never>"}}}}}catch{}try{e.Stack.displayName="Card.Stack",e.Stack.__docgenInfo={description:"",displayName:"Card.Stack",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"div"'},{value:'"span"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<never>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<never>"}}}}}catch{}try{e.Grid.displayName="Card.Grid",e.Grid.__docgenInfo={description:"",displayName:"Card.Grid",props:{}}}catch{}const Ae={title:"Content/Card",component:e,parameters:{cssprops:M("Card")},subcomponents:{"Card.Header":e.Header,"Card.Title":e.Title,"Card.Panel":e.Panel,"Card.Columns":e.Columns,"Card.Stack":e.Stack,"Card.Grid":e.Grid}},d={args:{children:[r.jsx(e.Header,{children:r.jsx(e.Title,{children:"Card Title"})},"header"),r.jsx(e.Panel,{children:r.jsx(n,{$size:"3",children:"Here is some content within a panel"})},"panel")]}},s={args:{children:[r.jsx(e.Header,{children:r.jsx(e.Title,{children:"Card Title"})},"header"),r.jsxs(e.Columns,{children:[r.jsx(e.Panel,{children:r.jsx(n,{$size:"3",children:"Column 1"})}),r.jsx(e.Panel,{children:r.jsx(n,{$size:"3",children:"Column 2"})})]},"columns")]}},i={args:{children:[r.jsx(e.Header,{children:r.jsx(e.Title,{children:"Card Title"})},"header"),r.jsxs(e.Stack,{children:[r.jsx(e.Panel,{children:r.jsx(n,{$size:"3",children:"Stack 1"})}),r.jsx(e.Panel,{children:r.jsx(n,{$size:"3",children:"Stack 2"})})]},"stack")]}},t={args:{children:[r.jsx(e.Header,{children:r.jsx(e.Title,{children:"Card Title"})},"header"),r.jsxs(e.Grid,{$columns:"2",$rows:"2",children:[r.jsx(e.Panel,{children:r.jsx(n,{$size:"3",children:"Panel 1"})}),r.jsx(e.Panel,{children:r.jsx(n,{$size:"3",children:"Panel 2"})}),r.jsx(e.Panel,{children:r.jsx(n,{$size:"3",children:"Panel 3"})}),r.jsx(e.Panel,{children:r.jsx(n,{$size:"3",children:"Panel 4"})})]},"grid")]}},l={args:{...d.args,children:[r.jsx(e.Panel,{children:r.jsx(n,{$size:"3",children:"Here is some content within a panel"})},"panel1"),r.jsx(U,{},"divider"),r.jsx(e.Panel,{children:r.jsx(n,{$size:"3",children:"Here is some content within a panel"})},"panel2")]}},o={args:{...d.args,children:[r.jsxs(e.Header,{$justify:"space-between",children:[r.jsx(e.Title,{children:"Card Title"}),r.jsxs(c,{$gap:"2",children:[r.jsx(_,{icon:"add"}),r.jsx(_,{icon:"delete"})]})]}),r.jsx(e.Panel,{children:r.jsx(n,{$size:"3",children:"Here is some content within a panel"})})]}};var g,P,T;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: [<Card.Header key="header">
        <Card.Title>Card Title</Card.Title>
      </Card.Header>, <Card.Panel key="panel">
        <Text $size="3">Here is some content within a panel</Text>
      </Card.Panel>]
  }
}`,...(T=(P=d.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var j,$,f;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: [<Card.Header key="header">
        <Card.Title>Card Title</Card.Title>
      </Card.Header>, <Card.Columns key="columns">
        <Card.Panel>
          <Text $size="3">Column 1</Text>
        </Card.Panel>
        <Card.Panel>
          <Text $size="3">Column 2</Text>
        </Card.Panel>
      </Card.Columns>]
  }
}`,...(f=($=s.parameters)==null?void 0:$.docs)==null?void 0:f.source}}};var v,N,k;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: [<Card.Header key="header">
        <Card.Title>Card Title</Card.Title>
      </Card.Header>, <Card.Stack key="stack">
        <Card.Panel>
          <Text $size="3">Stack 1</Text>
        </Card.Panel>
        <Card.Panel>
          <Text $size="3">Stack 2</Text>
        </Card.Panel>
      </Card.Stack>]
  }
}`,...(k=(N=i.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var H,S,z;t.parameters={...t.parameters,docs:{...(H=t.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    children: [<Card.Header key="header">
        <Card.Title>Card Title</Card.Title>
      </Card.Header>, <Card.Grid key="grid" $columns="2" $rows="2">
        <Card.Panel>
          <Text $size="3">Panel 1</Text>
        </Card.Panel>
        <Card.Panel>
          <Text $size="3">Panel 2</Text>
        </Card.Panel>
        <Card.Panel>
          <Text $size="3">Panel 3</Text>
        </Card.Panel>
        <Card.Panel>
          <Text $size="3">Panel 4</Text>
        </Card.Panel>
      </Card.Grid>]
  }
}`,...(z=(S=t.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var G,b,w;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    children: [<Card.Panel key="panel1">
        <Text $size="3">Here is some content within a panel</Text>
      </Card.Panel>, <Divider key="divider" />, <Card.Panel key="panel2">
        <Text $size="3">Here is some content within a panel</Text>
      </Card.Panel>]
  }
}`,...(w=(b=l.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var W,I,q;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    children: [<Card.Header $justify="space-between">
        <Card.Title>Card Title</Card.Title>
        <Flex $gap="2">
          <IconButton icon="add" />
          <IconButton icon="delete" />
        </Flex>
      </Card.Header>, <Card.Panel>
        <Text $size="3">Here is some content within a panel</Text>
      </Card.Panel>]
  }
}`,...(q=(I=o.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};const Ee=["Primary","WithColumns","WithStack","WithGrid","WithDivider","WithActions"];export{d as Primary,o as WithActions,s as WithColumns,l as WithDivider,t as WithGrid,i as WithStack,Ee as __namedExportsOrder,Ae as default};
